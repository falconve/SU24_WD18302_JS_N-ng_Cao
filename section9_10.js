// Destructuring JS (Array / Object)
// Khai báo 1 mảng trong JS sử dụng dấu ngoặc []
let arrayList = [1, 2, 3, 4, 5];

// Truy xuất phần tử trong mảng
// console.log(arrayList[2]); // 3

// Cách cũ
// let so3 = arrayList[2];
// let so2 = arrayList[1];
// let so1 = arrayList[0];
// let so4 = arrayList[3];
// let so5 = arrayList[4];

// Cách mới sử dụng destructuring
// Destructuring: Cho phép gán các giá trị từ
// mảng hoặc object vào các biến riêng lẻ
let [so1, so2, so3, so4, so5] = arrayList;
console.log(so1);
console.log(so2);
console.log(so3);
console.log(so4);
console.log(so5);

// Bỏ qua giá trị
// Lưu ý: Khi muôn bỏ qua phần tử thì không khai báo biến nhưng
// vẫn phải có dấu phẩy
let arrList1 = [1, 2, 3, 4];
let [phanTu1, phanTu2, , phanTu4] = arrList1;
console.log(phanTu1);
console.log(phanTu2);
console.log(phanTu4);

// Khai báo 1 object sử dụng dấu ngoặc
// {}
let person = {
  name: "Minh",
  age: 20,
  address: "Hải Phòng",
};

// Truy xuất vào các key trong object
// Cách cũ
// console.log(person.name);
// console.log(person.age);
// console.log(person.address);

// Cách mới destructuring trong object
let { name, age, address } = person;
console.log(name);
console.log(age);
console.log(address);

// Khai báo 1 function trong js
function myFunction({ name, age, address }) {
  console.log(`Tên tôi là: ${name}, tuổi: ${age}, địa chỉ ${address}`);
}

// Chaỵ hàm
myFunction(person);

// BT: - Viết 1 hàm tính +, -, x, :
// calculate(4, 6)
// Sử dụng destructuring
// Gợi ý:
function calculate(a, b) {
  let tong = a + b;
  let hieu = a - b;
  let tich = a * b;
  let thuong = a / b;

  const phepToan = [tong, hieu, tich, thuong];
  return phepToan;
}

console.log((phepToan = calculate(4, 6)));

// Spread operator (Toán tử dấu ...)
// Trong array, object
let arr1 = ["FPT", "Polytechnic"];
let arr2 = ["Hải Phòng"];

// Nối 2 mảng dùng phương thức gì ?
// Phương thức .concat để nối 2 mảng
//let arr3 = arr1.concat(arr2);
//console.log(arr3); // ["FPT", "Polytechnic", "Hải Phòng"]

// Nối mảng sử dụng spread operator
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Sao chép mảng
let arr4 = [5, 6, 7];

// Sử dụng spread để sao chép mảng
let arr5 = [...arr4];

console.log(arr5);

let obj1 = {
  a: 1,
  b: 2,
};

/// Sử dụng spread để sao chép object
let obj2 = { ...obj1 };

console.log(obj2);

// Nối 2 obj
let obj3 = {
  name: "Tuan Anh",
  age: 26,
};

let obj4 = {
  address: "HP",
};

let obj5 = { ...obj3, ...obj4 };
console.log(obj5);

function tinhTong(a, b, c) {
  return a + b + c;
}

// Tính tổng các phần tử trong mảng
let numbers = [7, 8, 9];
console.log(tinhTong(...numbers));

// Spread operator: chuyển thành chuổi và ngăn cách nhau bởi dấu phẩy

// Rest parameter: cú pháp ...
function display(...items) {
  console.log(items);
}

display(1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12);

// Phân biệt spread operator và rest parameter:
// - Rest parameter: Dùng trong hàm để gộp các đối số thành mảng
// - Spread operator: Dùng để lấy ra các phần tử trong mảng và object

// LƯU Ý:
// - khi sử dụng rest parameter: là tham số cuối cùng
// - Với những hàm chưa xác định đc đối số truyền vào là bao nhiêu thì sử dụng rest param
function display1(a, ...items) {
  console.log(items);
}

// Default param: tham số mặc định
function phepNhan(a, b = 1) {
  return a * b;
}

console.log(phepNhan(5));
