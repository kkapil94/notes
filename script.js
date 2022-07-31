const edit = document.querySelector(".edit");
const del = document.querySelector(".del");
const notes = document.querySelector(".notes");
const main  = document.querySelector(".main");
const text = document.querySelector("textarea");
const add = document.querySelector(".add");
edit.addEventListener("click",() => {
    main.classList.toggle("hidden");
    text.classList.toggle("hidden");
})
text.addEventListener("input",(e)=>{
    const { value } = e.target;
    main.innerHTML = marked.parse(value);
})
add.addEventListener("click",()=>{
    
})