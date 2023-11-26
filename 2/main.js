// fetch("./datashop.json").then((res) => res.json())
//     .then((data) =>{
//         console.log(data);
//     })
const fillter_sel = document.querySelector('.fillter_sel');
const datafillter = ["ALL", "<3000", "<5000", ">10000"]

datafillter.map((item, index) =>{
    const option = document.createElement("option");
    option.text = item;
    option.value = item;

    fillter_sel.appendChild(option);
});
