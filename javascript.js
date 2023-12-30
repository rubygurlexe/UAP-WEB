const barangPenjualan = {
    "001": { nama: "A", harga: 10000 },
    "002": { nama: "B", harga: 20000 },
    "003": { nama: "C", harga: 30000 },
  };
  
  function Submit() {
    const kode = document.getElementById("kode").value;
    const jumlahBarang = parseInt(document.getElementById("jumlahBarang").value);
  
    if (!kode || jumlahBarang <= 0) {
      alert("input tidak valid!");
      return;
    }
  
    const totalHarga = barangPenjualan[kode].harga * jumlahBarang;
    alert(`Total pembayaran adalah : ${totalHarga}`);
  
    const jumlahBayar = parseFloat(prompt("Masukkan Uang User :"));
    if (jumlahBayar < totalHarga) {
      alert("input tidak valid!");
      return;
    }
  
    const kembalian = jumlahBayar - totalHarga;
    alert(`Total kembalian anda adalah : ${kembalian}`);
  }
  