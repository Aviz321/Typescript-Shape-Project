var shape = +prompt("Welcome to my simulator;)\n Which shape do you want to use?\n 1.Square\n 2.Rectangle\n 3.Triangle"); //Select shape
var content;
switch (shape) {
    //Square
    case 1:
        var square_side_lenght = +prompt("Please enter square side lenght");
        if (square_side_lenght <= 0) {
            alert("Error, Please enter a positive integer number."); //Error message
            break;
        }
        content = +prompt("Please select shape content:\n 1.*****\n 2.*     *\n 3.12345\n 4.54321");
        Square(square_side_lenght); //Square function call
        break;
    //Rectangle
    case 2:
        var width = +prompt("Please enter rectangle width");
        if (width <= 0) {
            alert("Error, Please enter a positive integer number."); //Error message
            break;
        }
        var height = +prompt("Please enter rectangle height");
        if (height <= 0) {
            alert("Error, Please enter a positive integer number."); //Error message
            break;
        }
        content = +prompt("Please select shape content:\n 1.*****\n 2.*     *\n 3.12345\n 4.54321");
        Rectangle(width, height); //Rectangle function call
        break;
    //Triangle
    case 3:
        var triangle_side_lenght = +prompt("Please enter triangle side lenght");
        if (triangle_side_lenght <= 0) {
            alert("Error, Please enter a positive integer number."); //Error message
            break;
        }
        content = +prompt("Please select shape content:\n 1.*****\n 2.*     *\n 3.12345\n 4.54321");
        Triangle(triangle_side_lenght); //Triangle function call
        break;
    default:
        alert("Error, Please select 1 or 2 or 3, for the shape type.");
}
//Functions
function Square(lenght) {
    var s_p = 4 * lenght; //Square Perimeter
    var s_a = lenght * lenght; //Square Area
    //********// 
    if (content == 1) {
        for (var i = 1; i <= lenght; i++) {
            for (var j = 1; j <= lenght; j++) {
                document.write("*");
            }
            document.write("<br />");
        }
        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);
    }
    else if (content == 2) {
        //*     *//
        for (var i = 0; i < lenght; i++) {
            for (var j = 0; j < lenght; j++) {
                if (i == 0 || i == lenght - 1 || j == 0 || j == lenght - 1) {
                    document.write("* ");
                }
                else {
                    document.write("&nbsp;&nbsp;");
                }
            }
            document.write("<br />");
        }
        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);
    }
    else if (content == 3) {
        //**12345**// 
        for (var i = 1; i <= lenght; i++) {
            for (var j = 1; j <= lenght; j++) {
                document.write(j + "&nbsp;");
            }
            document.write("<br />");
        }
        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);
    }
    else if (content == 4) {
        //**54321**// 
        for (var i = 1; i <= lenght; i++) {
            for (var j = lenght; j >= 1; j--) {
                document.write(j + "&nbsp;");
            }
            document.write("<br />");
        }
        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);
    }
    else {
        alert("Error, Please select 1 or 2 or 3 or 4, for the shape content."); //Error message
    }
}
function Rectangle(width, height) {
    var r_p = 2 * (width + height); //Rectangle Perimeter
    var r_a = width * height; //Rectangle Area
    if (content == 1) {
        //********// 
        for (var i = 1; i <= height; i++) {
            for (var j = 1; j <= width; j++) {
                document.write("*");
            }
            document.write("<br />");
        }
        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);
    }
    else if (content == 2) {
        //*     *//
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                if (i == 0 || i == height - 1 || j == 0 || j == width - 1) {
                    document.write("* ");
                }
                else {
                    document.write("&nbsp;&nbsp;");
                }
            }
            document.write("<br />");
        }
        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);
    }
    else if (content == 3) {
        //**12345**// 
        for (var i = 1; i <= height; i++) {
            for (var j = 1; j <= width; j++) {
                document.write(j + "&nbsp;");
            }
            document.write("<br />");
        }
        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);
    }
    else if (content == 4) {
        //**54321**// 
        for (var i = 1; i <= height; i++) {
            for (var j = width; j >= 1; j--) {
                document.write(j + "&nbsp;");
            }
            document.write("<br />");
        }
        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);
    }
    else {
        alert("Error, Please select 1 or 2 or 3 or 4, for the shape content."); //Error message
    }
}
function Triangle(triangle_lenght) {
    var pitagoras = (triangle_lenght * triangle_lenght) + (triangle_lenght * triangle_lenght);
    var t_p = Math.pow(pitagoras, 0.5) + triangle_lenght + triangle_lenght; //Triangle Perimeter
    var t_a = (triangle_lenght * triangle_lenght) / 2; //Triangle Area
    if (content == 1) {
        //********// 
        for (var i = 1; i <= triangle_lenght; i++) {
            for (var j = 1; j <= i; j++) {
                document.write("*");
            }
            document.write("<br />");
        }
        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);
    }
    else if (content == 2) {
        //*     *//
        for (var i = 1; i < triangle_lenght + 1; i++) {
            for (var j = 0; j < i; j++) {
                if (i == 1 || i == triangle_lenght || j == 0 || j == i - 1) {
                    document.write("* ");
                }
                else {
                    document.write("&nbsp;&nbsp;");
                }
            }
            document.write("<br />");
        }
        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);
    }
    else if (content == 3) {
        //**12345**// 
        for (var i = 1; i <= triangle_lenght; i++) {
            for (var j = 1; j <= i; j++) {
                document.write(j + "&nbsp;");
            }
            document.write("<br />");
        }
        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);
    }
    else if (content == 4) {
        //**54321**// 
        for (var i = triangle_lenght; i >= 1; i--) {
            for (var j = triangle_lenght; j >= i; j--) {
                document.write(j + "&nbsp;");
            }
            document.write("<br />");
        }
        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);
    }
    else {
        alert("Error, Please select 1 or 2 or 3 or 4, for the shape content."); //Error message
    }
}
//# sourceMappingURL=app.js.map