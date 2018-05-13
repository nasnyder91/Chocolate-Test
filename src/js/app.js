window.addEventListener('resize', resizeFreeShipText);
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(animateHeadline, 500);
  setTimeout(resizeFreeShipText, 500);
});

// Set font size of free ship text
function resizeFreeShipText(){
  const text = document.querySelectorAll('.free-ship-text');
  const freeShipDiv = document.querySelector('.free-ship-center');
  const freeShipStyle = getComputedStyle(freeShipDiv);

  let divWidth = freeShipDiv.clientWidth;
  divWidth -= parseFloat(freeShipStyle.paddingLeft) + parseFloat(freeShipStyle.paddingRight);

  text.forEach(line => {
    line.style.fontSize = '1rem';
    const lineStyle = getComputedStyle(line);
    let lineWidth = line.clientWidth;

    lineWidth -= parseFloat(lineStyle.paddingLeft) + parseFloat(lineStyle.paddingRight) - 1;
    let newFontSize = (divWidth/lineWidth);
    line.style.fontSize = newFontSize + 'rem';
  });
};

// Animate text in headline
function animateHeadline(){
  const headline1 = document.querySelector('#headline1');
  const headline2 = document.querySelector('#headline2');
  const headline3 = document.querySelector('#headline3');

  headline1.style.opacity = 100;
  slideInDown(headline1, 500, () => {
    headline2.style.opacity = 100;
    slideInLeft(headline2, 500, () => {
      headline3.style.opacity = 100;
      slideInUp(headline3, 500);
    });
  });
}

// Slide in right
function slideInRight(element, duration, callback){
  element.classList.add('slideInRight');

  element.style.setProperty('--duration', duration + 'ms');
  setTimeout(() => {
    element.classList.remove('slideInRight');
    if(callback){
      callback();
    }
  }, duration);
}

// Slide in left
function slideInLeft(element, duration, callback){
  element.classList.add('slideInLeft');

  element.style.setProperty('--duration', duration + 'ms');
  setTimeout(() => {
    element.classList.remove('slideInLeft');
    if(callback){
      callback();
    }
  }, duration);
}

// Slide in down
function slideInDown(element, duration, callback){
  element.classList.add('slideInDown');

  element.style.setProperty('--duration', duration + 'ms');
  setTimeout(() => {
    element.classList.remove('slideInDown');
    if(callback){
      callback();
    }
  }, duration);
}

// Slide in up
function slideInUp(element, duration, callback){
  element.classList.add('slideInUp');

  element.style.setProperty('--duration', duration + 'ms');
  setTimeout(() => {
    element.classList.remove('slideInUp');
    if(callback){
      callback();
    }
  }, duration);
}
