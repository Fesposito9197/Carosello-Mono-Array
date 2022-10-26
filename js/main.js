// creo array con la lista di img
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg','img/05.jpg']

// seleziono la classe items a cui andr' ad agganciare il mio div item contente le img
const itemsSel = document.querySelector(".items") 

let itemContent = ''
// creo ciclo che mi andra' ad aggiungere i div con le img all'interno di items
for (let i = 0; i < images.length; i++) {
    itemContent += `
        <div class="item">
            <img src="${images[i]}" alt="">
        </div>`;

}
let active = 0
itemsSel.innerHTML += itemContent





// creo l'evento che scatena il cambio delle img
const next = document.querySelector(".next");

next.addEventListener('click', function(){
   
   
   

})
