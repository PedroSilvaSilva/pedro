import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/gelion');
 * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    max-width: 1920px;
    margin: 0 auto;
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
    
}
main{
    display: flex;
    gap: ${theme.spacing.xlarge};
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.widget-login{
display: flex;
flex-direction: column;
gap: 20px;

}

.widget-container{

    }
    &__image{
        text-align: end;
    }

`;

export default GlobalStyle;
