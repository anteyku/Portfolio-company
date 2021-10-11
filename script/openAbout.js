let btnAbout = document.querySelector(`.abouut__text__button`);
let btnAboutClose = document.querySelector(`.moduleAbout__close`);
let mooduleAbout = document.querySelector(`.moduleAbout`);



btnAbout.addEventListener(`click`, ()=>{
  mooduleAbout.style.display = `block`;
  document.querySelector(`body`).style.overflow = `hidden`;
})

btnAboutClose.addEventListener(`click`, ()=>{
  mooduleAbout.style.display = `none`;
  document.querySelector(`body`).style.overflowY = `scroll`;
})