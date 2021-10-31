
function diferencia(){
    let orden = Number(document.getElementById("orden").innerText);
    let pagado = Number(document.getElementById("pagado").innerText);
    let diferencia = pagado - orden;
    document.getElementById("diferencia").innerText = diferencia;
};

let btnM50 = document.getElementById("btnM50").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 50;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btnM100 = document.getElementById("btnM100").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 100;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btnM200 = document.getElementById("btnM200").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 200;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btnM500 = document.getElementById("btnM500").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 500;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btnM1k = document.getElementById("btnM1k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 1000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});


let btn1k = document.getElementById("btn1k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 1000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btn2k = document.getElementById("btn2k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 2000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btn5k = document.getElementById("btn5k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 5000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btn10k = document.getElementById("btn10k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 10000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btn20k = document.getElementById("btn20k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 20000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btn50k = document.getElementById("btn50k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 50000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});

let btn100k = document.getElementById("btn100k").addEventListener('click', ()=>{
    let pagado = Number(document.getElementById('pagado').innerText);
    console.log(pagado);
    pagado = pagado + 100000;
    document.getElementById('pagado').innerText = pagado;
    diferencia();
});





