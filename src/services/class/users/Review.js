class Review {
  constructor(reviewContent, status) {
    this.reviewContent = reviewContent;
    this.status = status;
  }
  //
  getReviewContent() {
    return this.reviewContent;
  }
  setReviewContent(reviewContent) {
    this.reviewContent = reviewContent;
  }
  //
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
}
