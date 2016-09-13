angular.module("application").controller('projectController', function($scope) {

	$scope.public_menu = ["营销中心","酒店会所","餐饮娱乐","医院学校","办公楼","地产样板间"];

	$scope.yingxiao = [
		{"url":"./../../dist/img/img-block/xiangyang.jpeg","name":"襄阳红星美凯龙"},
		{"url":"./../../dist/img/img-block/xiantao.jpeg","name":"仙桃翰林公馆"}
	];

	$scope.jiudian = [
		{"url":"./../../dist/img/img-block/xinyang.jpeg","name":"信阳郝堂"},
		{"url":"./../../dist/img/img-block/xiangan.jpeg","name":"香岸华府住客会所"},
		{"url":"./../../dist/img/img-block/lefuyuan.jpeg","name":"武汉乐福园酒店"}
	];

	$scope.canyin = [
		{"url":"./../../dist/img/img-block/yinhu.jpeg","name":"武汉银湖三五酒店"},
		{"url":"./../../dist/img/img-block/hubei.jpeg","name":"湖北乐福园酒店"},
		{"url":"./../../dist/img/img-block/jindian.jpeg","name":"信阳金典KTV会所"}
	];

	$scope.yiyuan = [
		{"url":"./../../dist/img/img-block/yiyuan.jpeg","name":"武汉市第五人民医院"}
	];

	$scope.bangonglou = [
		{"url":"./../../dist/img/img-block/yinhu.jpeg","name":"开元地产资讯公司"}
	];

	$scope.yangbanjian = [
		{"url":"./../../dist/img/img-block/yanhai.jpeg","name":"沿海赛洛城联排别墅"},
		{"url":"./../../dist/img/img-block/jiazhou.jpeg","name":"加州香山美树"}
	];

	$scope.all = [
		{"url":"./../../dist/img/img-block/xiangyang.jpeg","name":"襄阳红星美凯龙"},
		{"url":"./../../dist/img/img-block/xiantao.jpeg","name":"仙桃翰林公馆"},
		{"url":"./../../dist/img/img-block/xinyang.jpeg","name":"信阳郝堂"},
		{"url":"./../../dist/img/img-block/xiangan.jpeg","name":"香岸华府住客会所"},
		{"url":"./../../dist/img/img-block/lefuyuan.jpeg","name":"武汉乐福园酒店"},
		{"url":"./../../dist/img/img-block/yinhu.jpeg","name":"武汉银湖三五酒店"},
		{"url":"./../../dist/img/img-block/hubei.jpeg","name":"湖北乐福园酒店"},
		{"url":"./../../dist/img/img-block/jindian.jpeg","name":"信阳金典KTV会所"},
		{"url":"./../../dist/img/img-block/yiyuan.jpeg","name":"武汉市第五人民医院"},
		{"url":"./../../dist/img/img-block/yinhu.jpeg","name":"开元地产资讯公司"},
		{"url":"./../../dist/img/img-block/yanhai.jpeg","name":"沿海赛洛城联排别墅"},
		{"url":"./../../dist/img/img-block/jiazhou.jpeg","name":"加州香山美树"}			
	];

	$scope.cases = $scope.all;

	$scope.selectMenu = function(selection){
		if(selection == "营销中心"){
			$scope.cases = $scope.yingxiao;
		}else if(selection == "酒店会所"){
			$scope.cases = $scope.jiudian;
		}else if(selection == "餐饮娱乐"){
			$scope.cases = $scope.canyin;
		}else if(selection == "医院学校"){
			$scope.cases = $scope.yiyuan;
		}else if(selection == "办公楼"){
			$scope.cases = $scope.bangonglou;
		}else if(selection == "地产样板间"){
			$scope.cases = $scope.yangbanjian;
		}else if(selection == "全部"){
			$scope.cases = $scope.all;
		}
	};

});
