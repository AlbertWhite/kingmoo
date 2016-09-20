angular.module("application").controller('projectController', function($scope) {

	$scope.public_menu = ["营销中心","酒店会所","餐饮娱乐","医院学校","办公楼","地产样板间"];

	$scope.yingxiao = [
		{"url":"dist/img/img-block/xiangyang.jpeg","name":"襄阳红星美凯龙"},
		{"url":"dist/img/img-block/xiantao.jpeg","name":"仙桃翰林公馆"}
	];

	$scope.jiudian = [
		{"url":"dist/img/img-block/xinyang.jpeg","name":"信阳郝堂"},
		{"url":"dist/img/img-block/xiangan.jpeg","name":"香岸华府住客会所"},
		{"url":"dist/img/img-block/lefuyuan.jpeg","name":"武汉乐福园酒店"}
	];

	$scope.canyin = [
		{"url":"dist/img/img-block/yinhu.jpeg","name":"武汉银湖三五酒店"},
		{"url":"dist/img/img-block/hubei.jpeg","name":"湖北乐福园酒店"},
		{"url":"dist/img/img-block/jindian.jpeg","name":"信阳金典KTV会所"}
	];

	$scope.yiyuan = [
		{"url":"dist/img/img-block/yiyuan.jpeg","name":"武汉市第五人民医院"}
	];

	$scope.bangonglou = [
		{"url":"dist/img/img-block/yinhu.jpeg","name":"开元地产咨询公司"}
	];

	$scope.yangbanjian = [
		{"url":"dist/img/img-block/yanhai.jpeg","name":"沿海赛洛城联排别墅"},
		{"url":"dist/img/img-block/jiazhou.jpeg","name":"加州香山美树"}
	];

	$scope.all = [
		{"url":"dist/img/img-block/xiangyang.jpeg","name":"襄阳红星美凯龙"},
		{"url":"dist/img/img-block/xiantao.jpeg","name":"仙桃翰林公馆"},
		{"url":"dist/img/img-block/xinyang.jpeg","name":"信阳郝堂"},
		{"url":"dist/img/img-block/xiangan.jpeg","name":"香岸华府住客会所"},
		{"url":"dist/img/img-block/lefuyuan.jpeg","name":"武汉乐福园酒店"},
		{"url":"dist/img/img-block/yinhu.jpeg","name":"武汉银湖三五酒店"},
		{"url":"dist/img/img-block/hubei.jpeg","name":"湖北乐福园酒店"},
		{"url":"dist/img/img-block/jindian.jpeg","name":"信阳金典KTV会所"},
		{"url":"dist/img/img-block/yiyuan.jpeg","name":"武汉市第五人民医院"},
		{"url":"dist/img/img-block/yinhu.jpeg","name":"开元地产咨询公司"},
		{"url":"dist/img/img-block/yanhai.jpeg","name":"沿海赛洛城联排别墅"},
		{"url":"dist/img/img-block/jiazhou.jpeg","name":"加州香山美树"}			
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

	$scope.projectName = "襄阳红星美凯龙";
	$scope.projectTime = "2012年7月";
	$scope.projectSize = "1300 ㎡";
	$scope.projectFor = "湖北红星广场投资有限公司";
	$scope.projectLocation = "湖北襄阳";

	$scope.projectImgs = [
		"dist/img/project/xiangyang1.jpeg",
		"dist/img/project/xiangyang2.jpg",
		"dist/img/project/xiangyang3.jpg",
		"dist/img/project/xiangyang4.jpg",
		"dist/img/project/xiangyang5.jpg",
		"dist/img/project/xiangyang6.jpg",
		"dist/img/project/xiangyang7.jpg",
		"dist/img/project/xiangyang8.jpg"

	];

	$scope.openModal = function(name){
		if(name == "襄阳红星美凯龙"){
			$scope.projectName = "襄阳红星美凯龙";
			$scope.projectTime = "2012年7月";
			$scope.projectSize = "1300 ㎡";
			$scope.projectFor = "湖北红星广场投资有限公司";
			$scope.projectLocation = "湖北襄阳";

			$scope.projectImgs = [
				"dist/img/project/xiangyang1.jpeg",
				"dist/img/project/xiangyang2.jpg",
				"dist/img/project/xiangyang3.jpg",
				"dist/img/project/xiangyang4.jpg",
				"dist/img/project/xiangyang5.jpg",
				"dist/img/project/xiangyang6.jpg",
				"dist/img/project/xiangyang7.jpg",
				"dist/img/project/xiangyang8.jpg"

			];
		}else if(name == "仙桃翰林公馆"){
			$scope.projectName = "仙桃翰林公馆";
			$scope.projectTime = "2011年10月";
			$scope.projectSize = "500 ㎡";
			$scope.projectFor = "湖北忆美地产置业有限公司";
			$scope.projectLocation = "湖北仙桃";

			$scope.projectImgs = [
				"dist/img/project/xiantao1.jpeg",
				"dist/img/project/xiantao2.jpg",
				"dist/img/project/xiantao3.jpg",
				"dist/img/project/xiantao4.jpg",
				"dist/img/project/xiantao5.jpg"
			];
		}else if(name == "信阳郝堂"){
			$scope.projectName = "信阳郝堂";
			$scope.projectTime = "2011年10月";
			$scope.projectSize = "500 ㎡";
			$scope.projectFor = "信阳郝堂";
			$scope.projectLocation = "信阳";

			$scope.projectImgs = [
				"dist/img/project/xinyang1.jpg",
				"dist/img/project/xinyang2.jpg",
				"dist/img/project/xinyang3.jpg",
				"dist/img/project/xinyang4.jpg"
			];
		}else if(name == "香岸华府住客会所"){
			$scope.projectName = "香岸华府住客会所";
			$scope.projectTime = "2010";
			$scope.projectSize = "2600 ㎡";
			$scope.projectFor = "湖北家利安房地产有限公司";
			$scope.projectLocation = "湖北仙桃";

			$scope.projectImgs = [
				"dist/img/project/xiangan1.jpg",
				"dist/img/project/xiangan2.jpg",
				"dist/img/project/xiangan3.jpg",
				"dist/img/project/xiangan4.jpg"
			];
		}else if(name == "武汉银湖三五酒店"){
			$scope.projectName = "武汉银湖三五酒店";
			$scope.projectTime = "2015年1月";
			$scope.projectSize = "1200 ㎡";
			$scope.projectFor = "武汉银湖三五酒店";
			$scope.projectLocation = "湖北武汉";

			$scope.projectImgs = [
				"dist/img/project/yinhu1.jpeg",
				"dist/img/project/yinhu2.jpg",
				"dist/img/project/yinhu3.jpg",
				"dist/img/project/yinhu4.jpg",
				"dist/img/project/yinhu5.jpg",
				"dist/img/project/yinhu6.jpg",
				"dist/img/project/yinhu7.jpg",
				"dist/img/project/yinhu8.jpg",
				"dist/img/project/yinhu9.jpg",
				"dist/img/project/yinhu10.jpg"
			];
		}else if(name == "湖北乐福园酒店"){
			$scope.projectName = "湖北乐福园酒店";
			$scope.projectTime = "2013年1月";
			$scope.projectSize = "1000 ㎡";
			$scope.projectFor = "湖北乐福园酒店";
			$scope.projectLocation = "湖北武汉";

			$scope.projectImgs = [
				"dist/img/project/hubei1.jpeg",
				"dist/img/project/hubei2.jpg",
				"dist/img/project/hubei3.jpg",
				"dist/img/project/hubei4.jpg",
				"dist/img/project/hubei5.jpg",
				"dist/img/project/hubei6.jpg"
			];
		}else if(name == "信阳金典KTV会所"){
			$scope.projectName = "信阳金典KTV会所";
			$scope.projectTime = "2013年1月";
			$scope.projectSize = "500㎡";
			$scope.projectFor = "湖北金沐";
			$scope.projectLocation = "湖北";

			$scope.projectImgs = [
				"dist/img/project/ktv1.jpeg",
				"dist/img/project/ktv2.jpg",
				"dist/img/project/ktv3.jpg",
				"dist/img/project/ktv4.jpg"
			];
		}else if(name == "武汉市第五人民医院"){
			$scope.projectName = "武汉市第五人民医院";
			$scope.projectTime = "2008年1月";
			$scope.projectSize = "9000㎡";
			$scope.projectFor = "武汉市第五人民医院";
			$scope.projectLocation = "湖北武汉";

			$scope.projectImgs = [
				"dist/img/project/yiyuan1.jpg",
				"dist/img/project/yiyuan2.jpg",
				"dist/img/project/yiyuan3.jpg",
				"dist/img/project/yiyuan4.jpg"
			];
		}else if(name == "开元地产咨询公司"){
			$scope.projectName = "开元地产咨询公司";
			$scope.projectTime = "2013年";
			$scope.projectSize = "560㎡";
			$scope.projectFor = "开元地产咨询公司";
			$scope.projectLocation = "湖北武汉";

			$scope.projectImgs = [
				"dist/img/project/dichan1.jpeg",
				"dist/img/project/dichan2.jpg",
				"dist/img/project/dichan3.jpg",
				"dist/img/project/dichan4.jpg",
				"dist/img/project/dichan5.jpg",
				"dist/img/project/dichan6.jpg",
				"dist/img/project/dichan7.jpg"
			];
		}else if(name == "沿海赛洛城联排别墅"){
			$scope.projectName = "沿海赛洛城联排别墅";
			$scope.projectTime = "2010年";
			$scope.projectSize = "500㎡";
			$scope.projectFor = "沿海绿色家园发展（武汉）有限公司";
			$scope.projectLocation = "湖北武汉";

			$scope.projectImgs = [
				"dist/img/project/yanhai1.jpeg",
				"dist/img/project/yanhai2.jpg",
				"dist/img/project/yanhai3.jpg",
				"dist/img/project/yanhai4.jpg"
			];
		}else if(name == "加州香山美树"){
			$scope.projectName = "加州香山美树";
			$scope.projectTime = "2011年";
			$scope.projectSize = "125㎡";
			$scope.projectFor = "武汉市融盛房地产开发有限公司";
			$scope.projectLocation = "湖北武汉";

			$scope.projectImgs = [
				"dist/img/project/jiazhou1.jpeg",
				"dist/img/project/jiazhou2.jpg",
				"dist/img/project/jiazhou3.jpg",
				"dist/img/project/jiazhou4.jpg",
				"dist/img/project/jiazhou5.jpg"
			];
		}
	}

});
