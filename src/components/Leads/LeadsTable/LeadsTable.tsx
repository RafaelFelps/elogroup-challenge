import React, { FC, useState } from 'react';
import styles from './LeadsTable.module.css';
import data from './initial-data';
import LeadsColumn from './LeadsColumn/LeadsColumn';


function LeadsTable() {

    const [initialData, setInitialData] = useState(data);
    return (
        <>
            {
                initialData.columnOrder.map((columnId) => {

                    const column = initialData.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);


                    return ( "LEAD COLUMN"
                        //<LeadsColumn key={column.id} column={column} tasks={tasks} />
                    );
                })
            }
        </>
    );
};

export default LeadsTable;
