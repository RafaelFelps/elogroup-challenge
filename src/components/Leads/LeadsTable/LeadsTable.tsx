import { useEffect, useState } from 'react';
import data from './initial-data';
import LeadsColumn from './LeadsColumn/LeadsColumn';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';


const ColumnsLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch; 
    /* Block text selection */
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
    
`;
const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content:center;

`;

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

function LeadsTable() {
    const [loggedUser, setLoggedUser] = useState("");
    const navigate = useNavigate();
    const [dataTest, setDataTest] = useState<InitialData>(
        {
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
        }

    );


    useEffect(() => {
        const loggedUser = localStorage.getItem('LoggedUser') || "";
        if(!loggedUser){
            navigate("/");
        }
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
        setLoggedUser(loggedUser);
        setDataTest(dataTest);
    }, []);


    const Swal = require('sweetalert2');

    function canMove(source: String, destination: String) {
        const sourceColumn = source.split("-")[1];
        const destinationColumn = destination.split("-")[1];
        const nextColumn = parseInt(sourceColumn) + 1;

        if (destinationColumn < sourceColumn || (parseInt(destinationColumn) > nextColumn)) {
            return false;
        }
        return true;
    }

    function OnDragEnd(result: any) {
        // TODO reorder our colu,ms
        document.body.style.color = 'inherit';
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (!canMove(source.droppableId, destination.droppableId)) {
            Swal.fire({
                icon: 'error',
                title: 'Ooops',
                showConfirmButton: false,
                text: 'Esta operação não é permitida',
            })
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const start = dataTest.columns[source.droppableId];
        const finish = dataTest.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            const newState = {
                ...dataTest,
                columns: {
                    ...dataTest.columns,
                    [newColumn.id]: newColumn,
                }
            }

            setDataTest(newState);
            return;
        }

        // Move from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        }

        const newState = {
            ...dataTest,
            columns: {
                ...dataTest.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }

        setDataTest(newState);

    }

    return (
        <ColumnsLine>
            <DragDropContext onDragEnd={OnDragEnd}>
                <Container>
                    {
                        dataTest.columnOrder.map((columnId, index) => {

                            const column = dataTest.columns[columnId];
                            const tasks = column.taskIds.map((taskId) => dataTest.tasks[taskId]);
                            //const isDropDisabled = index < dataTest.homeIndex;
                            const isDropDisabled = false;
                            return (
                                <LeadsColumn
                                    key={column.id}
                                    column={column}
                                    tasks={tasks}
                                    isDropDisabled={isDropDisabled}
                                />
                            );
                        })
                    }
                </Container>
            </DragDropContext>

        </ColumnsLine>
    );
};

export default LeadsTable;
