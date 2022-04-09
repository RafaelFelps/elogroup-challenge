import React, { useState } from 'react';
import data from './initial-data';
import LeadsColumn from './LeadsColumn/LeadsColumn';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';


const ColumnsLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch; 
`


function onDragEnd(result: any) {
    // TODO reorder our colu,ms
    const { destination, source, draggableId } = result;
    if (!destination) {
        return;
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
        return;
    }

    const column = initialData.columns[source.index];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
        ...column,
        taskIds: newTaskIds
    }

    const newState = {
        ...initialData,
        columns: {
            ...initialData.columns,
            [newColumn.id]: newColumn,
        }
    }
    // initialData.setState(newState)

    //setInitialData(newState);
}

function LeadsTable() {

    const [initialData, setInitialData] = useState(data);
    return (
        <ColumnsLine>

            <DragDropContext onDragEnd={onDragEnd} >
                {
                    initialData.columnOrder.map((columnId) => {

                        const column = initialData.columns[columnId];
                        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

                        return (
                            <LeadsColumn key={column.id} column={column} tasks={tasks} />
                        );
                    })
                }
            </DragDropContext>

        </ColumnsLine>
    );
};

export default LeadsTable;
