
// Кнопки якоря для плавной прокрутки пользователя к блокам
document.querySelector(`#nas`).addEventListener(`click`, ()=>{
  let el = document.querySelector(`.about`);
  el.scrollIntoView({block: "center", behavior: "smooth"});
})

document.querySelector(`#portfolio`).addEventListener(`click`, ()=>{
  let el = document.querySelector(`.portfolio`);
  el.scrollIntoView({block: "center", behavior: "smooth"});  
})

document.querySelector(`#cont`).addEventListener(`click`, ()=>{
  let el = document.querySelector(`.footer`);
  el.scrollIntoView({block: "center", behavior: "smooth"});   
})

document.querySelector(`#faq`).addEventListener(`click`, ()=>{
  let el = document.querySelector(`.faq`);
  el.scrollIntoView({block: "center", behavior: "smooth"});   
})