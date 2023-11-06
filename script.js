

function clicar() {
    const min = Math.ceil(document.querySelector('.input1').value)
    const max = Math.floor(document.querySelector('.input2').value)



    if (min >= max) {
        alert("o Valor Minimo tem que ser Menor que o Maximo!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    }


}