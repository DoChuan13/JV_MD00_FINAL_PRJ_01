class CartItem {
  constructor(id, productName, buyQuantity, productPrice) {
    this.id = id;
    this.productName = productName;
    this.buyQuantity = buyQuantity;
    this.productPrice = productPrice;
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
}

export default CartItem;
