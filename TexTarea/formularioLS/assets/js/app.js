document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    let list_tweets = document.getElementById('lista-tweets');
    let tweet = document.querySelector('#tweet').value;
    let li = document.createElement('li');
    li.innerText = tweet;
    list_tweets.appendChild(li);
    button_delete = document.createElement('a');
    button_delete.classList = 'borrar-tweet';
    button_delete.innerText = 'X';
    
    list_tweets.appendChild(button_delete);



});


    


