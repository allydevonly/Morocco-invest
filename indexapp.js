const messages = [
  "Welcome ' MOROCCO INVEST ' beta version! ",
  "Our algorithms are made  just for YOU",
  "Make sure to fully understand every part before you answear, thanks  "
];

let currentIndex = 0;
const messageElement = document.getElementById('message');
const nextBtn = document.getElementById('nextBtn');
const overlay = document.getElementById('overlay');

function showMessage() {
  overlay.style.display = 'flex';
  messageElement.textContent = messages[currentIndex];
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < messages.length) {
    messageElement.textContent = messages[currentIndex];
  } else {
    overlay.style.display = 'none';
  }
});

showMessage();


if(true){


}


// function showDescription(selection) {
//   if (selection === 'Tourism') {
//     document.getElementById('description').innerText = 'Description for Tourism...';
//     document.getElementById('category1').style.display = 'none';
//     document.getElementById('category2').style.display = 'block';
//   } else if (selection === 'Healthcare') {
//     document.getElementById('description').innerText = 'Description for Healthcare and Pharmaceuticals...';
//     document.getElementById('category1').style.display = 'none';
//     document.getElementById('category2').style.display = 'block';
//   } else if (selection === 'Agriculture') {
//     document.getElementById('description').innerText = 'Description for Agriculture and Agribusiness...';
//     document.getElementById('category1').style.display = 'none';
//     document.getElementById('category2').style.display = 'block';
//   } else if (selection === 'High') {
//     document.getElementById('description2').innerText = 'Description for High Risk...';
//     document.getElementById('category2').style.display = 'none';
//     document.getElementById('category3').style.display = 'block';
//   } else if (selection === 'Low') {
//     document.getElementById('description2').innerText = 'Description for Low Risk...';
//     document.getElementById('category2').style.display = 'none';
//     document.getElementById('category3').style.display = 'block';
//   } else if (selection === 'Medium') {
//     document.getElementById('description2').innerText = 'Description for Medium Risk/Moderate Risk...';
//     document.getElementById('category2').style.display = 'none';
//     document.getElementById('category3').style.display = 'block';
//   } else if (selection === '100k-500k') {
//     document.getElementById('description3').innerText = 'Description for $100,000 to $500,000 budget...';
//     document.getElementById('category3').style.display = 'none';
//     // Do something with the final selection
//   } else if (selection === '500k-800k') {
//     document.getElementById('description3').innerText = 'Description for $500,000 to $800,000 budget...';
//     document.getElementById('category3').style.display = 'none';
//     // Do something with the final selection
//   } else if (selection === '800k-1m') {
//     document.getElementById('description3').innerText = 'Description for $800,000 to $1 million budget...';
//     document.getElementById('category3').style.display = 'none';
//     // Do something with the final selection
//   }
// }

