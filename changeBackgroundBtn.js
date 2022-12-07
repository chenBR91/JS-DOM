// Question 5

const divAllScreen = document.createElement('div');
divAllScreen.classList.add("box-all-screen");


//const btnGroup = [btnBlack, btnGreen, btnBlue, btnRed]
const colorsBtn = ['black', 'green', 'blue', 'red'];
const size = 4;

colorsBtn.forEach((btnElem, index)=>{
    btnElem = document.createElement('button');
    btnElem.name = colorsBtn[index]
    btnElem.innerHTML = colorsBtn[index]
    divAllScreen.append(btnElem)

    btnElem.addEventListener('click', (event)=>{
        divAllScreen.style.backgroundColor = event.target.name
    })
})


document.body.append(divAllScreen)


