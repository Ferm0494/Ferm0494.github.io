if (screen.width <= 576){
   limitFunction()
}

window.addEventListener("resize", limitFunction);
window.addEventListener("onload", limitFunction);


function limitFunction (){
    if(screen.width <= 576){
        
        var metaDiv = document.getElementById("meta")
        var name = metaDiv.getElementsByTagName("h1")[0]
        var description = metaDiv.getElementsByTagName("h2")[0]

        metaDiv.removeChild(name)
        metaDiv.removeChild(description)
        name = document.createElement('h4')
        description = document.createElement('h5')

        description.innerHTML="Im a Full Stack Developer Engineer"
        name.innerHTML = "My name is Fernando Rivas"

        name.classList.add("text-white","text-center","animate__animated","animate__fadeIn")
        description.classList.add("text-white", "text-center", "animate__animated", "animate__fadeIn", "animate__delay-2s")
        metaDiv.prepend(description)
        metaDiv.prepend(name)
      
    }
}