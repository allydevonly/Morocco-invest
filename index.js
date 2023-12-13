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
      setTimeout(startTyping, 30000); // Restart typing after 30 seconds
    }
  }

  const typingInterval = setInterval(typeWriter, 150); // Typing speed (adjust as needed)
}

// Start the typing effect after the page loads
window.onload = function() {
  startTyping();
};
