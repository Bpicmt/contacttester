//Contact Form in PHP
const form = document.querySelector("form");
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault(); // previnting form from submitting
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest(); // creating new xml object
  xhr.open("POST", "message.php", true); //sending post request to message.php file
  xhr.onload = ()=>{ // once ajax loaded
    if(xhr.readyState == 4 && xhr.status == 200){ // if ajax response status is 200 & ready status is 4 meand there is no any err
      let response = xhr.response; // storing ajax response in a response variable
      // if any err then colo red
      if(response.indexOf("Email field is requered!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed  to send your message!")){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=> {
          statusTxt.style.display = "#none";
        }, 3000);
      }
      statusTxt.innerText = response;
    }
  }
  let formData = new FormData(form); // creating new FromData obj. this obj is used to send form data
  xhr.send(formData); // sending form data
}