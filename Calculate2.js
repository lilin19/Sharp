/**
 * author Guhao Huang 18.1.1.2017
 */

/**SSS
 * Validatie function to check 1 Emptiness, 2 number, 3 triangle existing problem
 * @return false: problematic input 
 */

function validate()
{
    var pat=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	
	A=parseFloat(a);
	B=parseFloat(b);
	C=parseFloat(c);
	  if (a=="")
		 {alert("Please input the length");return false}
	  if (b=="")
	    {alert("Please input the length");return false}
	  if (c=="")
	    {alert("Please input the length");return false}

	  if (!pat.exec(a))
	    {alert("Please length a in number");return false}
	  if (!pat.exec(b))
	    {alert("Please length b in number");return false}
	  if (!pat.exec(c))
	    {alert("Please length c in number");return false}
	  
	  
	  
	  
	  if(this!==false){
		  if (A+B<=C||B+C<=A||A+C<=B){
			  alert("this triangle do not exist");return false
		  }
		  else{return true;}
		  

	  }
}

/**SAS
 * Validatie function to check 1 Emptiness, 2 number, 3 triangle existing problem
 * @return false: problematic input 
 */
function validate1()
{
    var pat=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
	var a = document.getElementById("e").value;
	var b = document.getElementById("f").value;
	var c = document.getElementById("g").value;
	
 A=parseFloat(a);
 B=parseFloat(b);
 C=parseFloat(c);

	
	
	  if (a=="")
	    {alert("Please input the length");return false}
	  if (b=="")
	    {alert("Please input the angle");return false}
	  if (c=="")
	    {alert("Please input the length");return false}

	  if (!pat.exec(a))
	    {alert("Please length a in number");return false}
	  if (!pat.exec(b))
	    {alert("Please Angle θ in degree");return false}
	  if (!pat.exec(c))
	    {alert("Please length c in number");return false}
	  
	  
	  
	  
	  if(this!==false){
		  if (B>180 || B<0){
			  alert("this triangle do not exist");return false
		  }
		  else{return true;}
		  

	  }
}

/**SSA
 * Validatie function to check 1 Emptiness, 2 number, 3 triangle existing problem
 * @return false: problematic input 
 */
function validate2()
{
    var pat=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
	var a = document.getElementById("h").value;
	var b = document.getElementById("i").value;
	var c = document.getElementById("j").value;
	
	 A=parseFloat(a);
	 B=parseFloat(b);
	 C=parseFloat(c);
	
	
	  if (a=="")
	    {alert("Please input the length");return false}
	  if (b=="")
	    {alert("Please input the length");return false}
	  if (c=="")
	    {alert("Please input the angle");return false}

	  if (!pat.exec(a))
	    {alert("Please input length b in number");return false}
	  if (!pat.exec(b))
	    {alert("Please input length c in number");return false}
	  if (!pat.exec(c))
	    {alert("Please input θ in degree");return false}
	  if (C>180 || C<0){
		  alert("this triangle do not exist");return false
	  }
	 
	  var theta=Math.cos(C*Math.PI/180);
	  var delta=4*theta*theta*B*B-4*(B*B-A*A);
	
	  
	  
	  if(this!==false){
		  if (delta<0){
			  alert("this triangle do not exist");return false
		  }
		  else{return true;}
		  

	  }
}

/**ASA
 * Validatie function to check 1 Emptiness, 2 number, 3 triangle existing problem
 * @return false: problematic input 
 */
function validate3()
{
    var pat=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
	var a = document.getElementById("a1").value;
	var b = document.getElementById("b1").value;
	var c = document.getElementById("c1").value;
	
	 A=parseFloat(a);
	 B=parseFloat(b);
	 C=parseFloat(c);
	
	
	  if (a=="")
	    {alert("Please input the angle");return false}
	  if (b=="")
	    {alert("Please input the length");return false}
	  if (c=="")
	    {alert("Please input the angle");return false}

	  if (!pat.exec(a))
	    {alert("Please input angle θ in number");return false}
	  if (!pat.exec(b))
	    {alert("Please input length c in number");return false}
	  if (!pat.exec(c))
	    {alert("Please input length α in degree");return false}
	  if (A>180 || A<0){
		  alert("this triangle do not exist");return false
	  }
	  if (C>180 || C<0){
		  alert("this triangle do not exist");return false
	  }
	  if (A+C>180){
		  alert("this triangle do not exist");return false
	  }
	

}



/**SSS
 * Calculate function to count out the S area, by mathmatical not numerical method
 * @return S: AREA
 */
function calculate(){
if(validate()!==false){

	
var p = 0.5*(A+B+C);

var SS=p*(p-A)*(p-B)*(p-C);
S=Math.sqrt(SS);
var cc = (A*A+B*B-C*C)/(2*A*B);
var sc = Math.sqrt(1-cc*cc);
var x = A*cc;
var y = A*sc;
document.getElementById("S").innerHTML="S= "+S;
document.getElementById("fact").innerHTML="a= "+A+" b= "+B+" c= "+C +"x="+x+"y="+y;
document.getElementById("a").value="";
document.getElementById("b").value="";
document.getElementById("c").value="";
var str = "Result.html?S="+S+"+a= "+A+" b= "+B+" c= "+C;
var pC = new gPoint(100*x,0);
var pB = new gPoint(100*B,100*y);
var pA = new gPoint(0,100*y);
drawTriangle(pC,pB,pA);

}
return S;


}



/**SAS
 * Calculate function to count out the S area, by mathmatical not numerical method
 * @return S: AREA
 */
function calculate1(){
	if(validate1()!==false){
	var p= Math.sin(B*Math.PI/180);
	var q= Math.cos(B*Math.PI/180);
	var S=0.5*p*A*C;
	document.getElementById("S").innerHTML="S= "+S;
	document.getElementById("fact").innerHTML="a= "+A+" θ= "+B+"°"+" c= "+C;
	document.getElementById("e").value="";
	document.getElementById("f").value="";
	document.getElementById("g").value="";
	var str = "Result.html?S="+S+"+a= "+A+" θ= "+B+"°"+" c= "+C;
	var y = C*p;
	var x = C*q;
	var pC = new gPoint(100*A, 100*y);
	var pB = new gPoint(0, 100*y);
	var pA = new gPoint(100*x, 0);
	drawTriangle(pC,pB,pA);
	}
	return S;
	}


/**SSA
 * Calculate function to count out the S area, by mathmatical not numerical method
 * @return S: AREA
 * this function can output 2 answers when exists, this is mathmatically possibale.
 */
function calculate2(){
	if(validate2()!==false){
		
		  var theta=Math.cos(C*Math.PI/180);
		  var thetas=Math.sin(C*Math.PI/180)
		  var delta=4*theta*theta*B*B-4*(B*B-A*A);
	var p= 0.5*(2*theta*B+Math.sqrt(delta));
	var q= 0.5*(2*theta*B-Math.sqrt(delta));
	S=0.5*p*B*Math.sin(C*Math.PI/180);
	S2=0.5*q*B*Math.sin(C*Math.PI/180);
	if(q<0){S2="not existed"; q=0;}
	document.getElementById("fact").innerHTML="a= "+A+" b= "+B+" θ= "+C+"°" ;
	document.getElementById("S").innerHTML="S1= "+S+"   or    S2= "+S2;
	document.getElementById("h").value="";
	document.getElementById("i").value="";
	document.getElementById("j").value="";
	var str = "Result.html?S="+S+" or  "+S2+"+a= "+A+" b= "+B+" θ= "+C+"°"
	var x = theta*p;
	var y = thetas*p;
	var pC = new gPoint(100*A, 0);
	var pB = new gPoint(100*x, 100*y);
	var pA = new gPoint(0, 0);
	drawTriangle(pC,pB,pA);
	var x = theta*q;
	var y = thetas*q;
	var pC = new gPoint(100*A, 0);
	var pB = new gPoint(100*x, 100*y);
	var pA = new gPoint(0, 0);
	drawTriangle(pC,pB,pA);
	}
	return S;

	}


/**ASA
 * Calculate function to count out the S area, by mathmatical not numerical method
 * @return S: AREA
 */
function calculate3(){
	if(validate3()!==false){
	var S= B*B*Math.sin(A*Math.PI/180)*Math.sin(C*Math.PI/180)/(2*Math.sin((A+C)*Math.PI/180));
	document.getElementById("S").innerHTML="S= "+S;
	document.getElementById("fact").innerHTML="θ= "+A+"° c= "+B+" α= "+C+"°" ;
	document.getElementById("a1").value="";
	document.getElementById("b1").value="";
	document.getElementById("c1").value="";
	var str = "Result.html?S="+S+"+A="+A+"+B="+B+"+C="+C;
	var y = 2*S/B;
	var x = y/Math.tan(A*Math.PI/180);
	var pC = new gPoint(100*B, 100*y);
	var pB = new gPoint(100*x, 0);
	var pA = new gPoint(0, 100*y);
	drawTriangle(pC,pB,pA);
	}
	return S;

	}




	var gPoint = function gPoint(pointx, pointy) {
	    this.__pointx = pointx;
	    this.__pointy = pointy;
	};

	gPoint.prototype = {
	    constructor: gPoint
	};




	var gTriangle2D = function (apoint, bpoint, cpoint) {
	    // Parameter:
	    //      We assert the parameter __point a,b,c is object { gPoint }.
	    //      If the input is Array, it will convert them into { gPoint }.

	    if (apoint instanceof gPoint && bpoint instanceof gPoint && cpoint instanceof gPoint) {
	        this.__apoint = apoint;
	        this.__bpoint = bpoint;
	        this.__cpoint = cpoint;
	    } else if (cpoint instanceof Array && bpoint instanceof Array && apoint instanceof Array) {
	        try {
	            this.__apoint = Array2ToPoint(apoint);
	            this.__bpoint = Array2ToPoint(bpoint);
	            this.__cpoint = Array2ToPoint(cpoint);
	        } catch (e) {
	            console.log(e.toString());
	        }
	    }

	    // In the interval of Object, using the array will add the convenience of operation.
	    this.__pointArray = new Array(3);
	    this.__pointArray[0] = this.__apoint;
	    this.__pointArray[1] = this.__bpoint;
	    this.__pointArray[2] = this.__cpoint;
	};

	gTriangle2D.prototype = {

	    constructor: gTriangle2D,

	    drawInLine: function (gl, color) {
	        // Parameter:
	        //      gl is the context of the webgl.
	        // Alogrithm:
	        //      drawing sequence apoint --> bpoint --> cpoint.
	        if (gl) {

	            gl.beginPath();

	            gl.moveTo(this.__apoint.__pointx, this.__apoint.__pointy);

	            for (var i = 1; i < this.__pointArray.length; i++) {
	                gl.lineTo(this.__pointArray[i].__pointx, this.__pointArray[i].__pointy);
	            }

	            gl.closePath();
	            gl.strokeStyle = color;
	            gl.stroke();
	        }
	    }
	};



	var Array2ToPoint = function (array2) {
	    // Convert the array which contains two elements to { gPoint }

	    if (array2 instanceof Array && array2.length == 2) {
	        var pointx = array2[0];
	        var pointy = array2[1];
	        var point = new gPoint(pointx, pointy);

	        return point;
	    } else if (!(array2 instanceof Array)) {
	        throw new Error("Array2 should be a array object !")
	    } else {
	        throw new Error("The array should contains two element !")
	    }
	};

	
	
	
	function drawTriangle(a,b,c) {
    var canvas = document.getElementById('gl-canvas');
    var gl;

    if (canvas) {
        try {
            gl = canvas.getContext('2d');

            if (gl) {
                console.log('/// The context of gl is configured !');

                // instances
                var point1 = a;
                var point2 = b;
                var point3 = c;
                var triangle = new gTriangle2D(point1, point2, point3);
                var color = '#ff0000';                          // red

                triangle.drawInLine(gl);
            } else {
                console.log('/// WebGL context cannot be created !');
            }
        } catch (error) {
            // Pass
        }

        // if (gl) {
        //     console.log('>>> The context of gl is get !');
        // }
    }
}

