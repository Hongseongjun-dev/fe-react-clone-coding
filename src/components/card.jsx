import React from 'react';
import styled from "styled-components";

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 40px;
    padding-bottom: 50px;
    background-color: #F8F9FA;
`   

const CardEach = styled.div`
    background-color: white;
    margin:15px;
    border:1px solid white;
    border-radius: 4px;
    box-shadow: 1px 1px 20px 5px lightgrey;
    
`

const CardText = styled.p`
    font-size: 15px;
    line-height: 155%;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 21px;
    margin-right: 15px;
`

const Thumbnail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #55595C;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: white;
    height: 220px;
    width: 350px;

`

const CardUnder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 21px;

    
`;

const CardButton = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 21px;

`

const CardButton1 = styled.button`
    background-color: white;
    border: 0.1px solid gray;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 7px;
    font-size: 13px;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #6C757D;
        color: white;
        transition: 0.2s;
    }
`

const CardButton2 = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 7px;
    font-size: 13px;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #6C757D;
        color: white;
        transition: 0.2s;
    }
`

const CardTime = styled.p`
    margin-right: 21px;
    font-size: 13px;
    color: gray;
`



const Card = () => {
    return (
        <CardBlock>
            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

            <CardEach>
                <Thumbnail>Thumbnail</Thumbnail>
                <CardText>This is a wider card with supporting text<br/>below as a natural lead-in to additional<br/>content. This content is a little bit longer.</CardText>
                <CardUnder>
                    <CardButton>
                        <CardButton1>View</CardButton1> <CardButton2>Edit</CardButton2> 
                    </CardButton>
                    <CardTime>9 mins</CardTime>
                </CardUnder>
            </CardEach>

           
        </CardBlock>
    );
};

export default Card;