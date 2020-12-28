
function imvic_result() 
{
	var idsten = "";
	var idstent = "";
	var iddem = "";	
	var	idpot = "";	
	var idpol = "";
	var	iddv = "";	
	var	idtp = "";	
	var idtrub = "";
	var	idtip = "";	
	var idel = "";	
	var summ = 0;
	var sanuzel = 0;


	var arraycenst = [1220, 330, 980, 1920, 975];
	var arraycendem = [150, 80, 100, 125, 0];
	var arraycenpot = [300, 400, 300, 695];
	var arraycenpol = [1230, 370, 1330];
	var arraycentr = [6900, 4600, 2300, 0];	
	var arraycendv = [2000, 0, 1800]; 
	var arraycendv2 = [4000, 0, 3600]; 
	var arraycentp = [750, 750, 750, 0];	
	var arraycenel = [1500, 0]; 
	
	var tip = document.imvic_form.i_q1;
	var steny = document.imvic_form.i_q3;
	var dem = document.imvic_form.i_q4;
	var pot = document.imvic_form.i_q5;
	var pol = document.imvic_form.i_q33;
	var truby = document.imvic_form.i_q6;
	var dveri = document.imvic_form.i_q7;
	var tpol = document.imvic_form.i_q2;
	var elect = document.imvic_form.i_q8;

	var a=parseFloat(document.imvic_form.i_q1l.value.replace(',', '.'));
	var b=parseFloat(document.imvic_form.i_q1w.value.replace(',', '.'));
	var c=parseFloat(document.imvic_form.i_q1h.value.replace(',', '.'));

	var at=parseFloat(document.imvic_form.i_q1lt.value.replace(',', '.'));
	var bt=parseFloat(document.imvic_form.i_q1wt.value.replace(',', '.'));
	var ct=parseFloat(document.imvic_form.i_q1ht.value.replace(',', '.'));


	var sst=parseFloat(document.imvic_form.i_q1sw.value.replace(',', '.'));
	var spol=parseFloat(document.imvic_form.i_q1s.value.replace(',', '.'));
	var sstt=parseFloat(document.imvic_form.i_q1swt.value.replace(',', '.'));
	var spolt=parseFloat(document.imvic_form.i_q1st.value.replace(',', '.'));


	for(var i=0; i<tip.length; i++){
		if(tip[i].checked) { 
		idtip=tip[i].value;
		break;
		} 
	}
	
if ((idtip == 0 && a > 0 && b > 0 && c > 0) || (idtip == 1 && a > 0 && b > 0 && c > 0 && at > 0 && bt > 0 && ct > 0)) {

// стены
	for(var i=0; i<steny.length; i++){
		if(steny[i].checked) { 
		idsten=steny[i].value;
		break;
		} 
	}
	if (idtip == 0) {
	summ = summ + arraycenst[idsten]*sst;
	}
	else {
	summ = summ + (arraycenst[idsten]*(sst+sstt));
	}


// демонтаж
	for(var i=0; i<dem.length; i++){
		if(dem[i].checked) { 
		iddem=dem[i].value;
		break;
		} 
	}
	if (idtip == 0) {
	summ = summ + arraycendem[iddem]*sst;
	}
	else {
	summ = summ + (arraycendem[iddem]*(sst+sstt));
	}

// потолок	
	for(var i=0; i<pot.length; i++){
		if(pot[i].checked) { 
		idpot=pot[i].value;
		break;
		} 
	}
	if (idtip == 0) {
	summ = summ + arraycenpot[idpot]*spol; 
	}
	else {
	summ = summ + (arraycenpot[idpot]*(spol+spolt)); 
	}
// пол	
	for(var i=0; i<pol.length; i++){
		if(pol[i].checked) { 
		idpol=pol[i].value;
		break;
		} 
	}
	if (idtip == 0) {
	summ = summ + arraycenpol[idpol]*spol; 
	}
	else {
	summ = summ + (arraycenpol[idpol]*(spol+spolt)); 
	}

//	трубы
		for(var i=0; i<truby.length; i++){
		if(truby[i].checked) { 
		idtrub=truby[i].value;
		break;
		} 
	}
if (idtrub != "") {
	summ = summ + arraycentr[idtrub]; 

// двери
	for(var i=0; i<dveri.length; i++){
		if(dveri[i].checked) { 
		iddv=dveri[i].value;
		break;
		} 
	}
	
	if (idtip == 0) {
	summ = summ + arraycendv[iddv]; 
	}
	else {
	summ = summ + arraycendv2[iddv]; 
	}
// теплый пол
	for(var i=0; i<tpol.length; i++){
		if(tpol[i].checked) { 
		idtp=tpol[i].value;
		break;
		} 
	}
if (idtp != "") {
	if (idtip == 0) {
		if (idtp == 0) {sanuzel = arraycentp[idtp]*(spol-2);}
		else {sanuzel = 0;}
	}
	else {
		if (idtp == 0) {sanuzel = (arraycentp[idtp]*(spol-2)) + (arraycentp[idtp]*(spolt-0.5));}
		else {
			if (idtp == 1) {sanuzel = (arraycentp[idtp]*(spol-2));}
			else {
				if (idtp == 2) {sanuzel = arraycentp[idtp]*(spolt-0.5);}
				else {sanuzel = 0;}
			}
		}
		}
	summ = summ + sanuzel; 

//электрика
	for(var i=0; i<elect.length; i++){
		if(elect[i].checked) { 
		idel=elect[i].value;
		break;
		} 
	}
	summ = summ + arraycenel[idel] + 3850;  //дем/монт ванн/унит/смес

	$('#imvic91').show();
//	$('#imvic90').hide();
	document.getElementById('summ_vann').innerHTML='Стоимость выбранных ремонтных работ = '+(summ).toLocaleString('ru')+' руб. <br /><br /><br />';
	document.getElementById('butoch').style.display = 'inline-block';

}
else {alert("Пожалуйста, вернитесь к пункту 8 и определитесь с необходимостью теплого пола");}
}

else {alert("Пожалуйста, вернитесь к пункту 6 и определитесь с необходимостью замены труб");}

}
	else {
		alert ("Пожалуйста, введите размеры помещения в пункте 1");	
	}



} /*---end---*/

function Och()
{
document.getElementById('imvic_form').reset();
window.location.href = 'kalkulyator-remonta-kvartiry.html#calcvan';
document.getElementById('summ_vann').innerHTML=" ";
document.getElementById('butoch').style.display = 'none'; 
document.getElementById('imvic11').style.display = 'none';
document.getElementById('imvic111').style.display = 'none';
document.getElementById('imvic3').style.display = 'none';
document.getElementById('imvic4').style.display = 'none';
document.getElementById('imvic5').style.display = 'none';
document.getElementById('imvic33').style.display = 'none';
document.getElementById('imvic6').style.display = 'none';
document.getElementById('imvic7').style.display = 'none';
document.getElementById('imvic2').style.display = 'none';
document.getElementById('imvic8').style.display = 'none';
document.getElementById('imvic9').style.display = 'none';
document.getElementById('imvic91').style.display = 'none';

}


 /*function show_result() {
	imvic_window=window.open();
	imvic_window.document.write('Смета расчёта ванной комнаты');
	imvic_window.document.write('<table border="1" style="border-collapse: collapse; text-align: center">');
for(var i=2; i<8; i++) {
    imvic_window.document.write('<tr><td style="width: 30px">2 <sup>'+i+'</sup></td><td style="width: 30px">'+Math.pow(2,i)+'</td></tr>');
}
	imvic_window.document.write('</table>');
	imvic_window.focus();
}
*/
