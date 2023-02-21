class User {
  constructor(userName, email, prefix, phone, password) {
    // this.id = id;
    this.typeUser = "user";
    this.statusUser = true;
    this.userName = userName;
    this.firstName = "";
    this.lastName = "";
    this.email = email;
    this.prefix = prefix;
    this.phone = phone;
    this.password = password;
    this.dateOfBirth = "1990-01-01";
    this.address = "";
    this.favorite = [];
    this.cart = [];
    this.bought = [];
    this.userBio = ";";
  }
  //
  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName) {
    this.firstName = firstName;
  }
  //
  getLastName() {
    return this.lastName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  //
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  //
  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }
  //
  getDateOfBirth() {
    return this.dateOfBirth;
  }
  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address = address;
  }
  //
  getFavorite() {
    return this.favorite;
  }
  setFavorite(favorite) {
    this.favorite = favorite;
  }
  //
  getCart() {
    return this.cart;
  }
  setCart(cart) {
    this.cart = cart;
  }
  //
  getBought() {
    return this.bought;
  }
  setBought(bought) {
    this.bought = bought;
  }
}

export default User;
