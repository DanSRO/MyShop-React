//CSS in JS
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #f7f7f7;
    p{
        padding: 2rem;
    }
}
body, input, button{
    font-family: 'Poppins', sans-serif;
}
` ;


