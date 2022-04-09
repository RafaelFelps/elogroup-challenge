import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'


interface TaskProps {
    task: {
        id: string;
        content: string;
    };
    index: number;
}


const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
`;


// ReactDOM.createPortal();

function Task(props: TaskProps) {

    

    return (
        <Draggable draggableId={props.task.id} index={props.index} >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Container {...provided.draggableProps} {...provided.dragHandleProps} >
                        {props.task.content}
                    </Container>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
