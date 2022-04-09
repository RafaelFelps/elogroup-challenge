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
}


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 20%;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
`;


function LeadsColumn(props: LeadsColumnProps) {
    return (
        <>
            {
                <Container>
                    <Title>{props.column.title}</Title>
                        <Droppable droppableId={props.column.id}>
                            {(provided) => (
                                
                                <TaskList ref={provided.innerRef} {...provided.droppableProps} >
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
