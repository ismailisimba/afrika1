const counters = {};
counters["frontendimages"] = [];
counters["deltaY"] = 0;
counters["deltaYSign"] = "null";
counters["elements"] ={};
counters["dropState"] = "hidden";
counters["elements"]["cPan"] = document.querySelectorAll(".settcont")[0];
counters["elements"]["cPanGenericCont"] = document.querySelectorAll(".genericCpanCont")[0];
counters["elements"]["popUp"] = document.querySelectorAll(".custompopup")[0];
counters.elements["postsMomCont"] = document.querySelectorAll(".postscontainer")[0];
counters.elements["dePage"] =  document.querySelectorAll(".mygenericpage")[0];
counters["reqString"] = "https://script.google.com/macros/s/AKfycbydOa4ZbEq5w9pBaGB1gKsl6uyY2ecMQ6yX2f9oVigiui-n6TArwnWrgm-ZBzkb4YLx/exec";
counters["paraTemplate"] = {"params":[{"initVal":"initKey"}]};
counters["localVar"] = {};
counters.localVar["counters"] = {};
counters.localVar["tempDivs"] = {};
counters.localVar.counters["currentAtCpan"] = 0; 
counters["myGoogleBox"] = document.querySelectorAll(".googlestuff")[0];
const lelink = "https://script.google.com/macros/s/AKfycbyAl44CwyGcvrxb_YWYx0Fd2QKLjThO3WUNNo8Yg3W4P_YJDDEXSr9kOA/exec";
let cloudObj = {};
const mobNav = document.getElementById("mobile-nav");



window.onload = () => {
  frontEndOnlyFuncs();
  myGenericPageFormatting();
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

    }else if(tempVar==="Program"){
        document.querySelectorAll(".internalboxtwo")[2].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else if(tempVar==="Galleries"){
        document.querySelectorAll(".internalboxtwo")[3].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    }else if("Bookings"){
      document.querySelectorAll(".internalboxtwo")[4].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

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
    document.querySelectorAll(".genericbox")[0].style.minHeight = "769px";
    document.querySelectorAll(".genericbox")[0].style.height = "auto";
    document.querySelectorAll(".genericbox")[0].style.top = "0px";
    document.querySelectorAll(".genericbox")[0].style.visibility = "visible";
    document.querySelectorAll(".genericbox")[0].style.display = "block";
   
    let tempTimer = window.setTimeout(()=>{
        document.querySelectorAll(".genericbox")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        window.clearTimeout(tempTimer);
    },30)
    
    document.onwheel = emptyDisengagedFunc;
    counters.dropState="shown";
};


function rollInGeneric() {
    document.querySelectorAll(".genericbox")[0].style.minHeight = "0px";
    document.querySelectorAll(".genericbox")[0].style.height = "0px";
    document.querySelectorAll(".genericbox")[0].style.top = "-169px";
    document.querySelectorAll(".genericbox")[0].style.visibility = "collapse";
    document.querySelectorAll(".genericbox")[0].style.display = "none";
   
    
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
      document.querySelectorAll("nav")[0].querySelectorAll("li")[0].addEventListener("click",()=>{window.location.href="./";})
      
     initiateLogInSetup(backendMatch);
    }else{
    
    }
    
   
    
  }


  function initiateLogInSetup (backendMatch){

    let contentBox = document.getElementById("scrl1");
    let googleStuff = document.querySelectorAll(".googlestuff")[0];
  
  
    contentBox.innerHTML = "";
    contentBox.appendChild(googleStuff);
    contentBox.style.minHeight ="669px";
  
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
   document.querySelectorAll("title")[0].innerHTML= "Ladha Africa - Log In";
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
  
    document.querySelectorAll("title")[0].innerHTML= "Ladha Africa - You're In!";
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

  function reloadHomePage () {
    window.location = "./";
   // document.querySelectorAll(".mycolumns")[1].style.overflowY="hidden";
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


  function addBackendEventListeners(){

    let cPanCont = document.querySelectorAll(".setinset")[0];
    cPanCont.style.visibility = "visible";
  
    addCPanActionClicks();
    addInputFileReading();
  
    
  }
  
  function addCPanActionClicks(){
  
    addCPanActionClicksforImages();
  };
  
  
  function addCPanActionClicksforImages(){
    let myClickables = document.querySelectorAll(".backendoxtitle");
    let thisTempCounter = 0;
    myClickables.forEach(element=>{
      element.id = element.className+thisTempCounter;
        element.addEventListener("click",displayYourCPanOptions)
        thisTempCounter++;
    })
  };
  
  function displayYourCPanOptions(){
    let parent = this.parentNode;
      
    if(parent.classList.contains("bigcontcollapse")){
  
      collapseCpan();
      
    }else{
  
    
      let theNum = this.id.slice(14);
      theNum = parseInt(theNum,10);
    
      let tempDiv = document.querySelectorAll(".logocontainer")[0];
     // tempDiv.innerHTML = theNum;
      
  
    displayCpanOptions(theNum);
     
  
    }
  }
  
  function displayCpanOptions(eleIndex){
  
    counters.localVar.counters.currentAtCpan = eleIndex;
  
    if(eleIndex==0){
  
      displayImageCpanOptions();
     
  
    }else if(eleIndex==1){
      displaySiteMapCpanOptions();
  
    }else if(eleIndex==2){
  
      displayPostsCpanOptions();
  
    }else if(eleIndex==3){
  
      //displayPostAddEdCpanOptions();
  
    }
  
   
  }
  
  function  displayImageCpanOptions(){
  
    //let container = document.querySelectorAll(".setinset")[0];
    let contentMom = document.querySelectorAll(".cpancontentcont")[0];
    let context = "menuIm";
    let numberOfBoxes = 2 //delete and upload
  
    let sumOfHeight = fillContentMom(contentMom,context,numberOfBoxes);
    expandTheCpan(sumOfHeight);
      
  
  
  }
  
  
  
  function  displaySiteMapCpanOptions(){
  
    //let container = document.querySelectorAll(".setinset")[0];
    let contentMom = document.querySelectorAll(".cpancontentcont")[0];
    let context = "menuSite";
    let numberOfBoxes = 1 // edit
  
    let sumOfHeight = fillContentMom(contentMom,context,numberOfBoxes);
    expandTheCpan(sumOfHeight);
  
  }
  
  function  displayPostsCpanOptions(){
  
    //let container = document.querySelectorAll(".setinset")[0];
    let contentMom = document.querySelectorAll(".cpancontentcont")[0];
    let context = "menuPosts";
    let numberOfBoxes = 4 //edit and delete and publish and unpublish
  
    let sumOfHeight = fillContentMom(contentMom,context,numberOfBoxes);
    expandTheCpan(sumOfHeight);
  
  }
  
  function  displayPostAddEdCpanOptions(){
  
    //let container = document.querySelectorAll(".setinset")[0];
    let contentMom = document.querySelectorAll(".cpancontentcont")[0];
    let context = "menuPostsss";
    let numberOfBoxes = 5 //view, edit and delete and publish and unpublish
  
    let sumOfHeight = fillContentMom(contentMom,context,numberOfBoxes);
    expandTheCpan(sumOfHeight);
  
  }
  
  
  function fillContentMom(contentMom,context,numberOfBoxes){
  
    let sumOfHeight
  
    if(context==="menuIm"){
      let boxHeight = 42;
      let myTextArr = ["Delete Files", "Upload Files"]
  
    sumOfHeight =  fillBoxes(contentMom,boxHeight,numberOfBoxes,myTextArr);
    }else if(context==="menuSite"){
      let boxHeight = 42;
      let myTextArr = ["Edit"];
  
    sumOfHeight =  fillBoxes(contentMom,boxHeight,numberOfBoxes,myTextArr);
  
  
    }else if(context==="menuPosts"){
      let boxHeight = 42;
      let myTextArr = ["View","Edit","Delete","Publish","Unpublish"];
  
    sumOfHeight =  fillBoxes(contentMom,boxHeight,5,myTextArr);
  
  
    }
  
    return sumOfHeight;
  };
  
  
  function fillBoxes(contentMom,boxHeight,numberOfBoxes,myTextArr){
  
    let sumOfHeight = 0;
    contentMom.innerHTML = "";
  
    for(let i = 0; i<numberOfBoxes;i++){
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = myTextArr[i];
      tempDiv.style.height = boxHeight+"px";
      tempDiv.className = "butts";
      tempDiv.addEventListener("click",addCpanOptsClickFuncs);
      sumOfHeight = sumOfHeight + boxHeight;
      contentMom.appendChild(tempDiv);
  
    }
  
    return sumOfHeight;
  };
  
  
  function expandTheCpan(sumOfHeight){
  sumOfHeight = 369;
  let cPanInside = document.querySelectorAll(".setinset")[0]
    /*
  
    if(sumOfHeight>569){
      sumOfHeight = 569;
    }
  
    
    let compStyles = window.getComputedStyle(cPanInside);
    let height = compStyles.getPropertyValue('height');
    height = height.slice(0, height.length-2);
   // alert(height);
    height = parseInt(height,10);
  
    if(height>569){
      height= 569;
    }
  
    if(height>50&&sumOfHeight<569&&height<569){
      sumOfHeight = sumOfHeight + height;
    }else{
      sumOfHeight = 569;
    }
  
    
  
    sumOfHeight = sumOfHeight + 36;
  */
    cPanInside.style.height = sumOfHeight+"px";
  }
  
  function collapseCpan (){
  
    let cPanInside = document.querySelectorAll(".setinset")[0]
  
    cPanInside.style.height = "100%";
    document.querySelectorAll(".cpancontentcont")[0].innerHTML = "";
  
  
  }
  
  function addCpanOptsClickFuncs(){
  
    let cPanItem = this;
    counters.localVar.tempDivs["butt1"] = this;
    let menuBoxIndex = counters.localVar.counters.currentAtCpan;
    let menuBox = document.querySelectorAll(".backendchildcontainer")[menuBoxIndex]; 
    let tempDiv = document.querySelectorAll(".logocontainer")[0];
  
    if(menuBoxIndex==0){
  
      addFileUploadFuncs(cPanItem);
     
  
    }else if(menuBoxIndex==1){
  
      addSiteMapFuncs(cPanItem);
     
  
    }else if(menuBoxIndex==2){
  
      addPostListFuncs(cPanItem);
    
  
    }else if(menuBoxIndex==3){
    
  
    }
    
  
  }
  
  
  function addFileUploadFuncs(cPanItem){
  
    let thisButtText = cPanItem.innerText;
  
  
      if(thisButtText==="Upload Files"){
        genericInputClick();
      }else if(thisButtText==="Delete Files"){
        setupForFileDeletion();  
      }
  
  }
  
  function addSiteMapFuncs(cPanItem){
  
    let thisButtText = cPanItem.innerText;
  
  
      if(thisButtText==="Edit"){
        siteMapShowEditors(cPanItem);
      }else{  
      }
  
  }
  
  
  function addPostListFuncs(cPanItem){
  
    let thisButtText = cPanItem.innerText;
  
  
      if(thisButtText==="Delete"){
        setupForStoryDeletion();
      }else if(thisButtText==="View"){ 
        setupForStoryView(); 
      }else if(thisButtText==="Edit"){
        appendStoryToEditor();
      }else if(thisButtText==="Publish"){
        setupForStoryPublishment("Publish");
  
      }else if(thisButtText==="Unpublish"){
        setupForStoryPublishment("unPublish")
      }
  
  
  }
  
  
  function siteMapShowEditors(cPanItem){
    cPanItem.style.height = "auto";
    cPanItem.innerText = "Please review all the entries then click Save - at bottom of Sitemap Box - when done.";
    let siteMapCont = document.querySelectorAll(".bigcontrolpanelcont")[0];
    let myTextAreas = siteMapCont.querySelectorAll("textarea");
    let mySelects = siteMapCont.querySelectorAll("select");
  
    myTextAreas.forEach(element => {
      element.style.visibility = "visible";
    })
  
    mySelects.forEach(element => {
      element.style.visibility = "visible";
    })
  
    //fillPublishedStoriesSelections();
    fillAllAvailableImages();
  
    document.querySelectorAll(".sitemapbut")[0].addEventListener("click",addSiteMapSaveButClick)
  
  
  }
  
  
  
  function genericInputClick(){
    let menuBoxIndex = counters.localVar.counters.currentAtCpan;
    let menuBox = document.querySelectorAll(".backendchildcontainer")[menuBoxIndex]; 
    let thisInput = menuBox.querySelectorAll("input")[0];
    thisInput.click();
  }
  
  function addInputFileReading(){
  
    let inputs = document.querySelectorAll("input");
  
    inputs.forEach(element=>{
      element.addEventListener("input",readDeFilesToCpan);
     
    })
  
  
  }
  
  
  
  function readDeFilesToCpan(){
  
    let logoCont = document.querySelectorAll(".logocontainer")[0];
    let contentBox = document.querySelectorAll(".cpancontentcont")[0];
    let filesArr = this.files;
    
  
  
  
   let sumOfHeight = writeFilesToCpan(filesArr,contentBox);
   
  
    expandTheCpan(sumOfHeight)
  
   // logoCont.innerHTML= filesArr[0].name;
  
  
  }
  
  function writeFilesToCpan(filesArr,contentBox) {
    let numOfFilesCont = counters.elements.cPanGenericCont.querySelectorAll("span")[0];
    let fileDeetsCont = counters.elements.cPanGenericCont.querySelectorAll(".imageListItemCont");
    let cloneFD = fileDeetsCont[0].cloneNode(true);
    let sumOfHeight = 0;
    fileDeetsCont.forEach(element=>{
      element.remove();
    })
  
    numOfFilesCont.innerHTML = filesArr.length;
  
    counters.localVar.counters["filesForUploadArr"] = filesArr;
    for(let i=0;i<filesArr.length;i++){
  
      sumOfHeight = sumOfHeight + 18;
  
      let tempdiv = cloneFD.cloneNode(true);
      let fileNameCont = tempdiv.querySelectorAll(".filename")[0];
      let fileTypeCont = tempdiv.querySelectorAll(".filetype")[0];
      let fileSizeCont = tempdiv.querySelectorAll(".filesize")[0];
  
      fileNameCont.innerHTML = filesArr[i].name;
      fileSizeCont.innerHTML = filesArr[i].size;
      fileTypeCont.innerHTML = filesArr[i].type;
  
      tempdiv.innerHTML = "";
      tempdiv.appendChild(fileNameCont);
      tempdiv.appendChild(fileTypeCont);
      tempdiv.appendChild(fileSizeCont);
  
      
      counters.elements.cPanGenericCont.appendChild(tempdiv);
  
    }
    //contentBox.innerHTML = "";
    collapseCpan();
  
    let sumOfH = fillBoxes2(contentBox,42,2,["Cancel","Upload"]);
  
    sumOfH = sumOfH + sumOfHeight;
    counters.elements.cPanGenericCont.style.visibility = "visible";
    contentBox.appendChild(counters.elements.cPanGenericCont);
    return sumOfH;
  
  }
  
  
  function fillBoxes2(contentMom,boxHeight,numberOfBoxes,myTextArr){
  
    let sumOfHeight = 0;
    contentMom.innerHTML = "";
  
    for(let i = 0; i<numberOfBoxes;i++){
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = myTextArr[i];
      tempDiv.style.height = boxHeight+"px";
      tempDiv.className = "butts";
      tempDiv.addEventListener("click",addImageUpoadFuncs);
      sumOfHeight = sumOfHeight + boxHeight;
      contentMom.appendChild(tempDiv);
  
    }
  
    return sumOfHeight;
  };
  
  function addImageUpoadFuncs(){
    let myText = this.innerText;
  
    if(myText==="Cancel"){
      collapseCpan();
      document.getElementById("backendoxtitle0").click();
    }else{
      let token = getToken();
      hailTheServerOnAllChannels("uploadFiles",token);
    }
    
   
  }
  
  async function bundleFilesForUpload(){
  
    let filesDataObj = [];
    let copy = {fileInfo:{"ogname":"","meme":""},fileData:""};
    
  
    for(let i = 0 ; i < counters.localVar.counters.filesForUploadArr.length ; i++){
  
      let tempObj = JSON.parse(JSON.stringify(copy));
  
  
  
        let file = counters.localVar.counters.filesForUploadArr[i];
  
        tempObj.fileInfo.ogname = file.name;
        tempObj.fileInfo.meme = file.type;
        tempObj.fileData = await readFile(file).then((file)=>{
          file =  btoa(file);
          return file;
        }).then((file)=>{
          return file;
        })
  
        filesDataObj.push(tempObj);
  
    
      }
     
    
  
    return filesDataObj;
  
  }
  
  async function readFile (file){
  
    const toBinaryString = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
  
  let parsedFile = null;
  parsedFile =  await toBinaryString(file);
  
    return parsedFile;
  }
  
  
  function updateCloudObj(context,data){
  
    
  
  if(context==="images"){
  
    let copy =  counters.localVar.cloudObj.contentObj.contentObj.draft.images[0];
    counters.localVar.cloudObj.contentObj.contentObj.draft.images = [];
    let [myDate]    = new Date().toLocaleDateString("en-US").split("-");
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
  
    for(let i = 0 ; i < data.length ; i++){
  
      let tempObj = JSON.parse(JSON.stringify(copy));
  
      tempObj.data = data[i].fileData;
      tempObj.name =  data[i].fileInfo.ogname;
      tempObj.id =  myDate+"---"+hour+minute+second+i+"---"+tempObj.name;
      tempObj.info.push({"mime":data[i].fileInfo.meme});
      tempObj.info.push({"timeObj":[{"myDate":myDate},{"hour":hour},{"minute":minute},{"second":second}]});
  
   
  
   counters.localVar.cloudObj.contentObj.contentObj.draft.images.push(tempObj);
  
    }
  
  
  }else if(context==="deleteFiles"){
    let copy = counters.localVar.cloudObj.contentObj.contentObj.delete[0];
    let itemsToDel = document.querySelectorAll(".cpancontentcont")[0];
    itemsToDel = itemsToDel.querySelectorAll(".fileListItemCont");
    counters.localVar.cloudObj.contentObj.contentObj.delete = [];
  
    for(let i = 0 ; i < itemsToDel.length ; i++){
  
      let tempObj = JSON.parse(JSON.stringify(copy));
  
      tempObj.type =  "file";
      tempObj.id =  itemsToDel[i].querySelectorAll(".idhref")[0].innerText;
  
   
  
   counters.localVar.cloudObj.contentObj.contentObj.delete.push(tempObj);
  
    }
  
    data = counters.localVar.cloudObj.contentObj.contentObj.delete;
    
    
  }else if(context==="deleteStories"){
    let copy = counters.localVar.cloudObj.contentObj.contentObj.delete[0];
    let itemsToDel = document.querySelectorAll(".cpancontentcont")[0];
    itemsToDel = itemsToDel.querySelectorAll(".fileListItemCont");
    counters.localVar.cloudObj.contentObj.contentObj.delete = [];
  
    for(let i = 0 ; i < itemsToDel.length ; i++){
  
      let tempObj = JSON.parse(JSON.stringify(copy));
  
      tempObj.type =  "story";
      tempObj.id =  itemsToDel[i].querySelectorAll(".idhref")[0].innerText;
  
  
  
   counters.localVar.cloudObj.contentObj.contentObj.delete.push(tempObj);
  
    }
  
    data = counters.localVar.cloudObj.contentObj.contentObj.delete;
    
  
    
  
  
  }else if(context==="updatePublish"){
  
    let copy = counters.localVar.cloudObj.contentObj.contentObj.delete[0];
    let itemsToDel = document.querySelectorAll(".cpancontentcont")[0];
    itemsToDel = itemsToDel.querySelectorAll(".fileListItemCont");
    counters.localVar.cloudObj.contentObj.contentObj.delete = [];
  
    for(let i = 0 ; i < itemsToDel.length ; i++){
  
      let tempObj = JSON.parse(JSON.stringify(copy));
  
      tempObj.type =  "story";
      tempObj["newUpdate"] = counters.localVar.publishStat;
      tempObj.id =  itemsToDel[i].querySelectorAll(".idhref")[0].innerText;
  
  
  
   counters.localVar.cloudObj.contentObj.contentObj.delete.push(tempObj);
  }
  
  }else if(context==="updateSettings"){
  
    let newSettings = {};
    let copy = counters.localVar.cloudObj.contentObj.contentObj.delete[0];
    counters.localVar.cloudObj.contentObj.contentObj.delete = {};
  
    newSettings["title"] = document.getElementById("posttit");
    newSettings["catchphrase"] = document.getElementById("postcat");
    newSettings["email"] = document.getElementById("emailcollector");
    newSettings["address"] = document.getElementById("wordaddresscollector");
    newSettings["fb"] = document.getElementById("fbcollector");
    newSettings["num"] = document.getElementById("phonecollector");
    newSettings["twtt"] = document.getElementById("twtcollector");
    newSettings["lnkd"] = document.getElementById("lnkdcollector");
    newSettings["inst"] = document.getElementById("instcollector");
    
  
    counters.localVar.cloudObj.contentObj.contentObj.delete ["title"] = newSettings.title.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["catchphrase"] = newSettings.catchphrase.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["email"] = newSettings.email.value ;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["address"] = newSettings.address.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["fb"] = newSettings.fb.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["num"] = newSettings.num.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["twtt"] = newSettings.twtt.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["lnkd"] = newSettings.lnkd.value;
    counters.localVar.cloudObj.contentObj.contentObj.delete ["inst"] = newSettings.inst.value;
    
  }
  return data;
  }
  
  
  
  function fillUpFiles(responseObj) {
    counters.localVar["cloudObj"] = responseObj;
    let filesArr = counters.localVar.cloudObj.contentObj.contentObj.published.images;
    filesArr.splice(0,1);
  
    let pageLim = 5;
    let numOfFiles =  filesArr.length;
    let numOfPages = Math.floor(numOfFiles/pageLim);
    let remainder = Math.floor(numOfFiles%pageLim);
  
    if(numOfPages<1||numOfPages==1&&remainder<1){
      numOfPages = 1;
    }else if(numOfPages>=1){
      numOfPages = numOfPages + 1;
  
    }
  
    
    //let myPage = createFilePageContObj(numOfPages,pageLim,remainder);
  
        
        let fileConts = document.querySelectorAll(".fileListItemCont");
        let fileCont = fileConts[0];
        let parent = fileCont.parentNode;
  
        fileConts.forEach(element=>{
          element.remove();
        })
  
        for(let i=0 ; i <numOfFiles ; i++){
          let tempDiv = fileCont.cloneNode(true);
          tempDiv = fillTempFileDiv(tempDiv,filesArr[i]);
          parent.appendChild(tempDiv);
        }
      
  
  
  
  
  
  
  }
  
  function fillTempFileDiv(tempDiv,fileObj) {
  
    let myHref1 = document.createElement("a");
    myHref1.innerHTML = "X";
    let myHref2 = document.createElement("a");
    myHref2.className = "idhref";
    myHref1.className = "testhref1";
    myHref1.target = "_blank";
    let myStyle = document.createElement("style");
    myStyle.innerHTML = `
      
        .testhref1{
          position: absolute;
          top: 0px;
          left: 0px;
          display: block;
          width: 100%;
          height: 100%;
          background-color: #e8dab2;
          color: #061826;
          cursor:pointer;
          font-size: 24px;
          text-align: center;
          font-weight: bold;
          opacity: 0;
          z-index: 100;
        }
  
        .idhref{
          position: absolute;
          top: 0px;
          left: 0px;
          display: block;
          font-size:0px;
          width: 0px;
          height: 0px;
          background-color: transparent;
          z-index: 50;
  
        }
    `;
  
    tempDiv.querySelectorAll(".filename")[0].innerHTML = fileObj.realName;
    tempDiv.querySelectorAll(".filetype")[0].innerHTML = "";
    let size = formatFileSize(fileObj.size);
    tempDiv.querySelectorAll(".filesize")[0].innerHTML = size;
    myHref1.href = fileObj.url;
    myHref2.innerText = fileObj.name;
    tempDiv.appendChild(myHref1);
    tempDiv.appendChild(myHref2);
    tempDiv.appendChild(myStyle);
  
    return tempDiv;
  
  }
  
  
  
  
  
  
  
  /*
  function createFilePageContObj(numOfPages,pageLim,remainder){
  
    let myNav = document.querySelectorAll(".inputcontainer")[0];
    let fileConts = document.querySelectorAll(".fileListItemCont");
    let fileCont = fileConts[0];
  
    fileConts.forEach(element=>{
      element.remove();
    })
  
    myNav.remove();
  
    let obj = {};
    let bigArr = [];
  
    for(let i=0 ; i < numOfPages ; i++){
      let tempObj = JSON.parse(JSON.stringify(obj));
      tempObj["I am"] = "Page "+i;
      bigArr.push(tempObj);
      tempObj = null;
    }
  
   return bigArr;
  }
  */
  
  function setupForFileDeletion(){
  
    let butClone = counters.localVar.tempDivs.butt1.cloneNode(true);
    let fileContClone = counters.elements.cPanGenericCont.querySelectorAll(".imageListItemCont")[0].cloneNode(true);
    let parent = document.querySelectorAll(".cpancontentcont")[0];
  
    parent.innerHTML = "";
  
    butClone.innerHTML = `Please click the files you want to delete. <br> To unselect, click again. <br> When done, click here to confirm deletion`;
    butClone.style.height = "auto";
  
    butClone.addEventListener("click",sendDeletionsToServer);
  
    addFileClicks();
  
    parent.appendChild(butClone);
  
  }
  
  function setupForStoryDeletion(){
  
    let butClone = counters.localVar.tempDivs.butt1.cloneNode(true);
    let fileContClone = counters.elements.cPanGenericCont.querySelectorAll(".imageListItemCont")[0].cloneNode(true);
    let parent = document.querySelectorAll(".cpancontentcont")[0];
  
    parent.innerHTML = "";
  
    butClone.innerHTML = `Please click the stories/posts you want to delete. <br> To unselect, click again. <br> When done, click here to confirm deletion`;
    butClone.style.height = "auto";
  
    butClone.addEventListener("click", sendDeletionsToServerToo);
  
    addStoryClicks();
  
    parent.appendChild(butClone);
  
  }
  
  function setupForStoryPublishment(string){
  counters.localVar.publishStat = string;
    let butClone = counters.localVar.tempDivs.butt1.cloneNode(true);
    let fileContClone = counters.elements.cPanGenericCont.querySelectorAll(".imageListItemCont")[0].cloneNode(true);
    let parent = document.querySelectorAll(".cpancontentcont")[0];
  
    parent.innerHTML = "";
  
    butClone.innerHTML = `Please click the stories/posts you want to publish/unpublish. <br> To unselect, click again. <br> When done, click here to confirm publishing/unpublishing`;
    butClone.style.height = "auto";
  
    butClone.addEventListener("click", sendPublishStatusToServer);
  
    addStoryClicks();
  
    parent.appendChild(butClone);
  
  }
  
  
  function addFileClicks(){
  
    let myClickableFileHrefs = document.querySelectorAll(".testhref1");
  
    myClickableFileHrefs.forEach(element => {
      element.addEventListener("click",toggleFileSelectStyle)
      element.name = element.href;
      element.removeAttribute("href");
    })
  
  }
  
  function addStoryClicks(){
  
    let myClickableStoryHrefs = counters.elements.postsMomCont.querySelectorAll(".postpreview");
  
    myClickableStoryHrefs.forEach(element => {
      element.addEventListener("click",toggleStorySelectStyle)
    })
  
  
  }
  
  
  function toggleFileSelectStyle() {
    let fileContClone = this.parentNode.cloneNode(true);
    fileContClone.id = this.parentNode.querySelectorAll(".idhref")[0].innerText;
    let parent = document.querySelectorAll(".cpancontentcont")[0];
    
  
    if(this.classList.contains("testhref1selected")){
  
      removeSelectedFileFromCpan(parent,this.parentNode);
      this.classList.remove("testhref1selected");
  
  
    }else{
      parent.appendChild(fileContClone);
      this.classList.add("testhref1selected");
  
    }
  }
  
  function toggleStorySelectStyle() {
    let storyContClone = document.querySelectorAll(".fileListItemCont")[0].cloneNode(true);
    storyContClone.id = this.querySelectorAll(".storyhref")[0].id+",child";
    let parent = document.querySelectorAll(".cpancontentcont")[0];
  
    
  
    if(this.classList.contains("storyhref2selected")){
  
      removeSelectedStoryFromCpan(parent,this);
      this.classList.remove("storyhref2selected");
  
  
    }else{
  
      let filename = storyContClone.querySelectorAll(".filename")[0];
      let filetype = storyContClone.querySelectorAll(".filetype")[0];
      let filesize = storyContClone.querySelectorAll(".filesize")[0];
      let idhref = storyContClone.querySelectorAll(".idhref")[0];
      filetype.remove();
      filesize.remove();
      filename.innerHTML = this.querySelectorAll("h2")[0].innerHTML;
      idhref.innerHTML = this.querySelectorAll("a")[0].id;
  
      filename.style.height = "100%";
      filename.style.textOverflow = "unset";
      filename.style.overflow = "auto";
      filename.style.whiteSpace = "normal";
  
      parent.appendChild(storyContClone);
      this.classList.add("storyhref2selected");
  
    }
  }
  
  function removeFileSelectClicks () {
    let myClickableFileHrefs = document.querySelectorAll(".testhref1");
  
    myClickableFileHrefs.forEach(element => {
      element.removeEventListener("click",toggleFileSelectStyle,false);
      element.href = element.name;
      element.name = "";
    })
  }
  
  function removeStorySelectClicks () {
    let myClickableStoryHrefs = counters.elements.postsMomCont.querySelectorAll(".postpreview");
  
    myClickableStoryHrefs.forEach(element => {
      element.removeEventListener("click",toggleStorySelectStyle,false)
      element.removeEventListener("click",showStoryReadPage,false)
    })
  }
  
  function removeSelectedFileFromCpan(parent,fileParentNode){
  
    let idtoCheck = fileParentNode.querySelectorAll(".idhref")[0].innerText;
    let deNode = document.getElementById(idtoCheck);
    deNode.remove();
  
  };
  
  function removeSelectedStoryFromCpan(parent,fileParentNode){
  
    let idtoCheck = fileParentNode.querySelectorAll("a")[0].id+",child";
    let deNode = document.getElementById(idtoCheck);
    deNode.remove();
  
  };
  
  
  
  
  function sendDeletionsToServer () {
    let token = getToken();
    hailTheServerOnAllChannels("delete",token);
  
  }
  
  function sendDeletionsToServerToo () {
    let token = getToken();
    hailTheServerOnAllChannels("deleteStories",token);
  
  }
  
  function sendPublishStatusToServer () {
    let token = getToken();
    hailTheServerOnAllChannels("updatePublish",token);
  
  }


  function myResetFuncs(){
    removeFileSelectClicks();
    removeStorySelectClicks();
    removeAddToEditor();
    removeSiteMapSave();
    
    toggleFileSelectStyleOff();
    toggleStorySelectStyleOff()
    
    }
    
    function removeSiteMapSave(){
      let myClickableStoryHrefs = document.querySelectorAll(".sitemapbut")[0];
      myClickableStoryHrefs.removeEventListener("click",addSiteMapSaveButClick,false);
    
    
    }
    
    function removeAddToEditor (){
      let myClickableStoryHrefs = counters.elements.postsMomCont.querySelectorAll(".postpreview");
    
      myClickableStoryHrefs.forEach(element => {
        element.removeEventListener("click",addStoryToEditor,false);
      })
    }
    
    
    function toggleFileSelectStyleOff() {
      let fileCont = document.querySelectorAll(".imagescontainer")[0];
      let hrefs69 = fileCont.querySelectorAll(".testhref1");
      
      hrefs69.forEach(element=>{
        element.classList.remove("testhref1selected");
      })
      
    }
    
    function toggleStorySelectStyleOff() {
      let hrefs69 = counters.elements.postsMomCont.querySelectorAll(".postpreview");
      
      hrefs69.forEach(element=>{
        element.classList.remove("storyhref2selected");
      })
      
    }
    
    
    function fillUpSiteMapInfo(responseObj){
    
      let newSettings = {};
      let cloudSettings = responseObj.settingsObj;
    
      newSettings["title"] = document.getElementById("posttit");
      newSettings["titleDisp"] = document.querySelectorAll(".contrpantitshow")[0];
    
      newSettings["catchphrase"] = document.getElementById("postcat");
      newSettings["catchphraseDisp"] = document.querySelectorAll(".contrpancatshow")[0];
   
      
    
      newSettings["email"] = document.getElementById("emailcollector");
      newSettings["emailDisp"] = document.querySelectorAll(".addrshow1")[0];
    
      newSettings["address"] = document.getElementById("wordaddresscollector");
      newSettings["addressDisp"] = document.querySelectorAll(".addrshow3")[0];
    
      newSettings["fb"] = document.getElementById("fbcollector");
      newSettings["fbDisp"] = document.querySelectorAll(".addrshow4")[0];
    
      newSettings["num"] = document.getElementById("phonecollector");
      newSettings["numDisp"] = document.querySelectorAll(".addrshow2")[0];
    
      newSettings["twtt"] = document.getElementById("twtcollector");
      newSettings["twttDisp"] = document.querySelectorAll(".addrshow5")[0];
    
      newSettings["lnkd"] = document.getElementById("lnkdcollector");
      newSettings["lnkdDisp"] = document.querySelectorAll(".addrshow7")[0];
    
      newSettings["inst"] = document.getElementById("instcollector");
      newSettings["instDisp"] = document.querySelectorAll(".addrshow6")[0];
      
      //newSettings.title.innerText = "Kennoobi!";
      //newSettings.catchphrase.innerText = "Kennoobi!";
      //newSettings.featureOne.innerText = "Kennoobi!";
      //newSettings.featureTwo.innerText = "Kennoobi!";
      //newSettings.featureThree.innerText = "Kennoobi!";
      //newSettings.email.innerText = "Kennoobi!";
      //newSettings.address.innerText = "Kennoobi!";
      //newSettings.fb.innerText = "Kennoobi!";
      //newSettings.num.innerText = "Kennoobi!";
      //newSettings.twtt.innerText = "Kennoobi!";
      //newSettings.lnkd.innerText = "Kennoobi!";
      //newSettings.inst.innerText = "Kennoobi!";
    
      newSettings.title.style.visibility = "collapse";
      newSettings.title.value = cloudSettings.title;
      newSettings.titleDisp.innerHTML = cloudSettings.title;
    
      newSettings.catchphrase.style.visibility = "collapse";
      newSettings.catchphrase.value = cloudSettings.catchphrase;
      newSettings.catchphraseDisp.innerHTML = cloudSettings.catchphrase;
    
      newSettings.email.style.visibility = "collapse";
      newSettings.email.value = cloudSettings.buzEmail;
      newSettings.emailDisp.innerHTML = cloudSettings.buzEmail;
    
      newSettings.address.style.visibility = "collapse";
      newSettings.address.value = cloudSettings.address;
      newSettings.addressDisp.innerHTML = cloudSettings.address;
    
      newSettings.fb.style.visibility = "collapse";
      newSettings.fb.value = cloudSettings.fb;
      newSettings.fbDisp.innerHTML = cloudSettings.fb;
    
      newSettings.num.style.visibility = "collapse";
      newSettings.num.value = cloudSettings.num;
      newSettings.numDisp.innerHTML = cloudSettings.num;
    
      newSettings.twtt.style.visibility = "collapse";
      newSettings.twtt.value = cloudSettings.twt;
      newSettings.twttDisp.innerHTML = cloudSettings.twt;
    
      newSettings.lnkd.style.visibility = "collapse";
      newSettings.lnkd.value = cloudSettings.linkd;
      newSettings.lnkdDisp.innerHTML = cloudSettings.linkd;
    
      newSettings.inst.style.visibility = "collapse";
      newSettings.inst.value = cloudSettings.instg;
      newSettings.instDisp.innerHTML = cloudSettings.instg;
    
      
    }
    
    function deStoryFunc(storyHtml){
    
      let tempDivObj = document.createElement("div");
      let newStoryObj = {};
      newStoryObj["myHtml"] = "";
      newStoryObj["myImages"] = [];
    
      let imgObj = {id:"",data:"",mime:""};
    
      tempDivObj.innerHTML = storyHtml;
    
      let children = tempDivObj.childNodes;
      let imgindex = 0;
    
      children.forEach(element => {
        let names = element.childNodes;
    
        names.forEach(child=>{
          
          if(child.nodeName==="IMG"){
          
    
            let typeOfImage = child.src.split(":")[0];
            typeOfImage = typeOfImage.match(/\b(\w*http\w*)\b/g);
    
            if(typeOfImage!==null){
    
            }else {
    
              let copy = JSON.parse(JSON.stringify(imgObj));
    
            let [myDate]    = new Date().toLocaleDateString("en-US").split("-");
            let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
            
    
            let newArr = child.src.split(",");
            copy.data = newArr[1];
            copy.mime = newArr[0].split(";")[0];
            copy.mime = copy.mime.split(":")[1];
    
            copy.id = myDate+hour+minute+second+document.getElementById("editposttit").value+imgindex
    
            
              child.src = "https://ismizo.com/resources/icons/loading.png";
              child.id = copy.id;
    
              newStoryObj.myImages.push(copy);
              
            
            imgindex++;
    
    
            }
            
          
          }
        })
    
      
       
      })
    
      newStoryObj.myHtml = tempDivObj.innerHTML;
      
    
      if(counters.localVar.thisEditToDel!=="none"){
        counters.localVar.cloudObj.contentObj.contentObj.delete[0].id = counters.localVar.thisEditToDel;
        counters.localVar.cloudObj.contentObj.contentObj.delete[0].type = "story";
        let token = getToken();
        let myObj = bundleTokenAfter(token);
        myObj.params[0].dataObj = counters.localVar.cloudObj.contentObj.contentObj.delete;
        startHailing(myObj,"delete",function(responseObj){
          
        });
    
      }
    
      
        let [myDate]    = new Date().toLocaleDateString("en-GB").split("-");
        let [hour, minute, second] = new Date().toLocaleTimeString("en-GB").split(/:| /);
        let tempid =  myDate+"_"+hour+"_"+minute+"_"+second;
    
       counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0].storyObj = newStoryObj;
       counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0].title = document.getElementById("editposttit").value;
       counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0].description = document.getElementById("descrtit").value;
       counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0].type = "draft";
       counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0].stats.push({timeid:tempid});
       counters.localVar.cloudObj.contentObj.contentObj.draft.stories[0].stats.push({typetoo:document.getElementById("feature69").value});
    
        let token = getToken();
      hailTheServerOnAllChannels("uploadStory",token);
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    function  fillUpStories(responseObj,context) {
    
      let stories = responseObj.contentObj.contentObj.published.stories;
    
      let numOfStories = stories.length;
    
      let storyCont = counters.elements.postsMomCont.querySelectorAll(".postpreview")[0];
      let parent = counters.elements.postsMomCont;
      let travelGuides = [];
      let newStories = [];
      let destiStories = [];
    
      parent.innerHTML = "";
    
    
    
      for(let i=0 ; i <numOfStories ; i++){
        let tempDiv = storyCont.cloneNode(true);
        tempDiv = fillTempStoryDiv(tempDiv,stories[i]);
      
        parent.appendChild(tempDiv);
        let hreftempy = null;
        let length = null; 
        hreftempy = parent.querySelectorAll(".storyhref")[0];
        length = parent.querySelectorAll(".storyhref");
    
        if(hreftempy!==null&&hreftempy!==undefined&&length>1){
          hreftempy.remove();
        }

        if(stories[i].stats[1].typetoo==="trip_guide"){
          travelGuides.push(stories[i]);
        }else if(stories[i].stats[1].typetoo==="none"){
          newStories.push(stories[i]);
        }else if(stories[i].stats[1].typetoo==="destinations"){
          destiStories.push(stories[i]);
        }
      }
    
      if(context==="back"){
    
        document.querySelectorAll(".backendchildcontainer")[2].appendChild(parent);
    
      }else if(context==="travelGuides"){
        
        let temp = document.querySelectorAll(".left")[0];
        for(let i=0 ; i <travelGuides.length ; i++){
          let tempDiv = storyCont.cloneNode(true);
          tempDiv = fillTempStoryDiv(tempDiv,travelGuides[i]);
        
          parent.appendChild(tempDiv);
          let hreftempy = null;
          let length = null; 
          hreftempy = parent.querySelectorAll(".storyhref")[0];
          length = parent.querySelectorAll(".storyhref");
      
          if(hreftempy!==null&&hreftempy!==undefined&&length>1){
            hreftempy.remove();
          }

          temp.appendChild(tempDiv);
        }
        
        temp.querySelectorAll(".postpreview").forEach(element => {
          element.removeEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation,false);
        element.addEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation);
       });


      }else if(context==="travelStories"){
              
        let temp = document.querySelectorAll(".left")[0];
        for(let i=0 ; i <newStories.length ; i++){
          let tempDiv = storyCont.cloneNode(true);
          tempDiv = fillTempStoryDiv(tempDiv,newStories[i]);
        
          parent.appendChild(tempDiv);
          let hreftempy = null;
          let length = null; 
          hreftempy = parent.querySelectorAll(".storyhref")[0];
          length = parent.querySelectorAll(".storyhref");
      
          if(hreftempy!==null&&hreftempy!==undefined&&length>1){
            hreftempy.remove();
          }

          temp.appendChild(tempDiv);
        }
        
        temp.querySelectorAll(".postpreview").forEach(element => {
          element.removeEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation,false);
        element.addEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation);
       });
      }else if(context==="destinationStories"){
        let temp = document.querySelectorAll(".left")[0];
        for(let i=0 ; i <destiStories.length ; i++){
          let tempDiv = storyCont.cloneNode(true);
          tempDiv = fillTempStoryDiv(tempDiv,destiStories[i]);
        
          parent.appendChild(tempDiv);
          let hreftempy = null;
          let length = null; 
          hreftempy = parent.querySelectorAll(".storyhref")[0];
          length = parent.querySelectorAll(".storyhref");
      
          if(hreftempy!==null&&hreftempy!==undefined&&length>1){
            hreftempy.remove();
          }

          temp.appendChild(tempDiv);
        }
        
        temp.querySelectorAll(".postpreview").forEach(element => {
          element.removeEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation,false);
        element.addEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation);
       });
      }else{
        
         counters.elements.dePage.querySelectorAll("h1")[0].innerHTML = "Stories And News From TALISS";
         let deCont = counters.elements.dePage.querySelectorAll(".mystorycontainer")[0];
         
         deCont.innerHTML = "";
          deCont.appendChild(parent);
          temp.appendChild(deCont);
    
          let stories = parent.querySelectorAll(".postpreview");
          
          stories.forEach(element => {
            element.removeEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation,false);
          element.addEventListener("click",anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation);
         })
    
      }
    
      
    
    };
    
    function anonyFunkyFukenFunck_idInsertionFrontendStoryPopulation (){
    
      let storyid = this.querySelectorAll(".storyhref")
      storyid = storyid[storyid.length-1].id;
      addNewHtmlFuncs2(storyid);
    }
    
    
    
    function fillTempStoryDiv(tempDiv,storyObj) {
    
    
    
      let myHref2 = document.createElement("a");
      myHref2.className = "storyhref";
      let myStyle = document.createElement("style");
      myStyle.innerHTML = `
        
          .storyhref{
            position: absolute;
            color: black;
            top: 0px;
            right: 0px;
            display: block;
            font-size:11.69px;
            width: 69px;
            height: 18px;
            padding: 1px 3px;
            box-sizing: border-box;
            background-color: transparent;
            z-index: 50;
            font-weight: normal;
            letter-spacing: 1.69px;
    
          }
      `;
    
      tempDiv.querySelectorAll("h2")[0].innerHTML = storyObj.title;
      tempDiv.querySelectorAll("p")[0].innerHTML = storyObj.description;
      
      myHref2.innerHTML = storyObj.type;
      colorPublishedStyle(myHref2);
      myHref2.id = storyObj.stats[0].timeid;
      
      
      
      tempDiv.appendChild(myHref2);
      tempDiv.appendChild(myStyle);

      highlightDestiAndGuides(tempDiv);
    
      return tempDiv;
    
    }
    
    function colorPublishedStyle(deHref){
    
      let myText = deHref.innerText;
    
      if(myText==="published"){
        deHref.style.backgroundColor = "#53f4ff";
        deHref.style.color = "black";
      }
    
    }
    
    
    function setupForStoryView() {
    
      
      counters.localVar.columnHtml = document.querySelectorAll(".bigcontainer")[0];
    
      let parent = document.querySelectorAll(".cpancontentcont")[0];
    
      parent.innerHTML = "";
    
      let butClone = counters.localVar.tempDivs.butt1.cloneNode(true);
    
      butClone.innerHTML = `Please click the stories/posts you want to read.`;
      butClone.style.height = "auto";
    
      parent.appendChild(butClone);
      
    
      let stories = counters.elements.postsMomCont.querySelectorAll(".postpreview");
    
      stories.forEach(element => {
        element.addEventListener("click",showStoryReadPage);
      })
      
    }
    
    function showStoryReadPage() {
    
      let storyid = this.querySelectorAll(".storyhref")[0].id;
      
      counters.elements.dePage.style.visibility = "visible";
    
    
      
    
      let deBut = counters.elements.dePage.querySelectorAll("button")[0];
    
      deBut.addEventListener("click", backToBackend)
      
      counters.localVar.columnHtml.replaceWith(counters.elements.dePage);
      addNewHtmlFuncs(storyid);
    
    }
    
    function backToBackend (){
      counters.elements.dePage.replaceWith(counters.localVar.columnHtml);
      counters.elements.dePage.removeEventListener("click",backToBackend,false);
    }
    
    
    function addNewHtmlFuncs(storyid) {
    
    
      let stories = counters.localVar.cloudObj.contentObj.contentObj.published.stories
      let searchResponse = searchStory(stories,storyid);
    
      if(searchResponse.status==="found"){
        populateStory(searchResponse.obj);
      }else{
        alert("Ooops there's been an error reading your post. Please report to ismaili.a.simba@gmail.com");
      }
    
      
    
    };

function addNewHtmlFuncs2(storyid) {


  let stories = counters.localVar.cloudObj.contentObj.contentObj.published.stories
  let searchResponse = searchStory(stories,storyid);

  if(searchResponse.status==="found"){
    populateStory2(searchResponse.obj);
  }else{
    alert("Ooops there's been an error reading your post. Please report to ismaili.a.simba@gmail.com");
  }

  

};
    
    function searchStory(stories,storyid){
    
      let response = {}
      response["status"] = "notFound";
    
      for(let i=0 ; i<stories.length ; i++){
        if(storyid===stories[i].stats[0].timeid){
    
          response["obj"] = stories[i];
          response.status = "found";
    
        }
      }
    
      return response
    
    };
    
    
    function populateStory(storyObj){
      let titleDiv = counters.elements.dePage.querySelectorAll("h1")[0];
      let storyContainer = counters.elements.dePage.querySelectorAll("div")[0];
      
    
      readStoryObj(storyContainer,storyObj);
    
      titleDiv.innerHTML = storyObj.title;
      
    
    };

    function populateStory2(storyObj){
      let backBut = document.createElement("button");
      backBut.id="frontbutback";
      let titleDiv = document.createElement("h1");
      let storyContainer = document.createElement("div");
      let tempDiv3 = document.querySelectorAll(".right")[0];
      tempDiv3.innerHTML = "";
    
      
      
    
      readStoryObj(storyContainer,storyObj);
    
      titleDiv.innerHTML = storyObj.title;

      backBut.removeEventListener("click",toTheRight,false);
      backBut.addEventListener("click",toTheRight,false);
      document.querySelectorAll(".genericboxcontent")[0].style.left ="-97.5%";

      tempDiv3.appendChild(backBut);
      tempDiv3.appendChild(titleDiv);
      tempDiv3.appendChild(storyContainer);
      
    
    };


    function toTheRight(){
      document.querySelectorAll(".genericboxcontent")[0].style.left ="0px";
    }
    
    
    function readStoryObj(storyContainer,storyObj){
    
      storyContainer.innerHTML = storyObj.storyObj.myHtml;
    
      let images = storyContainer.querySelectorAll("img");
      let paras = storyContainer.querySelectorAll("p");
    
      images.forEach(element => {
        if(element.src==="https://ismizo.com/resources/icons/loading.png"){
          
          fetchDisImage(element);
        }
      })
    
      paras.forEach( paragraph => {
        let imagesInside = []
        imagesInside = paragraph.querySelectorAll("img");
        if(imagesInside.length>=1){
          paragraph.style.textAlign = "center";
        }
      })
    
     
    
    };
    
    
    function fetchDisImage (element) {
    
      let deId = {id:element.id};
      let contextObject = JSON.parse(JSON.stringify(counters.paraTemplate));
    
      contextObject.params[0]["action"] = "later...";
      contextObject.params[0]["token"] = "wHaT tOkEn!";
      contextObject.params[0]["dataObj"] = deId;
    
    
      startHailing(contextObject,"quickfetch",setDisBlocToSrc);
    
    
    }

    function fetchDisImage2 (element) {
    
      let deId = {id:element.id};
      let contextObject = JSON.parse(JSON.stringify(counters.paraTemplate));
    
      contextObject.params[0]["action"] = "later...";
      contextObject.params[0]["token"] = "wHaT tOkEn!";
      contextObject.params[0]["dataObj"] = deId;
    
    
      startHailing(contextObject,"quickfetch",setDisBlocToSrc2);
    
    
    }
    
    async function setDisBlocToSrc(responseObj){
    
      let eleid = responseObj.deFileObj.id;
      let meme = responseObj.deFileObj.mime;
      let cloudBlob = responseObj.deFileObj.data;
    
      let element = document.getElementById(`${eleid}`);
      
     
      element.src = `data:${meme};base64,${cloudBlob}`;
    
    
    }

    async function setDisBlocToSrc2(responseObj){
    
    /*  let eleid = responseObj.deFileObj.id;
      let meme = responseObj.deFileObj.mime;
      let cloudBlob = responseObj.deFileObj.data;
    
      let element = document.getElementById(`${eleid}`);
      
     
      element.style.backgroundImage = `url(data:${meme};base64,${cloudBlob})`;
    
    */
      
      let meme = responseObj.deFileObj.mime;
      let cloudBlob = responseObj.deFileObj.data;
    
   counters.frontendimages.push({image:{mymeme:meme,myBlob:cloudBlob}});
    }
    
    
    function appendStoryToEditor() {
      counters.localVar.columnHtml = document.querySelectorAll(".bigcontainer")[0];
    
      let parent = document.querySelectorAll(".cpancontentcont")[0];
    
      parent.innerHTML = "";
    
      let butClone = counters.localVar.tempDivs.butt1.cloneNode(true);
    
      butClone.innerHTML = `Please click the story you want to edit then check the editor (under Add/Edit Posts).`;
      butClone.style.height = "auto";
    
      parent.appendChild(butClone);
      
    
      let stories = counters.elements.postsMomCont.querySelectorAll(".postpreview");
    
      stories.forEach(element => {
        element.addEventListener("click",addStoryToEditor);
      })
    
    };
    
    function addStoryToEditor () {
    
      let storyid = this.querySelectorAll(".storyhref")[0].id;
      counters.localVar.thisEditToDel = storyid;
      let stories = counters.localVar.cloudObj.contentObj.contentObj.published.stories
      let searchResponse = searchStory(stories,storyid);
    
      if(searchResponse.status==="found"){
        addThisStoryToEditor(searchResponse.obj);
      }else{
        alert("Ooops there's been an error reading your post. Please report to ismaili.a.simba@gmail.com");
      }
    
    
    }
    
    
    function addThisStoryToEditor(storyObj){
      let titleDiv = document.getElementById("editposttit") ;
      let descrDiv = document.getElementById("descrtit");
      let specialType = document.getElementById("feature69")
      let storyContainer = document.querySelectorAll(".ql-editor")[0];
    
      document.getElementById("backendoxtitle2").click();
      document.getElementById("backendoxtitle3").click();
    
      readStoryObj(storyContainer,storyObj);
    
      titleDiv.value = storyObj.title;
      descrDiv.value = storyObj.description;
      specialType.value = storyObj.stats[1].typetoo;
    }
    
    function  fillPublishedStoriesSelections(){
    
      let stories = counters.localVar.cloudObj.contentObj.contentObj.published.stories;
      let publishedTitsArr = [];
      let obj = {id:"",title:""}
      let myParConts = document.querySelectorAll(".featuresgeneric");
    
    
      for(let i=0; i<stories.length ; i++){
        if(stories[i].type==="published"){
          let copy = JSON.parse(JSON.stringify(obj));
          copy.id = stories[i].stats[0].timeid;
          copy.title = stories[i].title;
          publishedTitsArr.push(copy)
        }
      }
    
      myParConts.forEach(element=>{
        let miHref = element.querySelectorAll("option")[1];
        let par = element.querySelectorAll(".featureshowdrop")[0];
        miHref.remove();
    
          for(let i=0 ; i<publishedTitsArr.length ; i++){
            let cloneMiHref = miHref.cloneNode(true);
            cloneMiHref.innerHTML = publishedTitsArr[i].title;
            cloneMiHref.value = publishedTitsArr[i].id;
            par.appendChild(cloneMiHref);
    
          }
      })
    
    
    
    }


    function  fillAllAvailableImages(){
    
      let images = counters.localVar.cloudObj.contentObj.contentObj.specialOne.images;
      let imageNamesArr = [];
      let obj = {id:"",imageName:""}
      let myParConts = document.querySelectorAll(".featuresgeneric");
    
    
      for(let i=0; i<images.length ; i++){
        
          let copy = JSON.parse(JSON.stringify(obj));
          copy.id = images[i].name;
          copy.imageName = images[i].ogname;
          imageNamesArr.push(copy)
        
      }
    
      myParConts.forEach(element=>{
        let miHref = element.querySelectorAll("featureshow")[0];
        let par = element.querySelectorAll(".featuresgeneric")[0];
        miHref.remove();
    
          for(let i=0 ; i<imageNamesArr.length ; i++){
            let cloneMiHref = miHref.cloneNode(true);
            cloneMiHref.innerHTML = imageNamesArr[i].imageName;
            cloneMiHref.value = imageNamesArr[i].id;
            par.appendChild(cloneMiHref);
    
          }
      })
    
    
    
    }


    
    function addSiteMapSaveButClick(){
      
      let token = getToken();
      hailTheServerOnAllChannels("updateSettings",token);
    
    };
    
function getStoryTit(id){
      let stories = counters.localVar.cloudObj.contentObj.contentObj.published.stories;
      let title = "Not Found";
    
      for(let i=0 ; i<stories.length ; i++){
    
        if(id===stories[i].stats[0].timeid){
          title = stories[i].title;
        }
      }
    
      return title;
    
}


function getImageName(id){
  let images = counters.localVar.cloudObj.contentObj.contentObj.specialOne.images;
  let imageName = "Not Found";

  for(let i=0 ; i<images.length ; i++){

    if(id===images[i].name){
      imageName = images[i].ogname;
    }
  }

  return imageName;

}




function frontEndOnlyFuncs () {
  let frontEnd = document.querySelectorAll(".frontphotobox")[0];

  if(frontEnd===undefined){

  }else if(frontEnd){

    dropDownClicks();
    myScrollFunctions();
    navClicks();
    fillDeFrontEnd();
    addMobMenu(window.screen.width);
    //imageClicks();
    //imageTouchPrompt();

  }else{
    console.log("frontEndFuncErr");
  }
  

}


function formatFileSize(size){

  if(size<=1024){
    size = "1 kb"
  }else if(size>1024&&size<=524288){
      size = Math.floor(size/1024);
      size = size+" kbs";
  }else if(size>524288){
    size = Math.floor(size/1048576);
    size = size+" MBs";
  }

  return size;

}


function myGenericPageFormatting (){

  counters.elements.dePage.remove()
  counters.elements.postsMomCont.remove();
  counters.elements.postsMomCont.style.visibility="visible";
  counters.elements.postsMomCont.style.display="block";
 

    
}


function highlightDestiAndGuides(tempDiv) {
  let disId = tempDiv.querySelectorAll("a")[0].id;

  let searchResponse = searchStory(counters.localVar.cloudObj.contentObj.contentObj.published.stories,disId);

  if(typeof searchResponse === 'object' && searchResponse !== null && !Array.isArray(searchResponse) && searchResponse.status==="found"){
    
      let tempVar69 = searchResponse.obj.stats[1].typetoo;
      

      if(tempVar69==="destinations"){

        tempDiv.querySelectorAll("h2")[0].style.color = "white";

      }else if(tempVar69==="trip_guide"){

        tempDiv.querySelectorAll("h2")[0].style.color = "wheat";
      }
  }
};



async function fillDeFrontEnd(){
  let contextObject = JSON.parse(JSON.stringify(counters.paraTemplate));
  contextObject.params[0]["action"] = "login";
  contextObject.params[0]["token"] = "letMeIn";
  contextObject.params[0]["dataObj"] = "letMeIn";
  let myObj = await fetchInfoWithFilter(contextObject,"strangerDanger").then(myObj=>{
    counters.localVar.cloudObj = myObj;

    addDataFillFrontEndClicks();
    fillInitialContacts();
    fillImagesFront();
    shuffleImages();
    
    //fillFeatured(myObj);
    //fillTit(myObj);
    //addStoryPageShowFrontEnd(myObj);
    
  });


  
}


function addDataFillFrontEndClicks() {
  counters["contactBut"] = document.getElementById("contactbut");
  counters["travelBut"] = document.getElementById("guidebut");
  counters["destiBut"] = document.getElementById("destibut");
  counters["storyBut"] = document.getElementById("storibut");

  let thisTempAr = [];
  thisTempAr.push(counters.contactBut);
  thisTempAr.push(counters.travelBut);
  thisTempAr.push(counters.destiBut);
  thisTempAr.push(counters.storyBut);

  thisTempAr.forEach(element => {
    element.addEventListener("click",()=>{

      doMyFrontEndThing(element.id);
    })
  })
}


function doMyFrontEndThing(id){
  if(id==="contactbut"){
    fillContactBox();

  }else if(id==="destibut"){
    fillDestinationsFront();

  }else if(id==="guidebut"){
    fillTravelGuides();

  }else if(id==="storibut"){
    fillStoriesFront();

  }else{

  }
};


function fillInitialContacts(){
  let ele = document.getElementById("contactbut");
  let elePar = ele.parentNode;
  let numHref = elePar.querySelectorAll("p")[0].querySelectorAll("a")[0];
  let emailHref = elePar.querySelectorAll("p")[0].querySelectorAll("a")[1];
  numHref.href="tel:+"+counters.localVar.cloudObj.settingsObj.num;
  emailHref.href="mailto:"+counters.localVar.cloudObj.settingsObj.buzEmail;
  emailHref.innerHTML = counters.localVar.cloudObj.settingsObj.buzEmail;
  let tempStr = counters.localVar.cloudObj.settingsObj.num.match(/.{1,3}/g);
  tempStr = tempStr.toString();
  tempStr = tempStr.replaceAll(","," ");
  numHref.innerHTML = "+"+tempStr;
};


function fillContactBox () {
  let leftEle = document.querySelectorAll(".left")[0];
  leftEle.innerHTML = "";
  leftEle.classList.add("contactBoxTempStyle");
  leftEle.innerHTML = `  <div class="contacttitdiv">
  <h1>Contact Us</h1>
  <p>We would love to hear from you, please use the form below or any of our details</p>
</div>
<div class="contactdescrdiv">
  <div class="contactformdiv">
    <div class="formitemdiv">
      <p>Name</p>
      <textarea maxlength="100" id="contactname"></textarea>
    </div>
    <div class="formitemdiv">
      <p>Email</p>
      <textarea maxlength="100" id="contactemail"></textarea>
    </div>
    <div class="formitemdiv">
      <p>Message</p>
      <textarea maxlength="2500" id="contactmessage"></textarea>
    </div>
    
    <div class="simplecaptchamom">
      <div class="captchaitems">
        <img>
      </div>
      <div class="captchaitems">  </div>
      <div class="captchaitems">
        <img>
      </div>
      <div class="captchaitems">  </div>
      <textarea class="captchaitems" maxlength="2"></textarea>
    
    </div>

  </div>
  <div class="contactlistdiv" id="mycontacts">

    <div class="addresslistitem">
      <h2>Address</h2>
      <p>Dar es salaam, Tanzania</p>
    </div>

    <div class="addresslistitem">
      <h2>Email</h2>
      <p>ismizo@live.com</p>
    </div>

    <div class="addresslistitem">
      <h2>Phone</h2>
      <p>+255 000 000 000</p>
    </div>

    <div class="addresslistitem">
      <h2>Social</h2>
      <div class="mysocials">
        <div class="socialitem">
          <a target="blank"></a>
        </div>
        <div class="socialitem">
          <a target="blank"></a>
        </div>
        <div class="socialitem">
          <a target="blank"></a>
        </div>
        <div class="socialitem">
          <a target="blank"></a>
        </div>
      </p>
    </div>
    
  </div>

</div>
</div>`;

fillAddress(counters.localVar.cloudObj);
fetcher({},"first",firstDisp);

}




/*Captcha Functions*/


 



async function fetcher(data,action,funcAft){

  let temp = await getCaptchaObj(action,data).then(resObj=>{
    funcAft(resObj);
  })
  
  }
  
  
  
  function firstDisp(resObj){
  
  let captchaItemsCont = document.querySelectorAll(".captchaitems");
  
  let img1 = captchaItemsCont[0].querySelectorAll("img")[0];
  img1.src = `data:image/jpeg;base64,${resObj.ghh.l11}`;
  
  let img2 = captchaItemsCont[2].querySelectorAll("img")[0];
  img2.src = `data:image/jpeg;base64,${resObj.ghh.l12}`;
  
  captchaItemsCont[4].value = "?";
  
  captchaItemsCont[4].addEventListener("input",checkAnswer)
  
  if(resObj.symbol===0){
    captchaItemsCont[1].innerHTML = "+";
  }else{
    captchaItemsCont[1].innerHTML = "+";
  }
  captchaItemsCont[3].innerHTML = "=";
  
    cloudObj = resObj;
  }
  
  
  function checkAnswer(){
    let val = this;
    val.removeEventListener("input",checkAnswer);
  
    let timeOutkk = window.setTimeout(function(){
  
      val = val.value;
      let objee = {};
          objee["one"] = val;
          objee["two"] = cloudObj.ghh.eqid;
  
        if(val.length>=1){
         
          fetcher(objee,"second",funcToHook);
        }
  
        window.clearTimeout(timeOutkk);
  
    },1000);
   
   
  }
  
  function funcToHook(resObj){
    let mom = document.querySelectorAll(".simplecaptchamom")[0];
    let name = document.getElementById("contactname");
    let email = document.getElementById("contactemail");
    let message = document.getElementById("contactmessage");
    if(resObj.status==="pass"&&name.value.length>3&&email.value.length>6&&message.value.length>9){
  
      mom.innerHTML = "";
      mom.style.backgroundColor = "green";
      mom.style.color = "black";
      mom.innerHTML = "Success!"
  
      let tempyTimy = window.setTimeout(function(){
        sendAStrangersHail();
        window.clearTimeout(tempyTimy);
      },690);
    }else{
     let ans = mom.querySelectorAll("textarea")[0];
     ans.value = "X!";
     fetcher({},"first",firstDisp);
    }
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
    async function getCaptchaObj(action,data){ 
      var myRequest = new Request(lelink+"?paraOne="+action);
  
      data = JSON.stringify(data);
       
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
    body:data// body data type must match "Content-Type" header
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
  
          document.querySelectorAll(".simplecaptchamom")[0].innerHTML = p.innerHTML;
         
        });
        return returnVal; 
  };
  /* Captcha Functions*/





function  fillAddress(myObj){

  let addressItems = document.querySelectorAll(".addresslistitem");
  let mySocials = document.querySelectorAll(".mysocials")[0];
  mySocials = mySocials.querySelectorAll(".socialitem");

  let address = addressItems[0].querySelectorAll("p")[0];
  address.innerHTML = myObj.settingsObj.address;

  let email = addressItems[1].querySelectorAll("p")[0];
  email.innerHTML = myObj.settingsObj.buzEmail;

  let num = addressItems[2].querySelectorAll("p")[0];
  num.innerHTML = myObj.settingsObj.num;

  let fb = mySocials[0].querySelectorAll("a")[0];
  fb.href = myObj.settingsObj.fb;

  let twt = mySocials[1].querySelectorAll("a")[0];
  twt.href = myObj.settingsObj.twt;

  let inst = mySocials[2].querySelectorAll("a")[0];
  inst.href = myObj.settingsObj.instg;

  let lnkd = mySocials[3].querySelectorAll("a")[0];
  lnkd.href = myObj.settingsObj.linkd;

let hailTheCapt = document.querySelectorAll(".contactformdiv")[0];
hailTheCapt = hailTheCapt.querySelectorAll(".simplecaptchamom")[0];

//hailTheCapt.addEventListener("click",sendAStrangersHail)


};

function fillTravelGuides() {
  let leftEle = document.querySelectorAll(".left")[0];
  leftEle.innerHTML = "";
  fillUpStories(counters.localVar.cloudObj,"travelGuides");
}



function  fillStoriesFront(){
  let leftEle = document.querySelectorAll(".left")[0];
  leftEle.innerHTML = "";
  fillUpStories(counters.localVar.cloudObj,"travelStories");

};


function fillDestinationsFront(){
  let leftEle = document.querySelectorAll(".left")[0];
  leftEle.innerHTML = "";
  fillUpStories(counters.localVar.cloudObj,"destinationStories");
};

function fillImagesFront(){
  let myImages = [];
  myImages.push(counters.localVar.cloudObj.settingsObj.featureOne);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureTwo);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureThree);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureFour);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureFive);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureSix);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureSeven);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureEight);
  myImages.push(counters.localVar.cloudObj.settingsObj.featureNine);

  let myBoxes = document.querySelectorAll(".frontphotobox")[0].querySelectorAll("img");
  myBoxes = Array.prototype.slice.call(myBoxes);
  myBoxes.push(document.createElement("img"));
  myBoxes.push(document.createElement("img"));
  myBoxes.push(document.createElement("img"));
  myBoxes.push(document.createElement("img"));
  myBoxes.push(document.createElement("img"));
  myBoxes.push(document.createElement("img"));
  myBoxes.push(document.createElement("img"));
  
  let counter = 0;

  myBoxes.forEach(element=>{
    element.id = myImages[counter];
    fetchDisImage2(element);
    counter++;

  })
};


function sendAStrangersHail(){


  let deId = {};
  deId["message"] = document.getElementById("contactmessage").value;
  deId["email"] = document.getElementById("contactemail").value;
  deId["name"] = document.getElementById("contactname").value;

  let [myDate]    = new Date().toLocaleDateString("en-US").split("-");
  let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);

  deId["timeid"] = myDate+"-"+hour+"-"+minute+"-"+second;

  let contextObject = JSON.parse(JSON.stringify(counters.paraTemplate));

  contextObject.params[0]["action"] = "later...";
  contextObject.params[0]["token"] = "wHaT tOkEn!";
  contextObject.params[0]["dataObj"] = deId;

  customPopUpFunc(counters.elements.popUp,"Sending to TALISS","fullsteamahead");
 startHailing(contextObject,"hollacomoestas",custFunkyTempySempaiUwu);
  
}

function custFunkyTempySempaiUwu(){
  customPopUpFunc(counters.elements.popUp,"phrase","stop");
  reloadHomePage();
}


function addMobMenu(width){

  if(width<=1024){
    document.querySelectorAll(".bigcontainer")[0].appendChild(mobNav);
    mobNav.addEventListener("click",function(){

      let compStyles = window.getComputedStyle(mobNav);
      let ryt = compStyles.getPropertyValue("right");

      if(ryt==="-224px"){
        mobNav.style.right = "0px";
      }else{
        mobNav.style.right = "-224px";
      }
     
    })
  
  }
  
};


function shuffleImages(){
  let imageBoxes = document.querySelectorAll(".frontphotobox")[0].querySelectorAll("img");
  let counter = 0;
  let disRand = 0;
 


  window.setInterval(()=>{
    
    console.log(disRand);
    console.log(counters.frontendimages[disRand].image)
    if(counter>0){
      counter--;
      imageBoxes[counter].style.backgroundImage =`url(data:${counters.frontendimages[disRand].image.myMeme};base64,${counters.frontendimages[disRand].image.myBlob})`;
    }else{
      counter++
      imageBoxes[counter].style.backgroundImage =`url(data:${counters.frontendimages[disRand].image.myMeme};base64,${counters.frontendimages[disRand].image.myBlob})`;
    }

    if(disRand>=7){
      disRand=0;
    }else{
      disRand++;
    }

  }, 2969);
}