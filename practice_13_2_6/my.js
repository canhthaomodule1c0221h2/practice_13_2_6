let x = prompt("nhập chuỗi vào");
let array = x.split(",");
let count = 0;
for (let i = 0; i<array.length;i++){
    if (array[i] ==="-"){
        array[i]="_";

    }

}
document.write(array.join(""))
