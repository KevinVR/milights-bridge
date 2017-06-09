// From http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/

    // Start with a temperature, in Kelvin, somewhere between 1000 and 40000.  (Other values may work,
    //  but I can't make any promises about the quality of the algorithm's estimates above 40000 K.)


function colorTemperatureToRGB(kelvin){

    var temp = kelvin / 100;

    var red, green, blue;

    if( temp <= 66 ){

        red = 255;

        green = temp;
        green = 99.4708025861 * Math.log(green) - 161.1195681661;


        if( temp <= 19){

            blue = 0;

        } else {

            blue = temp-10;
            blue = 138.5177312231 * Math.log(blue) - 305.0447927307;

        }

    } else {

        red = temp - 60;
        red = 329.698727446 * Math.pow(red, -0.1332047592);

        green = temp - 60;
        green = 288.1221695283 * Math.pow(green, -0.0755148492 );

        blue = 255;

    }


    return {
        r : clamp(red,   0, 255),
        g : clamp(green, 0, 255),
        b : clamp(blue,  0, 255)
    }

}


function clamp( x, min, max ) {

    if(x<min){ return min; }
    if(x>max){ return max; }

    return x;

}