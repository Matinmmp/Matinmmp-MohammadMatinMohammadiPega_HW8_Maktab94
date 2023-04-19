const elemCreator = (elemType, func) => {
  const element = document.createElement(elemType);
  element.textContent = "HI";
  document.body.appendChild(element);
  func(element);
}
const callback = function (elem) {
  elem.style.backgroundColor = 'red';
}
elemCreator('div', callback);




