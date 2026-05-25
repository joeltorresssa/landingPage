let resol = document.getElementById("resol")



function atualizarResol() {
    const largura = innerWidth
    const altura = innerHeight
    resol.textContent = `${largura} x ${altura}`
}
atualizarResol()
window.addEventListener("resize", atualizarResol)