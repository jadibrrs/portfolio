document.querySelector(".collapsible").addEventListener("click", function () {
  this.classList.toggle("active")
  const content = this.nextElementSibling

  if (content.style.display === "grid") {
    content.style.display = "none"
  } else {
    content.style.display = "grid"
  }
})
