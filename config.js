// Averix Web Configuration
const AVERIX_CONFIG = {
  brandName: "Averix Web",
  slogan: "Usahamu, Go Online!",
  description: "Bikin website jadi lebih mudah dan terjangkau.",
  whatsappNumber: "6288906333327",
  whatsappPlaceholder: "628XXXXXXXXXX",
  
  packages: {
    hemat: {
      id: "hemat",
      name: "PAKET HEMAT",
      price: 150000,
      priceFormatted: "Rp150.000",
      dp: 75000,
      pelunasan: 75000,
      description: "Cocok untuk usaha kecil yang baru mulai online.",
      features: [
        "Website satu halaman",
        "Informasi usaha dan layanan/produk",
        "Tombol WhatsApp",
        "Tampilan responsif untuk HP dan komputer",
        "Maksimal 2 kali revisi sesuai ruang lingkup yang disepakati"
      ]
    },
    usaha: {
      id: "usaha",
      name: "PAKET USAHA",
      price: 300000,
      priceFormatted: "Rp300.000",
      dp: 150000,
      pelunasan: 150000,
      description: "Cocok untuk usaha yang membutuhkan informasi lebih lengkap.",
      features: [
        "Maksimal 4 halaman",
        "Beranda, Tentang, Layanan/Produk, dan Kontak",
        "Tombol WhatsApp",
        "Tampilan responsif",
        "Maksimal 3 kali revisi sesuai ruang lingkup yang disepakati"
      ]
    },
    katalog: {
      id: "katalog",
      name: "PAKET KATALOG",
      price: 450000,
      priceFormatted: "Rp450.000",
      dp: 225000,
      pelunasan: 225000,
      description: "Cocok untuk usaha yang ingin menampilkan produk.",
      features: [
        "Katalog maksimal 20 produk",
        "Foto, nama, dan harga produk",
        "Tombol pemesanan melalui WhatsApp",
        "Tampilan responsif",
        "Maksimal 3 kali revisi sesuai ruang lingkup yang disepakati"
      ]
    }
  }
};

// Generate WhatsApp link
function getWhatsAppLink(message) {
  const number = AVERIX_CONFIG.whatsappNumber === AVERIX_CONFIG.whatsappPlaceholder 
    ? AVERIX_CONFIG.whatsappPlaceholder 
    : AVERIX_CONFIG.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Check if WhatsApp is placeholder
function isWhatsAppPlaceholder() {
  return AVERIX_CONFIG.whatsappNumber === AVERIX_CONFIG.whatsappPlaceholder;
}
