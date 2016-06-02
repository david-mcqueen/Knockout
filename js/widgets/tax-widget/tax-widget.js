define(["knockout"], function(ko){


  function TaxBracket(name, value, threshold, amountIncluded) {
    var self = this;
    self.name = name;
    self.value = value;
    self.threshold = threshold;
    self.amountIncluded = ko.observable(amountIncluded);

    self.taxPayable = ko.computed(function(){
      return self.amountIncluded() * (value / 100);
    });
  }

  function TaxCalculatorViewModel(params) {
      var self = this;
      self.grossSalary = params.grossSalary;
      self.runningTotal = params.runningTotal;
      self.totalTaxable = ko.observable();
      self.totalTaxed = ko.observable();
      self.displayTaxbracketBreakdown = ko.observable(true);

      self.grossSalary.subscribe(function(newValue){
        self.calculateBracketBreakdown(newValue);
      });

      self.TaxBrackets = ko.observableArray([
          new TaxBracket("Personal Allowance", 0, 11000, 0),
          new TaxBracket("Basic rate", 20, 43000, 0),
          new TaxBracket("Higher rate", 40, 150000, 0),
          new TaxBracket("Additional rate", 45, 99999999, 0)
      ]);

      self.calculateBracketBreakdown = function(salary) {
        self.totalTaxed(0);
        self.totalTaxable(0);

        ko.utils.arrayForEach(self.TaxBrackets(), function(bracket){

          if (salary > bracket.threshold){
            bracket.amountIncluded(bracket.threshold);
            self.totalTaxable(self.totalTaxable() + bracket.threshold);
            salary -= bracket.threshold;
          } else{
            bracket.amountIncluded(salary);
            self.totalTaxable(self.totalTaxable() + parseFloat(salary));
            salary -= salary;
          }

          self.totalTaxed(self.totalTaxed() + parseFloat(bracket.taxPayable()));

          if (bracket.name === "Personal Allowance"){
            self.totalTaxable(self.totalTaxable() - bracket.amountIncluded());
          }
        });
      }
  }
  return TaxCalculatorViewModel;
});
