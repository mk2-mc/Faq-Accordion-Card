const acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    const isSelected = this.classList.contains("selected");
    
    // Close all panels
    for (let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("selected");
      acc[j].firstElementChild.classList.remove("arrow-up");
      acc[j].nextElementSibling.style.maxHeight = null;
    }
    
    // Open selected panel
    if (!isSelected) {
      this.classList.add("selected");
      this.firstElementChild.classList.add("arrow-up");
      
      const panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";      
    }
  });
}