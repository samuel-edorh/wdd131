const input = document.querySelector('#favcahp');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');
const li = document.createElement('li');
const deletebutton = document.createElement('button');
li.textContent = input.value;
deletebutton.textContent = '❌';
li.append(deletebutton);
list.append(li);
button.addEventListener('click', function(){
});
if(input.value.trim() !=='') {chapterList}
deletebutton.addEventListener('click',function() {
    list.removeChild(li);
    input.focus()
})
input.value ='';
input.focus();