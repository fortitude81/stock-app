app.controller('addCtrl', function($scope, $state, $stateParams, Company, Quote) {
 
  $scope.lookup = function() {
    if ($('#query').val()) {
      var input = $('#query').val();
      Company.getCompanies(input)
      .then(function(companies) {
        $scope.companies = companies.data;
      })
    }
    else {
      console.log('error');
    }
  }
  $scope.selectCompany = function(company) {
    Quote.getQuote(company.Symbol)
    .then(function(quote) {
      $state.go('list', {quote: quote.data});
    });
  }
});