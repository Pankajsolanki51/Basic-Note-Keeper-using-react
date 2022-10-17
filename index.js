/*import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<h1>Hello guys i am learning  ReactJS !!!</h1>,
  document.getElementById('root'));


// taking multiple elements 
ReactDOM.render(<div><h1>FIRST ELEMENTS</h1>
  <p>Second elements</p>
  <h2>this last element</h2>
  <button >Submit</button></div>,
  document.getElementById("root"));

//using array method
ReactDOM.render(
  <React.Fragment>
    <h1>FIRST ELEMENTS</h1>
    <p>Second elements</p>
    <h2>this last element</h2>
    <button >Submit</button>
    <h3>final element</h3></React.Fragment>,
  document.getElementById("root"));

ReactDOM.render(
  <>
    <h1>FIRST ELEMENTS</h1>
    <p>Second elements</p>
    <h2>this last element</h2>
    <button >Submit</button>
    <h3>finished element</h3></>,
  document.getElementById("root"));



ReactDOM.render(
  <>
    <h1>Pankja Solanki Amazon Picks</h1>
    <p>List of 5 best webseries</p>
     <ol>
     <li>Panchayat</li>
     <li>Mirzapur</li>
     <li>Squid games</li>
     <li>Kota Factory</li>
     <li>Justice League</li>
     </ol>
  </>,
  document.getElementById("root"));


import React from 'react';
import ReactDOM from 'react-dom';
 var flname = "Pankaj Solanki";
ReactDOM.render(
  <>
  <h1>My Name is {flname} </h1>
  <p>My age is {10+8}</p>
  <p>My age is {6*3}</p>
  <p>My age is {30-12}</p>
  <p>My age is {36/2}</p>
  <p>My age is {Math.random()}</p>
  </>,
  document.getElementById("root")
);

import React from 'react';
import ReactDOM from 'react-dom';
var fname="Pankaj";
var lname="Solanki";
const currDate = new Date().toLocaleDateString();
const CurrTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>{`Hello, My name is ${fname} ${lname}`}</h1>
    <p>Current Date is = {currDate} </p>
    <p>Current Time is = {CurrTime} </p>
  </>,
  document.getElementById("root")
);


//  HTML ATTRIBUTE IN REACT with inline CSS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name = "Pankaj";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

const sitelink = "https://in.images.search.yahoo.com/search/images;_ylt=Awr1UZP__PRiNXgHzeO7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=river+images&fr2=piv-web&type=E211IN714G0&fr=mcafee"
const heading ={
  fontFamily: 'Oooh Baby,cursive',
  color: 'rgb(230, 141, 182)',
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  border: "1px solid rgb(230, 141, 182)",
  margin: "50px 0",
};
ReactDOM.render(
  <>

    <h1 style={heading}>My name is {name} Solanki</h1>

    <div className='img_div'>
      <img src={img1} alt='random' />
      <img src={img2} alt='random' />

      <img src={img3} alt='random' />

    </div>
  </>,
  document.getElementById("root")
);*/


// greeting website
/*import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';

let CurrTime = new Date();
CurrTime = CurrTime.getHours();
let cssStyle = {};
let greeting ="";
if(CurrTime>=1 && CurrTime<=12){
  greeting='Good Morning';
  cssStyle.color = 'green';
  
}
else if(CurrTime>=12 && CurrTime<=19){
  greeting='Good Afternoon';
  cssStyle.color = 'Orange';
}
else{
  greeting="Good Night";
  cssStyle.color = 'blue';
}

let fcss = {
  border : "2px solid #ffca85",
  paddingTop : "1rem",
  paddingBottom : "1rem",
  paddingRight: "1rem",
  paddingLeft : "1rem",
  borderRadius : "18px",
  backgroundColor : "#ffca85",
};




ReactDOM.render(
  <>
  <div>
   <h1 style={fcss}>Hello Pankaj,<span style={cssStyle}>{greeting}</span></h1>
   </div>
  </>,
  document.getElementById("root")
); 
*/


/*// coponents of the react
import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
ReactDOM.render(
  <>
  <App></App>
</>,document.getElementById('root')
);*/

// project using componenets
/*import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import App from "./App";
ReactDOM.render(
  <App/>,
  document.getElementById("root")
);


//IMPORT AND EXPORT
import React from "react";
import  ReactDOM  from "react-dom";

import fyt,{intr,mycol,myclass} from "./App";
ReactDOM.render(
  <>
    <ol>
      <li>Pankaj</li>
      <li>{fyt}</li>
      <li>{intr}</li>
      <li>{mycol()}</li>
      <li>{myclass()}</li>
    </ol>
</>,
  document.getElementById("root")
);*/

//chalenge 05 creating a calculator

/*import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App"
ReactDOM.render(
  <App/>,
  document.getElementById("root")
);*/





// PROPS IN REACT JS 

/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from './App'; 



ReactDOM.render(
<App/>,
  document.getElementById("root")
)*/

import React from "react";
import  ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <App/>,
    document.getElementById("root")
  )