const counters = {};
counters["deltaY"] = 0;
counters["deltaYSign"] = "null";
counters["elements"] ={};
counters["dropState"] = "hidden";
counters["elements"]["cPan"] = document.querySelectorAll(".settcont")[0];
counters["elements"]["cPanGenericCont"] = document.querySelectorAll(".genericCpanCont")[0];
counters["elements"]["popUp"] = document.querySelectorAll(".custompopup")[0];
counters["reqString"] = "https://script.google.com/macros/s/AKfycbwsionDZcaKZPxP9A6c6A-fjpKavYrdpxEhial1Jw_kE35XRYfc9Hxwfe7zd4Zfb0A/exec";
counters["paraTemplate"] = {"params":[{"initVal":"initKey"}]};
counters["localVar"] = {};
counters["myGoogleBox"] = document.querySelectorAll(".googlestuff")[0];


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
    
    }
    
   
    
  }


  function initiateLogInSetup (backendMatch){

    let contentBox = document.getElementById("scrl1");
    let googleStuff = document.querySelectorAll(".googlestuff")[0];
  
  
    contentBox.innerHTML = "";
    contentBox.appendChild(googleStuff);
    contentBox.style.minHeight ="1000px";
  
  }


  
function onSignIn(googleUser) {

    let signInBut = document.querySelectorAll(".g-signin2")[0];
    signInBut.style.visibility = "collapse";
    signInBut.style.width = "0px";
  
    let token = googleUser.getAuthResponse().id_token;
  
    hailTheServerOnAllChannels("login",token);
  }




  async function fetchInfoWithFilter (data,para) {

    data = JSON.stringify(data);
      
  
    var myRequest = new Request(counters.reqString+"?paraOne="+para);
    
  
         
    const returnVal = await fetch(myRequest, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'text/txt'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    })
          .then(function(response) {
            if (!response.ok) {
              
              throw new Error("HTTP error, status = " + response.status);
              
            }
            
            return response.text();
          })
          .then(function(myBlob) {
            
            var cloudObject = JSON.parse(myBlob);
            
          
            return cloudObject;
            
          })
          .catch(function(error) {
            var p = document.createElement('p');
            p.appendChild(
              document.createTextNode('Error: ' + error.message)
            );
            tempDiv = document.querySelectorAll(".bigcontainer")[0];
            tempDiv2 = document.querySelectorAll(".googlestuff")[0];
            tempDiv.insertBefore(p, tempDiv2);
          });
  
        
         // document.querySelectorAll(".mycolumns")[1].innerHTML = returnVal;
          return returnVal; 
  
      // tempDiv.innerHTML = Object.entries(localVar.values)[0][1][3] ;   
  };





async function hailTheServerOnAllChannels(action,value) {

    if(action==="login"){
  
      let data = await bundleMyData(action,value).then((data)=>{
        startHailing(data,"login",genericPrintResponse);
        return data;
      });
  
      customPopUpFunc(counters.elements.popUp,"Signing In","fullsteamahead");
  
    }else if(action==="uploadFiles"){
      let data = await bundleMyData(action,value).then(()=>{
        let myObj = bundleTokenAfter(value);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.draft;
        startHailing(myObj,"uploadImages",function(){
          window.location.href = "./backend"
        });
      });
  
      customPopUpFunc(counters.elements.popUp,"Uploading","fullsteamahead");
    }else if(action==="delete"){
      
      let data = await bundleMyData(action,value).then(()=>{
        let myObj = bundleTokenAfter(value);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.delete;
       
       customPopUpFunc(counters.elements.popUp,"Deleting","fullsteamahead");
        startHailing(myObj,action,function(){
          window.location.href = "./backend"
        });
      });
  
    }else if(action==="uploadStory"){
      let data = await bundleMyData(action,value).then(()=>{
  
        
        let myObj = bundleTokenAfter(value);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0];
       
       customPopUpFunc(counters.elements.popUp,"Saving Story","fullsteamahead");
        startHailing(myObj,action,function(){
          window.location.href = "./backend"
        });
      });
  
    }else if(action==="deleteStories"){
      let data = await bundleMyData(action,value).then(()=>{
        let myObj = bundleTokenAfter(value);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.delete;
      
       customPopUpFunc(counters.elements.popUp,"Deleting","fullsteamahead");
        startHailing(myObj,action,function(){
          window.location.href = "./backend"
        });
      });
    }else if(action==="updatePublish"){
      let data = await bundleMyData(action,value).then(()=>{
  
        
        let myObj = bundleTokenAfter(value);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.delete;
       
       customPopUpFunc(counters.elements.popUp,"Updating","fullsteamahead");
        startHailing(myObj,action,function(){
          window.location.href = "./backend"
        });
      });
    
  
      
  
    }else if(action==="updateSettings"){
      let data = await bundleMyData(action,value).then(()=>{
  
        
        let myObj = bundleTokenAfter(value);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.delete;
       
       customPopUpFunc(counters.elements.popUp,"Updating","fullsteamahead");
        startHailing(myObj,action,function(){
          window.location.href = "./backend"
        });
      });
  
  
    }
  
  
  
  
  };


  
async function startHailing(data,para,functionToRunAfter){
    fetchInfoWithFilter(data,para).then((responseObj)=>{
      functionToRunAfter(responseObj);
    });
  }
  
  
  
  async function bundleMyData(action,value) {
  
    let data = "mydata";
  
    if(action==="login"){
      data = bundleLoginData(value);
     
    }else if(action==="uploadFiles"){
  
      data =  await bundleFilesForUpload().then((data)=>{
        data = updateCloudObj("images",data);
        return data;
      });
    
      
    }else if(action==="delete"){
      
     data = updateCloudObj("deleteFiles",{});
        
    
      
  
    }else if(action==="uploadStory"){
     // data = updateCloudObj("story",value);
  
    }else if (action==="deleteStories"){
      data = updateCloudObj("deleteStories",{});
    }else if(action==="updatePublish"){
      data = updateCloudObj("updatePublish",{});
    }else if(action==="updateSettings"){
      data = updateCloudObj("updateSettings",{});
    }
  return data;
  }
  
  
  
  function bundleLoginData(token) {
    let contextObject = JSON.parse(JSON.stringify(counters.paraTemplate));
  
      contextObject.params[0]["action"] = "login";
      contextObject.params[0]["token"] = token.toString();
  
      return contextObject;
  }
  
  
  function bundleTokenAfter(token) {
    let contextObject = JSON.parse(JSON.stringify(counters.paraTemplate));
  
      contextObject.params[0]["action"] = "later...";
      contextObject.params[0]["token"] = token.toString();
      contextObject.params[0]["dataObj"] = {};
  
      return contextObject;
  }
  
  
  function genericPrintResponse (responseObj){
   counters.localVar["cloudObj"] = responseObj;
    let loginStatus = responseObj.tokenObject.status;
  let myCanvas = document.querySelectorAll(".bigcontainer")[0];
  myCanvas.innerHTML = "";
  myCanvas.style.color = "black";
  myCanvas.style.fontSize = "14px";
  myCanvas.style.fontWeight = "600";
  myCanvas.style.letterSpacing = "2px";
  myCanvas.style.display = "flex";
  //popUp.remove();
  
  if(loginStatus==="captainHasTheCon"){
    initSetupBackend("captainHasTheCon");
  }else{
   alert("There seems to be an error. Please use the correct email. <br> If the error persists please email: ismaili.a.simba@gmail.com");
   signOut();
   document.querySelectorAll("title")[0].innerHTML= "Swim - Log In";
  }
  //myCanvas.innerHTML = Object.entries(responseObj.tokenObject);
  
   
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      location.reload();
      
    });
  }
  
  function getToken() {
    var auth2 = gapi.auth2.getAuthInstance();
    let status = auth2.isSignedIn.get();
    let tokentemp = "";
  
    if(status){
  
      let user = auth2.currentUser.get()
      tokentemp = user.getAuthResponse().id_token;
  
    }else{
  
      alert("Please reload the page and log in");
  
    }
  
    return tokentemp;
  
  }
  
  
  
  function  initSetupBackend(status){
  
    if(status==="captainHasTheCon"){
  
      setupBackendCanvasLoggedIn();
  
    }else{
  
  
    }
  
  
  };
  
  async function setupBackendCanvasLoggedIn(){
  
    counters.myGoogleBox.innerHTML = "";
    counters.myGoogleBox.innerHTML =  `<div class="g-signin2" data-onsuccess="onSignIn"></div>`;
  
    let myButt = document.createElement("div");
    myButt.className = "mylogbutt";
    myButt.innerHTML = `<a href="#" onclick="signOut();">Sign out</a>`;
    counters.myGoogleBox.appendChild(myButt);
  
    let tempdiv = document.createElement("div");
    tempdiv.id = "temporarydiv";
    document.querySelectorAll(".bigcontainer")[0].appendChild(tempdiv);
    document.querySelectorAll(".bigcontainer")[0].appendChild(counters.myGoogleBox);
    document.querySelectorAll(".bigcontainer")[0].style.overflowY="scroll";
  
    counters.elements.cPan.style.backgroundColor = "black";
    counters.elements.cPan.style.borderColor = "black";
    counters.elements.cPan.querySelectorAll(".setinset")[0].style.height = "48px";
    counters.elements.cPan.querySelectorAll(".cpancontentcont")[0].innerHTML = "";
    document.querySelectorAll(".bigcontainer")[0].appendChild(counters.elements.cPan);
    //tempdiv.innerHTML = counters.localVar.cloudObj.backendHTML;
  
    document.querySelectorAll("title")[0].innerHTML= "Swim - You're In!";
    customPopUpFunc(counters.elements.popUp,"phrase","stop");
    insertAndExecute("temporarydiv",counters.localVar.cloudObj.backendHTML).then(function(){
      addBackendEventListeners();
      fillUpFiles(counters.localVar.cloudObj);
      fillUpSiteMapInfo(counters.localVar.cloudObj);
      fillUpStories(counters.localVar.cloudObj,"back");
    });
  
  
  }
  
  
  
  
   async function insertAndExecute(id, text) {
    document.getElementById(id).innerHTML = text;
    var scripts = Array.prototype.slice.call(document.getElementById(id).getElementsByTagName("script"));
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src != "") {
            var tag = document.createElement("script");
            tag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(tag);
        }
        else {
           eval(scripts[i].innerHTML);
        }
    }
  }




  function customPopUpFunc(popupEle,phrase,action) {

    let mom = popupEle.querySelectorAll(".spanCont")[0];
    let deKid = mom.querySelectorAll("span")[0]
  
    if(action==="stop"){
      popupEle.style.visibility = "collapse";
      popupEle.remove();
  
    }else if(action==="fullsteamahead"){
      document.querySelectorAll(".bigcontainer")[0].innerHTML = "";
      popupEle.style.visibility = "visible";
      deKid.innerText = phrase;
      document.querySelectorAll(".bigcontainer")[0].appendChild(popupEle);
    }
  
    
  }