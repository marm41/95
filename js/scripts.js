var guzik = document.getElementsByClassName('button');

console.log(guzik);

for ( var k = 0 ; k < (guzik.length) ; k++) {
	alert(guzik[0].innerText);
	alert(guzik[1].innerText);
	alert(guzik[2].innerText);
	alert(guzik[3].innerText);
	break;
};