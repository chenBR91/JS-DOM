// Question 4

const deleteBtn = document.createElement('button');
const arrNum = [3, 4, 5, 6, 7];

deleteBtn.addEventListener('click', (event)=>{
    arrNum.pop();
    console.log(arrNum);
})


deleteBtn.innerHTML = "Remove element"
document.body.append(deleteBtn);
