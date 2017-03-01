/**
 * Created by gtf on 11/02/2017.
 * This module contains some math object.
 *
 *
 * convention:
 *      1. if parameter's pattern is __parameter, it means that it is a interval parameter.
 */
// Test script


var gShape = function (value) {
    this.__value = value;
};

gShape.prototype = {
    constructor: gShape,

    getValue : function () {
        console.log(this.__value);
    }
};

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

