// dom
// - Dùng JS để truy xuất vào các thẻ của html
// fetch
// - Fetch dùng để gửi request tới API lấy dữ liệu về (ở bài của mình là file db.json)
// forEach
// - Vòng lặp dùng để lấy các phần tử trong mảng
// filter: dùng cho chức năng xoá
// - filter dùng để loại bỏ phần tử theo điều kiện

// Mảng này dùng để lưu dữ liệu lấy từ fetch
let products = [];

// Khai báo 1 hàm để lấy dữ liệu
function layDuLieu() {
  // Sử dụng fetch để lấy dữ liệu từ file db.json
  // Cú pháp: fetch('link api' hoặc 'file db.json')
  // response.json(): lấy dữ liệu từ file db.json
  fetch("http://localhost:3000/products1")
    .then((response) => response.json())
    .then((data) => {
      // Gán lại giá trị cho mảng products là dữ liệu trong file db.json
      products = data;
      console.log(products);
      hienThiDuLieu(products);
      //console.log(products);
    });
}

// Khai báo 1 hàm hiển thị dữ liệu
function hienThiDuLieu(productList) {
  // Truy xuất tới thẻ tbody có id là product-table
  let tBody = document.querySelector("#product-table");
  // innerHTML dùng để tạo thẻ html trong tbody
  tBody.innerHTML = "";

  productList.forEach((product) => {
    // tạo ra đc thẻ tr bằng cách sử dụng hàm document.createElement
    let row = document.createElement("tr");

    // tạo ra thẻ td
    let idCell = document.createElement("td");
    // hàm textContent dùng để ghi dữ liệu vào thẻ
    idCell.textContent = product.id;
    // <td>1</td>
    // Cho thẻ td vào trong thẻ <tr><td>1</td></tr> bằng cách
    // sử dụng hàm appendChild
    row.appendChild(idCell); //<tr><td>1</td></tr>

    // Tên sản phẩm
    let nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    // Giá sản phẩm
    let priceCell = document.createElement("td");
    priceCell.textContent = product.price;
    row.appendChild(priceCell);

    // Số lượng
    let quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity;
    row.appendChild(quantityCell);

    // tạo ra nút xoá cho từng sản phẩm
    let actionCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Xoá";
    // Thêm sự kiện onclick
    // Sự onclick dùng để kiểm tra xem người dùng đã ấn chuột
    // vào nút hay chưa
    deleteButton.setAttribute("onclick", `deleteProduct(${product.id})`);
    row.appendChild(deleteButton);

    tBody.appendChild(row);
  });
}

// Hàm xoá sản phẩm
function deleteProduct(id) {
  // hàm confirm dùng để đưa ra thông báo
  let confirmDelete = confirm("Bạn có muốn xoá sản phẩm này không ?");
  // Nếu người dùng ấn ok thì biến confirmDelete = true
  // Nếu người dùng ấn cancel thì biến confirmDelete = false
  if (confirmDelete) {
    //console.log(products);
    products = products.filter((product) => !(product.id == id));
    //console.log(products);
    hienThiDuLieu(products);
  }
}

// Hàm thêm sản phẩm mới
function addProduct() {
  // Truy xuất tới thẻ input có id là id-product và lấy ra giá trị của ô input đó
  let idProduct = document.querySelector("#id-product").value;
  let nameProduct = document.querySelector("#name-product").value;
  let priceProduct = document.querySelector("#price-product").value;
  let quantityProduct = document.querySelector("#quantity-product").value;

  //console.log(idProduct, nameProduct);

  // Khai báo 1 object để lưu lại dữ liệu của người dùng nhập vào
  let product = {
    id: idProduct,
    name: nameProduct,
    price: priceProduct,
    quantity: quantityProduct,
  };

  // gửi dữ liệu người dùng vào trong mảng products
  // Để thêm phần tử vào cuối mảng thì sử dụng phương thức push
  products.push(product);
  hienThiDuLieu(products);
  //console.log(products);
}

// Hàm lấy dữ liệu luôn luôn phải được chạy
layDuLieu();
