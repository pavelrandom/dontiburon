//const izquierda = document.querySelector('.izquierda')
//const derecha = document.querySelector('.derecha')
const slider = document.querySelector('.slider')

//izquierda.addEventListener('click', () => {
//    slider.scrollLeft -= 1225
//    if(scroll.scrollLeft==over) {
//        slider.scrollTo(3675,0); 
//    }
//})

//derecha.addEventListener('click', () => {
//    slider.scrollLeft += 1225
//    if(scroll.scrollLeft==over) {
//        slider.scrollLeft -= 3675; 
//    }
//})

let timeout = setTimeout(() => {
    slider.scrollLeft += 1225;
}, 2000);

let timeout1 = setTimeout(() => {
    slider.scrollLeft += 1225;
}, 4000);

let timeout2 = setTimeout(() => {
    slider.scrollLeft -= 3675;
    clearTimeout(timeout);
    clearTimeout(timeout1);
    clearTimeout(timeout2);
  }, 6000);