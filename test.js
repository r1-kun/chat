function onClick() {
  var textbox = document.getElementById('content');
  var text = document.getElementById('input').value;
  var new_element = document.createElement('div');
  new_element.textContent = text;
  textbox.appendChild(new_element);
  new_element.classList.add('say');
}  