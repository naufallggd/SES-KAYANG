function orderDesain(namaDesain, harga) {
    let phone = "6288989788269"; // Nomor WhatsApp Anda
    let message = `Halo, saya ingin memesan ${namaDesain} dengan harga Rp ${harga.toLocaleString('id-ID')}. Apakah desain ini tersedia?`;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
