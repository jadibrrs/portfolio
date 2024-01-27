let sectionQa = document.getElementById("elemento-pai-qa");

function mostrarQa(event){
  event.preventDefault();
  document.getElementById("elemento-pai-qa").innerHTML = `
  <ul>
    <li>Introdução à Qualidade</li>
    <li>Cultura da Qualidade</li>
    <li>Metodologia Ágil</li>
    <li>Gestão de Projetos</li>
    <li>Teste de Software</li>
    <li>MongoDB</li>
    <li>Postman</li>
  </ul>
  `
};

function mostrarProz(event){
  event.preventDefault();
  document.getElementById("elemento-pai-proz").innerHTML = `
  <ul>
    <li>Lógica de Programação</li>
    <li>Git e GitHub</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Banco de Dados</li>
  </ul>
  `
};

function mostrarAtlantico(event){
  event.preventDefault();
  document.getElementById("elemento-pai-atlantico").innerHTML = `
  <ul>
    <li>Fundamentos de Qualidade e Teste de Software</li>
    <li>Tipos e Níveis de Testes/Pirâmides de Testes</li>
    <li>Estratégia e Técnicas de testes</li>
    <li>Processo Fundamental de Teste</li>
    <li>Processo de Teste Ágil</li>
    <li>Introdução à Automação de Testes</li>
    <li>Automação de Testes Funcionais</li>
    <li>Automação de Testes de API</li>
  </ul>
  `
};

function mostrarEstagio(event){
  event.preventDefault();
  document.getElementById("elemento-pai-estagio").innerHTML = `
  <ul>
    <li>Realização de testes funcionais manuais em sistemas web</li>
    <li>Realização de testes de regressão e integração</li>
    <li>Prototipação de funcionalidades</li>
    <li>Experiência prática com metodologia ágil</li>
    <li>Utilização do software Jira para gerenciamento de projetos</li>
    <li>Documentação de projetos de sistemas</li>
    <li>Análise de requisitos e especificações</li>
    <li>Colaboração com desenvolvedores para ajustes e explicação de tarefas</li>
    <li>Participação em reuniões de equipe para discussão de progresso e metas</li>
  </ul>
  `
};

function mostrarJiraConfluence(event){
  event.preventDefault();
  document.getElementById("elemento-pai-jira-confluence").innerHTML = `
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
  `
};

function mostrarTAT(event){
  event.preventDefault();
  document.getElementById("elemento-pai-tat").innerHTML = `
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
  `
};




  // <br>
  // <li>Introdução à Qualidade</li>
  // <li>Cultura da Qualidade</li>
  // <li>Metodologia Ágil</li>
  // <li>Gestão de projetos</li>
  // <li>Teste de Software</li>
  // <li>MongoDB</li>
  // <li>Postman</li>