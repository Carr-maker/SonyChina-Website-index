window.onload = function(){
			var timer = null;
			var oGroup = document.getElementById('grouplink');
			var oInp = document.getElementById('input1');
			var oSearch = document.getElementById('search_icon');
			var aNav_right = document.getElementsByClassName('nav_right');
			var oLi_first = document.getElementById('li_first');
			var oMenu = document.getElementById('menu');
			var oMmlh = document.getElementById('mmlh');
			var oMmrh = document.getElementById('mmrh');
			var oL4 = document.getElementById('l4');
			var oR2 = document.getElementById('r2');

			// grouplink的颜色改变
			oGroup.onmouseover = function(){
				oGroup.src = "img/images/GroupLink_White_Hober_EN.png";
			};
			oGroup.onmouseout = function(){
				oGroup.src = "img/images/Grouplink_White_EN.png";
			};


			// 搜索框的效果（有bug）
			oInp.onclick = function(){
				oInp.style.backgroundColor = 'white';
				// oSearch.style.filter='drop-shadow(0px 0px black)';
				aNav_right[0].style.background = 'white';
				aNav_right[0].style.border = 'none';
			};
			oInp.onblur = function(){
				oInp.style.backgroundColor = 'black';
				// oSearch.style.filter='drop-shadow(0px 0px black)';
				aNav_right[0].style.background = 'black';
				aNav_right[0].style.border = '2px solid rgb(66, 66, 66)';
			}

			// 下拉框&下拉框里效果
			oLi_first.onmouseover = oMenu.onmousemove = function(){
				clearInterval(timer);
				oMenu.style.display = 'block';
				oLi_first.getElementsByTagName('span')[0].style.opacity = '0.5';	
			};
			oLi_first.onmouseout = oMenu.onmouseout = function(){
				timer = setTimeout(function(){
					oMenu.style.display = 'none';
					oLi_first.getElementsByTagName('span')[0].style.opacity = '1';
				},500);		
			}
			// 下拉效果(header)
			var goSony = oMmlh.getElementsByTagName('a')[1].getElementsByTagName('span')[0];
			var goSty = oMmrh.getElementsByTagName('a')[1].getElementsByTagName('span')[0];
			goSony.onmouseover = function(){
				goSony.style.opacity = '1';
			};
			goSony.onmouseout = function(){
				goSony.style.opacity = '0.5'
			};
			goSty.onmouseover = function(){
				goSty.style.opacity = '1';
			};
			goSty.onmouseout = function(){
				goSty.style.opacity = '0.5'
			};
			// 下拉效果(list)
			var way = oL4.getElementsByTagName('dl')[2].getElementsByTagName('span')[0];
			var car = oR2.getElementsByTagName('dl')[2].getElementsByTagName('span')[0];
			way.onmouseover = function(){
				way.style.background = 'url("img/images/top_xiaofei_pic.gif") no-repeat -9px -11px';
			};
			way.onmouseout = function(){
				way.style.background = 'url("img/images/top_xiaofei_pic.gif") no-repeat -9px 0px';
			};
			car.onmouseover = function(){
				car.style.background = 'url("img/images/subMenu_img_new.png") no-repeat 0px -11px';
			};
			car.onmouseout = function(){
				car.style.background = 'url("img/images/subMenu_img_new.png") no-repeat 0px 0px';
			};



			//轮播页
			var oPlay = document.getElementById('playimages');
			var oBtnPrev = getByClass(oPlay,'prev')[0];
			var oBtnNext = getByClass(oPlay,'next')[0];
			var oUlBig = getByClass(oPlay,'big_pic')[0];
			var aLiBig = oUlBig.getElementsByTagName('li');
			var oDivSmall = getByClass(oPlay,'small_pic')[0];
			var oUlSmall = oDivSmall.getElementsByTagName('ul')[0];
			var aLiSmall = oUlSmall.getElementsByTagName('li');
			var now = 0;

			for(var i=0;i<aLiSmall.length;i++){
				aLiSmall[i].index = i;//循环给小图自定义赋值
				aLiSmall[i].onclick = function(){
					if(this.index == now)return;//如果当前的index为now，即重复点击，不执行后续函数

					now = this.index;//如果不是重复点击，更新now的值

					tab();//执行运动函数
				};
			};

			function tab(){
				for(var i=0;i<aLiSmall.length;i++){
					aLiSmall[i].getElementsByTagName('img')[0].src = "img/icon/pagination_1.png";
				};//把所有的小图变为圆点

				aLiSmall[now].getElementsByTagName('img')[0].src = "img/icon/pagination_2.png";//当前图片的小图变为长条

				startMove(oUlBig,{'left':-1210*now});//运动框架
			};
			//按钮功能实现
			oBtnNext.onclick = function(){
				now++;
				if(now == aLiSmall.length){
					now = 0;
				};
				tab();
			};
			oBtnPrev.onclick = function(){
				now--;
				if(now == -1){
					now = aLiSmall.length-1;
				};
				tab();
			};
			//自动播放&鼠标移入停止、移出继续
			var timer = setInterval(oBtnNext.onclick,2000);
			oPlay.onmouseover = function(){
				clearInterval(timer);
			};
			oPlay.onmouseout = function(){
				timer = setInterval(oBtnNext.onclick,2000);
			}


			//新闻中心效果
			var oNewsCenter = document.getElementById('news_center');

			oNewsCenter.getElementsByTagName('span')[0].onmouseover = function(){
				oNewsCenter.getElementsByTagName('span')[0].style.background = 'url("img/icon/tit_news_center.gif") no-repeat -0px -40px';
			};
			oNewsCenter.getElementsByTagName('span')[0].onmouseout = function(){
				oNewsCenter.getElementsByTagName('span')[0].style.background = 'url("img/icon/tit_news_center.gif") no-repeat -0px -0px';
			};


			//悬停放大缩小，替代hover
			var aZoom = document.getElementsByClassName('zoom');

			for(var z=0;z<aZoom.length;z++){
				aZoom[z].onmouseover = function(){
					this.style.transition = 'all 1s ease';
					this.style.transform = 'scale(1.08)'; 
				};
				aZoom[z].onmouseout = function(){
					this.style.transition = 'all 1s ease';
					this.style.transform = 'scale(1)'; 
				};
			};


			//旗下公司hover效果
			var aTw = document.getElementsByClassName('toWhite');

			for(var t=0;t<aTw.length;t++){
				aTw[t].onmouseover = function(){
					this.style.top = '-114px';
				};
				aTw[t].onmouseout = function(){
					this.style.top = '0px';
				};
			};


			//售后服务效果
			var oAs = document.getElementById('after_sale');
			var aAsl1 = oAs.getElementsByClassName('asl1');

			aAsl1[0].getElementsByTagName('a')[0].getElementsByTagName('p')[0].onmouseover = function(){
				aAsl1[0].getElementsByTagName('a')[0].getElementsByTagName('img')[0].src = "img/icon/footer_store_search_hover.gif";
			};
			aAsl1[0].getElementsByTagName('a')[0].getElementsByTagName('p')[0].onmouseout = function(){
				aAsl1[0].getElementsByTagName('a')[0].getElementsByTagName('img')[0].src = "img/icon/ooter_store_search1.gif";
			};

			var aOserve = oAs.getElementsByClassName('online_serve');
			var oOserve = aOserve[0].getElementsByTagName('span')[0];

			oOserve.onmouseover = function(){
				this.style.background = 'url("img/images/onlineservice_pic.jpg") no-repeat 0px -18px';
			};
			oOserve.onmouseout = function(){
				this.style.background = 'url("img/images/onlineservice_pic.jpg") no-repeat 0px 0px';
			};

			var oWb = document.getElementById('weibo');
			var oWx = document.getElementById('weixin');
			
			oWb.onmouseover = function(){
				this.style.top = '-40px';
			};
			oWb.onmouseout = function(){
				this.style.top = '0px';
			};
			oWx.onmouseover = function(){
				this.style.top = '-40px';
			};
			oWx.onmouseout = function(){
				this.style.top = '0px';
			}


			//页面底部效果
			var oFt3 = document.getElementsByClassName('ft3')[0];
			var ooFt3 = oFt3.getElementsByTagName('a')[0].getElementsByTagName('span')[0];
			var oFt5 = document.getElementsByClassName('ft5')[0];
			var ooFt5 = oFt5.getElementsByTagName('a')[0].getElementsByTagName('span')[0];
			var oFbs1 = document.getElementsByClassName('fbs1')[0];
			var oFbs2 = document.getElementsByClassName('fbs2')[0];
			

			ooFt3.onmouseover = function(){
				ooFt3.style.background = 'url("img/icon/footlink_pic_4.gif") no-repeat 0px -11px';
			};
			ooFt3.onmouseout = function(){
				ooFt3.style.background = 'url("img/icon/footlink_pic_4.gif") no-repeat 0px 0px';
			};

			ooFt5.onmouseover = function(){
				ooFt5.style.background = 'url("img/icon/footlink_pic_5.gif") no-repeat 0px -11px';
			};
			ooFt5.onmouseout = function(){
				ooFt5.style.background = 'url("img/icon/footlink_pic_5.gif") no-repeat 0px 0px';
			};

			oFbs1.onmouseover = function(){
				oFbs1.style.background = 'url("img/icon/footlink_pic_1.gif") no-repeat 0px 0px';
			};
			oFbs1.onmouseout = function(){
				oFbs1.style.background = 'url("img/icon/footlink_pic_1.gif") no-repeat 0px -14px';
			};

			oFbs2.onmouseover = function(){
				oFbs2.style.background = 'url("img/icon/footlink_pic_2.gif") no-repeat 0px 0px';
			};
			oFbs2.onmouseout = function(){
				oFbs2.style.background = 'url("img/icon/footlink_pic_2.gif") no-repeat 0px -14px';
			};


			//分享
			var oShare1 = document.getElementsByClassName('share1')[0];
			var oShare2 = document.getElementsByClassName('share2')[0];
			var oShare3 = document.getElementsByClassName('share3')[0];
			var oShare4 = document.getElementsByClassName('share4')[0];
			var oShare5 = document.getElementsByClassName('share5')[0];

			oShare1.onmouseover = oShare2.onmouseover = oShare3.onmouseover = oShare4.onmouseover = oShare5.onmouseover = function(){
				toLight(this,-43);
			};
			oShare1.onmouseout = oShare2.onmouseout = oShare3.onmouseout = oShare4.onmouseout = oShare5.onmouseout = function(){
				toLight(this,-4);
			};

			function toLight(obj,targetY){
				obj.style.top = targetY+'px';
			};			
		};