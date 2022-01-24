function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    h2.innerHTML = color;
    return color;

  };

  function randomize() {
    document.body.style.background = getRandomColor();
 ;
  };

  const h2 = document.querySelector('h2');