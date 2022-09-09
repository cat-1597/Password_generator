const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let stageEl = document.getElementById("stage")
let stageEl2 = document.getElementById("stage2")

let pwbutton = document.getElementById("pw-button")

function randomPassword() {
    let password = Math.floor(Math.random() * characters.length) 
    let password1 = Math.floor(Math.random() * characters.length) 
    let password2 = Math.floor(Math.random() * characters.length) 
    let password3 = Math.floor(Math.random() * characters.length) 
    let password4 = Math.floor(Math.random() * characters.length) 
    let password5 = Math.floor(Math.random() * characters.length) 
    let password6 = Math.floor(Math.random() * characters.length) 
    let password7 = Math.floor(Math.random() * characters.length) 
    let password8 = Math.floor(Math.random() * characters.length) 
    let password9 = Math.floor(Math.random() * characters.length) 
    let password10 = Math.floor(Math.random() * characters.length) 
    let password11 = Math.floor(Math.random() * characters.length) 
    let password12 = Math.floor(Math.random() * characters.length) 

    stageEl.textContent = characters[password] + characters[password1] + characters[password2]
    + characters[password3] + characters[password4] + characters[password5] + characters[password6]
    + characters[password7] + characters[password8] + characters[password9] + characters[password10]
    + characters[password11] + characters[password12]
}

function randomPassword1() {
    let password = Math.floor(Math.random() * characters.length) 
    let password1 = Math.floor(Math.random() * characters.length) 
    let password2 = Math.floor(Math.random() * characters.length) 
    let password3 = Math.floor(Math.random() * characters.length) 
    let password4 = Math.floor(Math.random() * characters.length) 
    let password5 = Math.floor(Math.random() * characters.length) 
    let password6 = Math.floor(Math.random() * characters.length) 
    let password7 = Math.floor(Math.random() * characters.length) 
    let password8 = Math.floor(Math.random() * characters.length) 
    let password9 = Math.floor(Math.random() * characters.length) 
    let password10 = Math.floor(Math.random() * characters.length) 
    let password11 = Math.floor(Math.random() * characters.length) 
    let password12 = Math.floor(Math.random() * characters.length) 

    stageEl2.textContent = characters[password] + characters[password1] + characters[password2]
    + characters[password3] + characters[password4] + characters[password5] + characters[password6]
    + characters[password7] + characters[password8] + characters[password9] + characters[password10]
    + characters[password11] + characters[password12]
}

