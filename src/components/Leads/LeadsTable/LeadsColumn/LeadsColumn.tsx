import styled from 'styled-components'
import Task from '../Task/Task';
import { Droppable } from 'react-beautiful-dnd';

interface LeadsColumnProps {
    key: string;
    column: {
        id: string;
        title: string;
        taskIds: string[];
    };
    tasks: { id: string, content: string }[];
    readonly isDropDisabled: boolean;
}

interface TasklistStyleProps{
    isDraggingOver: boolean;   
}

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 400px;
`;
const Title = styled.div`
    padding: 8px;
    border-bottom: 1px solid lightgrey;
    background-color: white;
    font-weight: bold;
`;
const TaskList = styled.div<TasklistStyleProps>`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${(props: any) => (props.isDraggingOver ? '#e6e6eb' : 'white')};
    flex-grow: 1;
    height: 300px;
`;


function LeadsColumn(props: LeadsColumnProps) {
    return (
        <>
            {
                <Container>
                    <Title>{props.column.title}</Title>
                    <Droppable
                        droppableId={props.column.id}
                        isDropDisabled={props.isDropDisabled}
                    >
                        {(provided, snapshot) => (

                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
            }
        </>
    );
};


export default LeadsColumn;
