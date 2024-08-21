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



const openFeedbackButton = document.querySelector(".left-aside__button--chat");  
const feedbackModal = document.querySelector(".feedback-modal");                     
const closeFeedbackButton = document.querySelector(".feedback-modal__button-close");                  


openFeedbackButton.addEventListener("click", function(evt){                    
    evt.preventDefault();
    feedbackModal.classList.toggle("feedback-modal--open");                            
});


 closeFeedbackButton.addEventListener("click", function(){
    feedbackModal.classList.remove("feedback-modal--open");
 })      