function kosongkan() {

}

function salam() {
	// tangkap request form
	var usr = document.getElementById("username");
	var santri = usr.nama.value;
	//cek ada inputan / tidak
	if(santri == ""){
		//beri peringatan
		alert("Maaf Nama Anda Belum di Input");
}
	if else(password == ""){
		//beri peringatan
		alert("Maaf Password Anda Belum di Input");
}
	else{
	//setelah input nama beri salam
	alert("Assalamu'alaikum" + santri);
}
}


