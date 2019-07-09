const printReceipt = require('../printReceipt');



it('should return a receipt given barcodes array', () => {
    expect(printReceipt.createReceipt(['0001', '0003', '0005', '0003'])).toBe(
        "Receipts\n------------------------------------------------------------\n"+
        "Coca Cola\t\t\t3\t\t1\n"+
        "Pepsi-Cola\t\t\t5\t\t2\n"+
        "Dr Pepper\t\t\t7\t\t1\n"+
        "------------------------------------------------------------\nPrice: 20"
        );
});

it('should return is valid given barcodes array', () => {
    // given
    const barcodes = ['0001', '0003', '0005', '0003'];
    //when
    const result = printReceipt.isBarCodeValid(barcodes);
    //then
    expect(result).toBe(true);
});

it('should return a total price given barcodes array', () => {
    // given
    const barcodes = ['0001', '0003', '0005', '0003'];
    //when
    const result = printReceipt.calculateTotalPrice(barcodes);
    //then
    expect(result).toBe(20);
});