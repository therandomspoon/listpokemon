fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        const pokemonList = document.getElementById('pokemonList');
        if (Array.isArray(data)) {
            data.forEach(pokemon => {
                const listItem = document.createElement('li');
                listItem.textContent = pokemon.name;
                pokemonList.appendChild(listItem);
            });
        } else {
            console.error('Error: Invalid JSON format. Data is not an array.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
