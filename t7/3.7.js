document.addEventListener('DOMContentLoaded', function () {
    const triggerElement = document.getElementById('trigger');
    const targetImage = document.getElementById('target');


    function handleMouseOver() {
        targetImage.src = 'img/picB.jpg';
    }


    function handleMouseOut() {
        targetImage.src = 'img/picA.jpg';
    }


    triggerElement.addEventListener('mouseover', handleMouseOver);
    triggerElement.addEventListener('mouseout', handleMouseOut);
});
