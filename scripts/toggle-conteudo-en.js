function toggleConteudo(elementId, content) {
  const element = document.getElementById(elementId)

  if (element.style.display === "none" || !element.innerHTML.trim()) {
    element.innerHTML = content
    element.style.display = "block"
  } else {
    element.innerHTML = ""
    element.style.display = "none"
  }
}

// EXPERIENCE //
function mostrarSofist(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-sofist",
      `
      <ul>
        <li>Worked on both national and international projects (primary language: English);</li>
        <li>Plan, create, and execute manual tests on web applications, ensuring adequate test coverage;</li>
        <li>Participate in planning meetings to understand functionalities and contribute from a quality perspective;</li>
        <li>Collaborate with developers and other team members to identify and manage bugs;</li>
        <li>Help identify improvements in development and quality processes;</li>
        <li>Analyze bugs and defects - most frequent types, root cause analysis, among other criteria;</li>
        <li>Development of applications with Apps Script for data and activity management;</li>
        <li>Create and participate in a training project for QAs for international projects.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-sofist", "")
  }
}

function mostrarAgenda(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-agenda",
      `
      <ul>
        <li>Plan, create, and execute manual tests on web applications, ensuring adequate test coverage;</li>
        <li>Develop and maintain automated integration test scripts;</li>
        <li>Participate in planning meetings to understand functionalities and contribute with a quality perspective;</li>
        <li>Collaborate with developers and other team members to identify and manage bugs;</li>
        <li>Help identify improvements in development and quality processes;</li>
        <li>Document test cases and create bug reports.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-agenda", "")
  }
}

function mostrarEstagio(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-estagio",
      `
      <ul>
        <li>Plan, create, and execute manual tests on web applications, ensuring adequate test coverage;</li>
        <li>Collaborate with developers and other team members to identify, report, and track bug resolutions;</li>
        <li>Prototyping of functionalities;</li>
        <li>Systems documentation;</li>
        <li>Requirements and specifications analysis.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-estagio", "")
  }
}

// EDUCATION //
function mostrarVincit(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-vincit",
      `
      <ul>
        <li>Algorithms and Programming Logic;</li>
        <li>Object-Oriented Analysis;</li>
        <li>Computer Architecture and Organization;</li>
        <li>Strategic Business Communication;</li>
        <li>Software Engineering;</li>
        <li>Requirements Engineering and Software Development Process;</li>
        <li>Data Structures;</li>
        <li>Database Management;</li>
        <li>Project Management;</li>
        <li>IT Governance;</li>
        <li>Database Modeling;</li>
        <li>Mathematics and Computational Logic;</li>
        <li>Organization and Manipulation in Data Structures;</li>
        <li>Structured Programming;</li>
        <li>Object-Oriented Programming;</li>
        <li>Data Project and Modeling;</li>
        <li>Internet Programming;</li>
        <li>Mobile Programming;</li>
        <li>Design Patterns;</li>
        <li>Software Quality and Testing;</li>
        <li>Computer Networks and Security;</li>
        <li>Sustainability, Social Responsibility, and Human Rights;</li>
        <li>Information Systems;</li>
        <li>Operating Systems;</li>
        <li>Data Management Technologies.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-vincit", "")
  }
}

function mostrarMentoria(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-mentoria",
      `
      <ul>
        <li>QA Mindset;</li>
        <li>Testing in Waterfall Model;</li>
        <li>Testing in Agile Context;</li>
        <li>Architecture and Software Engineering for Testers;</li>
        <li>Technical Leveling in Java and SQL;</li>
        <li>Review Techniques;</li>
        <li>Identifying What to Test;</li>
        <li>API Rest Testing;</li>
        <li>Web Testing;</li>
        <li>Mobile Testing with Android;</li>
        <li>Desktop Testing;</li>
        <li>Fundamentals and Best Practices of Test Automation;</li>
        <li>Managing Inconsistencies;</li>
        <li>Non-Functional Testing;</li>
        <li>Performance Testing from a Web Server Perspective;</li>
        <li>Leadership in Software Testing.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-mentoria", "")
  }
}

function mostrarTAT(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-tat",
      `
      <ul>
        <li>Set up a Cypress project from scratch;</li>
        <li>Visit local and remote pages;</li>
        <li>Handle common elements found in web applications;</li>
        <li>Test file uploads;</li>
        <li>Perform various checks for expected results;</li>
        <li>Create custom commands;</li>
        <li>Handle links that open in a new browser tab;</li>
        <li>Run tests simulating mobile device dimensions;</li>
        <li>Solve the same problems in different ways, exploring the Cypress API;</li>
        <li>Run tests in a continuous integration pipeline;</li>
        <li>Create minimal documentation for your automated testing project.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-tat", "")
  }
}

function mostrarAtlantico(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-atlantico",
      `
      <ul>
        <li>Fundamentals of Quality and Software Testing;</li>
        <li>Test Types and Levels/Test Pyramids;</li>
        <li>Test Strategy and Techniques.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-atlantico", "")
  }
}

function mostrarQa(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-qa",
      `
      <ul>
        <li>Introduction to Quality;</li>
        <li>Quality Culture;</li>
        <li>Agile Methodology;</li>
        <li>Project Management;</li>
        <li>Software Testing;</li>
        <li>MongoDB;</li>
        <li>Postman.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-qa", "")
  }
}

function mostrarProz(event) {
  const checkbox = event.target
  if (checkbox.checked) {
    toggleConteudo(
      "elemento-pai-proz",
      `
      <ul>
        <li>Programming Logic;</li>
        <li>Git and GitHub;</li>
        <li>HTML;</li>
        <li>CSS;</li>
        <li>JavaScript;</li>
        <li>Database.</li>
      </ul>
      `
    )
  } else {
    toggleConteudo("elemento-pai-proz", "")
  }
}
