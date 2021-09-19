var bonusBtn = document.querySelector("#bonusBtn");
var bonusNDepositeBtn = document.querySelector("#bonusNDepositeBtn");

var bonusNumber = document.querySelector(".bonusNumber");
var playMoneyNumber = document.querySelector(".playMoneyNumber");
var betNumber = document.querySelector(".betNumber");

var calcShowingDiv = document.querySelector("#calcShowingDiv");

bonusNDepositeBtn.addEventListener("click", function () {
    bonusBtn.classList.remove("activated");
    bonusNDepositeBtn.classList.add("activated");
});

bonusBtn.addEventListener("click", function () {
    bonusNDepositeBtn.classList.remove("activated");
    bonusBtn.classList.add("activated");
});





function freeBonus() {
    var dpositeVal = Number(document.querySelector(".onDeposite").value);
    var onPercentDepVal = Number(document.querySelector(".onPercentDep").value);
    var onWageringVal = Number(document.querySelector(".onWagering").value);
    var onGamePercentVal = Number(document.querySelector(".onGamePercent").value);



    // equations & maths 

    var freeMoney = (dpositeVal * (onPercentDepVal / 100));  // free money , 
    if (freeMoney >= 1000) {
        var showFreeMoney = (freeMoney / 1000).toFixed(2) + "K";
    } else {
        var showFreeMoney = freeMoney.toFixed(2);
    }

    var totalPlayMoney = ((dpositeVal * (onPercentDepVal / 100)) + dpositeVal); // total play money ,
    if (totalPlayMoney >= 1000) {
        var showtotalPlayMoney = (totalPlayMoney / 1000).toFixed(2) + "K";
    } else {
        var showtotalPlayMoney = totalPlayMoney.toFixed(2);
    }


    if (onGamePercentVal > 0) {
        var bet = 100 * ((totalPlayMoney - dpositeVal) * ((onWageringVal / onGamePercentVal))); // You Need To Bet,
        var bnsDpstVat = totalPlayMoney * (100 / onGamePercentVal) * onWageringVal; // you need to bet Bonus + Deposit
    } else {
        var bet = (totalPlayMoney - dpositeVal) * onWageringVal;
        var bnsDpstVat = (totalPlayMoney * onWageringVal);
    }

    if (bet >= 1000) {
        var showBet = (bet / 1000).toFixed(2) + "K";
    } else {
        var showBet = bet.toFixed(2);
    }
    if (bnsDpstVat >= 1000) {
        var showBnsDpstVat = (bnsDpstVat / 1000).toFixed(2) + "K";
    } else {
        var showBnsDpstVat = bnsDpstVat.toFixed(2);
    }
    //---------------- bonus calculator done


    if (bonusBtn.classList.contains('activated')) {
        // bonus calculator --------------
        var logicalShowBet = showBet;
    }
    else if (bonusNDepositeBtn.classList.contains('activated')) {
        // bonus Plus Deposit calculator --------------
        var logicalShowBet = showBnsDpstVat;
    }

    bonusNumber.innerHTML = showFreeMoney;
    playMoneyNumber.innerHTML = showtotalPlayMoney;
    betNumber.innerHTML = logicalShowBet;

    calcShowingDiv.classList.remove("hide");
}








document.querySelector(".onDeposite").addEventListener("keyup", function (keyevent) {
    freeBonus();
});

document.querySelector(".onPercentDep").addEventListener("keyup", function (keyevent) {
    freeBonus();
});

document.querySelector(".onWagering").addEventListener("keyup", function (keyevent) {
    freeBonus();
});

document.querySelector(".onGamePercent").addEventListener("keyup", function (keyevent) {
    freeBonus();
});



document.querySelector("#bonusBtn").addEventListener("click", function() {
    freeBonus();
});

document.querySelector("#bonusNDepositeBtn").addEventListener("click", function() {
    freeBonus();
});

document.querySelector(".depoisiteChange").addEventListener("change", function () {
    freeBonus();
});

document.querySelector(".percentDepChange").addEventListener("change", function () {
    freeBonus();
});

document.querySelector(".wageringChange").addEventListener("change", function () {
    freeBonus();
});

document.querySelector(".gamePercentChange").addEventListener("change", function () {
    freeBonus();
});

//free Bonus money
