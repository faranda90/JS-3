const botonEnviar = document.getElementById("newsletter");









botonEnviar.onclick=()=>{
    Swal.fire({
        title: "Bienvenido!",
        text: "Proximamente recibiras nuestras ofertas",
        icon: "success"
      });
}