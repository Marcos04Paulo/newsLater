'use strict';

function showMe(){
  let show = document.querySelector('.openMenu')
  let close = document.querySelector('.closeMenu')
  // console.log(show.classList.contains('active'));
  
  if(show.classList.contains('active') == false){
    close.classList.add('active');
  }
}

function closeMe(){
  let show = document.querySelector('.openMenu')
  let close = document.querySelector('.closeMenu')

  if(close.classList.contains('active') == true){
    close.classList.remove('active');
  }
}