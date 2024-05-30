function handleFormSubmit(event){
event.preventDefault();

    let appointments={

        name:event.target.name.value,
        phone:event.target.phone.value,
        email:event.target.email.value

    }
   
    console.log(appointments);
    axios.post("http://localhost:3000/appointment",appointments).then((res)=>{
        console.log(res);
        getAppointments();
        if(res.status==201)
            {
                alert(res.data.message);
            }
})
}
window.addEventListener("DOMContentLoaded",getAppointments);

async function getAppointments(){
    await axios.get("http://localhost:3000/appointment").then((res)=>{
        const ul=document.querySelector("ul");
        ul.innerHTML="";
     res.data.forEach((element) => {
        console.log(element)
       

        showAppointments(element)
        
     });
    })

}

function showAppointments(appointments){
    const ul=document.getElementById("uo-list");
   const li=`<li id=app${appointments.id}>${appointments.name}-${appointments.phone}-${appointments.email} --<button  onclick="editAppointment('${appointments.id}','${appointments.name}','${appointments.email}','${appointments.phone}')" type="button">EDIT</button>--<button  onclick="delAppointment('${appointments.id}')" type="button">DELETE</button></li>`
   ul.innerHTML+=li;
}

// function delAppointment(id){
//     if (confirm("Are you sure you want to delete this appointment?")) {
//         axios.delete(`http://localhost:3000/appointment/${id}`)
//         const ul=document.getElementById("uo-list");
//         const li_to_del=event.target.parentElement;
//         console.log(li_to_del);
//         ul.removeChild(li_to_del); 
// }
// }

function delAppointment(id){
    if (confirm("Are you sure you want to delete this appointment?")) {
        axios.delete(`http://localhost:3000/appointment/${id}`)
        const ul=document.getElementById("uo-list");
        const li_to_del=document.getElementById(`app${id}`);
        console.log(li_to_del);
        ul.removeChild(li_to_del); 
}
}

async function editAppointment(id,name,email,phone){
    console.log("hello",id,name,email,phone);
    if (confirm("Are you sure you want to Edit this appointment?")){
        // const appointments= await axios.get(`http://localhost:3000/appointment`)
        
        // const appointData=appointments.data
        //   Populate input fields with existing blog data
          const inputName=document.querySelector("#user-name");
          const inputEmail=document.querySelector("#user-email");
          const inputPhone=document.querySelector("#user-phone");
        //   console.log(appointData);
        // appointData.forEach(obj=>{
        //     if(id==obj.id){
            inputName.value = name;
            inputEmail.value = email;
            inputPhone.value = phone;
            }
        // })

          delAppointment(id);
        //   Now you can edit the data and submit the changes
    

    //   const ul=document.getElementById("uo-list");;
    //   const li_to_del=event.target.parentElement;
    //   ul.removeChild(li_to_del); 
    //   axios.delete(`http://localhost:3000/appointment/${id}`)
       
    //   .catch(error => {
    //       console.error(error);
    //   });
    }
