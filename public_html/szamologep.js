// alert("Hello világ!");
//document.write("Hello világ");
//console.log("üzenet");
var valA =0;
var valA =0;
var muvelet = 0;
function osszead(){
    muvelet= Number(valA)  +  Number(valB);
    document.getElementById("szoveg").innerHTML=muvelet;
}

function kivon(){
    muvelet= Number(valA)  -  Number(valB);
    document.getElementById("szoveg").innerHTML=muvelet;
}

function szorzas(){
    muvelet= Number(valA)  *  Number(valB);
    document.getElementById("szoveg").innerHTML=muvelet;
}

function osztas(){

    muvelet= Number(valA)  /  Number(valB);
    document.getElementById("szoveg").innerHTML=muvelet;
}

function szamolas(){
    valA=document.getElementById("a").value;
    valB=document.getElementById("b").value;
    var valM=document.getElementById("muv").value;
    
    if(valM==="+"){
        osszead()
    }
    else if(valM==="-"){
        kivon()
    }
    else if(valM==="*"){
        szorzas()
    }
    else if(valM==="/"){
        osztas()
    }
    
    document.getElementById("szoveg").innerHTML=muvelet;
}


