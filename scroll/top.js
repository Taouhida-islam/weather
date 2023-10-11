// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  });
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  