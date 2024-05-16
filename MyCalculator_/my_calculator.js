

// guardamos la pantalla
let screen = document.querySelector(".screen");
// guardamos los botones
let button = document.querySelectorAll(".btn");

// para cada boton creamos eventos
button.forEach(btn => { 

    btn.addEventListener("click",()=>{
        
        if(btn.id==="clean"){
            screen.textContent = "0";
            return;
        }

        else if(btn.id==="borrow"){
            screen.textContent = screen.textContent.slice(0,-1);
            if(screen.textContent === ""){
                screen.textContent = "0";
            }

            return;
        }

        if(btn.id==="equal"){
            try{
                screen.textContent = eval(screen.textContent);
            } 
            catch{
                screen.textContent = "Error!";
            }
            return
        }

        const value = btn.textContent
        if(screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = value
        }else{
            screen.textContent += value
        }

    });
});
