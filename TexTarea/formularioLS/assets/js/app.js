// variables 
const list_tweets = document.getElementById('lista-tweets');


// listeners
document.querySelector('#formulario').addEventListener('submit', add_tweet);
list_tweets.addEventListener('click' , delete_tweet);
//document.addEventListener('DOMContentLoaded', local_Storage_Ready)

// functions for eventListeners
function add_tweet(e) {
    e.preventDefault();
    // add element
    const tweet = document.querySelector('#tweet').value;
    li = document.createElement('li');
    li.innerText = tweet;
    //add button for delete
    const button_delete = document.createElement('a');
    button_delete.classList = 'borrar-tweet';
    button_delete.innerText = 'X';
    // add to nodes to node
    li.appendChild(button_delete);
    list_tweets.appendChild(li);
    add_local_storage(tweet);
}

function delete_tweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
    }

}

function add_local_storage(tweet) {
    // add localStorage

    for (let i = 0; i < list_tweets.childNodes.length; i++) {
        localStorage.setItem('tweet_' + String(i), li.firstChild.value);
        
    }
} 
function local_Storage_Ready() {
    for (let i = 0; i < localStorage.length; i++) {
        const li = document.createElement('li');
        li.innerText = tweet;
        //add button for delete
        const button_delete = document.createElement('a');
        button_delete.classList = 'borrar-tweet';
        button_delete.innerText = 'X';
        // add to nodes to node
        li.appendChild(button_delete);
        list_tweets.appendChild(li);
    }
} 