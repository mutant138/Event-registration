const elements = {
    name: reg_form.querySelector("#full_name"),
    email: reg_form.querySelector("#email"),
    phone: reg_form.querySelector("#phone"),
    session: reg_form.querySelector("#event_sessions"),
    submit_button: document.querySelector('#btn')
}

// console.log(elements.name,elements.email,elements.session,elements.submit_button)

reg_form.addEventListener("submit", onSubmit)
//reg_form.addEventListener("submit", redirect)
 
async function onSubmit(e){
    try {
        if(reg_form.checkValidity()){
            e.preventDefault();
            const data = {
                name: elements.name.value,
                email: elements.email.value,
                phone: elements.phone.value,
                session: elements.session.value
            }
            const res =await axios.post("http://localhost:3000/submitData", data)
            //console.log(res)
            reg_form.querySelector("#full_name").value = "";
            reg_form.querySelector("#email").value = "";
            reg_form.querySelector("#phone").value = "";
           
            $("#successModal").modal("show");
            setTimeout(()=>{
                $("#successModal").modal("hide");
            },3000)
           
        }
    } catch (error) {
        console.log(error)
    } 
}





