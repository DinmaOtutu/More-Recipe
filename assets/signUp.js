function switchToLogin() {
   let  name = document.getElementById('inputName').value;
   let email = document.getElementById('inputEmail').value;
   let password = document.getElementById('inputPassword').value;
   let data  = { name,email, password};
   fetch('https://more-recipes.herokuapp.com/api/v1/users/signin', {
       method: 'post',
       body: JSON.stringify(data),
       headers: {'Content-Type': 'application/json'}
   }).then(res => res.status(201).json()).catch(err => console.log(err)).then(response => response.json());
   location.href = 'allrecipes.html';
}

let check = function(){
	if(document.getElementById("inputPassword").value == document.getElementById("rInputPassword").value){
		document.getElementById("rInputPassword").style.borderColor = "#2ecc71";
	}else{
		document.getElementById("rInputPassword").style.borderColor = "red";
	}
}