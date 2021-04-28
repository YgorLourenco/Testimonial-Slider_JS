 const slides = document.querySelector('.slider').children
 const indicatorImgs = document.querySelector('.indicator').children

 // A imagem vai mexer sozinhas com o efeito
 for (let i = 0; i < indicatorImgs.length; i++) {
// Ao clicar, um dos laços vai remover o efeito de ativado de outras imagens e colocar em outra imagem.
     indicatorImgs[i].addEventListener('click', function(){
         for(let j = 0; j < indicatorImgs.length; j++){
             indicatorImgs[j].classList.remove('active')
         }
         indicatorImgs[i].classList.add('active')
// Vai armazenar o id da img
         const id = indicatorImgs[i].getAttribute('data-id')
// Vai ativar outro laço de repetição pra mudar as frases e remover o efeito de ativado e colocar em outra frase
         for (let k = 0; k < slides.length; k++) {
             slides[k].classList.remove('active')
         }
        slides[id].classList.add('active')
     })
 }