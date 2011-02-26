String.prototype.getFuncBody = function(){ 
	var str=this.toString(); 
	str=str.replace(/[^{]+{/,"");
	str=str.substring(0,str.length-1);   
	str = str.replace(/\n/gi,"");
	if(!str.match(/\(.*\)/gi))str += ")";
	return str; 
}