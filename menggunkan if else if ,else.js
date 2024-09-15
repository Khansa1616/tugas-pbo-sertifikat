//if...else if...else
//Digunakan apabila ada beberapa kondisi dan beberapa keputusan yang dijalankan.

if (kondisi1) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tercapai
} else if (kondisi2) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 tidak tercapai dan kondisi2 tercapai
} else if (kondisi3) {
  // masukkan kode yang akan dijalankan di sini apabila kondisi1 dan kondisi2 tidak tercapai, dan kondisi3 tercapai
}
{
  // masukkan kode yang akan dijalankan di sini apabila semua kondisi di atas TIDAK tercapai
}

let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}
