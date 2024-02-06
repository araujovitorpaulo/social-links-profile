/*function github() {
  window.open('https://github.com/araujovitorpaulo', '_blank');
}

function mentor() {
  window.open('https://www.frontendmentor.io/profile/araujovitorpaulo', '_blank');
}

function linkedin() {
  window.open('https://www.linkedin.com/in/araujovitorpaulo/', '_blank');
}

function twitter() {
  window.open('https://twitter.com/pvzera_', '_blank');
}

function insta() {
  window.open('https://www.instagram.com/pvzera_', '_blank');
}*/


function newTab(url) {
  window.open(url, '_blank');
}

const buttons = [
  { id: 'b0', url: 'https://github.com/araujovitorpaulo' },
  { id: 'b1', url: 'https://www.frontendmentor.io/profile/araujovitorpaulo' },
  { id: 'b2', url: 'https://www.linkedin.com/in/araujovitorpaulo/' },
  { id: 'b3', url: 'https://twitter.com/pvzera_' },
  { id: 'b4', url: 'https://www.instagram.com/pvzera_' }
];

const buttonsContainer = document.getElementById('buttonsContainer');

buttons.forEach(button => {
  const newButton = document.createElement('button');
  newButton.id = button.id;
  
  newButton.addEventListener('click', function() {
    newTab(button.url);
  });

});