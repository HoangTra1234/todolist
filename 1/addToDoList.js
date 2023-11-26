const btn_add = document.querySelector(".btn_add");
const btn_cancel_action = document.querySelector(".btn_cancel_action");
const btn_submit_action = document.querySelector(".btn_submit_action");
const modal = document.querySelector(".container-modal");
const input_Add_Note = document.querySelector(".input_Add_Note");

btn_add.addEventListener("click", function showModal () {
    if (modal.style.display == "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
});
btn_cancel_action.addEventListener("click", function hideModal () {
    modal.style.display = "none";
});
