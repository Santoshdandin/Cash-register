const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0 ) {
        if(cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else {
            showMessage("The cash provided should atleast be equal tothe bill amount")

        }
    } else {
        showMessage("Invalid BillAmount")
    }
});

function calculateChange(amountToBeReturned) {
    //go over all the available notes
    for (let i = 0; i < availableNotes.length; i++) {
        //no of notes need for the denomination
        const numberOfNotes = Math.trunc (
            amountToBeReturned / availableNotes[i]
            );

            //amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];

            //updating the no of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
        
    }
    
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block"
        message.innerText = msg;

}