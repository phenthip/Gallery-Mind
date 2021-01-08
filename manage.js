export default class Manage{
    appendImage(keyword,Index){
        const image = document.createElement('img')
        image.src = `https://source.unsplash.com/400x225/?${keyword}&sig${index}`

        const gallery = document.querySelector('.gallery')
        gallery.appendChild(image)
    }
    removePhoto(){
        const gallery = document.querySelector('.gallery')
        gallery.innerHTML = ''
    }
    searchPhoto(event){
        const keyword = event.target.value 
        if(event.key === 'Enter' && keyword){
            this.removePhoto
            for(let i=1; i <20; i++){
                appendImage(keyword,i) 
            }
        }
    }
}