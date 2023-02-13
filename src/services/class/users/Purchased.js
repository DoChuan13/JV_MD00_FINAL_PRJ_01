class Purchased {
  constructor(product) {
    this.product = product;
    this.review = {
      reviewContent: "",
      status: "",
    };
  }
  //
  getPurchased() {
    return this.product;
  }
  setPurchased(product) {
    this.product = product;
  }
  //
  getReview() {
    return this.review;
  }
  setReview(review) {
    this.product = review;
  }
}
