// Fungsi yang berdiri sendiri
function sapa() {
  return "Selamat Pagi!";
}

console.log(sapa()); // Output: Selamat Pagi!

// Fungsi disimpan di dalam variabel

let berkenalan = function () {
  return "Hallo, nama saya khansa.";
};

console.log(berkenalan()); // Output: Hallo, nama saya khansa.

let umur = 21;

function ulangTahun() {
  umur += 1;
}

console.log(ulangTahun()); // Output: undefined
