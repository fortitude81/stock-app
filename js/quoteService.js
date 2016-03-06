app.service('Quote', function($http) {
  this.getQuote = function(symbol) {
    return $http.jsonp('http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol='+symbol+'&jsoncallback=JSON_CALLBACK');
}});
