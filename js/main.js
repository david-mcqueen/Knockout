require.config({
    baseUrl: 'js',
    paths: {
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        'TaxBrackets': 'NewTaxBrackets',
        // 'FoodViewModel': 'widgets/like-widget/like-widget-VM',
        text: 'lib/text'
    }
});


// Load modules and use them
require(['knockout', 'TaxBrackets'], function(ko, tax){

  ko.components.register('food-widget', {
    viewModel: { require: 'widgets/food-widget/food-widget' },
    template: { require: 'text!widgets/food-widget/food-widget.html' }
  });
    ko.applyBindings(tax, document.getElementById("TaxView"));
    // ko.applyBindings(food, document.getElementById("FoodView"));
});
