class Plant {
  constructor({
    id = Number(),
    name = String(),
    price = Number(),
    staff_favorite: staffFavorite = Boolean(),
    sun = String(),
    toxicity = Boolean(),
    url = String(),
    water = String(),
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.staffFavorite = staffFavorite;
    this.sun = sun;
    this.toxicity = toxicity;
    this.url = url;
    this.water = water;
    this.formattedPrice = `$${price}`
  }
}

export default Plant;
