console.log(document)

const $flexitems = document.getElementsByClassName("flex-items");
const $flexitems2 = document.querySelector("flex-items2")
console.log($flexitems);
const $a1 = document.querySelector("#a1");
const $body = document.querySelector("#cuerpo")
function Cambiarnombre() {
    let edad = 1;

    if (edad == 0) {
        $a1.textContent = "FACEBOOK"
    }else{
        $a1.textContent = "TIKTOK"
    }   
}

const $enviar = document.querySelector("#enviar")
function Cambiocolor() {
    $a1.style.backgroundColor = "red";
    $a1.classList.add("scale");
    $flexitems2.classList.toggle("rotate");
    $body.classList.toggle("body");
}


//$enviar.addEventListener("click", Cambiarnombre)
//console.log($enviar.style);
$enviar.addEventListener("click", Cambiocolor)