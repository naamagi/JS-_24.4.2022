

const li=document.getElementsByClassName('start-here');
li[0].innerText="main title";
const subTitlesUl=document.querySelector('ul li ul');
const newLi=document.createElement('li');
newLi.innerText="sub title 4";
subTitlesUl.appendChild(newLi);
const parentUl=document.querySelector('ul');
const lastLi=parentUl.children[3];
parentUl.removeChild(lastLi);
const title=document.querySelector('title');
title.innerText="Master Of The Dom";
const p=document.getElementsByTagName('p')[0];
p.innerText="This was the DOM walk";