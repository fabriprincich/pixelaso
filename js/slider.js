var imagenes = [
    "Imágenes/preview minimalista.png",
    "Imágenes/byw preview.jpg",
    "Imágenes/action preview.webp",
    "Imágenes/naturaleza preview.jpg"
];
document.imagen.src = imagenes[0];

var siguiente = document.querySelector(".siguiente");
var anterior = document.querySelector(".anterior");
var Contador = 0;

function moverproximo()
{
    Contador++;
    if (Contador > imagenes.length - 1) 
    {
        Contador = 0;
    }
    document.imagen.src = imagenes[Contador];
}
var intervalo = setInterval(moverproximo, 3000);
siguiente.addEventListener("click", function()
{
    clearInterval(intervalo);
    moverproximo();
    intervalo = setInterval(moverproximo, 3000);
})

function moverantes()
  {
     Contador--;
     if(Contador < 0)
       {
         Contador = imagenes.length - 1;
       }
     document.imagen.src = imagenes[Contador];
  }
anterior.addEventListener("click", function()
{
    clearInterval(intervalo);
    moverantes();
    intervalo = setInterval(moverantes, 3000);
});
