// creo array con la lista di img
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg','img/05.jpg']

// seleziono la classe items a cui andr' ad agganciare il mio div item contente le img
const itemsSel = document.querySelector(".items") 


// creo ciclo che mi andra' ad aggiungere i div con le img all'interno di items
for (let i = 0; i < images.length; i++) {
    const item = document.createElement("div");
    item.classList.add("item")
    if ( i === 0){
        item.classList.add("active")
    }
    const img = document.createElement("img")
    img.setAttribute("src", images[i])
    item.append(img)
    itemsSel.append(item)

}
