'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-model');
const btnOpenModal=document.querySelectorAll('.open-modal');
console.log(btnOpenModal);

for(let i=0;i<btnOpenModal.length;i++){
    console.log(btnOpenModal[i].textContent);
}