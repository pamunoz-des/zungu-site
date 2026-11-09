// Cambia la URL por la de tu repositorio cuando lo crees.
const GITHUB_REPO_URL = 'https://github.com/';
document.querySelectorAll('[data-github]').forEach(a => a.href = GITHUB_REPO_URL);
document.querySelector('#year').textContent = new Date().getFullYear();
const nav=document.querySelector('nav'),menu=document.querySelector('#menuBtn');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const wave=document.querySelector('#wave');
for(let i=0;i<110;i++){const e=document.createElement('span');e.className='bar';const envelope=Math.pow(Math.sin(Math.PI*i/109),1.2);const rhythm=Math.abs(Math.sin(i*.43)*Math.cos(i*.19));e.style.height=(5+envelope*(12+rhythm*104))+'px';wave.append(e);}
