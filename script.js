const openCallButton = document.querySelector(".left-aside__button--call");   //кнопка трубки
const callModal = document.querySelector(".call-modal");                     //блок модалки
const closeCallButton = document.querySelector(".call-modal__button-close"); // кнопка с крестиком "закрыть"  
const mainContent = document.querySelector('.main__services');  
                             


openCallButton.addEventListener("click", function(evt){                    
    evt.preventDefault();
    callModal.classList.toggle("call-modal--open"); 
    mainContent.classList.toggle("call-blur");
                        
});


 closeCallButton.addEventListener("click", function(){
    callModal.classList.remove("call-modal--open");
    mainContent.classList.remove("call-blur");
    
 })             







 const openFeedbackButton = document.querySelector(".left-aside__button--chat");  
 const feedbackModal = document.querySelector(".feedback-modal");                     
 const closeFeedbackButton = document.querySelector(".feedback-modal__button-close");   
              
 
 
 openFeedbackButton.addEventListener("click", function(evt){                    
     evt.preventDefault();
     feedbackModal.classList.toggle("feedback-modal--open");  
     mainContent.classList.toggle("call-blur");                       
 });
 
 
  closeFeedbackButton.addEventListener("click", function(){
     feedbackModal.classList.remove("feedback-modal--open");
     mainContent.classList.remove("call-blur");  
  })      












 const openBurger = document.querySelector('.burger_button');
 const leftAside = document.querySelector('.left-aside');
 const closeBurger = document.querySelector('.left-aside__burger-button');
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
    mainContent.classList.remove('call-blur');
    bodyContent.style.overflow = 'auto';
})


