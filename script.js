// Script for navigation

const bar= document.getElementById('bar');
const close=document.getElementById('close')
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })

}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}
// for hovering effect .

const img = document.getElementById("myImage");

let mouseX = 0;
let mouseY = 0;

img.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function drawLiquify() {
    const amount = 20; // amount of distortion
    const size = 10; // size of the distortion
  
    const x = mouseX - img.offsetLeft;
    const y = mouseY - img.offsetTop;
  
    const width = img.clientWidth;
    const height = img.clientHeight;
  
    const deltaX = x / width;
    const deltaY = y / height;
  
    const distortionX = deltaX * amount * 2 - amount;
    const distortionY = deltaY * amount * 2 - amount;
  
    img.style.transform = `translate(${distortionX}px, ${distortionY}px) scale(${1 + size / 100}, ${1 + size / 100})`;
  }
  

  img.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    drawLiquify();
  });
  