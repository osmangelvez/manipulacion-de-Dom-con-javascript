// Capturamos los elementos del html usando el DOM

const mensajeError = document.getElementById("mensajeError");
const btnAgregar = document.getElementById("btnAgregar"); 
const inputActividad = document.getElementById("actividadInput");
const listaActividades  = document.getElementById("listaActividades");
const mensajeVacio = document.getElementById("mensajeVacio");

const totalActividades = document.getElementById("totalActividades");
const actividadesRealizadas = document.getElementById("totalActividadesRealizadas"); 
const actividadesPendientes = document.getElementById("totalActividadesPendientes");

// Evento para agregar actividad al hacer clic en el boton
btnAgregar.addEventListener("click", agregarActividad);

inputActividad.addEventListener("keypress", function (evento){
   if(evento.key == "Enter"){
      agregarActividad();
   }
});

// Función principal para agregar una actividad
function agregarActividad(){
   const textoActividad = inputActividad.value.trim();

   //Validación de campo vacío
   if(textoActividad === ""){
    mensajeError.textContent  = "Por favor escribe una actividad antes de agregarla";
    return;
   }

   //Limpiamos el mensaje error
   mensajeError.textContent = "";

   //Creamos el elemento li
   const nuevaActividad = document.createElement("li");

   //Creamos un span para el texto de la actividad
   const texto = document.createElement("span");
   texto.textContent = textoActividad;

   //Creamos el contenedor de los botones
   const contenedorBotones = document.createElement("div");
   contenedorBotones.classList.add("botones");

   //Botón para marcar como realizada
   const btnRealizada = document.createElement("button");
   btnRealizada.textContent = "realizada";
   btnRealizada.classList.add("btnRealizada");

   //Botón para marcar como eliminada
   const btnEliminar = document.createElement("button");
   btnEliminar.textContent = "eliminada";
   btnEliminar.classList.add("btnEliminar");

   //Evento para marcar o desenmarcar como realizadat
   btnRealizada.addEventListener("click", function (){
      nuevaActividad.classList.toggle("realizada");

      if(nuevaActividad.classList.contains("realizada")){
         btnRealizada.textContent = "realizada";
      } else {
         btnRealizada.textContent = "pendiente";
      }

      actualizarContadores();

   });

   btnEliminar.addEventListener("click", function(){
      listaActividades.removeChild(nuevaActividad);
      actualizarContadores();
   })

   contenedorBotones.appendChild(btnRealizada);
   contenedorBotones.appendChild(btnEliminar);

   //Agregamos el texto a los botones al li
   nuevaActividad.appendChild(texto);
   nuevaActividad.appendChild(contenedorBotones);
   
   listaActividades.appendChild(nuevaActividad);
}


//Función para actualizar total, realizadas y pendientes
function actualizarContadores(){
   const actividades = listaActividades.querySelectorAll("li");
   const realizadas = listaActividades.querySelectorAll(".realizada");

   const total = actividades.length;
   const totalRealizadas = realizadas.length;
   const pendientes = total - totalRealizadas;

}

