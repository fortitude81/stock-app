app.controller('listCtrl', function($scope, $state, $stateParams, $localStorage, Quote) {
  $scope.$storage = $localStorage;
  if ($scope.$storage.quotes) {
    var quotes = $scope.$storage.quotes;
  }
  else {
    $scope.$storage.quotes = [];
  }
  $scope.$storage.quotes.push($stateParams.quote);
  console.log('$scope.$storage.quotes:',$scope.$storage.quotes);
  $scope.removeQuote = function(quote) {
    var index = $scope.$storage.quotes.indexOf(quote);
    $scope.$storage.quotes.splice(index, 1);
  };
});
