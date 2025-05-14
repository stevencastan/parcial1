const boleta=document.getElementById("boletas");

var x = document.getElementById("oculto");
x.style.display = "none";


boleta.addEventListener("input", () => { 
    if (boleta.value < 1 || boleta.value > 10 ) {
      alert('Solo puede comprar entre 1 y 10 boletas');
      boleta.value = "";
    }
});

function mostrar() {
    if (boleta.value !="" ) { 
        x.style.display = "block";
    }else{      
        x.style.display = "none";
    }
}

function calcular(){
   alert();
    const vip=document.getElementById("vip");
    const general=document.getElementById("general");
    const valorT=0;

    if (vip.checked) {
        valorT=500000;
         if(vip.checked && general.checked){
            const valor=850000*0.20;
            valorT=850000-valor;
            alert(valorT);
         }
    }else if(general.checked){
        valorT=350000;
        if(vip.checked && general.checked){
            const valor=850000*0.20;
            valorT=850000-valor;
            alert(valorT);
         }
    }

}

/*
function cargar(){
    if(boleta.value== ""){
        alert('esta vacio');
    }
  const localidad = document.createElement("div");
  localidad.className = "mt-5";
  localidad.innerHTML = `
        
  `;


  document.getElementById("localidadd").appendChild(localidad);

  
  //document.getElementById("formulario").reset();
}
*/

 /* function cargar(){
     const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const edad = document.getElementById("edad").value;
     // Crear tarjeta en HTML usando Bootstrap
  const tarjeta = document.createElement("div");
  tarjeta.className = "card mb-3";
  tarjeta.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${nombre} ${apellido}</h5>
      <p class="card-text">Correo: ${correo}</p>
      <p class="card-text">Edad: ${edad}</p>
    </div>
  `;

  // Agregar la tarjeta al contenedor
  document.getElementById("contenedor-tarjetas").appendChild(tarjeta);

  // Limpiar el formulario
  document.getElementById("formulario").reset();
  }*/