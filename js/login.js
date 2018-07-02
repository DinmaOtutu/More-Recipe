const getDomElem = () => {
    const emailDom = document.querySelector('#email');
    const passwdDom = document.querySelector('#pwd');
    const submitButton = document.querySelector('.login-submit') 

    submitButton.addEventListener('click', () => {
        const email = emailDom.value;
        const password = passwdDom.value;
        const user = { email, password }
        fetch('https://more-recipes.herokuapp.com/api/v1/users/login', {
            method: POST,
            body: JSON.stringify(user),
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(response => console.log(response))
    })

}

const initLogin = () => {
    await 
}



window.onload = function(){
    getDomElem();
    initLogin();
}

//post login details
// get dom elements
// create event listeners