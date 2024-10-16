function toggleContent(elementId, content) {
  const element = document.getElementById(elementId)

  if (element.style.display === "none" || !element.innerHTML.trim()) {
    element.innerHTML = content
    element.style.display = "block"
  } else {
    element.innerHTML = ""
    element.style.display = "none"
  }
}

// Experiência
function mostrarAgenda(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-agenda",
      `
      <ul>
        <li>Elaboração e execução de testes manuais em sistemas web;</li>
        <li>Desenvolvimento e gestão de testes automatizados;</li>
        <li>Identificação, documentação e gerenciamento de defeitos;</li>
        <li>Análise e levantamento de requisitos e especificações;</li>
        <li>Colaboração com desenvolvedores para explicação de tarefas e ajustes de incidentes.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-agenda", "")
  }
}

function mostrarEstagio(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-estagio",
      `
      <ul>
        <li>Experiência com as metodologias Scrum e Kanban;</li>
        <li>Documentação de projetos de sistemas;</li>
        <li>Análise de requisitos e especificações;</li>
        <li>Elaboração e execução de testes manuais funcionais em sistemas web;</li>
        <li>Identificação, documentação e rastreamento de defeitos;</li>
        <li>Colaboração com desenvolvedores para ajustes e explicação de tarefas e bugs;</li>
        <li>Prototipação de funcionalidades;</li>
        <li>Participação em reuniões de equipe para discussão de progresso e metas.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-estagio", "") // Esconde o conteúdo se desmarcado
  }
}

// Formação
function mostrarVincit(event) {
  const checkbox = event.target // O checkbox que foi clicado
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-vincit",
      `
      <ul>
        <li>Algoritmos e Lógica de Programação;</li>
        <li>Análise Orientada a Objetos;</li>
        <li>Arquitetura e Organização de Computadores;</li>
        <li>Comunicação Empresarial Estratégica;</li>
        <li>Engenharia de Software;</li>
        <li>Engenharia de Requisitos e Processo e Desenvolvimento de Software;</li>
        <li>Estrutura de Dados;</li>
        <li>Gerenciamento de Banco de Dados;</li>
        <li>Gestão de Projetos;</li>
        <li>Governança em TI;</li>
        <li>Modelagem de Banco de Dados;</li>
        <li>Matemática e Lógica Computacional;</li>
        <li>Organização e Manipulação em Estrutura de Dados;</li>
        <li>Programação Estruturada;</li>
        <li>Programação Orientada a Objetos;</li>
        <li>Projeto e Modelagem de Dados;</li>
        <li>Programação para Internet;</li>
        <li>Programação para Dispositivos Móveis;</li>
        <li>Padrões de Projetos;</li>
        <li>Qualidade e Teste de Software;</li>
        <li>Redes de Computadores e Segurança;</li>
        <li>Sustentabilidade, Responsabilidade Social e Direitos Humanos;</li>
        <li>Sistemas de Informação;</li>
        <li>Sistemas Operacionais;</li>
        <li>Tecnologias para Gestão de Dados.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-vincit", "") // Esconde o conteúdo se desmarcado
  }
}

function mostrarMentoria(event) {
  const checkbox = event.target // O checkbox que foi clicado
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-mentoria",
      `
      <ul>
        <li>Mentalidade do QA;</li>
        <li>Testes no Modelo Cascata;</li>
        <li>Testes em Contexto Ágil;</li>
        <li>Arquitetura e Engenharia de Software para Testadores;</li>
        <li>Nivelamento Técnico de Programação em Java e SQL;</li>
        <li>Técnicas de Revisão;</li>
        <li>Identificando o Que Testar;</li>
        <li>Testes de API Rest;</li>
        <li>Testes Web;</li>
        <li>Testes Mobile com Android;</li>
        <li>Testes Desktop;</li>
        <li>Fundamentos e Boas Práticas da Automação de Testes;</li>
        <li>Gerindo Inconsistências;</li>
        <li>Testes Não Funcionais;</li>
        <li>Testes de Performance sob a Perspectiva do Servidor Web;</li>
        <li>Liderança em Teste de Software.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-mentoria", "") // Esconde o conteúdo se desmarcado
  }
}

function mostrarTAT(event) {
  const checkbox = event.target // O checkbox que foi clicado
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-tat",
      `
      <ul>
        <li>Configurar um projeto Cypress do zero;</li>
        <li>Visitar páginas locais e remotas;</li>
        <li>Lidar com os elementos mais comuns encontrados em aplicações web;</li>
        <li>Testar upload de arquivos;</li>
        <li>Realizar diversas verificações de resultados esperados;</li>
        <li>Criar comandos customizados;</li>
        <li>Lidar com links que abrem em outra aba do navegador;</li>
        <li>Rodar testes simulando as dimensões de um dispositivo móvel;</li>
        <li>Resolver os mesmos problemas de diferentes formas, conhecendo a API do Cypress;</li>
        <li>Executar os testes em um pipeline de integração contínua;</li>
        <li>Criar uma documentação mínima para seu projeto de testes automatizados.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-tat", "") // Esconde o conteúdo se desmarcado
  }
}

function mostrarAtlantico(event) {
  const checkbox = event.target // O checkbox que foi clicado
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-atlantico",
      `
      <ul>
        <li>Fundamentos de Qualidade e Teste de Software;</li>
        <li>Tipos e Níveis de Testes/Pirâmides de Testes;</li>
        <li>Estratégia e Técnicas de testes.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-atlantico", "") // Esconde o conteúdo se desmarcado
  }
}

function mostrarQa(event) {
  const checkbox = event.target // O checkbox que foi clicado
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-qa",
      `
      <ul>
        <li>Introdução à Qualidade;</li>
        <li>Cultura da Qualidade;</li>
        <li>Metodologia Ágil;</li>
        <li>Gestão de Projetos;</li>
        <li>Teste de Software;</li>
        <li>MongoDB;</li>
        <li>Postman.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-qa", "") // Esconde o conteúdo se desmarcado
  }
}

function mostrarProz(event) {
  const checkbox = event.target // O checkbox que foi clicado
  if (checkbox.checked) {
    toggleContent(
      "elemento-pai-proz",
      `
      <ul>
        <li>Lógica de Programação;</li>
        <li>Git e GitHub;</li>
        <li>HTML;</li>
        <li>CSS;</li>
        <li>JavaScript;</li>
        <li>Banco de Dados.</li>
      </ul>
      `
    )
  } else {
    toggleContent("elemento-pai-proz", "")
  }
}
