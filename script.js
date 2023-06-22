let sectionQa = document.getElementById("elemento-pai-qa");

function mostrarQa(event){
  event.preventDefault();
  document.getElementById("elemento-pai-qa").innerHTML = `
  <ul>
    <li>Introdução à Qualidade</li>
    <li>Cultura da Qualidade</li>
    <li>Metodologia Ágil</li>
    <li>Gestão de projetos</li>
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
    <li>Lógica de programação</li>
    <li>Git e GitHub</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Banco de Dados</li>
    <li>Projeto integrador: Desenvolvimento do primeiro site responsivo.</li>
  </ul>
  `
};

function mostrarElasnatech(event){
  event.preventDefault();
  document.getElementById("elemento-pai-elasnatech").innerHTML = `
  <ul>
    <li>Ambiente de desenvolvimento: VS Code, Git e GitHub</li>
    <li>Fundamentos WEB: estrutura de sites com HTML, estilização com CSS e sites dinâmicos com JavaScript</li>
    <li>Aprimorando: bootstrap e lógica de programação</li>
    <li>Linguagens: Python, PHP e Java</li>
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