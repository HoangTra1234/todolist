const menuToDo = document.querySelector(".menutodo");

function gettodolist() {
    fetch("./data.json").then((res) => res.json())
    .then((data) =>{
        for (let i = 0; i < data.length; i++) {
            const menutodoitem = document.createElement("li");
            menutodoitem.classList.add("menutodoitem");
            const wraptitledo = document.createElement("div");
            wraptitledo.classList.add("wraptitledo");
            console.log(data);
            menuToDo.appendChild(menutodoitem);
        }
    })
}