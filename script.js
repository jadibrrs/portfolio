function toggleContent(elementId, content) {
  const element = document.getElementById(elementId);

  if (element.style.display === "none" || !element.innerHTML.trim()) {
    element.innerHTML = content;
    element.style.display = 'block';
  } else {
    element.innerHTML = '';
    element.style.display = 'none';
  }
}

function mostrarQa(event) {
  event.preventDefault()
  toggleContent("elemento-pai-qa", `
  <ul>
    <li>Introdução à Qualidade</li>
    <li>Cultura da Qualidade</li>
    <li>Metodologia Ágil</li>
    <li>Gestão de Projetos</li>
    <li>Teste de Software</li>
    <li>MongoDB</li>
    <li>Postman</li>
  </ul>
  `);
}

function mostrarProz(event) {
  event.preventDefault()
  toggleContent("elemento-pai-proz", `
    <ul>
      <li>Lógica de Programação</li>
      <li>Git e GitHub</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Banco de Dados</li>
    </ul>
  `);
}

function mostrarAtlantico(event) {
  event.preventDefault()
  toggleContent("elemento-pai-atlantico", `
    <ul>
      <li>Fundamentos de Qualidade e Teste de Software</li>
      <li>Tipos e Níveis de Testes/Pirâmides de Testes</li>
      <li>Estratégia e Técnicas de testes</li>
      <!-- Adicione mais itens conforme necessário -->
    </ul>
  `);
}

function mostrarEstagio(event) {
  event.preventDefault()
  toggleContent(
    "elemento-pai-estagio",
    `
  <ul>
    <li>Experiência com as metodologias Scrum e Kanban</li>
    <li>Documentação de projetos de sistemas</li>
    <li>Análise de requisitos e especificações</li>
    <li>Elaboração e execução de testes manuais funcionais em sistemas web</li>
    <li>Identificação, documentação e rastreamento de defeitos</li>
    <li>Colaboração com desenvolvedores para ajustes e explicação de tarefas e bugs</li>
    <li> Prototipação de funcionalidades</li>
    <li>Participação em reuniões de equipe para discussão de progresso e metas</li>
  </ul>
  `
  )
}

function mostrarJiraConfluence(event) {
  event.preventDefault()
  toggleContent("elemento-pai-jira-confluence", `
  <ul>
    <li>Jira para times ágeis</li>
    <li>Scrum e Kanban no Jira</li>
    <li>Configurando o Workflow no Jira</li>
    <li>Épicos, histórias e tarefas no Jira</li>
    <li>Estimativa e rastreamento do tempo no Jira</li>
    <li>Gerenciamento de testes com Zephyr no Jira</li>
    <li>Criando o Roadmap no Jira</li>
    <li>Criando consultas avançadas no Jira com JQL</li>
    <li>Relatórios no Jira</li>
    <li>Jira Portfolio (Advanced Roadmaps)</li>
    <li>Começando com Confluence</li>
    <li>Utilizando Jira com Confluence</li>
  </ul>
  `);
}

function mostrarTAT(event) {
  event.preventDefault()
  toggleContent("elemento-pai-tat", `
  <ul>
    <li>Configurar um projeto Cypress do zero</li>
    <li>Visitar páginas locais e remotas</li>
    <li>Lidar com os elementos mais comuns encontrados em aplicações web</li>
    <li>Testar upload de arquivos</li>
    <li>Realizar diversas verificações de resultados esperados</li>
    <li>Criar comandos customizados</li>
    <li>Lidar com links que abrem em outra aba do navegador</li>
    <li>Rodar testes simulando as dimensões de um dispositivo móvel</li>
    <li>Resolver os mesmos problemas de diferentes formas, conhecendo a API do Cypress</li>
    <li>Executar os testes em um pipeline de integração contínua</li>
    <li>Criar uma documentação mínima para seu projeto de testes automatizados</li>
  </ul>
  `);
}

function mostrarVincit(event) {
  event.preventDefault()
  toggleContent(
    "elemento-pai-vincit",
    `
  <ul>
    <li>Algoritmos e Lógica de Programação</li>
    <li>Análise Orientada a Objetos</li>
    <li>Arquitetura e Organização de Computadores</li>
    <li>Comunicação Empresarial Estratégica</li>
    <li>Engenharia de Software</li>
    <li>Engenharia de Requisitos e Processo e Desenvolvimento de Software</li>
    <li>Estrutura de Dados</li>
    <li>Gerenciamento de Banco de Dados</li>
    <li>Gestão de Projetos</li>
    <li>Governança em TI</li>
    <li>Modelagem de Banco de Dados</li>
    <li>Matemática e Lógica Computacional</li>
    <li>Organização e Manipulação em Estrutura de Dados</li>
    <li>Programação Estruturada</li>
    <li>Programação Orientada a Objetos</li>
    <li>Projeto e Modelagem de Dados</li>
    <li>Programação para Internet</li>
    <li>Programação para Dispositivos Móveis</li>
    <li>Padrões de Projetos</li>
    <li>Qualidade e Teste de Software</li>
    <li>Redes de Computadores e Segurança</li>
    <li>Sustentabilidade, Responsabilidade Social e Direitos Humanos</li>
    <li>Sistemas de Informação</li>
    <li>Sistemas Operacionais</li>
    <li>Tecnologias para Gestão de Dados</li>
  </ul>
  `
  )
}

// <br>
// <li>Introdução à Qualidade</li>
// <li>Cultura da Qualidade</li>
// <li>Metodologia Ágil</li>
// <li>Gestão de projetos</li>
// <li>Teste de Software</li>
// <li>MongoDB</li>
// <li>Postman</li>
