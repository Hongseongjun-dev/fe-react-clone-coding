import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";

const Top = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1x;
    padding-bottom: 1px;
    background-color:#343A40;


`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left :290px;
  color:white;
`;

const Name = styled.h1`
    font-size: 19px;
    margin-left: 5px;
`
const Button = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 9px;
    margin-bottom: 9px;
    margin-right: 300px;
    padding:5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid #494E53;
    border-radius: 5px;
    cursor: pointer;
`
const Navigation = () => {
    return (
        <Top>
            <Title> 
                <FiCamera color="white" size="20px"/>
                <Name>Album</Name>
            </Title>
            <Button>
                <AiOutlineMenu color="#9A9DA0" size="28px"/>
            </Button>
        </Top>
    );
};

export default Navigation;