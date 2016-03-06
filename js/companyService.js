app.service('Company', function($http) {
  this.getCompanies = function(input) {
    return $http.jsonp('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input='+input+'&jsoncallback=JSON_CALLBACK');
}});