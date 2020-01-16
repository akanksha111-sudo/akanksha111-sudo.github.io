let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/flower.png') {
      myImage.setAttribute ('src','images/flower2.png');
    } else {
      myImage.setAttribute ('src','images/flower.png');
    }
}


function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Stay Positive,Think Positive' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Stay Positive,Think Positive' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
    
  }

  let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

const para = document.querySelector('ul');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'be positive,Think Positive ' + name;
}
myButton.onclick = function() {
  setUserName();
}