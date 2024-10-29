// Abrir e fechar o modal
function modalMenu() {
  const modal = document.getElementById("menu-modal")

  // Alterna entre abrir e fechar o modal
  if (modal.style.display === "flex") {
    modal.style.display = "none"
  } else {
    modal.style.display = "flex"
  }
}

// Fechar o modal quando clicar fora
window.onclick = function(event) {
  const modal = document.getElementById("menu-modal")
  if (event.target === modal) {
    modal.style.display = "none"
  }
}