var exp=generate(5);
//alert(exp.expression);
function showExpression()
{
    alert();
    var answerbox=document.getElementById("answerBox");
    var value="";
    for(i=0;i<exp.randomize.length;i++)
    {
        value += "<div class='col-md-1'>"+exp.randomize[i]+"</div>";
        
    }
    answerbox.innerHTML=value;
}
function generate(expSize)
{   
     var operator=[];
     operator=['+','-','*','/','%'];
     var randomString="";
    
    //generating random Expression
     var expression=generateExpression(expSize,operator);
     var randomexpression=randomExpression(expression);
     var a=[];
     var expressionString="";
     for(var i=0;i<expression.length;i++)
        expressionString+=expression[i];
     for(var i=0;i<randomexpression.length;i++)
        randomString+=randomexpression[i];
     a['expression']=expressionString;
     a['randomize']=randomexpression;
//  a['randomize']=randomString;
     a['ans']=eval(expressionString);
     return a;
 }
function randomExpression(Expression)
{
    var randomexpression=[];
    var randomarray=[];
    var randomarray=RandomArray(Expression.length);
    for(var i=0;i<Expression.length;i++)
        randomexpression[randomarray[i]]=Expression[i];
//  console.log(randomexpression);
    return randomexpression;
}
function RandomArray(expSize)
{
    var randomArray=[];
    for(var i=0;i<expSize;i++)
    {
        randomArray[i]=-1;
    }
    for(var count=0;count<expSize;count++)
    {
        var num=Math.floor((Math.random()*45386)%expSize);
        var i=0;
        while(i<count)
        {
            if(randomArray[i]==num)
            {
                num=Math.floor((Math.random()*45386)%expSize);
                i=0;
            }
            else
            {
                i++;
            }
        }
        randomArray[count]=num;
    }
//  alert(randomArray);
    return randomArray;
}
function checkvalid_expression(Expression,size)
{
    //check operator
    var countDivideOperator=0;
    for(var i=0;i<Expression.length;i++)
    {
        countDivideOperator+=+(Expression[i]=='/');
    }
    var dividePosition=Expression.indexOf('/');
//   console.error("divide pos: "+dividePosition);
    if(dividePosition>0)
    {
//       console.log("entering if");
        if((Expression[dividePosition-1])%(Expression[dividePosition+1])!=0)
        {    
//           while(Expression[dividePosition-1]%Expression[dividePosition+1]!=0)
//           {
           Expression[dividePosition-1]=Number(Expression[dividePosition+1])*(Math.floor((Math.random()*757))%7+1);
//            console.log("entering while with value"+Expression[dividePosition-1]);
     //       Expression[dividePosition-1]=Number(Expression[dividePosition-1])+1;
  //          alert("pos:"+dividePosition+" Val:"+Expression[dividePosition-1]);
//            }
        }

    }
//integer
    return Expression;
}


function generateExpression(expSize,operator)
{
    var Exp=[];
    for(var count=0;count < expSize;count++)
    {

         if(count%2==0)
        {
            var num;
             if(expSize==5)
            {    num=Math.floor((Math.random()*757)%9);
                 while(num==0)
                 num=Math.floor((Math.random()*757)%9); 
            }
            else if(expSize==7)
            {
                 num=Math.floor((Math.random()*757)%29);
                 while(num==0)
                 num=Math.floor((Math.random()*757)%29); 
            }
            else if(expSize==9)
            {
                 num=Math.floor((Math.random()*757)%61);
                 while(num==0)
                 num=Math.floor((Math.random()*757)%61);
            }
            Exp[count]=num.toString();

        }
        else
        {
             var num=(Math.random()*757)%4;
             num=Math.floor(num);
             Exp[count]=operator[num].toString();

        }

    }
    Exp=checkvalid_expression(Exp,expSize);
    var Exp1="";
//    for(var i=0;i<expSize;i++)
 //       Exp1=Exp1+Exp[i].toString();
//      console.log("ultimate exp"+Exp1);
  return Exp;
}
