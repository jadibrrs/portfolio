document.addEventListener("DOMContentLoaded", () => {
  const botaoFiltro = document.getElementById("botaoFiltro")
  const modalFiltro = document.getElementById("modalFiltro")
  const opcoes = document.querySelectorAll(".opcao")
  const botaoAplicarFiltro = document.getElementById("botaoAplicarFiltro")
  const formacoes = document.querySelectorAll(".formacao") // Seleciona todos as formações

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

  // Filtra as formações ao clicar em "Aplicar Filtro"
  botaoAplicarFiltro.addEventListener("click", () => {
    // Pega as categorias selecionadas
    const categoriasSelecionadas = Array.from(opcoes)
      .filter((opcao) => opcao.classList.contains("selecionado"))
      .map((opcao) => opcao.getAttribute("data-valor"))

    // Mostra ou esconde as formações com base nas categorias selecionadas
    formacoes.forEach((formacao) => {
      const tags = Array.from(formacao.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.trim()
      )

      // Verifica se a formação possui alguma das categorias selecionadas
      const exibirFormacao = categoriasSelecionadas.some((categoria) =>
        tags.includes(categoria)
      )

      formacao.style.display =
        exibirFormacao || categoriasSelecionadas.length === 0 ? "block" : "none"
    })

    // Fecha o modal de filtro após aplicar
    modalFiltro.style.display = "none"
  })
})
