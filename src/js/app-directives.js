//angular.module('helpApp').directive('lolBindWiki', ['WikiParser',
//function(WikiParser) {
//
//    return {
//        restrict: 'AE',
//        link: function (scope, element, attrs) {
//            if (attrs.lolBindWiki) {
//                scope.$watch(attrs.lolBindWiki, function(newVal) {
//                    WikiParser.makeHtml(element[0], newVal);
//                });
//            } else {
//                WikiParser.makeHtml(element[0], element.text());
//            }
//        }
//    };
//}]);
