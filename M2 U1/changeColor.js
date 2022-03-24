let botonR=document.getElementById('btnrojo');
        let botonA=document.getElementById('btnyellow');
        let botonV=document.getElementById('btnverde');
       
        function changeColorR(){
            if(botonR.value == "red"){
                fondo.style.backgroundColor = botonR.value;
                console.log(botonR);
            }
        }
            function changeColorA(){
            if(botonA.value == "yellow"){
                fondo.style.backgroundColor = botonA.value;
                console.log(botonA);
            }
            }
            function changeColorV(){
            if(botonV.value == "green"){
                fondo.style.backgroundColor = botonV.value;
                console.log(botonV);
            }
            }