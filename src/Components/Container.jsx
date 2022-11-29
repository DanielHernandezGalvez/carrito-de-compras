import styled from "styled-components";

import React from 'react';

const Container = ({children}) => {
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
