const openCallButton = document.querySelector(".left-aside__button--call");   //кнопка трубки
const callModal = document.querySelector(".call-modal");                     //блок модалки
const closeCallButton = document.querySelector("call-modal__button-close");  // кнопка с крестиком "закрыть"                


openCallButton.addEventListener("click", function(evt){                    
    evt.preventDefault();
    callModal.classList.toggle("call-modal--open");                            
});


closeCallButton.addEventListener('click', e => console.log(e.target));