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
    color:${theme.colors.primary};
    
    
}
a{
  color:${theme.colors.primary};
  text-decoration: none;
  
  text-transform: uppercase;
}



#light {
    background-color: #f2f4f1;
}

#dark {
    background-color: #f2f4f1;
}


.react-calendar { 
margin-top: 10px;
 width: 350px;
 max-width: 100%;
 background-color: #fff;
 color: #222;
 border-radius: 8px;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
 color: #6f48eb;
 min-width: 44px;
 background: none;
 font-size: 16px;
 margin-top: 8px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
 font-size: 8px;
 font-family: 'Gelion', sans-serif;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #6f48eb;

}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #6f48eb;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #6f48eb;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #6f48eb;
 color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 0;
}
.react-calendar__tile--rangeStart {
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-top-left-radius: 6px;
 border-bottom-left-radius: 6px;
 background: #6f48eb;
 color: white;
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 background: #6f48eb;
 color: white;
}










`;

export default GlobalStyle;
