var linkCSS = document.getElementById('cssLink');
var botonCSS = document.getElementById("btnChangeCSS");
var diaNoche = 0;

function cambiarEstilos(){
    if(diaNoche==0){
        linkCSS.href="dark.css";
        console.log(botonCSS.textContent);
        botonCSS.textContent ="Change to day mode";
        diaNoche = 1;
    }
    else if(diaNoche==1){
        linkCSS.href= "light.css";
        console.log(botonCSS.textContent);
        botonCSS.textContent ="Change to night mode";
        diaNoche = 0;
    }
}

botonCSS.addEventListener("click", cambiarEstilos);