// JavaScript
let currentScale = 1;

function expandImage(container) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImg");
  const imageTitle = document.getElementById("imageTitle");
  const img = container.querySelector('img');
  
  // Reset zoom level
  currentScale = 1;
  
  // Set image source and title
  modalImg.src = img.src;
  imageTitle.textContent = img.getAttribute('title') || img.getAttribute('alt');
  
  // Show modal with fade-in effect
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = "1";
    modalImg.style.transform = "scale(1)";
  }, 10);
  
  // Handle zoom in
  document.getElementById("zoomIn").onclick = function(e) {
    e.stopPropagation();
    if (currentScale < 2.5) {
      currentScale += 0.25;
      modalImg.style.transform = `scale(${currentScale})`;
    }
  };
  
  // Handle zoom out
  document.getElementById("zoomOut").onclick = function(e) {
    e.stopPropagation();
    if (currentScale > 0.5) {
      currentScale -= 0.25;
      modalImg.style.transform = `scale(${currentScale})`;
    }
  };
  
  // Close handlers
  document.getElementById("closeModal").onclick = closeModalFunction;
  modal.onclick = closeModalFunction;
  
  function closeModalFunction(e) {
    if (e.target === modal || e.target === document.getElementById("closeModal")) {
      modalImg.style.transform = "scale(0.9)";
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.style.display = "none";
      }, 400);
    }
  }
}

// Allow Escape key to close modal
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    const modal = document.getElementById("imageModal");
    if (modal.style.display === "block") {
      document.getElementById("closeModal").click();
    }
  }
});