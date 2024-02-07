function newTab(url) {
  window.open(url, '_blank');
}

const buttons = [
  { url: 'https://github.com/araujovitorpaulo' },
  { url: 'https://www.frontendmentor.io/profile/araujovitorpaulo' },
  { url: 'https://www.linkedin.com/in/araujovitorpaulo/' },
  { url: 'https://twitter.com/pvzera_' },
  { url: 'https://www.instagram.com/pvzera_' }
];

const buttonsElement = document.getElementsByTagName('button');

for (let i=0; i<buttonsElement.length; i++){
  buttonsElement[i].addEventListener('click', function(){
    newTab(buttons[i].url);
  })
}