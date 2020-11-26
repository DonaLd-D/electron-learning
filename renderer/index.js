var fs = require('fs'); 
window.onload = function(){
    var btn = this.document.querySelector('#btn')
    var myayi = this.document.querySelector('#myayi')
    btn.onclick = function(){
        fs.readFile('laoayi.txt',(err,data)=>{
            myayi.innerHTML = data
        })
    }
} 
