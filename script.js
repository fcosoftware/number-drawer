function generateNumber() {
    const minimo = Math.ceil(document.querySelector(".input-min").value)
    const maximo = Math.floor(document.querySelector(".input-max").value)

    if(minimo >= maximo){
        alert("O primeiro numero tem que ser MENOR que o segundo!!")
    
    }else {
        const resultado = document.querySelector(".num-sorteado")

        resultado.innerHTML = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }
    //const numMin = document.querySelector(".input-min").value
    //const numMax = document.querySelector(".input-max").value
   
    //min = Math.ceil(numMin);
    //max = Math.floor(numMax);

   // return console.log( Math.floor(Math.random() * (max - min + 1)) + min);

   

  
}