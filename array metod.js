//Mengubah Element Array Menjadi String dengan toString()
//Method toString() akan menggabungkan semua element array dan mengubahnya ke tipe data string dengan penghubung tanda koma , di antara element array.

Contoh: letarray = [1, 2, 3, "halo", false, true];
console.log(array.toString()); // Output: 1,2,3,halo,false,true

//Menggabungkan Element Array dengan join()
//Method join() menggabungkan semua element array, kemudian mengubahnya menjadi string. Konsepnya hampir sama dengan method toString(), namun perbedaannya kita bisa menambahkan karakter tertentu sebagai penghubung antara element array.

array.join(penghubung);
//Penjelasan syntax di atas:Parameter penghubung adalah optional parameter, yaitu parameter yang boleh diisi, boleh juga dikosongkan. penghubung menentukan karakter apa yang mau ditambahkan sebagai penghubung antara element array. Secara default, apabila dikosongkan, array.join() akan menggunakan tanda koma , sebagai penghubung element array.
Contoh: letarray = [1, 2, 3, "halo", false, true];

console.log(array.join()); // Output: 1,2,3,halo,false,true
console.log(array.join(" ")); // Output: 1 2 3 halo false true
console.log(array.join("#")); // Output: 1#2#3#halo#false#true
console.log(array.join("...")); // Output: 1...2...3...halo...false...true

//Menambah dan Mengeluarkan (Menghapus) Element Array dengan pop(), push(), shift(), dan unshift()
//pop(), mengeluarkan element terakhir dari sebuah array.

Contoh: letarray = [1, 2, 3, "halo", false, true];

array.pop();

console.log(array); // Output: [1, 2, 3, "halo", false]
//push(), menambah element di bagian akhir dari sebuah array.

Contoh: letarray = [1, 2, 3, "halo", false, true];

array.push("Selamat Pagi");

console.log(array); // Output: [1, 2, 3, "halo", false, true, "Selamat Pagi"]shift(), mengeluarkan element pertama dari sebuah array.

Contoh: letarray = [1, 2, 3, "halo", false, true];

array.shift();

console.log(array); // Output: [2, 3, "halo", false, true] ,unshift(), menambah element di bagian awal array.

//Contoh

let array = [1, 2, 3, "halo", false, true];
array.unshift("Selamat Pagi");

console.log(array); // Output: ["Selamat Pagi", 1, 2, 3, "halo", false, true]
//Method concat() digunakan untuk menggabungkan 2 array atau lebih.
array1.concat(array2, array3, ...arrayX);
Contoh: letbuah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, biji);

console.log(makanan); // Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]

//Method reverse() akan mengurutkan element pada array dari index yang terbesar hingga index yang terkecil, bukan nilai yang terbesar hingga yang terkecil.

array.reverse();
Contoh: letbuah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.reverse();

console.log(buah); // Output: ["Jambu", "Mangga", "Apel", "Jeruk"]  Lalu, bagaimana caranya untuk mengurutkan nilai element pada array dari yang terbesar hingga yang terkecil? Caranya adalah menggunakan kombinasi dari method sort() dan reverse().

let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort().reverse();

console.log(buah); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"] Penjelasan contoh di atas: Array buah akan diurutkan terlebih dahulu element-elementnya dari nilai yang terkecil, hingga yang terbesar dengan menggunakan sort().

buah.sort(); // output: ["Apel", "Jambu", "Jeruk", "Mangga"]   Kemudian, elementnya akan dibalik urutannya berdasarkan index dari yang terbesar hingga yang terkecil dengan menggunakan reverse().

// posisi setelah sort() ["Apel", "Jambu", "Jeruk", "Mangga"]
buah.reverse(); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]
