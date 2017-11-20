//左侧下拉菜单!
$(".menu").mouseover(function(e){
	$(".drop-menu").css({
		"height":301,
		"opacity":1
	});
});
$(".menu").mouseout(function(e){
	$(".drop-menu").css({
		"height":0,
		"opacity":0
	});
});
$(".theme-menu").mouseover(function(e){
	$(".drop-theme").css({
		"height":101,
		"opacity":1
	});
});

$(".theme-menu").mouseout(function(e){
	$(".drop-theme").css({
		"height":0,
		"opacity":0
	});
});

//导航下拉菜单
$(".nav-theme").mouseover(function(e){
	$(".navTheme-item").css({
		"height":100,
		"opacity":1
	});
});
$(".nav-theme").mouseout(function(e){
	$(".navTheme-item").css({
		"height":0,
		"opacity":0
	});
});
// 微信微博
var html=`
	<div class="erweima" style="width:100px; height:0px; opacity:0; position:fixed; top:9%;right:10%; z-index:100;transition:all .3s linear; overflow:hidden;">
			<img src="index/erweima.png" alt="" style="width:100px; border-radius:10px;">
		</div>
		<div class="sinawb" style="width:100px; height:0px; opacity:0; position:fixed; top:9%;right:7%; z-index:100;transition:all .3s linear; overflow:hidden;">
			<img src="index/sina.png" alt="" style="width:100px; border-radius:10px;">
		</div>`;
$(".drop_ewm").html(html);

$(".wei").mouseover(function(e){
				$tar=$(".erweima");
				$tar.css({"height":100,"opacity":1});
			})
			$(".wei").mouseout(function(e){
				$tar=$(".erweima");
				$tar.css({"height":0,"opacity":0});
			})
			$(".sina").mouseover(function(e){
				$tar=$(".sinawb");
				$tar.css({"height":100,"opacity":1});
			})
			$(".sina").mouseout(function(e){
				$tar=$(".sinawb");
				$tar.css({"height":0,"opacity":0});
			})