function calculo(){
    pr = document.getElementById("pre").innerHTML;
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
    document.getElementById("tot").value="Total a Pagar: $"+total;
}

function limpiar(){
    document.getElementById("nom").value="";
    document.getElementById("ape").value="";
    document.getElementById("cor").value="";
    document.getElementById("can").value="";
    document.getElementById("cat").selectedIndex=0;
    document.getElementById("tot").value="Total a Pagar: $";
}

document.getElementById("btn1").onclick = calculo;
