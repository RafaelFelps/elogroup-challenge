import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'


interface TaskProps {
    task: {
        id: string;
        content: string;
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
                    {props.task.content}
                </Container>
            )}
        </Draggable>
    );
};

export default Task;
