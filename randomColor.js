// Question 6

const divAllScreen = document.createElement('div');
divAllScreen.classList.add("box-all-screen");

const colorsBtn = ['black', 'green', 'blue', 'red', 'yellow', 'pink'];

setInterval(()=>{
    const randomColor = Math.floor(Math.random() * colorsBtn.length);
    divAllScreen.style.backgroundColor = colorsBtn[randomColor]
    document.body.append(divAllScreen)
},2000)





