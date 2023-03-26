

const 

images = [
  ' assets/img/01.webp ',
  ' assets/img/02.webp ',
  ' assets/img/03.webp ',
  ' assets/img/04.webp ',
  ' assets/img/05.webp ',

];

const img = document.getElementsByClassName('img');

const imgContainer = document.getElementById('img-container');

const btnNext = document.querySelector('.pm-up');

const btnPrev = document.querySelector('.pm-down');

const carouselMenuItem = document.getElementsByClassName("carouselMenu");







let imgCounter = 0 ;
let carouselCounter = 0; 




for (let i = 0; i < images.length; i++) {

  const element = images[i];
 
  imgContainer.innerHTML += `  
  <img class="img rounded-4 d-none" src="${element}" >
  `;
    




    
}

img[imgCounter].classList.remove('d-none')

// aggiungere l'evento click ai bottoni 

btnNext.addEventListener('click', function(){
 

  img[imgCounter].classList.add ('d-none'); 
   
   
  imgCounter++;
  console.log(imgCounter);
  if (imgCounter > img.length - 1 ){
     imgCounter = 0;
     img[imgCounter];
     };
 
  
  img[imgCounter].classList.remove ('d-none');
  
  


  carouselMenuItem[carouselCounter].  classList.remove('active');
  carouselCounter++;

  if (carouselCounter > img.length - 1 ){
    carouselCounter = 0;
    };

  carouselMenuItem[carouselCounter].classList.add('active');




  console.log(carouselCounter);
  carouselMenuItem[carouselCounter].classList.add('active');

    
})





btnPrev.addEventListener('click', function(){ 
 
  img[imgCounter].classList.add ('d-none');
  imgCounter--;

   if (imgCounter < 0){
  imgCounter = 4;
  img[imgCounter];
  }

  img[imgCounter].classList.remove ('d-none');
  
  


  carouselMenuItem[carouselCounter].classList.remove('active');
  
  carouselCounter--;
if (carouselCounter < 0){
    carouselCounter = 4;
    
    }
  carouselMenuItem[carouselCounter].classList.add('active');

})












