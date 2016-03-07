angular.module('stockApp')
.directive('clock', function () {
        return {
            restrict: 'E',
            replace: 'true',
            template: '<div>{{datetime}}</div>',
            controller: ['$scope', '$interval', 'dateFilter', function ($scope, $interval, dateFilter) {
                var format, timer, clock;
                format = 'M/d/yy h:mm:ss a';
                
                this.start = function() {
                  timer = $interval(function () {
                    $scope.datetime = dateFilter(new Date(), format);
                  }, 1000);
                }
                
                this.pause = function() {
                  $interval.cancel(timer);
                }
            }],
            link: function(scope, element, attrs, ctrl) {
              ctrl.start();
            }
        };
 });
   