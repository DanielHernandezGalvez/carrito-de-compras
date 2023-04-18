import styled from "styled-components";
import React, { ReactNode } from 'react';

interface ContainerProps {
children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    
    return (
        <Content>
            {children}
        </Content>
    );
}
    const Content = styled.div`
    max-width: 1200px;
    padding: 40px;
    margin: 0 auto;
    `;


export default Container;
