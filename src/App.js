// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import styled from "styled-components";
import Card from "./components/card";
import Footer from "./components/footer";
import Top from "./components/rheader";
import Navigation from "./components/navigate";


function App() {
  return( 


  <div>
    <Navigation/>
    <Top/>
    <Card/>
    <Footer/>
   
  </div>
  
  );
}
//thumbnail 입력하면  출력이 안됨
export default App;
//<Bar/>
//<Header title="seongjun" content="im" button="blue"/>
//<Grid></Grid>

/*<Header title="Album Example" content="Something short and leading about the collection below—its contents,<br/>
the creator, etc. Make it short and sweet, but not too short so folks don’t<br/>
 simply skip over it entirely." buttonColor="blue"/>
<br></br>*/

//<Bar url="" title="Album"/>