const contenedor = document.getElementById('principal');
const boton = document.getElementById('mode');


boton.onclick = () => {
    if(localStorage.getItem('mode') == 'dark'){
        pasarALight();
    }else{
        pasarADark();
    }
}

function pasarADark(){
    localStorage.setItem('mode','dark');
    boton.innerText = 'Light Mode';
    contenedor.classList.replace('light','dark');
    document.body.className = 'dark';
}

function pasarALight(){
    localStorage.setItem('mode','light');
    boton.innerText = 'Dark Mode';
    contenedor.classList.replace('dark','light');
    document.body.className = 'light';
}
if (localStorage.getItem('mode') == 'dark') {

  pasarADark();

} else {

  pasarALight();

}