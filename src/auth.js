
export function authWithEmailAndPassword(email,password){
   const apiKey = "AIzaSyC31ESZDAX2fqbg9IwEQoNNVikWdz1F414"
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
        method:"POST",
        body:JSON.stringify({
            email,
            password,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type': 'application/json'
        }

    })
    .then(response=>response.json())
    .then(data=>data.idToken)
    
}
