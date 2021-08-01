const counters = {};
counters["deltaY"] = 0;
counters["deltaYSign"] = "null";
counters["elements"] ={};
counters["dropState"] = "hidden";
counters["elements"]["cPan"] = document.querySelectorAll(".settcont")[0];
counters["elements"]["cPanGenericCont"] = document.querySelectorAll(".genericCpanCont")[0];
counters["elements"]["popUp"] = document.querySelectorAll(".custompopup")[0];


window.onload = () => {
  myScrollFunctions();
  navClicks();
  checkTheURL();
}


function  myScrollFunctions() {
    document.onwheel = customScroll;
};

function navClicks(){
    counters.elements["navLi"] = document.querySelectorAll("nav")[0].querySelectorAll("li");
    counters.elements.navLi.forEach(element => {
        element.addEventListener("click",()=>{
            counters["navTemp"]= element.innerText;
            navToItem(counters.navTemp);
        })
    })
}


function customScroll(event){
    
    counters.deltaY = event.deltaY;
    counters.deltaYSign = Math.sign(counters.deltaY);
    
    if(counters.deltaYSign==-1){
        document.getElementById("scrl1").scrollBy({
            top: 0,
            left: -269,
            behavior: 'auto'
          });

    }else{ 
        document.getElementById("scrl1").scrollBy({
            top: 0,
            left: 269,
            behavior: 'auto'
        });
    }

}

function emptyDisengagedFunc(){
     //emptyfunction
     return null;
}


function navToItem(eleText){
    let tempVar = eleText;
    rollInGeneric();

    if(tempVar==="Home"){
        document.querySelectorAll(".internalboxone")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }else if(tempVar==="About Us"){
        document.querySelectorAll(".internalboxone")[1].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else if(tempVar==="Destinations"){
        document.querySelectorAll(".internalboxtwo")[1].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else if(tempVar==="Stories & Updates"){
        document.querySelectorAll(".internalboxtwo")[2].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else if(tempVar==="Travel Guides"){
        document.querySelectorAll(".internalboxtwo")[3].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else if("Contact Us"){
        document.querySelectorAll(".internalboxtwo")[4].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else{
        document.querySelectorAll(".internalboxone")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

}

function dropDownClicks () {

    counters.elements["dropdownbutts"] = document.querySelectorAll(".dropdownbuttons");
    counters.elements.dropdownbutts.forEach(element => {
        element.addEventListener("click",()=>{
            if(counters.dropState==="hidden"){
                rollOutGeneric(element.id);
            }else{
                rollInGeneric();
            }
            
        })
    })

    document.querySelectorAll(".genericboxheader")[0].querySelectorAll("button")[0].addEventListener("click",rollInGeneric);
}


function rollOutGeneric(elementId){
    document.querySelectorAll(".genericbox")[0].style.minHeight = "469px";
    document.querySelectorAll(".genericbox")[0].style.height = "auto";
    document.querySelectorAll(".genericbox")[0].style.top = "0px";
    document.querySelectorAll(".genericbox")[0].style.visibility = "visible";
   
    let tempTimer = window.setTimeout(()=>{
        document.querySelectorAll(".genericbox")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        window.clearTimeout(tempTimer);
    },1696)
    
    document.onwheel = emptyDisengagedFunc;
    counters.dropState="shown";
};


function rollInGeneric() {
    document.querySelectorAll(".genericbox")[0].style.minHeight = "0px";
    document.querySelectorAll(".genericbox")[0].style.height = "0px";
    document.querySelectorAll(".genericbox")[0].style.top = "-169px";
    document.querySelectorAll(".genericbox")[0].style.visibility = "collapse";
   
    
    document.onwheel = customScroll;
    counters.dropState="hidden";

}



function checkTheURL () {

    let location = window.location.href.toString();
    let backendMatch = location.match(/\b(\w*backend\w*)\b/g)
    
    if(backendMatch!==null){
      counters.elements.cPan.remove();
      counters.elements.cPanGenericCont.remove();
      counters.elements.popUp.remove();
      
     initiateLogInSetup(backendMatch);
    }else{
    window.location.href = "./";  
    dropDownClicks();
    }
    
   
    
  }


  function initiateLogInSetup (backendMatch){

    let contentBox = document.getElementById("scrl1");
    let googleStuff = document.querySelectorAll(".googlestuff")[0];
  
  
    contentBox.innerHTML = "";
    contentBox.appendChild(googleStuff);
    contentBox.style.minHeight ="1000px";
  
  }