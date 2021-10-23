// Variables
let bill
let billInput = $('.bill')
billInput.keyup(function() {
    bill = $(this).val()
}).keyup()


let tipPercent
let people
$('.people').keyup(function () {
    people = $(this).val()
}).keyup()
let peopleInput = $('.people')
let tip = $('.tip')
let customTip = $('.tip__custom')

let tipAmount
let total

let totalText = $('.total')
let tipText = $('.tip__amount')

let resetBtn = $('.reset__btn')

let errorText = $('.w__text')

// functions

function setPercent(event) {
    let btnText = event.target.innerText
    let percent = btnText.substring(0, btnText.length - 1)
    tipPercent = parseInt(percent, 10) / 100
    console.log(event.target.nodeName)
}

function tipCalculator() {
    tipAmount = (bill / people) * tipPercent
    total = tipAmount * people
    tipText.text(`$${tipAmount.toFixed(2)}`)
    totalText.text(`$${total.toFixed(2)}`)
}

function resetApp() {
    tipText.text('$0.00')
    totalText.text('$0.00')
    peopleInput.val(0)
    billInput.val(0)
    tipPercent = 0
}


// Events

$(document).ready(function () {
    resetBtn.prop('disabled', true)
})

billInput.keyup(function() {
    resetBtn.prop('disabled', false)
})

tip.click(function (e) {
    setPercent(e)
})

customTip.keyup(function (e) {
    tipPercent = parseInt(e.target.value, 10) / 100
    // let key = e.which
    // if (key === 13) {
    //     tipPercent = parseInt(e.target.value, 10) / 100
    // }
})

peopleInput.keyup(function (e) {
    if (people == 0) {
            errorText.removeClass('hidden')
            peopleInput.removeClass('focus:ring-green-600')
            peopleInput.addClass('focus:ring-red-600')
        } else {
            if (peopleInput.hasClass('focus:ring-red-600')) {
                errorText.addClass('hidden')
                peopleInput.removeClass('focus:ring-red-600')
                peopleInput.addClass('focus:ring-green-600')
            }
            tipCalculator()
        }
    console.log('done')
    // let key = e.which
    // if (key === 13) {
        
    // }
})

resetBtn.click(function (e) {
    e.preventDefault();
    resetApp()
})