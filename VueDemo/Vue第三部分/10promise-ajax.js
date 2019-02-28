function ajax({url="",type="get",dataType="json"}){
	return new Promise((resolve,reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open(type,url,true);
		xhr.onload=function(){
			if(xhr.status==200)
			{
				resolve(xhr.response);
			}else{
				reject("failed");
			}
		}
		xhr.onerror = function(err){
			reject(err)
		}
		xhr.send();
	});
}