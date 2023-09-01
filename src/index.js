import RickAndMortyService from './service';

const service = new RickAndMortyService();

// valor (1 punto)

async function createCharacterList() {
    const tarjetas = await service.getAllCharacters();
    const lista = document.querySelector(".character-list")
    let contenido = "";
    for (let i = 0; i < 20; i++) {
        contenido += createCharacterCard(tarjetas[i]);
    }
    lista.innerHTML = contenido;
    const tarjs = document.querySelectorAll(".character")
    await tarjs.forEach(carta =>{
        addCharacterListeners(carta,carta.querySelector('span:nth-child(2)').textContent);
    })
}

// valor (1 punto) HTML

function createCharacterCard(character) {
    let estado = "alive";
    if(character.status=="Dead"){
        estado = "dead";
    }
    else if(character.status=="unknown"){
        estado = "unknown"
    }
    const tarjeta = `<div class="character">
                        <div class="imagen">
                            <img src="${character.image}">
                        </div>
                        <div class="contenido">
                            <div class="texto">
                                <div class="name">${character.name}</div>
                                <div class="status"><div class="circle ${estado}"></div><div>${character.status} - ${character.species}</div></div>
                            </div>
                            <div class="texto">
                                <div class="lastknown">Last known location:</div>
                                <div class="location">${character.location}</div>
                            </div>
                            <div class="texto">
                                <div class="lastknown">First seen in:</div>
                                <div class="firstSeen">${character.firstSeen}</div>
                            </div>
                        </div>
                    </div>`;
    return tarjeta;
}


function addCharacterListeners(carta, name) {
    carta.addEventListener("click", () => {
        alert(`Hola soy ${name}`);
    })
}


// por último se llama la función y se renderiza la vista
createCharacterList();
