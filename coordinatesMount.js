// Question 2

const squareShowMouse = document.createElement('div');


squareShowMouse.style.width = '800px';
squareShowMouse.style.height = '800px';
squareShowMouse.style.backgroundColor = "gray";

squareShowMouse.addEventListener('mousemove', function(event){
    console.log('event', event);
    squareShowMouse.innerHTML = `screenX = ${event.screenX} ~ screenY ${event.screenY}`
})

document.body.append(squareShowMouse);
