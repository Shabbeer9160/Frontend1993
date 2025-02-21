const listBtn=document.querySelectorAll(".tab-list");
const listTab=document.querySelectorAll(".tab-item")
listBtn.forEach((btn,idx)=>{
    btn.addEventListener("click",()=>{
        document.querySelector(".tab-list.active").classList.remove("active");
        btn.classList.add("active");

        document.querySelector(".tab-item.active").classList.remove("active");
        listTab[idx].classList.add("active");
    });
});
