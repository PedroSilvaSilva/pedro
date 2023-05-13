import { createGlobalStyle } from "styled-components";

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
    gap: 40px;
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
    background-image: radial-gradient(
    (circle, rgba(55, 75, 219, 1) 6%, rgba(55, 84, 219, 1) 58%)
  );
  
  max-width: 680px;
  height: auto;
  border-radius: 25px;
    
}
`;

export default GlobalStyle;
