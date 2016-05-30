require.config({
    baseUrl: 'js',
    paths: {
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        'MainViewModel': 'MainViewModel',
        // 'FoodViewModel': 'widgets/like-widget/like-widget-VM',
        text: 'lib/text'
    }
});


// Load modules and use them
require(['knockout', 'MainViewModel'], function(ko, VM){

  ko.components.register('food-widget', {
    viewModel: { require: 'widgets/food-widget/food-widget' },
    template: { require: 'text!widgets/food-widget/food-widget.html' }
  });

  ko.components.register('tax-widget', {
    viewModel: { require: 'widgets/tax-widget/tax-widget' },
    template: { require: 'text!widgets/tax-widget/tax-widget.html' }
  });

  ko.applyBindings(VM, document.getElementById("MainView"));
  // ko.applyBindings(food, document.getElementById("FoodView"));
});
