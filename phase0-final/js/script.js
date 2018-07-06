var fullName = document.getElementById('name')
var country = document.getElementById('country')
var email = document.getElementById('email')
var comEmail = document.getElementById('comemail')

var signup = document.getElementById('signup')
var regisuccess= document.getElementById('regisSuccess')

// variabel untuk transfer value dari signup ke regisuccess
var showData = document.getElementsByClassName('showData')
var centerH2 = document.getElementById('judul').children

var load = document.getElementById("load")

function validasi(){
    if(fullName.value.length === 0){
        alert('Please insert your name')
    } else if(country.value.length === 0){
        alert('Please insert your country')
    } else if(email.value.length === 0 || comEmail.value.length === 0){
        alert('Please insert your email and comfirmasi email')
    } else if(email.value !== comEmail.value) {
        alert('Email and comfir email didt match')
    } else {
        if(signup.style.display !== "block" || signup.style.display !== "none") {
            
            centerH2[0].innerHTML = 'WELCOME TO MEMORY GAME'
            showData[0].innerHTML = fullName.value
            showData[1].innerHTML = email.value

            signup.style.display = "none";    
            regisSuccess.style.display = "block";  

            var clear = document.getElementsByClassName('handle')
            for(var i = 0; i < clear.length; i++){
                clear[i].value = ''
            }
                   
        }
    }
}

function successRegis(){
    lodaingBar() 
    var H3 = document.getElementsByTagName("h3")
    H3[0].style.display = "block"

    if(regisuccess.style.display !== "none" || regisuccess.style.display !== "block") {
        regisSuccess.style.display = "none"; 
        centerH2[0].style.display = "none";
           
        var lodaing = document.getElementById("myProgress")
        lodaing.style.display = "block"

    }

}

function lodaingBar() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        window.location.href = "memory_game.html"
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
