const add = document.querySelector(".add");
add.addEventListener("click",()=>{
    newnote();
});
function newnote(){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="notes">
    <div class="tools">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="del"><i class="fa-solid fa-trash-can"></i></button> 
    </div>
    <div class="main hidden"></div>
    <textarea class="text"></textarea>
</div>
    `
    ;
    document.body.appendChild(note);
    const notes = note.querySelector(".notes");
    const edit = note.querySelector(".edit");
    const del = note.querySelector(".del");
    const main  = note.querySelector(".main");
    const text = note.querySelector("textarea");
    edit.addEventListener("click",() => {
        main.classList.toggle("hidden");
        text.classList.toggle("hidden");
    })
    text.addEventListener("input",(e)=>{
    const { value } = e.target;
    main.innerHTML = marked.parse(value);
    })
    del.addEventListener("click",()=>{
        note.remove();
    })
    }