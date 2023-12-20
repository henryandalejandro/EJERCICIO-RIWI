function temaOscuro() {
    document.body.classList.toggle('dark-mode'); 
}

var check = document.querySelector(".check")
chech.addEventlistener('click',Idioma);

function cambiarIdioma(){
   let Idioma = document.getElementById("Idioma").value ;
   if(Idioma == "es"){
        
       texto = [
        {
            titulo : "BBQ Crunch",
            parrafo : "1 sandwinch BBQ 1 Filete de pollo apanado 1"
        },
        {
            titulo : "Kentucky Sandwich",
            parrafo : "1 Kemtucky hambuerguesa / Sandwich (1 Filete de pechuga de pollo apanado,pepillos,...2"
        },
        {
            titulo :"Combo BBQ Crunch",
            parrafo : "1 Sandwich BBQ Crunch (1Fillete de pollo apanado) + 1 Papa pequeña + gaseosa PET...3"
        },
        {
            titulo : "BBQ Crunch",
            parrafo : "1 sandwinch BBQ 1 Filete de pollo apanado 4"
        },
        {
            titulo : "Combo Kentucky Sandwich",
            parrafo : "1 Kentuccky hambuerguesa /Sandwich(1 Filete de pechuga de pollo apando, pepinillos,...5"
        },
        {
            titulo : "Combo Kentucky Coronel Sandwich",
            parrafo : "1 Kentucky Coronel hambuerguesa /Sandwich(1 Filete de pechuga de pollo apanado, Ensalada...6"
        },
        {
            titulo : "sandwinch Crispy BBQ   ...",
            parrafo : "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...   7"
        },
        {
            titulo :"Combo Sandwich Crispy BBQ",
            parrafo : "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple emmpanizado, cebolla crisp...8"

        },
       ];

    
     }else{
        texto = [
            {
            titulo :"BBQ Crunch",
            parrafo :"1 BBQ sandwinch 1 breaded chicken fillet 1"
            },
            {
            titulo :"Kentucky Sandwich",
            parrafo :"1 Kemtucky burger / Sandwich (1 breaded chicken breast fillet, pickles,...2"
            },
            {
            titulo :"BBQ Crunch Combo",
            parrafo :"1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + PET Soda...3"
            },
            {
            titulo : "BBQ Crunch",
            parrafo :"1 BBQ sandwinch 1 breaded chicken fillet 4"
            },
            {
            titulo :"Kentucky Sandwich Combo",
            parrafo :"1 Kentuccky hamburger/Sandwich (1 Chicken breast fillet apando, pickles,...5"
            },
            {
            titulo :"Kentucky Colonel Sandwich Combo",
            parrafo :"1 Kentucky Colonel burger/Sandwich (1 breaded chicken breast fillet, salad...6"
            },
            {
            titulo :"sandwinch Crispy BBQ...",
            parrafo :"1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...   7"
            },
            {
            titulo :"Crispy BBQ Sandwich Combo",
            parrafo :"1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...8"
            },
         ];
        }
        contador = 1;
        texto.forEach(function(vuelta){
            document.getElementById('titulo-'+contador).innerText = vuelta.titulo
            document.getElementById('parrafo-'+contador).innerText = vuelta.parrafo
            contador++;
        });
}