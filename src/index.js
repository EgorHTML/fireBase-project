import { authWithEmailAndPassword } from './auth'
import './style.css'


const inputTypeEmail = document.getElementById('exampleInputEmail1')
const inputTypePassword = document.getElementById('exampleInputPassword1')
const btnSubmit =document.getElementById('submit')
const form = document.getElementById('form')
form.addEventListener('submit',authForm)
 function authForm(e){
    e.preventDefault()
    let email = e.target.querySelector('#exampleInputEmail1').value
    let password = e.target.querySelector('#exampleInputPassword1').value
    authWithEmailAndPassword(email,password)
   .then(token=>{
      // if(token) window.location.href='./index2.html'
      
   })
    
 }
