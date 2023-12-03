var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

const contentWrapper = document.getElementsByClassName('content__wrapper');
for (let i = 0; i < contentWrapper.length; i++) {
    let currentWrapper = contentWrapper[i];
    let buttonsMemory = currentWrapper.getElementsByClassName("content__right-btn");
    if (buttonsMemory !== null && buttonsMemory.length > 0)
    {
        for (let index = 0; index < buttonsMemory.length; index++){
            let currentButton = buttonsMemory[index];
            currentButton.addEventListener("click",function(event){
                btnMemoryClick(event,buttonsMemory)              
            })
        }
    }
    let buttonsColor = currentWrapper.getElementsByClassName("content__right-color")[0].querySelectorAll("button");
    if (buttonsColor !== null && buttonsColor.length > 0){
        for (let index = 0; index < buttonsColor.length; index++){
            let currentButton = buttonsColor[index];
            let lable = currentWrapper.querySelectorAll('.content__right-color span');
            currentButton.addEventListener("click",function(event){
                btnColorClick(event,buttonsColor,lable);              
            })
        }
    }
  }


  function btnMemoryClick(event,buttonsMemory){
    for (let index = 0; index < buttonsMemory.length; index++){
        buttonsMemory[index].classList.remove("active");
    }
    let clickTarget = event.target;
    if (!clickTarget.classList.contains("active")){
        clickTarget.classList.add("active");
    }
  }

  function btnColorClick(event,buttonsColor,lable){
    for (let index = 0; index < buttonsColor.length; index++){
        buttonsColor[index].classList.remove("active-color");
    }
    let clickTarget = event.target;
    if (!clickTarget.classList.contains("active-color")){
        clickTarget.classList.add("active-color");
        lable[0].innerText = "Цвет: " + clickTarget.getAttribute('data-textcolor');
    }
  }