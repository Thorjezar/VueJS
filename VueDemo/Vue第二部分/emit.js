function Girl(){
	this._events = {}
}

Girl.prototype.emit = function(eventName){
	if(this._events[eventName]){
		this._events[eventName].forEach(cd=>cd());
	}
}
Girl.prototype.on = function(eventName,callback){
	if(this._events[eventName]){
		this._events[eventName].push(callback);
	}else{
		this._events[eventName]=[callback]; //
	}
}


let eat = ()=>{
	console.log("吃");
	}
	
	let cry = ()=>{
		console.log("哭");
		}
		
		let buy = ()=>{
			console.log("买");
			}
			
let girl=new Girl();
//订阅
girl.on("生气",eat); 
girl.on("生气",cry);
girl.on("生气",buy);

girl.emit("生气");

