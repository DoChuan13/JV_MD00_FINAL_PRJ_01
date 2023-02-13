class Favorite {
  constructor(id, productName, favoriteDate) {
    this.id = id;
    this.productName = productName;
    this.favoriteDate = favoriteDate;
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
  //
  getFavoriteDate() {
    return this.favoriteDate;
  }
}

export default Favorite;
