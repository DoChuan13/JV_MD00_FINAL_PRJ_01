class Cart {
  constructor(id, buyQuantity, orderId, orderDate) {
    this.id = id;
    this.buyQuantity = buyQuantity;
    this.orderDate = orderId;
    this.orderDate = orderDate;
  }
  //
  getIdProduct() {
    return this.id;
  }
  //
  getBuyQuantity() {
    return this.buyQuantity;
  }
  setBuyQuantity(buyQuantity) {
    this.buyQuantity = buyQuantity;
  }
  //
  getOrderId() {
    return this.orderId;
  }
  //
  getOrderDate() {
    return this.orderDate;
  }
}

export default Cart;
