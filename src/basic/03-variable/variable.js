/**
 * var adalah kata kunci yang digunakan untuk mendeklarasikan sebuah variable baru
 * var bersifat dinamik, dan global scope, dan dapat diubah value-nya
 * sangat tidak direkomendasikan menggunakan var untuk mendeklarasikan variabel karena sifatnya yang dinamik
 * dan sulit untuk dilacak perubahannya
 */
var nama = "Udin";
console.log(nama); // Udin

/**
 * Let bersifat block scoped
 * Block Scoped adalah terminologi yang digunakan ketika sebuah variable
 * dideklarasikan atau dibuat di dalam atau diluar lingkup suatu blok kode, dan hanya dapat diakses di ruang lingkup itu saja
 * let dapat diubah value-nya
 */
let keluarga = "Amin";
console.log(keluarga); // Udin
keluarga = "Marjuki"; // mengubah value Amin menjadi Marjuki
console.log(keluarga); // Marjuki

/**
 * const atau dalam artian constant = konstanta
 * bersifat konstan, yang dimana ketika mendeklarasikan variable dengan kata kunci const
 * kita tidak dapat mengubah value dari variabel tersebut, dan variable ini harus di inisialisasi dengan sebuah value
 */
const jenisKelamin = "Laki-Laki";
console.log(jenisKelamin); // Laki-Laki
