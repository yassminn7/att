for (let i= 1;i<=5;i++){
    console.log("Número:"+i);
}
        console.log("############ ex2 ###############");


let contador =3;
while (contador>0){
    console.log("Tempo restante:"+ 
        contador);
        contador --;
}
console.log("Acabou!");


console.log("############ ex3 ###############");

for(let i=1;i<=4;i++){
    if(i%2===0){
        console.log(i+"é par");
    }else{
        console.log(i+"é impar");
    }
}


console.log("############ ex4 ###############");

for(let i=1;i<=10;i++){
    if(i===4){
        break;
    }
    console.log("Contando:"+i);
}

console.log("############ ex5 ###############");

for (let i=1;i<=5;i++){
    if(i===3){
        continue;
    }
    console.log("i="+i);
}

console.log("############ ex6 ###############");

// Execute com atenção. Aperte "Stop" se travar
let x=1;
while(x>0){
    console.log("Rodando...");
}