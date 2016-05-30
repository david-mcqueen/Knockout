define("MainViewModel", ["knockout"], function(ko){
  function MainViewModel(){
    this.grossSalary = ko.observable();
  }

  return new MainViewModel();
});
