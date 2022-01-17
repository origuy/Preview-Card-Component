const overlayTapDisplay = document.getElementById('overlayHover');

overlayTapDisplay.addEventListener('touchstart', showOverlay)

function showOverlay(){
    overlayTapDisplay.style.opacity = '1';
}