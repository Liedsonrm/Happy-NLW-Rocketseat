// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;


//Create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng


    marker && map.removeLayer(marker)
    
    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)


})


/// add shiel of photos

function addPhotoField() {
    ///pegar o container de fotos #images
    const container = document.querySelector('#images')

    ////pgar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    ///realizar o clone da ultima img adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Verificar se o campo esta vazio, se sim, não adicionar ao container de img
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }
    
    //adiciona um limite de fotos
    // if (fieldsContainer.length >= 7){
    //     return
    // }

    

    ///LImpar o campo
    input.value = ""

    ///adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        fieldsContainer[0].children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}


//toggle between yes and no
function toggleSelect(event) {
    
    //retirar a class=active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove("active")
    })

    //colocar a class=active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')


    //atualizar o meu input hidden
    const input = document.querySelector('[name="open-on-weekends"]')
    
    //verificar se sim ou nao
    
    input.value = button.dataset.value
    console.log(input.value)

}