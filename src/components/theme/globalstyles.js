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

    @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: ${theme.spacing.medium};
    h1{
        font-size: ${theme.fontSizes.small};
    }
    .widget-login__title{
      text-align: center;
    }

    }


}

.widget-login{
display: flex;
flex-direction: column;
gap: 20px;

}
.widget-container{
  &__title{
text-align: center;
padding-bottom: ${theme.spacing.large};
 }
}
.widget-layout{
display: flex;
justify-content: space-between;
}
.widget-sidebarleft{
  display: flex;
  flex-direction: column;
  
  
  border-radius: 0px 15px 15px 0px;
  border: 2px solid blue;

  width: 280px;
  height: 100vh;
}
.widget-sidebar{
 
  display: flex;
  flex-direction: column;
  
  
  border-radius: 0px 15px 15px 0px;
  border: 2px solid blue;

  width: 280px;
  height: 100vh;

  &__logo{
    text-align: center;
  }
  &__menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

   
  }
  &__menulist{
       gap: 50px;
    display: flex;
    flex-direction: column;

  }
  &__user{
    width: 25%;
  }
}
.test1{
  display: flex;
  



}



`;

export default GlobalStyle;
