import React from 'react';
import styled from "styled-components";

const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 70px;
`;

const MainTitle = styled.p`
    font-size:37px;
    font-weight: 20;
    margin-bottom: 5px;
`;

const SubTitle = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 40;
    line-height: 135%;
    color: #888296;
`;

const Button = styled.div`
    margin-top: 10px;
`;

const MainButton = styled.button`
    background-color: #007BFF;
    color: white;
    font-size: 15px;
    border: 1px solid #007BFF;
    border-radius: 4px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
    &:hover{
        background-color: #0069D9;
        color: white;
        transition: 0.2s;
    }
`;

const SecondButton = styled.button`
    background-color: #6C757D;
    color: white;
    font-size: 15px;
    border: 1px solid #6C757D;
    border-radius: 4px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
    &:hover{
        background-color: #5A6268;
        color: white;
        transition: 0.2s;
    }

`;

const Top = () => {
    return (
        <TitleBlock>
            <MainTitle>Album example</MainTitle>
            <SubTitle>Something short and leading about the collection below—its contents,<br/>
            the creator, etc. Make it short and sweet, but not too short so folks don’t<br/>
            simply skip over it entirely.</SubTitle>
            <Button>
                <MainButton>Main call to action</MainButton> <SecondButton>Secondary action</SecondButton>
            </Button>
        </TitleBlock>
    );
};

export default Top;