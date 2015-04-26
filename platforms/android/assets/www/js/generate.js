
//alert(exp.expression);
function playbuttonClicked()
{

    var exp=generate(5);
  //  alert();
  //clearing answer box
//    while (document.getElementById("answerBox").hasChildNodes()) {
//        document.getElementById("answerBox").removeChild(node.lastChild);
//}
    document.getElementById("answer").innerHTML="=&nbsp;"+exp.ans+"&nbsp;&nbsp;&nbsp";
    document.getElementById("answerBox").innerHTML="";
    
    var randomExp=document.getElementById("randomExp");
//    $(document).ready(function(){
//        var inner = $('.inner'),
//        ht = inner.height();
//        inner.css({'position':'absolute','top':'50%','margin':-ht/2+'px 0 0 0'});
//});
    
//    var value="<div class='row'>";
      var value="";
    for(i=0;i<exp.randomize.length;i++)
    {
        value += "<span class='col-md-1 smbox' onclick='putanswer(this)'>"+exp.randomize[i]+"</span>";
        
    }
    randomExp.innerHTML=value+"";
}
function putanswer(value)
{
    if(value.parentNode.id.toString()=="randomExp")
    {
  //      alert(document.getElementById("randomExp").childNodes.length);
//        alert();
        document.getElementById("answerBox").appendChild(value);
    
  //      document.getElementById("randomExp").removeChild(value);
        resultCalculate();
    }
    else
    {
         document.getElementById("randomExp").appendChild(value);
    //    resultCalculate();
  //      document.getElementById("answerBox").removeChild(value);
    // resultCalculate();
    }
}
function resultCalculate()
{
    //check if length of randomExp is zero then match actual answer and the user answer 
    if(document.getElementById("randomExp").childNodes.length <=0)
    {
        var answerExpression = document.getElementById("answerBox");
        var currentexpression="";
        for (var i = 0; i < answerExpression.childElementCount; i++)
        {
            currentexpression += answerExpression.childNodes[i].innerHTML;
        }
        try 
        {
            currentexpression = eval(currentexpression);
            if(currentexpression.trim() == document.getElementById("answer").trim() )
                alert(currentexpression);
        }
        catch(e)
        {
            alert(e);
        }
    }
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
