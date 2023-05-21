import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 305px;
    padding-right: 305px;

`

const Text1 = styled.p`
    .link{
        text-decoration: none;
        color: #007BFF;
        &:hover{
            color:#004896;
            transition: 0.1s;
            text-decoration: underline;
        }
    }
`

const Text2 = styled.a`
   color: #007BFF;
   cursor: pointer;
   &:hover{
            color:#004896;
            transition: 0.1s;
            text-decoration: underline;
        }

`


const GoToUp =  () => {
    window.scrollTo({top: 0});
};


const Footer = () => {
    return (
        <>
        <FooterBlock>
            <Text1>Album example is © Bootstrap, but please download and customize it for yourself!<br/>
            New to Bootstrap? <a className="link" href="https://getbootstrap.com/">Visit the homepage</a> or read our { }
            <a className="link" href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">getting started guide</a>.</Text1>
            <Text2 onClick={GoToUp}>Back to top</Text2>
        </FooterBlock>
        </>
    );
};
/*<a className="link" href="https://getbootstrap.com/">Visit the homepage</a> or read our { }
<a className="link" href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">getting started guide</a>.*/
export default Footer;