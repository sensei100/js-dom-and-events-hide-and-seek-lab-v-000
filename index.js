function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let result = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < result.length; i++) {
    result[i].innerHTML = parseInt(result[i].innerHTML, 10) + n
  }
  return result;
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
