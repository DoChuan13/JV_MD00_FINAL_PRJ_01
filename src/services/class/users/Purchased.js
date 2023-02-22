class Purchased {
  constructor(orderCode, orderDate, paymentCart, totalAmount, address, note) {
    this.orderCode = orderCode;
    this.orderDate = orderDate;
    this.paymentCart = paymentCart;
    this.status = "pending";
    this.totalAmount = totalAmount;
    this.address = address;
    this.note = note;
  }
  //
  getPurchased() {
    return this.product;
  }
  setPurchased(product) {
    this.product = product;
  }
}

export default Purchased;
