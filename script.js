let color = ['black', 'white', 'red', 'Gray', 'green', 'brown', 'yellow', 'purple', 'orange', 'cyan',' gold',];

let button = document.getElementById('button');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

button.addEventListener('click', function(){
    let backgroundColor = color[Math.floor(Math.random() * color.length)]
    let body = document.querySelector('body');

    body.style.background = backgroundColor;
    h2.innerHTML = backgroundColor;
    if(backgroundColor === 'black'){
      h2.style.color = 'white';
      h3.style.color = 'white';
    }
    if(backgroundColor === 'black'){
      h3.style.color = 'white';
    }
    else{
      h2.style.color = 'black';
      h3.style.color = 'black';
    }
})