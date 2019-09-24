/* getByClass获取元素 */
function getByClass(oParent, sClass)							//oParent从哪儿获取，sClass获取名称
{
	var aEle=oParent.getElementsByTagName('*');					//*为css里面的通配符，代表所有标签样式
	var aResult=[];												//创建一个空数组
	
	for(var i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);								//将className = sClass的元素都push进aResult素组里面
		}
	}
	
	return aResult;												//最后返回一个素组即可
}