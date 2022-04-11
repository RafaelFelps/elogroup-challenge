import React, { createContext, useEffect, useState } from 'react'
const initialDataObj = {
    tasks: {},
    columns: {
        "column-1": {
            id: "column-1",
            title: "Cliente em Potencial",
            taskIds: []
        },
        "column-2": {
            id: "column-2",
            title: "Dados Confirmados",
            taskIds: []
        },
        "column-3": {
            id: "column-3",
            title: "Reunião Agendada",
            taskIds: []
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"]
};

interface InitialData {

    tasks: {
        [user: string]: {
            username: string,
            name: string,
            telephone: string,
            email: string,
            oportunities: string[],
            id: string
        }
    },
    columns: {
        [column: string]: {
            id: string,
            title: string,
            taskIds: string[],
        }
    },
    columnOrder: string[]
}


interface LeadsContextIntf {
    state: InitialData,
    setState: React.Dispatch<React.SetStateAction<InitialData>>;
}

interface LeadsProviderProps {
    children: any
}


export const LeadsContext = createContext<LeadsContextIntf>({ state: initialDataObj, setState: () => { } });

function LeadsProvider(props: LeadsProviderProps) {
    const [state, setState] = useState<InitialData>(initialDataObj);



    useEffect(() => {
        const dataTest: InitialData = JSON.parse(localStorage.getItem("initialData") || `
            { 
                "tasks": {
                    "task_1": {}
                },
                "columns": {            
                    "column_1": {
                        "id": "column_1",
                        "title": "Cliente em Potencial",
                        "taskIds": []
                    },
                    "column_2": {
                        "id": "column_2",
                        "title": "Dados Confirmados",
                        "taskIds": []
                    },
                    "column_3": {
                        "id": "column_3",
                        "title": "Reunião Agendada",
                        "taskIds": []
                    }
                },
                "columnOrder": ["column_1", "column_2", "column_3"]
            }
        `);

        setState(dataTest);
    }, []);



    return (
        <LeadsContext.Provider value={{ setState, state }}  >
            {props.children}
        </LeadsContext.Provider>
    );

}

export default LeadsProvider;