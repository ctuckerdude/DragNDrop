angular.module('ui-templates', ['template/accordion/accordion-group.html', 'template/alert/alert.html']);

angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\" style=\"cursor:pointer\">\n" +
    "     {{heading}}\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n" +
    "      <div class=\"panel-body\" ng-transclude></div>\n" +
    "  </div>\n" +
    "</div>	");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html",
    "<div class='alert' ng-class='type && \"alert-\" + type'>\n" +
    "    <button ng-show='closeable' type='button' class='close' ng-click='close()'>Close Me</button>\n" +
    "     <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);
