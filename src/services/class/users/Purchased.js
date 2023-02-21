class Purchased {
  constructor(orderCode, orderDate, paymentCart, totalAmount) {
    this.orderCode = orderCode;
    this.orderDate = orderDate;
    this.paymentCart = paymentCart;
    this.status = "pending";
    this.totalAmount = totalAmount;
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
