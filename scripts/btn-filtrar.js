document.addEventListener("DOMContentLoaded", () => {
  const botaoFiltro = document.getElementById("botaoFiltro")
  const modalFiltro = document.getElementById("modalFiltro")
  const opcoes = document.querySelectorAll(".opcao")
  const botaoFiltrar = document.getElementById("botaoFiltrar")
  const categorias = document.querySelectorAll(".categoria-verificar") // Seleciona todos as categorias correspondentes

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

  // Filtra as formações ao clicar em "Filtrar"
  botaoFiltrar.addEventListener("click", () => {
    // Pega as categorias selecionadas
    const categoriasSelecionadas = Array.from(opcoes)
      .filter((opcao) => opcao.classList.contains("selecionado"))
      .map((opcao) => opcao.getAttribute("data-valor"))

    // Mostra ou esconde as formações com base nas categorias selecionadas
    categorias.forEach((filtros) => {
      const tags = Array.from(filtros.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.trim()
      )

      // Verifica se a formação possui alguma das categorias selecionadas
      const exibirfiltros = categoriasSelecionadas.some((categoria) =>
        tags.includes(categoria)
      )

      if (exibirfiltros || categoriasSelecionadas.length === 0) {
        filtros.style.removeProperty("display") // Usa o display definido no CSS
      } else {
        filtros.style.display = "none"
      }

    })

    // Fecha o modal de filtro após filtrar
    modalFiltro.style.display = "none"
  })
})

// Limpar
const botaoLimpar = document.getElementById("botaoLimpar")

botaoLimpar.addEventListener("click", () => {
  // Mostrar todos os elementos com a classe .categoria-verificar
  const elementos = document.querySelectorAll(".categoria-verificar")
  elementos.forEach((elemento) => {
    elemento.style.display = "" // Exibe novamente todos os elementos
  })

  // Desmarcar todas as opções de filtro
  const opcoes = document.querySelectorAll(".opcao.selecionado")
  opcoes.forEach((opcao) => {
    opcao.classList.remove("selecionado") // Remove a classe 'selecionado'
    opcao.classList.add("opcao") // Garante que a classe 'opcao' permaneça
  })

  // Se tiver algum input (checkbox ou similar), podemos desmarcar também:
  const inputs = document.querySelectorAll('input[type="checkbox"]')
  inputs.forEach((input) => {
    input.checked = false // Desmarca todos os checkboxes
  })
})
