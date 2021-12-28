let squares = document.querySelectorAll('.square')

function alterSquare(){
    let rnadomSelector = Math.floor(Math.random() * 25)+ 1;

    for (let i = 0; i<rnadomSelector; i++){
        let selectednumber = Math.floor(Math.random() * 30);
        squares[selectednumber].classList.toggle("alter");
    }
    
}


window.setInterval(alterSquare, 3000)