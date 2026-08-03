// 1. Length Converter: Inches to Centimeters (1 inch = 2.54 cm)
function convertLength() {
    var inchInput = document.getElementById("length-inch").value;
    
    if (inchInput === "") {
        document.getElementById("length-result").innerHTML = "Please enter a value.";
        return;
    }
    
    var inches = parseFloat(inchInput);
    var cm = inches * 2.54;
    
    document.getElementById("length-result").innerHTML = "Equal to " + cm.toFixed(2) + " cm";
}

// 2. Height Converter: Feet & Inches to Centimeters (1 ft = 30.48 cm, 1 in = 2.54 cm)
function convertHeight() {
    var ftInput = document.getElementById("height-ft").value;
    var inInput = document.getElementById("height-in").value;
    
    var ft = ftInput === "" ? 0 : parseFloat(ftInput);
    var inches = inInput === "" ? 0 : parseFloat(inInput);
    
    if (ftInput === "" && inInput === "") {
        document.getElementById("height-result").innerHTML = "Please enter a value.";
        return;
    }
    
    var totalCm = (ft * 30.48) + (inches * 2.54);
    
    document.getElementById("height-result").innerHTML = "Equal to " + totalCm.toFixed(2) + " cm";
}

// 3. Temperature Converter: Celsius to Fahrenheit (F = C * 9/5 + 32)
function convertTemp() {
    var cInput = document.getElementById("temp-c").value;
    
    if (cInput === "") {
        document.getElementById("temp-result").innerHTML = "Please enter a value.";
        return;
    }
    
    var celsius = parseFloat(cInput);
    var fahrenheit = (celsius * 9 / 5) + 32;
    
    document.getElementById("temp-result").innerHTML = "Equal to " + fahrenheit.toFixed(2) + " °F";
}

// 4. Area Converter: Acres to Square Meters (1 acre = 4046.86 m²)
function convertArea() {
    var acreInput = document.getElementById("area-acre").value;
    
    if (acreInput === "") {
        document.getElementById("area-result").innerHTML = "Please enter a value.";
        return;
    }
    
    var acres = parseFloat(acreInput);
    var sqMeters = acres * 4046.86;
    
    document.getElementById("area-result").innerHTML = "Equal to " + sqMeters.toFixed(2) + " m²";
}
