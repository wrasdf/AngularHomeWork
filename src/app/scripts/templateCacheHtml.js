angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/views/main.html","<div class=\"container\"><div ng-include=\"\'app/views/navbar.html\'\"></div><div class=\"jumbotron text-center\"><h1>\'Allo, \'Allo!</h1><p class=\"lead\"><img src=\"app/assets/images/yeoman.png\" alt=\"I\'m Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p><a class=\"btn btn-lg btn-success\" ng-href=\"#\">Splendid!</a></p></div><div class=\"row\"><div class=\"col-sm-6 col-md-4\" ng-repeat=\"awesomeThing in awesomeThings | orderBy:\'rank\'\"><div class=\"thumbnail\"><img class=\"pull-right\" ng-src=\"app/assets/images/{{awesomeThing.logo}}\" alt=\"{{awesomeThing.title}}\"><div class=\"caption\"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href=\"{{awesomeThing.url}}\">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class=\"footer\"><p>With ♥ from <a href=\"https://twitter.com/Swiip\">@Swiip</a></p></div></div>");
$templateCache.put("app/views/navbar.html","<nav class=\"navbar navbar-static-top navbar-inverse\" ng-controller=\"NavbarCtrl\"><div class=\"container-fluid\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"https://github.com/Swiip/generator-gulp-angular\"><span class=\"glyphicon glyphicon-home\"></span> Gulp Angular</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-6\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a ng-href=\"#\">Home</a></li><li><a ng-href=\"#\">About</a></li><li><a ng-href=\"#\">Contact</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>");}]);