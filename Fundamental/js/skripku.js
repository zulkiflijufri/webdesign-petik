alert('Hai Brother');
alert('Selamat datang di Form Ini');
alert('Apakah anda sudah siap?');

function kosongin() {

}

function salam() {
	// tangkap request form
	var frm = document.getElementById("formulir");
	var santri = frm.nama.value;
	//cek ada inputan / tidak
	if(santri == ""){
		//beri peringatan
		alert("Maaf Nama Anda Belum di Input");
}
	else{
	//setelah input nama beri salam
	alert("Assalamu'alaikum" + santri);
}
}