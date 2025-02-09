
const database = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]

function isBarCodeValid(barcodes) {
    let count = 0;
    for (let i = 0; i < barcodes.length; i++) {
        const barcode = barcodes[i];
        for (let j = 0; j < database.length; j++) {
            const data = database[j];
            if (barcode === data.id) {
                count++;
            }
        }
    }
    if (count === barcodes.length) {
        return true;
    } else {
        return false;
    }

}

function calculateTotalPrice(barcodes) {
    let price = 0;
    for (let i = 0; i < database.length; i++) {
        const data = database[i];
        barcodes.forEach(element => {
            if (data.id === element) {
                price = price + data.price;
            }
        });
    }
    return price;
}
function countBarcodeNumber(barcodes) {
    let newBarcodes = [];
    let barcodeNum = [];
    for (let i = 0; i < barcodes.length; i++) {
        const barcode = barcodes[i];
        if (newBarcodes.indexOf(barcode) >= 0) {
            barcodeNum[newBarcodes.indexOf(barcode)]++;
        } else {
            newBarcodes.push(barcode);
            barcodeNum.push(1);
        }
    }
    return {barcodes:newBarcodes,barcodeNum:barcodeNum};
}
function createReceipt(barcodes) {
    if (isBarCodeValid(barcodes)) {
        const totalPrice = calculateTotalPrice(barcodes);
        let Receipts = "Receipts\n------------------------------------------------------------\n";
        const barcodeItem = countBarcodeNumber(barcodes);
        for (let i = 0; i < barcodeItem.barcodes.length; i++) {
            const barcode = barcodeItem.barcodes[i];
            for (let j = 0; j < database.length; j++) {
                const data = database[j];
                if (barcode === data.id) {
                    Receipts += data.name + "\t\t\t" + data.price + "\t\t" + barcodeItem.barcodeNum[i] + "\n";
                }
            }
        }
        Receipts += "------------------------------------------------------------\nPrice: " + totalPrice;
        return Receipts;
    }
    return null;
}


module.exports = { createReceipt, isBarCodeValid, calculateTotalPrice }