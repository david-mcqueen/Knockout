require.config({
    baseUrl: 'js',
    paths: {
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        'TaxBrackets': 'NewTaxBrackets'
    }
});


// Load modules and use them
require(['knockout', 'TaxBrackets'], function(ko, tax){
    ko.applyBindings(tax);
});
