
  function areaRectangle()
	{
	var	summpot=0;
	var	summsten=0;
	var	summpol=0;	
	var sum=0;
	var summ=0;
	var summ1=0;
	var summsmeta=0;
	var dvok=0;
	var okdv=0;
	var vyro=0;
	var rovy=0;
	var poted=0;
	var stened=0;
	var poled=0;
	var	idpot="";
	var idsten="";
	var idpol="";
	var idvids="";
	var par=0;

	var arrayedpot = [["кв.м", "пог.м"], ["кв.м"], ["кв.м", "пог.м"]];
	var arraycenpot = [[700, 140], [300], [1080, 140]];
	var arraycenkpot = [[150, 140], [300], [1080, 140]];
	var arrayedsten = [["кв.м"], ["кв.м"], ["кв.м"], ["кв.м"]];
	var arraycensten = [[1040], [760], [1240], [1290]];
	var arraycenksten = [[190], [160], [640], [690]];	
	var arrayedpol = [["кв.м", "пог.м"], ["кв.м", "пог.м"], ["кв.м", "пог.м"], ["кв.м", "пог.м"], ["кв.м", "пог.м"], ["кв.м"]];
	var arraycenpol = [[650, 100], [570, 100], [580, 100], [950, 100], [500, 150], [1080]];
	var arraycenkpol = [[200, 100], [120, 100], [130, 100], [500, 100], [500, 150], [750]];	
	var arraycendo = [1500, 300];
	var arraycenok = [2100, 450, 800];
	var arraycenel = [100];
	var arraycensa = [1500, 300, 800, 700, 600];

	var a=parseFloat(document.forma1.sh.value.replace(',', '.'));
	var b=parseFloat(document.forma1.dl.value.replace(',', '.'));
	var c=parseFloat(document.forma1.vs.value.replace(',', '.'));
	var ok=parseInt(document.forma1.okno.value);
	var dv=parseInt(document.forma1.dver.value);
	var vy=parseInt(document.forma1.vykl.value);
	var ro=parseInt(document.forma1.roz.value); 

	var potoloks = document.forma1.potolok;
	var stenys = document.forma1.steny;
	var pols = document.forma1.pol;
	var vids = document.forma1.vid;


	for(var i=0; i<vids.length; i++){
		if(vids[i].checked) { 
		idvids=vids[i].value;	
		break;
		}
	} 

if (a >0 && b > 0 && c > 0)
{
	var sp=a*b;
	var ss=((c*a)+(c*b))*2;
	var pp=(a+b)*2;


	for(var i=0; i<potoloks.length; i++){
		if(potoloks[i].checked) { 
		idpot=potoloks[i].value;	
		break;
		}
	} 
	for(var i=0; i<stenys.length; i++){
		if(stenys[i].checked) { 
		idsten=stenys[i].value;
		break;
		}
	}
	for(var i=0; i<pols.length; i++){
		if(pols[i].checked) { 
		idpol=pols[i].value;		
		break;
		}
	}
if (idvids != "")
{
	
if (idvids == 0)
{
/*потолок*/ 
if (idpot != "")
{
	for (var j = 0; j < 6; j++)
	{	
		if(j==idpot) 
		{ 
		  for(var n = 0; n < arraycenpot[j].length; n++) 
		  {
			if (arrayedpot[j][n]=="кв.м") 
			{
			summpot=summpot+arraycenpot[j][n]*sp;
		    }
		   else 
		    {
			summpot=summpot+arraycenpot[j][n]*pp;
			}
	      }
		}
	} 
}

/* стены*/	
if (idsten != "")
{
for(var k = 0; k < 6; k++)
	{	
		if(k==idsten) 
		{ 
		  for(var m = 0; m < arraycensten[k].length; m++) 
		  {
			summsten=summsten+arraycensten[k][m]*ss;
	      }
		}
	}
}

/* пол*/
if (idpol != "")
{
for(var k = 0; k < 6; k++)
	{	
		if(k==idpol) 
		{ 

		  for(var m = 0; m < arraycenpol[k].length; m++) 
		  {
			if (arrayedpol[k][m]=="кв.м") 
			{
			summpol=summpol+arraycenpol[k][m]*sp;
			}
			else 
			{
			summpol=summpol+arraycenpol[k][m]*pp;
			}
	      }
		}
	}
}

/*двери-окна*/
			var dok = 0;
			if (dv >= 1)
			{
			dok = dok + dv*arraycendo[0];
			dok = dok + dv*arraycendo[1];
			}
			
			if (ok >= 1)
			{
			dok = dok + ok*arraycenok[0];	
			dok = dok + ok*arraycenok[1];	
			dok = dok + ok*arraycenok[2];
			}
/* электрика*/	
			var elr = 0;
			if (vy >= 1)
			{
			elr = elr + vy*arraycenel[0];
			}
			if (ro >= 1)
			{
			elr = elr + ro*arraycenel[0];	
			} 

/* сантехника*/	
var san = 0;
var c = 0;
for (var ii=22; ii<27;ii++)	
{
	if(document.forma1.elements[ii].checked)
	{
	san = san + arraycensa[c];
}
	c = c + 1;
}

summ=summpot+summsten+summpol+dok+elr+san;
if ((a >0 && b > 0 && c > 0 ) && (summpot != 0 || summsten!= 0 ||  summpol!= 0 || dok!= 0 || elr != 0 || san!= 0))
{
document.getElementById('info_summ').innerHTML='Стоимость выбранных ремонтных работ = '+(summ).toLocaleString('ru')+' руб. <br /><br /><br />';
document.getElementById('butochs').style.display = 'inline-block';
}
else
{
alert("Пожалуйста, выберите необходимую отделку");
document.getElementById('info_summ').innerHTML=" ";
}

} /* если кап*/
else 
{
/*потолок*/ 
if (idpot != "")
{
	for (var j = 0; j < 6; j++)
	{	
		if(j==idpot) 
		{ 
		  for(var n = 0; n < arraycenkpot[j].length; n++) 
		  {
			if (arrayedpot[j][n]=="кв.м") 
			{
			summpot=summpot+arraycenkpot[j][n]*sp;
		    }
		   else 
		    {
			summpot=summpot+arraycenkpot[j][n]*pp;
			}
	      }
		}
	} 
}

/* стены*/	
if (idsten != "")
{
for(var k = 0; k < 6; k++)
	{	
		if(k==idsten) 
		{ 
		  for(var m = 0; m < arraycenksten[k].length; m++) 
		  {
			summsten=summsten+arraycenksten[k][m]*ss;
	      }
		}
	}
}

/* пол*/
if (idpol != "")
{
for(var k = 0; k < 6; k++)
	{	
		if(k==idpol) 
		{ 

		  for(var m = 0; m < arraycenkpol[k].length; m++) 
		  {
			if (arrayedpol[k][m]=="кв.м") 
			{
			summpol=summpol+arraycenkpol[k][m]*sp;
			}
			else 
			{
			summpol=summpol+arraycenkpol[k][m]*pp;		
			}
	      }
		}
	}
}

/*двери-окна*/
			var dok = 0;
			if (dv >= 1)
			{
			dok = dok + dv*arraycendo[0];
			dok = dok + dv*arraycendo[1];
			}
			
			if (ok >= 1)
			{
			dok = dok + ok*arraycenok[0];	
			dok = dok + ok*arraycenok[1];	
			dok = dok + ok*arraycenok[2];
			}
/* электрика*/	
			var elr = 0;
			if (vy >= 1)
			{
			elr = elr + vy*arraycenel[0];
			}
			if (ro >= 1)
			{
			elr = elr + ro*arraycenel[0];	
			} 

/* сантехника*/	
var san = 0;
var c = 0;
for (var ii=22; ii<27;ii++)	
{
	if(document.forma1.elements[ii].checked)
	{
	san = san + arraycensa[c];
}
	c = c + 1;
}

summ=summpot+summsten+summpol+dok+elr+san;
if ((a >0 && b > 0 && c > 0 ) && (summpot != 0 || summsten!= 0 ||  summpol!= 0 || dok!= 0 || elr != 0 || san!= 0))
{
document.getElementById('info_summ').innerHTML='Стоимость выбранных ремонтных работ = '+(summ).toLocaleString('ru')+' руб. <br /><br /><br />';
document.getElementById('butochs').style.display = 'inline-block';
}
else
{
alert("Пожалуйста, выберите необходимую отделку");
document.getElementById('info_summ').innerHTML=" ";
}

} /* если косм*/
}
else 
{
	alert ("Выберите вид ремонта: косметический или капитальный");
}


}
else
{
alert ("Пожалуйста, введите параметры помещения и выберите отделку");
document.getElementById('info_summ').innerHTML=" ";

} 

}         /*конец функции*/
		

function Pere()
{
document.getElementById('info_summ').innerHTML=" ";
document.getElementById('butpere').style.display = 'none';
}
function Ochs()
{
/*var inputs = document.querySelectorAll('input[type=text]');
for (var i = 0;  i < inputs.length; i++) {
  inputs[i].value = '';
}; */
document.getElementById('forma1').reset();
document.getElementById('info_summ').innerHTML=" ";
document.getElementById('butochs').style.display = 'none';

}
		
		
		
  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
	