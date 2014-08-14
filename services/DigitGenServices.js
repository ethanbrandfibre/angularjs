/**
 * Created by ethan on 2014/7/25.
 */
angular.module("digitGenServices", [])
    .factory("digitGenServices", function () {
        return{
            //recursively check whether there are two duplicate digits in the digit string
            isDupDigs: function (/*String:digit string for checking*/ digits, /*int:current index of recursive function*/curIdx) {

                if(!this.isValid(digits)){
                    return true;
                }

                if (curIdx == undefined || curIdx < 0) {
                    curIdx = 0;
                }

                if (curIdx >= digits.length) {
                    return false;//return false after checking the last digit of the digit string
                }
                var curBit = digits[curIdx];
                for (var i = curIdx + 1; i < digits.length; i++) {
                    if (curBit == digits[i]) {
                        return true;
                    }
                }
                curIdx++;
                if (this.isDupDigs(digits, curIdx)) {//check the bubbled result of sub function
                    return true;
                } else {
                    return false;
                }
            },
            //check whether the digit string has consecutive bits
            isConsDigs: function (/*String:digit string string for checking*/ digits) {
                if(!this.isValid(digits)){
                    return true;
                }
                for (var i = 1; i < digits.length - 1; i++) {
                    var formerDig = parseInt(digits[i - 1], 10);
                    var currentDig = parseInt(digits[i], 10);
                    var latterDig = parseInt(digits[i + 1], 10);
                    if (formerDig + 1 == currentDig && currentDig + 1 == latterDig) {
                        return true;
                    }
                }
                return false;
            },
            //check whether the digit string exists in the digitArray
            isDigitExist: function (/*String:digit string for checking*/ digits, /*Array : current generated array of digits*/ digitArray) {
                if(!this.isValid(digits)){
                    return true;
                }
                return (digitArray.indexOf(digits) == -1) ? false : true;
            },

            //crosscutting function to test whether the generated digits is valid pin code
            isValid:function(/*String:digit string for checking*/ digits){
                if (!digits) {//ignore invalid string
                    return false;
                }
                //check whether is a number
                if(isNaN(parseInt(digits))){
                    return false;
                }
                return true;
            }

        }
    });