define("MainViewModel", ["knockout"], function(ko){
  function MainViewModel(){
    this.grossSalary = ko.observable();
    this.runningTotal = ko.observable(123);
  }

  return new MainViewModel();
});
