alert("¡Hola Mundo 2!");

function mostrarVariables(){
    alert("Variable1: " + variable1);
    variable2 = null;
    alert("Variable2: " + variable2);
    var variable1 = 34;
    alert("Variable1 declarada: " + variable1);
    variable3 = 15.9;
    alert("Variable1 * Variable3: " + (variable1 * variable3));
    variable3 = "Ahora soy un texto";
    alert("Variable3: " + variable3);
    alert("Variable3 * 35: " + (variable3 * 35));
}

function comprobarOperadore(){
    var var1 = "";
    var var2 = "";
    alert(
        var1==var2,
        var1!=var2,
        var1<var2,
        var1>var2,
        var1>=var2
    );

    var var3 = 5;
    var var4 = "465"

    alert(
        var3==var4,
        var3===var4 
    );

    var var5 = 7;
    var var6 = 8;
    var var7 = 9;

    alert(
        var5<var6,
        var6<var7,
        var5<=var6,
        var6>var7
    );

    var7 = !true;

    alert(var7);
}