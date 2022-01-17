const overlayTapDisplay = document.getElementById('overlayHover');
const mainHeader = document.getElementById('mainHeader');
const developerName = document.getElementById('developerName');

overlayTapDisplay.addEventListener('touchstart', showOverlay);
mainHeader.addEventListener('touchstart', changeColorHeader);
developerName.addEventListener('touchstart', changeColorDeveloperName);

function showOverlay(){
    overlayTapDisplay.style.opacity = '1';
}
function changeColorHeader(){
    mainHeader.style.color = '#00fff7';
}
function changeColorDeveloperName(){
    developerName.style.color = '#00fff7';
}
