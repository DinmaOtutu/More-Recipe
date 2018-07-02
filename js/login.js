const getDomElem = () => {
    const emailDom = document.querySelector('#email');
    const passwdDom = document.querySelector('#pwd');
    const submitButton = document.querySelector('.login-submit') 

    submitButton.addEventListener('click', () => {
        const email = emailDom.value;
        const password = passwdDom.value;
    })

    fetch
}



window.onload = function(){
    getDomElem();
}

//post login details
// get dom elements
// create event listeners