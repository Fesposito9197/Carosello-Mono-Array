// creo array con la lista di img
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg','img/05.jpg']

// seleziono la classe items a cui andr' ad agganciare il mio div item contente le img
const itemsSel = document.querySelector(".items") 

let itemContent = ''
// creo ciclo che mi andra' ad aggiungere i div con le img all'interno di items
for (let i = 0; i < images.length; i++) {
   
    if( i === 0){
        itemContent += `
        <div  class="item active first-item">
            <img src="${images[i]}" alt="">
        </div>`;
    } else if ( i == images.length - 1 ){
        itemContent += `
        <div class="item last-item">
            <img src="${images[i]}" alt="">
        </div>`;
    }else{
        itemContent += `
        <div class="item">
            <img src="${images[i]}" alt="">
        </div>`;
    }
}

itemsSel.innerHTML += itemContent

let active = 0



// creo l'evento che scatena il cambio delle img
const next = document.querySelector(".next");

next.addEventListener('click', function(){
    //seleziono l'elemento con la classe active 
    let activeElement = document.querySelector('.active');
    console.log(activeElement)
    //rimuovo la classe active dal primo elemento
    activeElement.classList.remove('active');
    // sposto la classe active al secondo elemento
    let nextItem = activeElement.nextElementSibling;
    console.log(nextItem)
    nextItem.classList.add('active')
    // blocco il programma quando raggiungo la classe last item 
    
})
