angular.module('articles', []).controller('articlesCtrl', function($scope) {
    $scope.articles =[
	{title:"Article 1 - angular repeater", body:"Body Content 1 - angular repeater", footer:"Footer Content 1 - angular repeater"},
	{title:"Article 2 - angular repeater", body:"Body Content 2 - angular repeater", footer:"Footer Content 2 - angular repeater"},
	{title:"Article 3 - angular repeater", body:"Body Content 3 - angular repeater", footer:"Footer Content 3 - angular repeater"},
	{title:"Article 4 - angular repeater", body:"Body Content 4 - angular repeater", footer:"Footer Content 4 - angular repeater"}
]});