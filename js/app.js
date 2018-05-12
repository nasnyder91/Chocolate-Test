window.addEventListener('resize', resizeFreeShipText);
document.addEventListener('DOMContentLoaded', resizeFreeShipText);

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
    lineWidth -= parseFloat(lineStyle.paddingLeft) + parseFloat(lineStyle.paddingRight);
    let newFontSize = (divWidth/lineWidth);
    console.log(divWidth, lineWidth);
    line.style.fontSize = newFontSize + 'rem';
  });
}
