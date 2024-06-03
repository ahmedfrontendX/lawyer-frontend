let freec=document.getElementById("freeConsultation")

let firstName=document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let healthLaw=document.getElementById("healthLaw")
let Email=document.getElementById("Email")
let massege=document.getElementById("massege")
let saveBtn=document.getElementById("save")




let Numberofdatacons=[]

if (localStorage.dataCons != null) {
    Numberofdatacons = JSON.parse(localStorage.dataCons)
}
else {
    Numberofdatacons = []

}



function savedATA(){
    let dataCons={
        name:firstName.value+lastName.value,
        health:healthLaw.value,
        email:Email.value,
        maseg:massege.value
    }
    Numberofdatacons.push(dataCons)
    localStorage.setItem("dataCons",JSON.stringify(Numberofdatacons))
    console.log(Numberofdatacons)
    // Numberofdatacons=localStorage.getItem("form",JSON.parse(Numberofdatacons))
}   



// let value=scrollY


function freeCon(){
    scroll({top:1694,behavior:"smooth"})
}
