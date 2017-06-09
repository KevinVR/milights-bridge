
// Custom color slider
/**
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 100
 *
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */
function hsvToRgb(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;

    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));

    // We accept saturation and value arguments from 0 to 100 because that's
    // how Photoshop represents those values. Internally, however, the
    // saturation and value are calculated from a range of 0 to 1. We make
    // That conversion here.
    s /= 100;
    v /= 100;

    if (s == 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));

    switch (i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;

        case 1:
            r = q;
            g = v;
            b = p;
            break;

        case 2:
            r = p;
            g = v;
            b = t;
            break;

        case 3:
            r = p;
            g = q;
            b = v;
            break;

        case 4:
            r = t;
            g = p;
            b = v;
            break;

        default:
            // case 5:
            r = v;
            g = p;
            b = q;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Code below is custom
function changeHue () {
    var rgb = "255, 255, 255"
    var v = (255 - ($(this).val() - 175)) % 255;
    if (v < 256) {
        var c1 = (Math.floor((v / 255.0 * 359.0) % 360) - 240);
        var color = c1 <= 0 ? Math.abs(c1) : 360 - c1;
        rgb = hsvToRgb(color, 80, 100).join();
        console.log(v, c1, color, rgb)
    }

    // Set the slider background color
    $(this).css("background", "rgb(" + rgb + ")");
}

function percentToKelvin(percent) {
    // 2700K = 0
    // 4600K = 50
    // 6500K = 100
    return 2 * ((19 * percent) + 1350);
}

function changeCCT () {
    var val = $('#cct').val();
    val = percentToKelvin(val);
    var rgb = colorTemperatureToRGB(val);
    //rgb = rgb.join();
    // Set the slider background color
    console.log("rgb(" + rgb.r + ", " + rgb.g + "," + rgb.b + ")");
    $(this).css("background", "rgb(" + Math.ceil(rgb.r) + ", " + Math.ceil(rgb.g) + "," + Math.ceil(rgb.b) + ")");
}

function changeSensitivity() {
    $("#sensitivityVal").text(": " + $("#sensitivity").val());
}

function changeTimeBetween() {
    $("#timeBetweenVal").text(": " + $("#timeBetween").val() + "ms");
}
