//José Alonso Zavala Pulido ID: 149974

_INPUT="2\n3 9\n17 24";
//console.log(_INPUT);
line=_INPUT.split("\n");
line2=line.join(" ");	
line=line2.split(" ");
T=line[0];
temp=0;
j=0;
if(1<=T && T<=100) {	
	for(x=1;x<line.length;x++) {
		A=line[x];
		x++;
		B=line[x];
		if(1<=A && A<=B && B<=10^9) {
			for(i=A; i<=B; i++) {
				resultado=Math.sqrt(i);
				if(resultado%1 == 0) {
					temp++;
				}
			}
			console.log(temp);
		}
		else {
			console.log("Valores negativos y mayores a mil millones no son validos, favor de cambiarlos");
		}
		temp=0;
	}
}
else {
	console.log("Número de casos no valido, porfavor reducir el número de casos");
}
