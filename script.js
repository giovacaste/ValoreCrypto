const INPUT = document.querySelector("#id_crypto");
const BUTTON = document.querySelector("#cerca");
const CONTAINER = document.querySelector("#container");

const CARD_CRYPTO_CERCATA = document.querySelector("#container");

BUTTON.addEventListener("click", () => {
    if (INPUT.value) {
        fetch(`https://api.coincap.io/v2/assets/${INPUT.value}`)
            .then(response => response.json())
                .then(data => {
                    if (CONTAINER.innerHTML) CONTAINER.innerHTML = "";

                    if (data.error) {
                        CONTAINER.innerHTML += `<h1>ID non valido</h1>`;

                        CARD_CRYPTO_CERCATA.style.display = "flex";
                    }
                    else {
                        CONTAINER.innerHTML += `<h1>Nome: ${data.data.name}</h1>
                                                <h1>Rank: ${data.data.rank}</h1>
                                                <h1>Simbolo: ${data.data.symbol} </h1>
                                                <h1>Prezzo: ${parseFloat(data.data.priceUsd).toFixed(5)}$</h1>`;

                        CARD_CRYPTO_CERCATA.style.display = "flex";
                    }
                })

            }
})

function apiCall() {
 
    fetch('https://api.coincap.io/v2/assets') // Estrazione
 
    // Gestisco la risposta
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta API');
        }
        return response.json();
    })
 
    // Gesitre i dati in ingresso (*)
    .then(data => {
        // console.log(data)
 
        data.data.slice(0, 3).forEach(element => {
            document.getElementById(element.id).innerHTML += `<h2>Nome: ${element.name}</h2> <h3>Simbolo: ${element.symbol}</h3> <h3>Prezzo: ${element.priceUsd}</h3>`;
        });
    })
 
    // Gestisco eventuali errori
    .catch(error => {
        console.error('Si è verificato un errore:', error);
    });
}
  
apiCall() 