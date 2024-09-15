//Data/element dari suatu array bisa kita ubah dengan syntax seperti ini:

namaArray[nomorIndex] = nilaiBaru;

//Contohnya:

let namaBuah = ["Mangga", "Apel", "Jeruk"];

namaBuah[1] = "Semangka";

console.log(namaBuah); // Output: ["Mangga", "Semangka", "Jeruk"]

//Jadi untuk array JavaScript, pengubahan nilai element seperti berikut tidak akan memunculkan error walaupun variabel array-nya dideklarasikan dengan const:

const namaArray = [nilaiElement1, nilaiElement2];

// mengubah data di element pertama
namaArray[0] = nilaiElementBaru;

// menambah element baru ke array
namaArray[2] = nilaiElement3;
