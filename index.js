import Manage from "./manage.js"

let mng = new Manage()

function run() {
  const input = document.querySelector('input')  
  input.addEventListener('keydown',searchPhoto)
}
run()

function appendImage(keyword,Index){

    const image = document.createElement('img')
    image.src = `https://source.unsplash.com/400x225/?${keyword}&sig${Index}`

    const gallery = document.querySelector('.gallery')
    gallery.appendChild(image)
}
function removePhoto(){
    const gallery = document.querySelector('.gallery')
    gallery.innerHTML = ''
}
function searchPhoto(event){
    const keyword = event.target.value 
    if(event.key === 'Enter' && keyword){
        removePhoto()
        for(let i=0; i <20; i++){
            appendImage(keyword, i) 
            console.log(i);
        }
    }
}