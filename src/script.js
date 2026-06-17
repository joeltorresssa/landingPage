let resol = document.getElementById("resol")



function atualizarResol() {
    const largura = innerWidth
    const altura = innerHeight
    resol.textContent = `${largura} x ${altura}`
}
atualizarResol()
window.addEventListener("resize", atualizarResol)

// let container = document.getElementsByClassName("container")
// let caixas = document.getElementsByClassName("cont")
// let seta_esq = document.querySelector(".seta1")
// let seta_dir = document.querySelector(".seta2")

// seta_esq.onclick = ()=>{
//     caixas[].style.transform = "translateX(50px)"
//     console.log("clicado")
// }

// seta_dir.onclick = ()=>{
//     console.log("clicado")
// }