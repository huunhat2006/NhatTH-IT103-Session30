let storePhone = [
    {
        id: 1,
        name: "IPHONE 16 PRO MAX",
        price: 35000000,
        quanlity: 100,
        company: "IPHONE",
    },
    {
        id: 2,
        name: "SAMSUNG S25 UNTRA",
        price: 31000000,
        quanlity: 50,
        company: "SAMSUNG",
    },
    {
        id: 3,
        name: "IPHONE 15 PRO MAX",
        price: 28000000,
        quanlity: 70,
        company: "IPHONE",
    },
    {
        id: 4,
        name: "SAMSUNG S20 FE",
        price: 15000000,
        quanlity: 30,
        company: "SAMSUNG",
    },
];

let cart = [];
let menu = `
1. Hiển thị danh sách điện thoại theo hãng 
2. Thêm điện thoại mới vào cửa hàng 
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại
5. Thanh toán điện thoại trong giỏ hàng
6. Sắp xếp điện thoại theo giá
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hàng
9. Thoát chương trình
Mời bạn nhập lựa chọn của mình 
`;

let loop = true;

while (loop) {
    let choice = +prompt(menu);

    switch (choice) {
        case 1:
            let company = prompt("Nhập tên hãng muốn xem (ví dụ: IPHONE, SAMSUNG):");
            let filteredPhones = storePhone.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
            if (filteredPhones.length > 0) {
                console.log(`Danh sách điện thoại của hãng ${company}:`);
                filteredPhones.forEach(phone => {
                    console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quanlity}`);
                });
            } else {
                console.log("Không có điện thoại của hãng này trong kho.");
            }
            break;

        case 2:
            let id = +prompt("Nhập ID điện thoại:");
            let name = prompt("Nhập tên điện thoại:");
            let price = +prompt("Nhập giá điện thoại:");
            let quantity = +prompt("Nhập số lượng điện thoại:");
            let companyName = prompt("Nhập hãng điện thoại:");

            storePhone.push({
                id,
                name,
                price,
                quantity,
                companyName,
            })
            console.log("Điện thoại đã được thêm vào cửa hàng.");
            break;

        case 3:
            let searchTerm = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
            let searchResults = storePhone.filter(phone => 
                phone.name.toLowerCase().includes(searchTerm.toLowerCase()) || phone.id === Number(searchTerm)
            );
        
            if (searchResults.length > 0) {
                console.log("Kết quả tìm kiếm:");
                searchResults.forEach(phone => {
                    console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quanlity}`);
                });
            } else {
                console.log("Không tìm thấy điện thoại.");
            }
            break;

        case 4:
            let buyId = +prompt("Nhập ID điện thoại cần mua:");
            let buyQuantity = +prompt("Nhập số lượng điện thoại cần mua:");
            let phoneToBuy = storePhone.find(phone => phone.id === buyId);
            if (phoneToBuy) {
                if (phoneToBuy.quanlity >= buyQuantity) {
                    phoneToBuy.quanlity -= buyQuantity;
                    cart.push({ phone: phoneToBuy, quantity: buyQuantity });
                    console.log(`Đã thêm ${buyQuantity} ${phoneToBuy.name} vào giỏ hàng.`);
                } else {
                    console.log("Số lượng trong kho không đủ.");
                }
            } else {
                console.log("Không tìm thấy điện thoại với ID này.");
            }
            break;

        case 5:
            let total = 0;
            cart.forEach(item => {
                total += item.phone.price * item.quantity;
            });
            console.log(`Tổng thanh toán: ${total} VND.`);
            cart = []; 
            console.log("Giỏ hàng đã được thanh toán.");
            break;

        case 6:
            
            break;

        case 7:
            // Hiển thị tổng số tiền của các điện thoại trong kho
            let totalValue = 0;
            storePhone.forEach(phone => {
                totalValue += phone.price * phone.quanlity;
            });
            console.log(`Tổng giá trị của các điện thoại trong kho: ${totalValue} VND.`);
            break;

        case 8:
            
            break;

        case 9:
            console.log("Hẹn gặp lại !!!");
            loop = false;
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
}
