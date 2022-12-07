// Question 1

let nameInput = '';
const divBlock = document.createElement('div');
const input = document.createElement('input');
const showBtn = document.createElement('button');

showBtn.innerText = "Show value";

showBtn.addEventListener('click', function(event){
    alert(nameInput)
})

input.addEventListener('input', function(event){
    console.log('input', event);
    nameInput += event.data;
})

divBlock.append(input, showBtn)
document.body.append(divBlock);




