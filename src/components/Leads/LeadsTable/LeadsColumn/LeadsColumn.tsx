import { FC } from 'react';
import styled from 'styled-components'

interface LeadsColumnProps {
    key: string;
    column: Object;
    tasks: Object[];
}

const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;


function LeadsColumn(key: string) {
    return (
        <>
            {
                <Container>
                    <Title>{key}</Title>
                    <TaskList> </TaskList>
                </Container>
            }
        </>
    );
};


export default LeadsColumn;
