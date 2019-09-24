/*获取样式*/
		function getStyle(obj,name){												//获取样式信息，为下面的框架提供参数
			if(obj.currentStyle){
				return obj.currentStyle[name];										//currentStyle只有ie Opera支持
			}else{
				return getComputedStyle(obj,false)[name];							//getComputedStyle其他浏览器
			}
		}


/*运动框架(运动+透明度)*/		
		//eg:startMove(oDiv,{width:400,height:400},function(){函数})
		function startMove (obj,json,fnEnd) {										//三个参数，obj对象，json为 样式(attr)和目标值(iTarget) 的关系对应集合，fnEnd运动结束之后执行的函数
			clearInterval(obj.timer);												//开启一个定时器之前关闭上一个定时器

			obj.timer = setInterval(function(){
				var bStop = true;													//初始假设所有的值都到达目标值了，则把bStop设为true

				for(var attr in json){												//用for(var attr in json)循环整个json集合，即循环要运动的样式和目标值
					var cur = 0;													//定义样式初始值为0

					if(attr == 'opacity'){											//判断样式名称是否是opacity（透明度）
						cur = Math.round(parseFloat(getStyle(obj,attr))*100);		//获取透明度，透明度值转为浮点数，后*100（方便下面书写），最后四舍五入解决浏览器的兼容问题（即获得一个准确的数字），定义cur的值
					}else{
						cur = parseInt(getStyle(obj,attr));							//定义其他样式的值
					};

					var speed = (json[attr]-cur)/6;									//6可以改，根据实际需求改动,用json[attr]代替原来的iTarget参数

					speed = speed>0?Math.ceil(speed):Math.floor(speed);				//三元运算符，向上和向下取整

					if(cur !=json[attr])											//当有一个值不到目标值的时候，将bStop的值变为flase，即开头的假设不成立
						bStop = false;

					if(attr == 'opacity'){											//透明度
						obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';		//ie
						obj.style.opacity = (cur+speed)/100;						//火狐和chrome
					}else{
						obj.style[attr] = cur+speed+'px';							//其他样式的运动
					};
				};

				if(bStop){															//如果bStop为true，即所有的值都到达目标值
					clearInterval(obj.timer);										//关闭定时器，执行后续函数

					if(fnEnd)fnEnd();												//if(fnEnd)fnEnd();如果有fnEnd()函数就执行，没有就不执行
				};				
			},30)
		}