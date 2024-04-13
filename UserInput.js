function inputForm () {   
let fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value 
let zipCode = document.getElementById('zipCode').value

if (fullName.length >20) {
   alert('This name is invalid')
   return
} 
if (zipCode.length === 5) {
    window.open ('https://youtu.be/dQw4w9WgXcQ?si=Wdg5EmhfviLVPTSQ')
}
else {
    alert('Zip is invalid')

}
}



