let currentSlide = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderItem = document.querySelectorAll('.img');
console.log(sliderItem)

function roleSlide(){
    sliderLine.style.left = -currentSlide * 100 + '%';
}   
document.querySelector('.next__slide').addEventListener('click', function(){
    currentSlide++;
    if(currentSlide >= sliderItem.length){
        currentSlide = 0 
    }
    roleSlide();
})
document.querySelector('.prev__slide').addEventListener('click', function(){
    currentSlide--;
    if(currentSlide < 0  ){
        currentSlide = sliderItem.length - 1;  
    }
    roleSlide();
})