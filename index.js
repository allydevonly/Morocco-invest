function startTyping() {
  const text = document.getElementById('M1').innerText;
  document.getElementById('M1').innerText = '';

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById('M1').innerText += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(startTyping, 10000); 
    }
  }

  const typingInterval = setInterval(typeWriter, 150);
}


window.onload = function() {
  startTyping();
};


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}
