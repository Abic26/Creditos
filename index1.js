let arrayElemt = JSON.parse(localStorage.getItem('arrayElemt')) || [];
function calcular(){
let nombre = document.getElementById("nombre").value;
let cuota = parseInt(document.getElementById("cuota").value);
let valCre = parseInt(document.getElementById("valCre").value);
let selectCredito = document.getElementById("credito");
if(selectCredito.value == 1){
    alert(`Señor ${nombre} adquieres un credito libre inversion`)

     if(cuota<6){
        alert(`si paga en menos de 6 meses tiene descuento en el interes del 0.2, su total a pagar es ${valCre*(2.3)/100+(valCre)} su total de cuota unitaria es ${(((valCre*2.3)/100)+valCre)/cuota}`)
}
    if(cuota>=12 && cuota<=24){
        alert(`si paga dentro de un periodo de 12 a 24 meses tiene descuento en el interes del 0.4, su total a pagar es ${valCre*(2.1)/100+(valCre)} su total de cuota unitaria es ${(((valCre*2.1)/100)+valCre)/cuota}`)
}
    if(cuota>24){
        alert(`si paga a 24 o mas meses tiene descuento en el interes del 0.7, su total a pagar es ${valCre*(1.8)/100+(valCre)} su total de cuota unitaria es ${(((valCre*1.8)/100)+valCre)/cuota}`)
} 
}
else if(selectCredito.value == 2 ){
    alert(`Señor ${nombre} adquieres un credito libraza`)

    if(cuota<6){
        alert(`si paga en menos de 6 meses tiene descuento en el interes del 0.2, su total a pagar es ${valCre*(2.7)/100+(valCre)}su total de cuota unitaria es ${(((valCre*2.7)/100)+valCre)/cuota}`)
}
    if(cuota>=12 && cuota<=24){
        alert(`si paga dentro de un periodo de 12 a 24 meses tiene descuento en el interes del 0.4, su total a pagar es ${valCre*(2.5)/100+(valCre)} su total de cuota unitaria es ${(((valCre*2.5)/100)+valCre)/cuota}`)
}
    if(cuota>24){
        alert(`si paga a 24 o mas meses tiene descuento en el interes del 0.7, su total a pagar es ${valCre*(2.2)/100+(valCre)} su total de cuota unitaria es ${(((valCre*2.2)/100)+valCre)/cuota}`)
} 
}

setLocalStorage(nombre,valCre,cuota)
}

function setLocalStorage(nombre,valCre,cuota){
    const mensaje = alert("Se ingresaron a la base de datos nuevos elementos")
    arrayElemt.push({arrayNombre: nombre, arrayValc: valCre, arrayCuo: cuota})
    localStorage.setItem("arrayElemt",JSON.stringify(arrayElemt))
    document.getElementById("mensaje")
}



