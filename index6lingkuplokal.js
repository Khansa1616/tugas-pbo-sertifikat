const olahraga = "basketball";

function namaAtlet() {
  let atlet = "Lionel Messi"; // lingkup fungsi
  const noMessi = 10; // lingkup fungsi
  if (olahraga === "basketball") {
    atlet = "Kobe Bryant";
    const noKobe = 24; // lingkup blok
    console.log(noMessi); // Output: 10
  }
  console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();
