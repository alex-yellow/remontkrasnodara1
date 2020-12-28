function count()
{
summ = 0;
var a=parseFloat(document.calc.sh.value.replace(',', '.'));
var b=parseFloat(document.calc.dl.value.replace(',', '.'));
var porog = parseFloat(document.calc.porog.value.replace(',', '.'));


if (a >0 && b > 0)
{

var sp=a*b;
var pp=(a+b)*2;
summ = summ + sp*200;

var arraypol = [0, 200, 600];
var arrayplin = [0, 100, 150];

var pol = window.document.calc.type.value;
var plin = window.document.calc.type1.value;

summ = summ + arraypol[pol]*sp + arrayplin[plin]*pp + porog*200;

//window.document.calc.result.value = summ;
document.getElementById('calcResult').innerHTML = (summ).toLocaleString('ru') + ' руб.';
}
else
{
alert ("Пожалуйста, введите параметры помещения");
}

}
