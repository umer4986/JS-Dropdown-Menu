const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialEl = document.querySelector(".social-list");
const liEls = document.querySelectorAll(".social-list li");

menuEl.addEventListener("click", () => {
    socialEl.classList.toggle("hide"); 
    menuEl.classList.toggle("rotate");
});

liEls.forEach(liEl=>{
   liEl.addEventListener("click",()=>{
       menuTextEl.innerHTML = liEl.innerHTML;
       socialEl.classList.add("hide");
       menuEl.classList.toggle("rotate");
   });
});