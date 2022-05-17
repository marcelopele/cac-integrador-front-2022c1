function calculo(){
    pr = 200;
    q = document.getElementById("can").value;
    desc = 0;

    catSel = document.getElementById("cat").selectedIndex;
    cat = document.getElementById("cat")[catSel].value;
    switch(cat){
        case "E":
            desc = 80;
            break;
        case "T":
            desc = 50;
            break;
        case "J":
            desc = 15;
            break;
    }

    total=pr*q*(100-desc)/100;
    document.getElementById("tot").innerHTML="Total a Pagar: $ "+total;
}

function resetCalculo(){
    document.getElementById("tot").innerHTML="Total a Pagar: $";
}

document.getElementById("btn1").onclick = calculo;

document.getElementById("btn0").onclick = resetCalculo;