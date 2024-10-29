// Clicar no botão -> página rola para o topo
document.getElementById("btnTopo").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" })
}