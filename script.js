const openCallButton = document.querySelector(".left-aside__button--call");   //кнопка трубки
const callModal = document.querySelector(".call-modal");                     //блок модалки
const closeCallButton = document.querySelector(".call-modal__button-close");  // кнопка с крестиком "закрыть"                


openCallButton.addEventListener("click", function(evt){                    
    evt.preventDefault();
    callModal.classList.toggle("call-modal--open"); 
                        
});


 closeCallButton.addEventListener("click", function(){
    callModal.classList.remove("call-modal--open");
    
 })             



 const openBurger = document.querySelector('.burger_button');
 const leftAside = document.querySelector('.left-aside');
 const closeBurger = document.querySelector('.left-aside__burger-button');
 const mainContent = document.querySelector('main');
 const bodyContent = document.querySelector('body');


 openBurger.addEventListener('click', function(evt){
    evt.preventDefault();
    leftAside.classList.toggle('left-aside--open');
    mainContent.classList.add('call-blur');
    bodyContent.style.overflow = 'hidden';
 });



closeBurger.addEventListener('click', function(evt){
    evt.preventDefault();
    leftAside.classList.remove('left-aside--open');
    bodyContent.style.overflow = 'auto';
})


