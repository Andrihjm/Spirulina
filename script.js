// Pesan Default
const whatsappLinks = document.querySelectorAll(".whatsappLink");

whatsappLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pesan = "Halo, saya ingin menanyakan tentang produk Anda.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6285183193434&text=${encodeURIComponent(
      pesan
    )}`;

    link.setAttribute("href", whatsappUrl);
  });
});

// Form Pesanan
const form = document.getElementById("formPesanan");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const jumlahPesanan = document.getElementById("jumlah_pesanan").value;

  const pesan = `Hallo kak saya ingin memesan pupuk ferboost, 

Nama: ${nama}
Alamat Pengiriman: ${alamat}
Whatsapp: ${whatsapp}
Jumlah Pesanan: ${jumlahPesanan}

bisa minta dikirimkan invoice dan rekening pembayarannya 🙏`;

  const whatsappUrl = `https://wa.me/+6285183193434?text=${encodeURIComponent(
    pesan
  )}`;

  window.open(whatsappUrl, "_blank");
});
