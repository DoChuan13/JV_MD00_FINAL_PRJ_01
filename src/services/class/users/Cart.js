class CartItem {
  constructor(id, productName, productImage, buyQuantity, productPrice) {
    this.id = id;
    this.productName = productName;
    this.productImage = productImage;
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
