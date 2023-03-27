let mesFaq = document.querySelectorAll(`.faq__block`);

// При нажатии вопрос из блока FAQ скрипт развертывает ответ
for(let i = 0; i < mesFaq.length; i++){
  mesFaq[i].addEventListener(`click`, (event)=>{
    mesFaq[i].children[2].style.display = `block`;
  })
}