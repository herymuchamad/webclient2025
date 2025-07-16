document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    alert(`Terima kasih, ${nama}! Pesan Anda: "${pesan}" telah kami terima.`);
});
