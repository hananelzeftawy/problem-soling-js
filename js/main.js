// Question 1

function question1() {

    document.getElementById("output-1").innerHTML = "";
    document.getElementById("hint-1").innerHTML = "";

    var x = document.getElementById("input-1").value;
    if (!isNaN(x) && x.length > 0) {
        document.getElementById("output-1").innerHTML = x;
    }
    else {
        document.getElementById("hint-1").innerHTML = "Please Enter A number";
    }
}


// Question 2

function question2() {

    document.getElementById("output-2").innerHTML = "";
    document.getElementById("hint-2").innerHTML = "";

    var x = document.getElementById("input-2").value;


    if (!isNaN(x) && x.length > 0) {
        if ((x % 3 == 0) && (x % 4 == 0)) {
            document.getElementById("output-2").innerHTML = "Yes";
        }
        else {
            document.getElementById("output-2").innerHTML = "No";
        }
    } else {
        document.getElementById("hint-2").innerHTML = "Please Enter A Number";
    }
}

// Question 3

function question3() {

    document.getElementById("output-3").innerHTML = "";
    document.getElementById("hint-3-1").innerHTML = "";
    document.getElementById("hint-3-2").innerHTML = "";

    var x1 = document.getElementById("input-3-1").value;
    var x2 = document.getElementById("input-3-2").value;

    if (isNaN(x1) || x1.length < 1) {
        document.getElementById("hint-3-1").innerHTML = "Please Enter A Number";
    } else if (isNaN(x2) || x2.length < 1) {
        document.getElementById("hint-3-2").innerHTML = "Please Enter A Number";
    } else {

        // Solution
        if (+x1 > +x2) {
            document.getElementById("output-3").innerHTML = x1;
        }
        else {
            document.getElementById("output-3").innerHTML = x2;
        }

    }
}

// Question 4

function question4() {

    document.getElementById("output-4").innerHTML = "";
    document.getElementById("hint-4").innerHTML = "";

    var x = document.getElementById("input-4").value;


    if (!isNaN(x) && x.length > 0) {
        if (+x < 0) {
            document.getElementById("output-4").innerHTML = "Negative";
        } else if (x == 0) {
            document.getElementById("output-4").innerHTML = "Zero";
        }
        else {
            document.getElementById("output-4").innerHTML = "Positive";
        }
    } else {
        document.getElementById("hint-4").innerHTML = "Please Enter A Number";
    }
}



// Question 5

function question5() {

    document.getElementById("output-5").innerHTML = "";
    document.getElementById("hint-5-1").innerHTML = "";
    document.getElementById("hint-5-2").innerHTML = "";
    document.getElementById("hint-5-3").innerHTML = "";

    var x1 = document.getElementById("input-5-1").value;
    var x2 = document.getElementById("input-5-2").value;
    var x3 = document.getElementById("input-5-3").value;
    var numbers = new Array(x1, x2, x3);
    var max = numbers[0];
    var min = numbers[0];


    // Handling Hint Message
    if (isNaN(x1) || x1.length < 1) {
        document.getElementById("hint-5-1").innerHTML = "Please Enter A Number";
    } else if (isNaN(x2) || x2.length < 1) {
        document.getElementById("hint-5-2").innerHTML = "Please Enter A Number";
    } else if (isNaN(x3) || x3.length < 1) {
        document.getElementById("hint-5-3").innerHTML = "Please Enter A Number";
    } else {


        // Solution

        for (var i = 1; i < 3; i++) {
            if (+numbers[i] > max) {
                max = +numbers[i];
            }
            if (+numbers[i] < min) {
                min = +numbers[i];
            }
        }
        document.getElementById("output-5").innerHTML = "Max= " + max + " Min= " + min;
    }
}




// Question 6

function question6() {

    document.getElementById("output-6").innerHTML = "";
    document.getElementById("hint-6").innerHTML = "";

    var x = document.getElementById("input-6").value;

    if (Number.isInteger(+x) && x.length > 0) {
        if (x % 2 == 0) {
            document.getElementById("output-6").innerHTML = "Even";
        }
        else {
            document.getElementById("output-6").innerHTML = "Odd";
        }
    } else {
        document.getElementById("hint-6").innerHTML = "Please Enter An Integer";
    }
}

// Question 7

function question7() {

    document.getElementById("output-7").innerHTML = "";
    document.getElementById("hint-7").innerHTML = "";

    var x = document.getElementById("input-7").value.toLowerCase(); // Handling Capitals
    if (isNaN(x) && x.length == 1) {
        if (x == "a" || x == "e" || x == "o" || x == "i" || x == "u") {
            document.getElementById("output-7").innerHTML = "Vowel";
        }
        else {
            document.getElementById("output-7").innerHTML = "Constant";
        }
    } else {
        document.getElementById("hint-7").innerHTML = "Please Enter One Character";
    }
}

// Question 8

function question8() {

    document.getElementById("output-8").innerHTML = "";
    document.getElementById("hint-8").innerHTML = "";

    var x = document.getElementById("input-8").value;

    if (x.length > 0 && Number.isInteger(+x)) {
        for (var i = 1; i <= +x; i++) {
            if (i == x) {
                document.getElementById("output-8").innerHTML += i
            } else
                document.getElementById("output-8").innerHTML += i + ", "
        }
    } else {
        document.getElementById("hint-8").innerHTML = "Please Enter An Integer";
    }
}

// Question 9

function question9() {

    document.getElementById("output-9").innerHTML = "";
    document.getElementById("hint-9").innerHTML = "";

    var x = document.getElementById("input-9").value;
    var sum = 0;
    if (x.length > 0 && Number.isInteger(+x)) {
        for (var i = 1; i <= 12; i++) {
            sum += +x;
            document.getElementById("output-9").innerHTML += sum + " ";
        }
    } else {
        document.getElementById("hint-9").innerHTML = "Please Enter An Integer";
    }
}

// Question 10

function question10() {

    document.getElementById("output-10").innerHTML = "";
    document.getElementById("hint-10").innerHTML = "";

    var x = document.getElementById("input-10").value;
    var sum = 0;
    if (x.length > 0 && !isNaN(x)) {
        for (var i = 1; i <= x; i++) {
            if (i % 2 == 0) {
                document.getElementById("output-10").innerHTML += i + " ";
            }
        }
    } else {
        document.getElementById("hint-10").innerHTML = "Please Enter A Number";
    }
}

// Question 11

function question11() {

    document.getElementById("output-11").innerHTML = "";
    document.getElementById("hint-11-1").innerHTML = "";
    document.getElementById("hint-11-2").innerHTML = "";


    var x1 = document.getElementById("input-11-1").value;
    var x2 = document.getElementById("input-11-2").value;
    var y = 1;

    // Handling Hint Message

    if (!Number.isInteger(+x1) || x1.length < 1) {
        document.getElementById("hint-11-1").innerHTML = "Please Enter An Integer";
    } else if (!Number.isInteger(+x2) || x2.length < 1) {
        document.getElementById("hint-11-2").innerHTML = "Please Enter An Integer";
    } else {

        // Solution
        for (var i = 1; i <= x2; i++) {
            y *= +x1;
        }
        document.getElementById("output-11").innerHTML = y;

    }

}

// Question 12

function question12() {

    document.getElementById("output-12").innerHTML = "";
    document.getElementById("hint-12-1").innerHTML = "";
    document.getElementById("hint-12-2").innerHTML = "";
    document.getElementById("hint-12-3").innerHTML = "";
    document.getElementById("hint-12-4").innerHTML = "";
    document.getElementById("hint-12-5").innerHTML = "";

    var x1 = document.getElementById("input-12-1").value;
    var x2 = document.getElementById("input-12-2").value;
    var x3 = document.getElementById("input-12-3").value;
    var x4 = document.getElementById("input-12-4").value;
    var x5 = document.getElementById("input-12-5").value;
    var totalMarks = (+x1) + (+x3) + (+x3) + (+x4) + (+x5);

    // Handle Hint Under Input (Marks From 0 - 100)
    if (+x1 < 0 || +x1 > 100 || x1.length < 1 || isNaN(x1)) {
        document.getElementById("hint-12-1").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x2 < 0 || +x2 > 100 || x2.length < 1 || isNaN(x2)) {
        document.getElementById("hint-12-2").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x3 < 0 || +x3 > 100 || x3.length < 1 || isNaN(x3)) {
        document.getElementById("hint-12-3").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x4 < 0 || +x4 > 100 || x4.length < 1 || isNaN(x4)) {
        document.getElementById("hint-12-4").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x5 < 0 || + x5 > 100 || +x5.length < 1 || isNaN(x5))
        document.getElementById("hint-12-5").innerHTML = "Please Enter Mark (0 - 100)";

    else {

        // Solution

        document.getElementById("output-12").innerHTML = "Total Marks= " + totalMarks + "<br>" +
            "Average Marks= " + totalMarks / 5 + "<br>" + "Percentage= " + totalMarks * 100 / 500 + "%"
    }

}


// Question 13

function question13() {

    document.getElementById("output-13").innerHTML = "";
    document.getElementById("hint-13").innerHTML = "";

    var x = document.getElementById("input-13").value;

    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
        document.getElementById("output-13").innerHTML = "Days in Month: 31";
    } else if (x == 2) {
        document.getElementById("output-13").innerHTML = "Days in Month: 28";
    } else if (x == 4 || x == 6 || x == 9 || x == 11) {
        document.getElementById("output-13").innerHTML = "Days in Month: 30";
    } else {
        document.getElementById("hint-13").innerHTML = "Month Numbers (1 - 12)";
    }
}



// Question 14

function question14() {

    document.getElementById("output-14").innerHTML = "";
    document.getElementById("hint-14-1").innerHTML = "";
    document.getElementById("hint-14-2").innerHTML = "";
    document.getElementById("hint-14-3").innerHTML = "";
    document.getElementById("hint-14-4").innerHTML = "";
    document.getElementById("hint-14-5").innerHTML = "";

    var x1 = document.getElementById("input-14-1").value;
    var x2 = document.getElementById("input-14-2").value;
    var x3 = document.getElementById("input-14-3").value;
    var x4 = document.getElementById("input-14-4").value;
    var x5 = document.getElementById("input-14-5").value;
    var Percentage = ((+x1) + (+x2) + (+x3) + (+x4) + (+x5)) * 100 / 500;


    // Handle Hint Under Input (Marks From 0 - 100)
    if (+x1 < 0 || +x1 > 100 || x1.length < 1 || isNaN(x1)) {
        document.getElementById("hint-14-1").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x2 < 0 || +x2 > 100 || x2.length < 1 || isNaN(x2)) {
        document.getElementById("hint-14-2").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x3 < 0 || +x3 > 100 || x3.length < 1 || isNaN(x3)) {
        document.getElementById("hint-14-3").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x4 < 0 || +x4 > 100 || x4.length < 1 || isNaN(x4)) {
        document.getElementById("hint-14-4").innerHTML = "Please Enter Mark (0 - 100)";
    } else if (+x5 < 0 || + x5 > 100 || +x5.length < 1 || isNaN(x5))
        document.getElementById("hint-14-5").innerHTML = "Please Enter Mark (0 - 100)";

    else {

        // Solution

        if (Percentage >= 90) {
            document.getElementById("output-14").innerHTML = "Percantage: " + Percentage + "%" + "<br>"
                + "Grade A";
        } else if (Percentage >= 80) {
            document.getElementById("output-14").innerHTML = "Percantage: " + Percentage + "%" + "<br>"
                + "Grade B";
        } else if (Percentage >= 70) {
            document.getElementById("output-14").innerHTML = "Percantage: " + Percentage + "%" + "<br>"
                + "Grade C";
        } else if (Percentage >= 60) {
            document.getElementById("output-14").innerHTML = "Percantage: " + Percentage + "%" + "<br>"
                + "Grade D";
        } else if (Percentage >= 40) {
            document.getElementById("output-14").innerHTML = "Percantage: " + Percentage + "%" + "<br>"
                + "Grade E";
        } else if (Percentage < 40) {
            document.getElementById("output-14").innerHTML = "Percantage: " + Percentage + "%" + "<br>"
                + "Grade F";
        }

    }

}



// Question 15

function question15() {

    document.getElementById("output-15").innerHTML = "";
    document.getElementById("hint-15").innerHTML = "";

    var x = document.getElementById("input-15").value;

    if (Number.isInteger(+x) && +x > 0 && +x <= 12) {
        switch (+x) {
            
            case 2:
                document.getElementById("output-15").innerHTML = "Days in Month: 28";
                break;

            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("output-15").innerHTML = "Days in Month: 30";
                break;
            default: 
                document.getElementById("output-15").innerHTML = "Days in Month: 31";
        }
    } else {
        document.getElementById("hint-15").innerHTML = "Month Numbers (1 - 12)";
    }
}


// Question 16

function question16() {

    document.getElementById("output-16").innerHTML = "";
    document.getElementById("hint-16").innerHTML = "";

    var x = document.getElementById("input-16").value.toLowerCase();  //Handling Capitals

    if (isNaN(x) && x.length == 1) {
        switch (x) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":

                document.getElementById("output-16").innerHTML = "Vowel";
                break;

            default:
                document.getElementById("output-16").innerHTML = "Constant";
        }
    } else {
        document.getElementById("hint-16").innerHTML = "Please Enter One Character";
    }
}



// Question 17

function question17() {

    document.getElementById("output-17").innerHTML = "";
    document.getElementById("hint-17-1").innerHTML = "";
    document.getElementById("hint-17-2").innerHTML = "";

    var x1 = document.getElementById("input-17-1").value;
    var x2 = document.getElementById("input-17-2").value;

    var y = (+x1) > (+x2);

    console.log(y)

    if (isNaN(x1) || x1.length < 1) {
        document.getElementById("hint-17-1").innerHTML = "Please Enter A Number";
    } else if (isNaN(x2) || x2.length < 1) {
        document.getElementById("hint-17-2").innerHTML = "Please Enter A Number";
    } else {

        // Solution
        switch (y) {
            case true:
                document.getElementById("output-17").innerHTML = x1;
                break;
            default:
                document.getElementById("output-17").innerHTML = x2;
        }
    }
}


// Question 18

function question18() {

    document.getElementById("output-18").innerHTML = "";
    document.getElementById("hint-18").innerHTML = "";

    var x = document.getElementById("input-18").value;

    var y = (x % 2) == 0;

    if (Number.isInteger(+x) && x.length > 0) {
        switch (y) {
            case true:
                document.getElementById("output-18").innerHTML = "Even";
                break;
            default:
                document.getElementById("output-18").innerHTML = "Odd";
        }
    } else {
        document.getElementById("hint-18").innerHTML = "Please Enter An Integer";
    }
}


// Question 19

function question19() {

    document.getElementById("output-19").innerHTML = "";
    document.getElementById("hint-19").innerHTML = "";

    var x = document.getElementById("input-19").value;
    var y = x > 0;

    if (!isNaN(x) && x.length > 0) {
        switch (+x) {
            case 0:
                document.getElementById("output-19").innerHTML = "Zero";
                break;
            default:
                switch (y) {
                    case true:
                        document.getElementById("output-19").innerHTML = "Positive";
                        break;
                    default:
                        document.getElementById("output-19").innerHTML = "Negative";
                }
        }
    } else {
        document.getElementById("hint-19").innerHTML = "Please Enter A Number";
    }
}


// Calculator

var inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {

    var pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);

    } else if (pushed == 'AC') {
        // All Clear
        inputLabel.innerHTML = '0';

    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;

        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}


