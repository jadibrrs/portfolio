document.addEventListener("DOMContentLoaded", () => {
  const botaoFiltro = document.getElementById("botaoFiltro")
  const modalFiltro = document.getElementById("modalFiltro")
  const opcoes = document.querySelectorAll(".opcao")
  const botaoAplicarFiltro = document.getElementById("botaoAplicarFiltro")
  const projetos = document.querySelectorAll(".projeto") // Seleciona todos os projetos

  // Alterna o modal ao clicar no botão
  botaoFiltro.addEventListener("click", () => {
    modalFiltro.style.display =
      modalFiltro.style.display === "block" ? "none" : "block"
  })

  // Alterna a seleção das opções ao clicar
  opcoes.forEach((opcao) => {
    opcao.addEventListener("click", () => {
      opcao.classList.toggle("selecionado")
    })
  })

  // Fecha o modal ao clicar fora dele
  window.addEventListener("click", (event) => {
    if (
      !modalFiltro.contains(event.target) &&
      !botaoFiltro.contains(event.target)
    ) {
      modalFiltro.style.display = "none"
    }
  })

  // Filtra os projetos ao clicar em "Aplicar Filtro"
  botaoAplicarFiltro.addEventListener("click", () => {
    // Pega as categorias selecionadas
    const categoriasSelecionadas = Array.from(opcoes)
      .filter((opcao) => opcao.classList.contains("selecionado"))
      .map((opcao) => opcao.getAttribute("data-valor"))

    // Mostra ou esconde projetos com base nas categorias selecionadas
    projetos.forEach((projeto) => {
      const tags = Array.from(projeto.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.trim()
      )

      // Verifica se o projeto possui alguma das categorias selecionadas
      const exibirProjeto = categoriasSelecionadas.some((categoria) =>
        tags.includes(categoria)
      )

      projeto.style.display =
        exibirProjeto || categoriasSelecionadas.length === 0 ? "flex" : "none"
    })

    // Fecha o modal de filtro após aplicar
    modalFiltro.style.display = "none"
  })
})
