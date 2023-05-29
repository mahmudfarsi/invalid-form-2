const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");


form.addEventListener("submit",e =>{
  e.preventDefault();


  checkinput();
});


function checkinput(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();


  if(usernameValue === ""){
    setErorrFor(username , "username cannot be blanck")
  }else{
    setSuccessFor(username)
  }

  if(emailValue === ""){
    setErorrFor(email , "email cannot be blanck")
  }else if(!isValidEmail(emailValue)){
    setErorrFor(email,"email is not valid")
  }else{
    setSuccessFor(email)
  }

  if(password1Value===""){
    setErorrFor(password1,"password cannot be blanck")
  }else{
    setSuccessFor(password1)
  }


  if(password2Value===""){
    setErorrFor(password2,"password cannot be blanck");
  }
  else if(password1Value!== password2Value){
    setErorrFor(password2,"password does not match")
  }
  else{
    setSuccessFor(password2)
  }


}






function setErorrFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = " form__control error"
}


function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}



const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}