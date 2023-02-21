class Favorite {
  constructor(id, productName) {
    this.id = id;
    this.productName = productName;
  }
  //
  getIdProduct() {
    return this.id;
  }
  //
  getProductName() {
    return this.productName;
  }
  setProductName(productName) {
    this.productName = productName;
  }
}

export default Favorite;
