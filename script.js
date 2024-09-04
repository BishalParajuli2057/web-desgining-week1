document.getElementById('my-button').addEventListener('click', function() {
    console.log('Hello world');
    document.querySelector('h1').textContent = 'Moi maailma';
    
});


document.getElementById('add-data').addEventListener('click', function() {
    const ul = document.getElementById('my-list');
    const li = document.createElement('li');
    li.textContent = 'New list item'; 
    ul.appendChild(li);
});
