function handleFormSubmit(event){
event.preventDefault();

    let appointments={

        name:event.target.name.value,
        phone:event.target.phone.value,
        email:event.target.email.value

    }
    console.log(appointments);


    const nameValue=document.querySelector("#user-name").value;
    const phoneValue=document.querySelector("#user-phone").value;
    const emailValue=document.querySelector("#user-email").value;

    console.log(nameValue);
    console.log(phoneValue);
    console.log(emailValue);
}


