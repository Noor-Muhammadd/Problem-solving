//Problem 1 Solutions 

function feetToMile(feet){

    if(feet<0){
        return "distance can't a neagative number !!"
    }
    else if(feet == null){
        return "give a feet value"
    }
    else{
        var result = (feet / 5280).toFixed(4);
        var mile = result + " mile";
        
        return mile ;
    }
    
}
console.log(feetToMile(1111111));



//Problem  2 Solutions 

function woodCalculator(chair , table , bed){
    if(chair<0 || table<0 || bed<0){
        return "invalid items";
    }
    else if(chair == null || table == null || bed == null){
        return "YOU MUST GIVE THREE VALUES ";
    }
    else{
        var woodForChair = chair * 1 ;
        var woodForTable = table * 3 ;
        var woodForBed = bed * 5 ;
        var totalwood = woodForChair + woodForTable + woodForBed ;
        var totalNeed = "you have to need " +totalwood + " cubic feet";

        return totalNeed;
    }
    
}
console.log(woodCalculator(1,2,3));



//Problem 3 Solutions 

function brickCalculator(brick){
    if(brick > 0 && brick < 11){
        var feetBybricks = 15*1000 ;
        var totalBricks = floor * feetBybricks ;
        return "total "+totalBricks;
    }else if(brick > 10 && brick <21){
        var fristRange = 150000;
        var feetBybricks = 12*1000 ;
        var nthFloor = brick - 10 ;
        var totalBricks = (nthFloor * feetBybricks) + fristRange;
        return "total "+totalBricks;
    }else if(brick >= 21){
        var secondRange = 270000;
        var feetBybricks = 10*1000 ;
        var nthbrick = brick - 20 ;
        var totalBricks = (nthbrick * feetBybricks) + secondRange;
        return "total " +totalBricks;
    }else{
        return "number of floor is invalid"
    }
}
console.log(brickCalculator(30));



//Problem 4 Solutions 

function tinyFriend(arr){

    var short = arr[0];
        for(var i = 0 ; i<arr.length ; i++){
            if(short.length > arr[i].length){
                var short = arr[i];
            }
        }
        return ' " ' + short + ' " ' + " is Tiny name"; 
}

var arr1 = ["Noor","Mishu","Khadija","Zihad","Darda","Didar"]
console.log(tinyFriend(arr1));
