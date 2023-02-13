class PurchasedItem {
  constructor(
    id,
    orderId,
    productName,
    productTitle,
    productImage,
    productPrice,
    boughtQuantity,
    boughtDate
  ) {
    this.id = id;
    this.orderId = orderId;
    this.productName = productName;
    this.productTitle = productTitle;
    this.productImage = productImage;
    this.productPrice = productPrice;
    this.productData = "";
    this.boughtQuantity = boughtQuantity;
    this.boughtDate = boughtDate;
  }
  //
  getIdProduct() {
    return this.id;
  }
  //
  getOrderId() {
    return this.orderId;
  }
  //
  getProductName() {
    return this.productName;
  }
  //
  getProductTitle() {
    return this.productTitle;
  }
  //
  getProductImage() {
    return this.productImage;
  }
  //
  getProductPrice() {
    return this.productPrice;
  }
  //
  getBoughtQuantity() {
    return this.boughtQuantity;
  }
  //
  getBoughtDate() {
    return this.boughtDate;
  }
}

export default PurchasedItem;
