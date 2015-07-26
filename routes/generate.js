function generate(){
	
}
function suffledarray(Array,callback){
	var x,value;
	for(var i=0;i<Array.length;i++)
	{
		x=Math.floor(Math.random() * (Array.length -1) )+ 1 ;
		value=Array[i];
		Array[i]=Array[x];
		Array[x]=value;
	}
	callback(Array);
//	return Array;
}
generate.prototype.Expression= function(expressionSize,operatorArray,numberArray,callback) {
	this.expressionSize=expressionSize;
	this.operatorArray=operatorArray;
	this.numberArray=numberArray;
	var expression=[];
			console.log(expressionSize+"  "+ operatorArray+" " + numberArray);
	suffledarray(numberArray,function(sufflednumberArray){
		suffledarray(operatorArray,function(suffledoperatorArray){
			console.log(suffledoperatorArray);
			var count=0;
			for(var i=0;i<expressionSize;i++)
			{
				combineExpression(i,sufflednumberArray[i],suffledoperatorArray[i],function(data){
					expression[i]=data;
				});
			}
			console.log(expression);
			callback(expression);		
		});
	});
}
function combineExpression(i,num,opt,callback){
	if(i%2==0)
		callback(num);
	else
		callback(opt);
}
generate.prototype.validateExpression=function(expression,callback){
		var expressionInString=expression.toString().replace(/[, ]+/g, "").trim();
		try{
			eval(expressionInString);
			var isdivide=expression.indexOf('/');
			if(isdivide>0)
			{
				if(expression[isdivide-1]%expression[isdivide+1]==0)
				{
					console.log("here I came! "+expression.toString());
					callback(expression);
				}
				else
				{
					expression[isdivide-1]=expression[isdivide-1]*expression[isdivide+1];
					console.log("NON dicisible! "+expression.toString());
					callback(expression);
				}
			}
			callback(expression);
		}
		catch(e)
		{
			callback(null);
		}
}
module.exports=generate;
