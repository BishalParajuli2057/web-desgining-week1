
document.getElementById('my-button').addEventListener('click', function() {
    console.log('Hello world');
    document.querySelector('h1').textContent = 'Moi maailma';
});


document.getElementById('add-data').addEventListener('click', function() {
    const textAreaValue = document.getElementById('custom-text').value;
    
    if (textAreaValue.trim()) {
        const ul = document.getElementById('my-list');
        const li = document.createElement('li');
        li.textContent = textAreaValue;  
        ul.appendChild(li);
        
    
        document.getElementById('custom-text').value = '';
    } else {
        alert('Please enter some text before adding to the list');
    }
});


