fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        const pokemonList = document.getElementById('pokemonList');
        data.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.textContent = pokemon.name;
            pokemonList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
