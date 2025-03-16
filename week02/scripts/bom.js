const input = document.querySelector('#favcahp');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');
const li = document.createElement('li');
const deletebutton = document.createElement('button');
li.textContent = input.value;
deletebutton.textContent = '❌';
li.append(deletebutton);
list.append(li);