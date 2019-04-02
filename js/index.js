let exp="";
const number="";
let total=0;
const operators=[];
let position=[];
position.push(0);
let del=0;
let flag=1;
$(document).ready(() => {
	$(".btn").on('click',function(){
		const value = $(this).val();
		//console.log("Yay value="+value);
		switch(value){
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case ".":flag=0;
					$(".selected").html(`${value}`);
					exp+=value;
					$(".expression").html(`${exp}`);
					break;
			case "a":flag=0;
					$(".selected").html("");
					$(".expression").html("");
					position = [];
					position.push(0);
					exp="";
					break;
			case "c":if(flag==1)
						flag=0;
					else flag=1;
					del=position.pop();
					$(".selected").html("");
					console.log(`Del is : ${del}`);
					if(del === 0){
						exp="";
						position.push(0);
					}
					else
						exp=exp.substring(0,del);
					$(".expression").html(`${exp}`);
					break;
			case "/":
			case "+":
			case "*":
			case "-":if(flag==0){
						exp+=value;
						position.push(exp.length-1);
						position.push(exp.length);
					}
					flag=1;
					$(".selected").html(`${value}`);
					$(".expression").html(`${exp}`);
					break;
			case "=":total = eval(exp);
					console.log(`Equal = ${total}`);	
					$(".selected").html(`${total}`);
					break;
		}
	});
});