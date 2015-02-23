angular.module('helpApp').directive('lolBindWiki', ['WikiParser',
function(WikiParser) {

    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            if (attrs.lolBindWiki) {
                scope.$watch(attrs.lolBindWiki, function(newVal) {
                    element.html(WikiParser.makeHtml(newVal));
                });
            } else {
                element.html(WikiParser.makeHtml(element.text()));
            }
        }
    };
}]);
