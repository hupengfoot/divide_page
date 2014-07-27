var totalpage,pagesize,cpage,count,curcount,outstr; 
//初始化 
cpage = 1; 
totalpage = 56; 
pagesize = 10; 
outstr = ""; 
function gotopage(target) 
{     
	cpage = target;        //把页面计数定位到第几页 
	setpage(); 
	//reloadpage(target);    //调用显示页面函数显示第几页,这个功能是用在页面内容用ajax载入的情况 
} 
function setpage() 
{ 
	if(totalpage<=10){        //总页数小于十页 
		for (count=1;count<=totalpage;count++) 
		{    
			if(count!=cpage) 
			{ 
				outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
			}else{ 
				outstr = outstr + "<span class='current' >"+count+"</span>"; 
			} 
		} 
	} 
	else if(totalpage>10){        //总页数大于十页 
		if(parseInt((cpage-1)/10) == 0) 
		{             
			for (count=1;count<=10;count++) 
			{    
				if(count!=cpage) 
				{ 
					outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
				}else{ 
					outstr = outstr + "<span class='current'>"+count+"</span>"; 
				} 
			} 
			var next = cpage + 1;
			outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+next+")' style='width:50px'> 下一页 </a>"; 
		} 
		else if(parseInt((cpage-1)/10) == parseInt(totalpage/10)) 
		{     
			var pre = cpage - 1;
			outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+pre+")' style='width:50px'>上一页</a>"; 
			for (count=parseInt(totalpage/10)*10+1;count<=totalpage;count++) 
			{    
				if(count!=cpage) 
				{ 
					outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
				}else{ 
					outstr = outstr + "<span class='current'>"+count+"</span>"; 
				} 
			} 
		} 
		else 
		{     
			var pre = cpage - 1;
			outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+pre+")' style='width:50px'>上一页</a>"; 
			for (count=parseInt((cpage-1)/10)*10+1;count<=parseInt((cpage-1)/10)*10+10;count++) 
			{         
				if(count!=cpage) 
				{ 
					outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
				}else{ 
					outstr = outstr + "<span class='current'>"+count+"</span>"; 
				} 
			} 
			var next = cpage + 1;
			outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+next+")' style='width:50px'>下一页</a>"; 
		} 
	}     
	document.getElementById("dividepage").innerHTML = outstr; 
	outstr = ""; 
} 

