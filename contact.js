const form = document.querySelector ("form");
form.addEventListener("submit", validate);

const name = document.querySelector("input#name");
const subject = document.querySelector("input#subject");
const email = document.querySelector("input#email");
const message = document.querySelector("textarea#message");

const nameMsg = document.querySelector(".namesTxt");
const subjectMsg = document.querySelector(".subjectTxt");
const emailMsg = document.querySelector(".emailTxt");
const messageMsg = document.querySelector(".messageTxt");

function validate(r){

    r.preventDefault();
    
    // Validate name
    let nameSub = name.value.trim();
    console.log("Subject: " + nameSub);
    nameMsg.innerHTML = "";
    if (nameSub.length < 5) {
        nameMsg.innerHTML += "Must be at least 5 characters!"
    }
    
    // Validate email
    let emailSub = email.value.trim();
      console.log("Email: " + emailSub); 
      emailMsg.innerHTML = ""; 
      let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailTest.test(emailSub)) {
        emailMsg.innerHTML += "This is not a valid E-mail address";
      }
    //validate Subject
    let subjectSub = subject.value.trim();
    console.log("Subject: " + subjectSub);
    subjectMsg.innerHTML = "";
        if (subjectSub.length < 15) {
        subjectMsg.innerHTML += "Must be at least 15 characters!"
}
    // validate message
      let messageSub = message.value.trim();
    console.log("Message: " + messageSub);
    messageMsg.innerHTML = "";
    if (messageSub.length < 25) {
        messageMsg.innerHTML += "Must be at least 25 characters!"
    }
    }


