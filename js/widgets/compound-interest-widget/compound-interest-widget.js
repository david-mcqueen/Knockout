define(['knockout'], function(ko) {



  function graphEntry(year, value, amountSaved){
    var self = this;
    self.year = year;
    self.value = value;
    self.amountSavedToDate = amountSaved;
    self.amountFromInterest = ko.computed(function(){
      return self.value - self.amountSavedToDate;
    });
  }

  function CompoundInterestViewModel(params) {
    var self = this;
      this.startingAmount = ko.observable(0);
      this.annualIncrease = ko.observable(0);
      this.rate = ko.observable(0.04);
      this.numYears = ko.observable(10);
      self.graphData = ko.observableArray([]);


      this.startingAmount.subscribe(function(){
        self.graphData.removeAll();
        self.generateGraph();
      });

      this.annualIncrease.subscribe(function(){
        self.graphData.removeAll();
        self.generateGraph();
      });

      this.rate.subscribe(function(){
        self.graphData.removeAll();
        self.generateGraph();
      });

      this.numYears.subscribe(function(){
        self.graphData.removeAll();
        self.generateGraph();
      });


      this.generateGraph = function(){
        var newBaseValue = new graphEntry(0, self.startingAmount(), self.startingAmount());
         self.graphData.push(newBaseValue);
        for (var i = 1; i <= self.numYears(); i++) {
          console.log(parseFloat(newBaseValue.value) + parseFloat(self.annualIncrease()));
          newBaseValue.value = parseFloat(newBaseValue.value) + parseFloat(self.annualIncrease());
          newBaseValue = new graphEntry(i,
              calculateGrowth(newBaseValue.value, self.rate()),
              (parseFloat(self.annualIncrease()) * i) + parseFloat(self.startingAmount()));
          self.graphData.push(newBaseValue);
        }
      };
  }

  function calculateGrowth(baseValue, rate){
    return parseFloat(baseValue) * (1.00 + rate);
  }

  return CompoundInterestViewModel;

});
