const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else {
            showMessage("The cash provided should atleast be equal tothe bill amount")

        }
    } else {
        showMessage("Invalid BillAmount")
    }
});

function calculateChange()

function showMessage(Message) {
    message.style.display = "block"
        message.innerText = Message

}