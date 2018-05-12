// Set font size of free ship text
const text = document.querySelectorAll('.free-ship-text');
const freeShipDiv = document.querySelector('.free-ship-center');
const freeShipStyle = getComputedStyle(freeShipDiv);

let divWidth = freeShipDiv.clientWidth;
divWidth -= parseFloat(freeShipStyle.paddingLeft) + parseFloat(freeShipStyle.paddingRight);

text.forEach(line => {
  const lineStyle = getComputedStyle(line);
  let lineWidth = line.clientWidth;
  lineWidth -= parseFloat(lineStyle.paddingLeft) + parseFloat(lineStyle.paddingRight);
  let newFontSize = (divWidth/lineWidth);
  line.style.fontSize = newFontSize + 'rem';
});
