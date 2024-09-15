function ganjilGenap(platNomor) {
  if (platNomor % 2 === 0) {
    return "Genap"; // Jika platNomor adalah bilangan genap
  } else {
    return "Ganjil"; // Jika platNomor adalah bilangan ganjil
  }
}

// Contoh penggunaan:
console.log(ganjilGenap(123)); // Output: Ganjil
console.log(ganjilGenap(124)); // Output: Genap
