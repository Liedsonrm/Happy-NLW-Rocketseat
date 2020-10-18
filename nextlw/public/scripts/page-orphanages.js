// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create pop-up overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    miWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>')

//Create and add pop-up
L
.marker([-27.222633,-49.6455874], { icon })
.addTo(map)
.bindPopup(popup)
