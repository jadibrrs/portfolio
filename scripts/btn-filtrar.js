document.addEventListener("DOMContentLoaded", () => {
  const botaoFiltro = document.getElementById("botaoFiltro")
  const filtroContainer = document.getElementById("filtro-container")
  const filtroOverlay = document.getElementById("filtro-overlay")
  const opcoes = document.querySelectorAll(".opcao")
  const botaoFiltrar = document.getElementById("botaoFiltrar")
  const botaoLimpar = document.getElementById("botaoLimpar")
  const categorias = document.querySelectorAll(".categoria-verificar")
  const elementos = document.querySelectorAll(".categoria-verificar")

  // VERIFICA SE ESTAMOS NA PÁGINA DE PROJETOS (procurando o div .projetos)
  const isProjetosPage = document.querySelector(".projetos") !== null

  // Função para mostrar o modal de filtro (APENAS EM MOBILE)
  function mostrarModalFiltro() {
    if (window.getComputedStyle(botaoFiltro).display !== "none") {
      filtroContainer.style.display = "block"
      filtroOverlay.style.display = "block"
    }
  }

  // Função para esconder o modal de filtro (APENAS EM MOBILE)
  function esconderModalFiltro() {
    if (window.getComputedStyle(botaoFiltro).display !== "none") {
      filtroContainer.style.display = "none"
      filtroOverlay.style.display = "none"
    }
  }

  // Clicar no botão de filtro (hambúrguer)
  botaoFiltro.addEventListener("click", () => {
    if (window.getComputedStyle(filtroContainer).display === "block") {
      esconderModalFiltro()
    } else {
      mostrarModalFiltro()
    }
  })

  // Clicar no fundo (overlay)
  filtroOverlay.addEventListener("click", () => {
    esconderModalFiltro()
  })

  // Alterna a seleção das opções ao clicar
  opcoes.forEach((opcao) => {
    opcao.addEventListener("click", () => {
      opcao.classList.toggle("selecionado")
    })
  })

  // Filtra ao clicar em "Filtrar"
  botaoFiltrar.addEventListener("click", () => {
    // Pega as categorias selecionadas
    const categoriasSelecionadas = Array.from(opcoes)
      .filter((opcao) => opcao.classList.contains("selecionado"))
      .map((opcao) => opcao.getAttribute("data-valor"))

    // Mostra ou esconde os itens
    categorias.forEach((filtros) => {
      const tags = Array.from(filtros.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.trim()
      )

      let exibirfiltros

      // --- LÓGICA DE FILTRO ATUALIZADA ---
      if (isProjetosPage) {
        // LÓGICA "E" (AND) para a página de projetos
        // O item deve conter TODAS as tags selecionadas
        exibirfiltros = categoriasSelecionadas.every((categoria) =>
          tags.includes(categoria)
        )
      } else {
        // LÓGICA "OU" (OR) para as outras páginas (Experiência, Formação)
        // O item deve conter PELO MENOS UMA das tags selecionadas
        exibirfiltros = categoriasSelecionadas.some((categoria) =>
          tags.includes(categoria)
        )
      }
      // --- FIM DA LÓGICA ATUALIZADA ---

      if (exibirfiltros || categoriasSelecionadas.length === 0) {
        filtros.style.removeProperty("display") // Usa o display definido no CSS
      } else {
        filtros.style.display = "none"
      }
    })

    // Fecha o modal (só terá efeito em mobile)
    esconderModalFiltro()
  })

  // Lógica de "Limpar"
  botaoLimpar.addEventListener("click", () => {
    // Mostrar todos os elementos
    elementos.forEach((elemento) => {
      elemento.style.display = "" // Exibe novamente todos os elementos
    })

    // Desmarcar todas as opções de filtro
    const opcoesSelecionadas = document.querySelectorAll(".opcao.selecionado")
    opcoesSelecionadas.forEach((opcao) => {
      opcao.classList.remove("selecionado")
    })

    // Fecha o modal (só terá efeito em mobile)
    esconderModalFiltro()
  })
})
