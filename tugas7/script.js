window.onload = function() {
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";
};

// Deklarasi variabel dan konstanta
let name = "John";
const age = 30;
document.getElementById("output").innerHTML = "Nama saya adalah " + name + " dan umur saya adalah " + age;

// Array buah-buahan
let fruits = ["Apple", "Banana", "Mango", "Guava"];
let output = "";

for (let i = 0; i < fruits.length; i++) {
    output += fruits[i] + "<br>";
}

document.getElementById("buah").innerHTML = output;

// Objek person
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

document.getElementById("objek").innerHTML = "First Name " + person.firstName + "<br>Last Name : " + person.lastName + "<br>Age : " + person.age;

// Fungsi untuk cek nilai input dari pengguna
document.getElementById("cek_nilai").onclick = function() {
    // Membaca nilai dari input
    let userInput = document.getElementById("userInput").value;
    
    // Konversi nilai input ke integer
    let value = parseInt(userInput);

    // Inisialisasi variabel untuk output
    let output = "";

    // Gunakan pernyataan if...else untuk cek nilai
    if (value > 10) {
        output = "Nilai lebih besar dari 10.<br>";
    } else if (value === 10) {
        output = "Nilai sama dengan 10.<br>";
    } else if (value < 10) {
        output = "Nilai kurang dari 10.<br>";
    } else {
        output = "Input tidak valid.<br>";
    }

    document.getElementById("output_nilai").innerHTML = output;

}

// Fungsi untuk mengembalikan pesan sapaan
function greet(name) {
    return "Hello, " + name;
}
let nama = greet("Lusyana");

document.getElementById("pesan").innerHTML = nama;

// Fungsi untuk mengembalikan kuadrat dari angka yang diberikan
function calculateSquare(number) {
    return number * number;
}
let angka = calculateSquare(3)

document.getElementById("kuadrat").innerHTML = "Kuadrat: " + angka;

// Arrow function untuk menjumlahkan dua angka
const addNumbers = (a, b) => a + b;

// Call the arrow function
let sum = addNumbers(5, 7);

// Display the result in the "output" div
document.getElementById("tambah").innerHTML = "Jumlah: " + sum;

// Menambahkan nama siswa ke array
let students = ["Alice", "Bob", "Charlie"];

students.push("Lusyana");

// Initialize an empty string to hold the output
let output_student = "";

// Use forEach() to iterate over each student name
students.forEach(function(student) {
    output_student += student + "<br>";
});

// Display the result in the "output" div
document.getElementById("student").innerHTML = output_student;

// Create an object representing a car
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Initialize an empty string to hold the output for the car object
let carOutput = "Car Details:<br>";

// Use for...in loop to iterate over the properties of the car object
for (let key in car) {
    carOutput += key + ": " + car[key] + "<br>";
}

// Display the car object properties in the "output" div
document.getElementById("mobil1").innerHTML = carOutput;

// Create an array of car objects
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Mustang", year: 2021},
    {brand: "Tesla", model: "Model S", year: 2022}
];

// Initialize an empty string to hold the output for the array of cars
let carsOutput = "Cars List:<br>";

// Use forEach() to iterate over each car object in the array
cars.forEach(function(car) {
    carsOutput += "Brand: " + car.brand + ", Model: " + car.model + ", Year: " + car.year + "<br>";
});

// Append the list of cars to the "output" div
document.getElementById("mobil2").innerHTML += carsOutput;