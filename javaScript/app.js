const overlayTapDisplay = document.getElementById('overlayHoverContainer');
const mainHeader = document.getElementById('mainHeader');
const developerName = document.getElementById('developerName');
let showOverlayFlag = false;
let changeColorHeaderFlag = false;
let changeColorDeveloperNameFlag = false;


overlayTapDisplay.addEventListener('touchstart', showOverlay);
mainHeader.addEventListener('touchstart', changeColorHeader);
developerName.addEventListener('touchstart', changeColorDeveloperName);

function showOverlay(){
    if(showOverlayFlag === false){
        overlayTapDisplay.style.opacity = '1';
        showOverlayFlag = true
    }else{
        overlayTapDisplay.style.opacity = '0';
    }
}
function changeColorHeader(){
    if(changeColorHeaderFlag === false){
        mainHeader.style.color = '#00fff7';
    }else{
        mainHeader.style.color = '#fff';
    }
}
function changeColorDeveloperName(){
    if(changeColorDeveloperNameFlag === false){
        developerName.style.color = '#00fff7';
    }else{
        developerName.style.color = '#fff';
    }
}
