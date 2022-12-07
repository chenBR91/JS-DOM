// Question 3


const inputImage = document.createElement('input');
const showImage = document.createElement('button');
const boxShowImage = document.createElement('div');
let urlImage = '';
//const imgAircaft = 'https://images.theconversation.com/files/480345/original/file-20220822-70835-8lcycw.jpg?ixlib=rb-1.1.0&rect=0%2C540%2C5065%2C2532&q=45&auto=format&w=668&h=324&fit=crop'

boxShowImage.classList.add("img");

showImage.addEventListener('click', (event)=>{
    console.log('image url', urlImage);
    boxShowImage.innerHTML = `<img src="${urlImage}">`
})

inputImage.addEventListener('input', (event)=>{
    console.log(event.target.value);
    urlImage = event.target.value;
})

showImage.innerHTML = "Get image"
document.body.append(inputImage, showImage, boxShowImage)