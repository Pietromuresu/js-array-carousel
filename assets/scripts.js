

const 

images = [
  ' assets/img/01.webp ',
  ' assets/img/02.webp ',
  ' assets/img/03.webp ',
  ' assets/img/04.webp ',
  ' assets/img/05.webp ',

],

imgContainer = document.getElementById('img-container');

const btnNext = document.querySelector('.pm-up');

const btnPrev = document.querySelector('.pm-down');




let imgCounter = 0 ;
btnPrev.classList.add('d-none');



for (let i = 0; i < images.length; i++) {

  const element = images[i];
 
  imgContainer.innerHTML += `  
  <img class="img rounded-4 d-none" src="${element}" >
  `;

  
}

const img = document.getElementsByClassName('img');
img[imgCounter].classList.remove('d-none')

// aggiungere l'evento click ai bottoni 

btnNext.addEventListener('click', function(){
  img[imgCounter].classList.add ('d-none');
  imgCounter++;
  img[imgCounter].classList.remove ('d-none');
  btnPrev.classList.remove ('d-none');
  if(imgCounter === images.length - 1) {
 btnNext.classList.add('d-none');
}

})

btnPrev.addEventListener('click', function(){
  img[imgCounter].classList.add ('d-none');
  imgCounter--;
  img[imgCounter].classList.remove ('d-none');
  
  btnNext.classList.remove ('d-none');

  if (imgCounter === 0){
  btnPrev.classList.add ('d-none');

  }


})





