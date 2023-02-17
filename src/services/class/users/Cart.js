class CartItem {
  constructor(id, buyQuantity, orderDate) {
    this.id = id;
    this.buyQuantity = buyQuantity;
    this.orderId = "";
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

export default CartItem;
