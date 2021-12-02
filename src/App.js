import React from 'react';
import Navbar from './components/navbar';
import Alert from './components/alert';
import Textform from './components/textform';
import { useState } from 'react';

const removeClassTextform =  ()=>{
  let textbox=document.getElementById('myBox');
  let alert=document.getElementById('alert');
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-secondary");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-dark");
  textbox.classList.remove('bg-warning');
  textbox.classList.remove('bg-secondary');
  textbox.classList.remove('bg-danger');
  textbox.classList.remove('bg-dark');
  textbox.classList.remove('bg-primary');
  textbox.classList.remove('bg-success');
  alert.classList.remove('alert-warning');
  alert.classList.remove('alert-secondary');
  alert.classList.remove('alert-success');
  alert.classList.remove('alert-primary');
  alert.classList.remove('alert-dark');
  alert.classList.remove('alert-light');
  alert.classList.remove('alert-danger');
}

const removeClassAbout = ()=>{
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-secondary");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-dark");
  for (let index = 1; index < 4; index++) {

    let card = document.getElementById(`card${index}`);
    card.classList.remove("bg-warning");
    card.classList.remove("bg-dark");
    card.classList.remove("bg-primary");
    card.classList.remove("bg-light");
    card.classList.remove("bg-danger");
    card.classList.remove("bg-success");
    card.classList.remove("bg-secondary");

  }
}



function App() {


  const [mode, setMode] =  useState("light");
  const changeMode = (cls)=>{
    let maincolor = cls;
    

if (window.location.href === "http://localhost:3000/about") {
  removeClassAbout();
  setMode('dark');
  document.body.classList.add(`bg-${maincolor}`)
  
  for (let index = 1; index < 4; index++) {
    
    let card = document.getElementById(`card${index}`);
    card.classList.add(`bg-${maincolor}`);
    
  }
    }
    else{  
    let alert=document.getElementById('alert');
  let textbox=document.getElementById('myBox');

    setMode('dark');
    removeClassTextform();
    
    textbox.classList.add(`bg-${maincolor}`);
     alert.classList.add(`alert-${maincolor}`);
     document.body.classList.add(`bg-${maincolor}`)
    }
      
  }

  let changed;
  const [text, setText] = useState("");
  const [feature, setFeature] = useState("");
  const textareaClicked = (event) => {
    setText(event.target.value);
   };
  
  const uppercaseClicked = () => {

    changed = text.toLowerCase();
    setText(changed);

    let alert = document.getElementById("alert");
    setFeature("Text changed into Uppercase");
    alert.style.visibility ="visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 1000);
  };

  const lowercaseClicked = () => {
      
    changed = text.toUpperCase();
    setText(changed);
    let alert = document.getElementById("alert");
    setFeature("Text changed into Lowercase");

    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 1000);
  
  };
  const copyText = () => {
    setFeature("Text Copied");
    let alert = document.getElementById("alert");

    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 1000);
  };
  const clearText = () => {
    setFeature("Text Cleared");
    let alert = document.getElementById("alert");

    var text = document.getElementById("myBox");
    text = "";
    setText(text);
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 1000);
  };
  const extraSpace = () => {
    setFeature("Text's Extraspace has cleared");
    let alert = document.getElementById("alert");

    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    alert.style.visibility = "visible";
    setTimeout(() => {
      alert.style.visibility = "hidden";
    }, 1000);
  };



  return (
    <>
        <Navbar title="TextUtils" mode={mode} changeMode={changeMode}/>
        <Alert feature={feature} />
        <Textform heading="Enter the text to analyze below" text={text} mode={mode} textareaClicked={textareaClicked} uppercaseClicked={uppercaseClicked} lowercaseClicked={lowercaseClicked} copyText={copyText} clearText={clearText} extraSpace={extraSpace} />
    </>
  );
}

export default App;
