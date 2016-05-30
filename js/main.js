require.config({
    baseUrl: 'js',
    paths: {
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        'TaxBrackets': 'NewTaxBrackets',
        'FoodViewModel': 'widgets/like-widget/like-widget-VM',
        text: 'lib/text'
    }
});


// Load modules and use them
require(['knockout', 'TaxBrackets', 'FoodViewModel'], function(ko, tax, food){

  ko.components.register('like-widget', {
    viewModel: { require: 'widgets/like-widget/like-widget' },
    template: { require: 'text!widgets/like-widget/like-widget.html' }
  });
    ko.applyBindings(tax, document.getElementById("TaxView"));
    ko.applyBindings(food, document.getElementById("FoodView"))
});
