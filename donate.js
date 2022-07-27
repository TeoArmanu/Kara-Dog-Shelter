const select = document.querySelectorAll('.select');
const box = document.querySelectorAll('.amount-box');
     
box.forEach(function(e) {
        e.style.backgroundColor= "yellow";
    })



select.forEach(function(e) {
     e.onclick = () => {
        if(e.firstElementChild.style.backgroundColor === 'yellow'){
            e.firstElementChild.style.backgroundColor = "white";
        }else{
            e.firstElementChild.style.backgroundColor = "yellow";
        }
     };
});