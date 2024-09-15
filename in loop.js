//for (propertiObjek in namaObjek) berarti untuk setiap propertiObjek di namaObjek, maka jalankan kode di dalam {}. Variabel propertiObjek bisa diganti dengan nama variabel apapun.
//Contoh Penggunaan Seandainya kita memiliki sebuah objek buku, dan kita mau menampilkan masing-masing nama properti dan nilainya di console. Caranya adalah:

const buku = {
  judul: "Harry Potter and The Philosopher's Stone",
  pengarang: "J. K. Rowling",
  tahun: 1997,
};
for (x in buku) {
  console.log(x, ":", buku[x]);
}

/*
Output:
judul : Harry Potter and The Philosopher's Stone
pengarang : J. K. Rowling
tahun: 1997
*/
//for (x in buku) menyatakan untuk setiap properti x yang ada di variabel buku maka jalankan console.log(x, ':', buku[x]);
