import './style2.css'
const InputTitle = document.querySelector('#title'),
inputTasks = document.querySelector('#text'),
addButton = document.querySelector('button'),
container = document.querySelector('.tasks__container')

addButton.addEventListener('click',addContentToContainer)
function addContentToContainer(){
   let textTitle = InputTitle.value
   let textBody = inputTasks.value
   if(!textBody  || !textTitle){
       return new Error(alert('Заполните поля !'))
       
   }else{
       func(textTitle,textBody)
       InputTitle.value = ''
       inputTasks.value = ''
   }
}
function func(title,text){

let fragment = document.createDocumentFragment()
let div = document.createElement('div')
div.innerHTML = `
<div class="card__output">

<div class="out__title ">${title}</div>
<div class="text__out">${text}</div>
<button class="remove__btn">delete</button>
</div>
`;
div.addEventListener('click',({target})=>{
if(target.classList.contains('remove__btn')){
   deleteBlock(div)
}
})

fragment.appendChild(div)
container.appendChild(fragment)
}
function deleteBlock(div){
div.remove()
}
