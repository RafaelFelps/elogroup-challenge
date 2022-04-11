import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
    task: {
        username: string,
        name: string,
        telephone: string,
        email: string,
        oportunities: string[],
        id: string,
    };
    index: number;
}

interface TaskDragProps {
    isDragging: boolean;
}

const Container = styled.div<TaskDragProps>`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${(props) => (props.isDragging ? '#D9D9DE' : 'white')};
`;


function Task(props: TaskProps) {

    return (
        <Draggable draggableId={props.task.id} index={props.index} >
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    {props.task.name}
                </Container>
            )}
        </Draggable>
    );
};

export default Task;
