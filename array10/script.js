let carros = ["BMW","FERRARI","MERCEDES"]

console.log("1." +carros[1]);

carros[1] = "Audi";
console.log("2.Lista com audi:");
console.log(carros);

carros.push("RAM");
console.log("3.Lista com volvo:");
console.log(carros);

console.log(`4.Quantidade de items no array: ${carros.length}` )