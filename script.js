// alert("hello");
// function Click(){
	// var D=document.getElementById("ButtonCheck").checked;
// }


// alert(1+1);
// alert("hey");

// setInterval(()=>{
// document.getElementById("radar").style.animation='Rotate 13s infinite ';	
// });

var String="Notchecked";
 function Click(){
	var checke=document.getElementById("ButtonCheck").checked;
	var D=(-1);
	if(String=="Notchecked"){
	    var Interval=setInterval(function(){
		 D--;
        document.getElementById("radar").style.transform=`rotate(${D}deg)`;		
		String="checked";
        },10);		
	}
   
	
	if(String!="Notchecked"){
    location.reload();
		}
	// String="Notchecked";
	// document.getElementById("radar").style.transform=`rotate(${D}deg)`;
	
    // document.getElementById("radar").style.animation="Rotate 2s infinite";
 }


 	// var D=(-1);
// setInterval(()=>{
	// D--;
// document.getElementById("radar").style.transform=`rotate(${D}deg)`;	
// },10);