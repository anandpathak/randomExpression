function generate(){
	
}
function suffledarray(Array1,callback){
	var x,value;
	var Array2=Array1;
	for(var i=0;i<Array2.length;i++)
	{
		x=Math.floor(Math.random() * (Array2.length -1) )+ 1 ;
		value=Array2[i];
		Array2[i]=Array2[x];
		Array2[x]=value;
	}
	callback(Array2);
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
		var answer;
		try{
			answer=eval(expressionInString);
			var isdivide=expression.indexOf('/');
			if(isdivide>0)
			{
				if(expression[isdivide-1]%expression[isdivide+1]==0)
				{
					console.log("here I came! "+expression.toString());
					suffledarray(expression,function(randomExpression){
						callback(randomExpression,answer);
					});
				}
				else
				{
					expression[isdivide-1]=expression[isdivide-1]*expression[isdivide+1];
					expressionInString=expression.toString().replace(/[, ]+/g, "").trim();
					console.log("NON dicisible! "+expression.toString());
					suffledarray(expression,function(randomExpression){
						answer=eval(expressionInString);
						callback(randomExpression,answer);
					});
				}
			}
			else{
					console.log('no divide available !');
			suffledarray(expression,function(randomExpression){
						callback(randomExpression,answer);
					});
			}
		}
		catch(e)
		{
			callback(null,null);
		}
}
module.exports=generate;
