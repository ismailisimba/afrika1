const counters = {};
counters["deltaY"] = 0;
counters["deltaYSign"] = "null";
counters["elements"] ={};


window.onload = () => {
  myScrollFunctions();
}


function  myScrollFunctions() {

    document.onwheel = customScroll;

    console.log("Hello there!");
};


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