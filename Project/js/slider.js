  let slides = document.getElementsByClassName('slides-item');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let slideIndex = 1;
  let dots = document.getElementsByClassName('dots-item');
  let text = document.getElementsByClassName('right-compl-item');
  let textArea = document.getElementsByClassName('right-compl-items');
  let dotsArea = document.getElementsByClassName('dots-block');

  showSlides(slideIndex);

  function showSlides(n){
    if(n < 1){
      slideIndex = slides.length;
    }
    else if (n > slides.length){
      slideIndex = 1;
    }
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(let i = 0; i < dots.length; i++){
      dots[i].classList.remove('active');
    }
    for(let i = 0; i < text.length; i++){
      text[i].classList.remove('activeText');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    text[slideIndex - 1].classList.add('activeText');
  }

  function plusSlides (n){
    showSlides(slideIndex += n);
  }
  function currentSlide (n){
    showSlides(slideIndex = n);
  }
  prev.onclick = function (){
    plusSlides(-1);
  }
  next.onclick = function (){
    plusSlides(1);
  }
  dotsArea.onclick = function(e){
    for(let i = 0; i < dots.length; i++){
      if(e.target.classList.contains('dots-item') && e.target == dots[i - 1]){
        currentSlide(i);
      }
    }
  }
  textArea.onclick = function(e){
    for(let i = 0; i < text.length; i++){
      if(e.target.classList.contains('right-compl-items') && e.target == text[i - 1]){
        currentSlide(i);
      }
    }
  }

 