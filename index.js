function addingEventListener() {
}
function() {
  alert('I was clicked!');
}
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);