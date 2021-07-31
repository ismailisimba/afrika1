const counters = {};
counters["deltaY"] = 0;
counters["deltaYSign"] = "null";
counters["elements"] ={};


window.onload = () => {
  myScrollFunctions();
  navClicks();
  dropDownClicks();
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
            rollOutGeneric(element.id);
        })
    })
}


function rollOutGeneric(elementId){
    document.querySelectorAll(".genericbox")[0].style.height = "1000px";
    document.querySelectorAll(".genericbox")[0].style.top = "0px";
    document.onwheel = emptyDisengagedFunc;
};