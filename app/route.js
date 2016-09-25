var routeApp = angular.module('routeApp',['ngRoute']);

routeApp.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'app/views/menu.html',
        controller: "knowledgeController"
      })
      .when('/jiaju', {
        templateUrl: 'app/views/jiaju.html'
      })
      .when('/hulan', {
        templateUrl: 'app/views/hulan.html'
      })
      .when('/taimian', {
        templateUrl: 'app/views/taimian.html'
      })
      .when('/sangna', {
        templateUrl: 'app/views/sangna.html'
      })
      .when('/tianyuan', {
        templateUrl: 'app/views/tianyuan.html'
      })
      .when('/wanggou', {
        templateUrl: 'app/views/wanggou.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

routeApp.controller('knowledgeController', function($scope) {

	$scope.jiancai = [
		{"name":"飘窗护栏那种好","url":"#/hulan"},
		{"name":"飘窗台面的选择","url":"#/taimian"}
	];

	$scope.jiaju = [
		{"name":"桑拿沙发的尺寸及优点","url":"#/sangna"},
		{"name":"田园沙发选购技巧及品牌","url":"#/tianyuan"}
	];
	
	$scope.zhuangshi = [
		{"name":"家居收纳用品有哪些","url":"#/jiaju"},
		{"name":"网淘来的厨房小物件","url":"#/wanggou"}
	];

	$scope.all = [
		{"name":"飘窗护栏那种好","url":"#/hulan"},
		{"name":"飘窗台面的选择","url":"#/taimian"},
		{"name":"桑拿沙发的尺寸及优点","url":"#/sangna"},
		{"name":"田园沙发选购技巧及品牌","url":"#/tianyuan"},
		{"name":"家居收纳用品有哪些","url":"#/jiaju"},
		{"name":"网淘来的厨房小物件","url":"#/wanggou"}
	];

	$scope.articles = $scope.all;

	$scope.selectMenu = function(name){
		if(name == "全部"){
			$scope.articles = $scope.all;
		}else if(name == "建材知识"){
			$scope.articles = $scope.jiancai;
		}else if(name == "家具知识"){
			$scope.articles = $scope.jiaju;
		}else if(name == "热门装饰"){
			$scope.articles = $scope.zhuangshi;
		}
	};	

});