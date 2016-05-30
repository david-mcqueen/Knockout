define("FoodViewModel", ["knockout"], function(ko){
  function Product(name, rating, chosenValue) {
    this.name = name;
    this.userRating = ko.observable(rating || null);
    this.chosenValue = ko.observable(chosenValue || false);
}

Product.prototype.like = function() {
    this.chosenValue('like');
};

Product.prototype.dislike = function() {
    this.chosenValue('dislike');
};

function FoodViewModel() {
  this.products = [
    new Product('Garlic bread'),
    new Product('Pain au chocolat'),
    new Product('Seagull spaghetti', 'like') // This one was already 'liked'
  ];
}

return new FoodViewModel();
});
