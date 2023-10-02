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
  </ul>
  `
};

function mostrarDescodificadas(event){
  event.preventDefault();
  document.getElementById("elemento-pai-elasnatech").innerHTML = `
  <ul>
    <li>Competências socioemocionais visando o autodesenvolvimento</li>
    <li>Trilha 1: Descobrindo o caminho para a programação web</li>
    <li>Trilha 2: Avançando no caminho para a programação web</li>
    <li>Trilha 3: Construindo e integrando aplicações de Front-end</li>
    <li>Trilha 4: Construindo e integrando aplicações de Back-end</li>
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