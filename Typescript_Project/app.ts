let shape: number = +prompt("Welcome to my simulator;)\n Which shape do you want to use?\n 1.Square\n 2.Rectangle\n 3.Triangle");   //Select shape
let content: number;

switch (shape) {

    //Square
    case 1:
        let square_side_lenght: number = +prompt("Please enter square side lenght");
    
        if (square_side_lenght <= 0) {
            alert("Error, Please enter a positive integer number.");   //Error message
            break;
        }
        content = +prompt("Please select shape content:\n 1.*****\n 2.*     *\n 3.12345\n 4.54321");
        Square(square_side_lenght);   //Square function call
        break;

    //Rectangle
    case 2:
        let width: number = +prompt("Please enter rectangle width");
        
        if (width <= 0) {
            alert("Error, Please enter a positive integer number.");   //Error message
            break;
        }
        let height: number = +prompt("Please enter rectangle height");
        
        if (height <= 0) {
            alert("Error, Please enter a positive integer number.");   //Error message
            break;
        }
        content= +prompt("Please select shape content:\n 1.*****\n 2.*     *\n 3.12345\n 4.54321");
        Rectangle(width, height);   //Rectangle function call
        break;

    //Triangle
    case 3:
        let triangle_side_lenght: number = +prompt("Please enter triangle side lenght");
        
        if (triangle_side_lenght <= 0) {
            alert("Error, Please enter a positive integer number.");   //Error message
            break;
        }
        content= +prompt("Please select shape content:\n 1.*****\n 2.*     *\n 3.12345\n 4.54321");
        Triangle(triangle_side_lenght);   //Triangle function call
    break;

    default:
        alert("Error, Please select 1 or 2 or 3, for the shape type.");
}

//Functions

function Square(lenght: number) {
    
    let s_p: number = 4 * lenght;   //Square Perimeter
    
    let s_a: number = lenght * lenght;   //Square Area

    //********// 
    if (content == 1) {
           for (let i = 1; i <= lenght; i++) {

               for (let j = 1; j <= lenght; j++) {

                   document.write("*");

               }

               document.write("<br />");

        }

        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);

    }
    else if (content == 2) {
        //*     *//
        for (let i = 0; i < lenght; i++) {

            for (let j = 0; j < lenght; j++) {

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
        for (let i = 1; i <= lenght; i++) {

            for (let j = 1; j <= lenght; j++) {

                document.write(j + "&nbsp;");

            }

            document.write("<br />");

        }

        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);

    }
    else if (content == 4) {
        //**54321**// 
        for (let i = 1; i <= lenght; i++) {

            for (let j = lenght; j >= 1; j--) {

                document.write(j + "&nbsp;");

            }

            document.write("<br />");

        }

        document.write("<br />Square Perimeter:" + s_p.toFixed(2) + "<br />Square Area:" + s_a);

    }
    else {
        alert("Error, Please select 1 or 2 or 3 or 4, for the shape content.");   //Error message
    }
}

function Rectangle(width: number, height: number) {

    let r_p: number = 2 * (width + height);   //Rectangle Perimeter
    let r_a: number = width * height;   //Rectangle Area
    if (content == 1) {
        //********// 
        for (let i = 1; i <= height; i++) {

            for (let j = 1; j <= width; j++) {
                
                document.write("*");

            }

            document.write("<br />");

        }

        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);

    }
    else if (content == 2) {
    //*     *//
        for (let i = 0; i < height; i++) {

            for (let j = 0; j < width; j++) {

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
        for (let i = 1; i <= height; i++) {

            for (let j = 1; j <= width; j++) {

                document.write(j+"&nbsp;");
                
            }

            document.write("<br />");

        }

        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);

    }
    else if (content == 4) {
        //**54321**// 
        for (let i = 1; i <= height; i++) {

            for (let j = width; j >= 1; j--) {

                document.write(j + "&nbsp;");

            }

            document.write("<br />");

        }

        document.write("<br />Rectangle Perimeter:" + r_p.toFixed(2) + "<br />Rectangle Area:" + r_a);

    }
    else {
        alert("Error, Please select 1 or 2 or 3 or 4, for the shape content.");   //Error message
    }
}

function Triangle(triangle_lenght: number) {

    let pitagoras: number = (triangle_lenght * triangle_lenght) + (triangle_lenght * triangle_lenght);
    let t_p: number = Math.pow(pitagoras, 0.5) + triangle_lenght + triangle_lenght;   //Triangle Perimeter
    let t_a: number = (triangle_lenght * triangle_lenght) / 2;   //Triangle Area

    if (content == 1) {
    //********// 
        for (let i = 1; i <= triangle_lenght; i++) {

            for (let j = 1; j <= i; j++) {

                document.write("*");

            }

            document.write("<br />");

        }

        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);

    }
    else if (content == 2) {
    //*     *//
        for (let i = 1; i < triangle_lenght+1; i++) {

            for (let j = 0; j < i; j++) {

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
        for (let i = 1; i <= triangle_lenght; i++) {

            for (let j = 1; j <= i; j++) {

                document.write(j + "&nbsp;");

            }

            document.write("<br />");

        }

        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);

    }
    else if (content == 4) {
        //**54321**// 
        for (let i = triangle_lenght; i >= 1; i--) {

            for (let j = triangle_lenght; j >= i; j--) {

                document.write(j + "&nbsp;");

            }

            document.write("<br />");

        }

        document.write("<br />Triangle Perimeter:" + t_p.toFixed(2) + "<br />Triangle Area:" + t_a);   

    }
    else  {
        alert("Error, Please select 1 or 2 or 3 or 4, for the shape content.");   //Error message
    }
}




