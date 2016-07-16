var app = angular.module('myApp', ['ngMessages'])
app.constant('VERSION', '1.0')
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

//modify ng-model to include data.name etc...
