import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/gelion');
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gelion', sans-serif;
  }
  
  h1,h2,h3,h4,h5,h6,p{
    font-family: 'Gelion', sans-serif;

  }
  img,svg{
    max-width: 100%;
    height: auto;

  }
ul{
  
    list-style: none;
    margin: 0;
    padding: 0;
    color:${theme.colors.primary};
    
    
}
a{
  color:${theme.colors.primary};
  text-decoration: none;
  
  text-transform: uppercase;
}

















`;

export default GlobalStyle;
