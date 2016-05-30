define("FoodViewModel", ["knockout"], function(ko){
  function Product(name, rating) {
    this.name = name;
    this.userRating = ko.observable(rating || null);
}

function FoodViewModel() {
  this.products = [
    new Product('Garlic bread'),
    new Product('Pain au chocolat'),
    new Product('Seagull spaghetti', 'like') // This one was already 'liked'
];
}

return new FoodViewModel();
});
