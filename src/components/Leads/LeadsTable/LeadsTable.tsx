import { useContext } from 'react';
import LeadsColumn from './LeadsColumn/LeadsColumn';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd';
import { LeadsContext } from '../../../Contexts/LeadsContext';


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


function LeadsTable() {
    const { state: dataTest, setState:setDataTest } = useContext(LeadsContext);

    const Swal = require('sweetalert2');

    function canMove(source: String, destination: String) {
        const sourceColumn = source.split("_")[1];
        const destinationColumn = destination.split("_")[1];
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
        const finish = dataTest.columns[destination.droppableId]; // column["uuid""]

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

        const finishTaskIds = Array.from(finish.taskIds); //
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
