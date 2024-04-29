import {createGlobalStyle} from "styled-components";
import Routes from "./Components/Routes/Routes.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #A499BE;
  color: #D90368;
  text-decoration: none;
  list-style: none;
}
`;

export default function App(){
    return(
        <>
        <GlobalStyle/>
        <Routes/>
        </>
    )
}