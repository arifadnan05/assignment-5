
document.getElementById('A1').addEventListener('click', function () {
    removeChildElementClass('a1-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('A2').addEventListener('click', function () {
    removeChildElementClass('a2-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('A3').addEventListener('click', function () {
    removeChildElementClass('a3-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('A4').addEventListener('click', function () {
    removeChildElementClass('a4-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('B1').addEventListener('click', function () {
    removeChildElementClass('b1-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('B2').addEventListener('click', function () {
    removeChildElementClass('b2-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('B3').addEventListener('click', function () {
    removeChildElementClass('b3-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})
document.getElementById('B4').addEventListener('click', function () {
    removeChildElementClass('b4-eco');
    const ticketPrice = getValue('total-price');
    const totalTicketPrice = ticketPrice + 550;
    getId('total-price').innerText = totalTicketPrice;
    grandTotal();
    this.classList.add("pointer-events-none");
})

function coupon() {
    const seatCount = getValue('seat-count');
    const inputValue = getId('input').value;
    if (seatCount >= 4) {
        if ('NEW15' === inputValue || 'Couple 20' === inputValue) {
            addChildElementClass('input-field');
            const grandTotal = getValue('grand-total');


            if ('NEW15') {
                const setGrandTotal = Math.floor(grandTotal - (grandTotal * 15) / 100);

                getId('grand-total').innerText = setGrandTotal;
            }
            if ('Couple 20') {
                const setGrandTotal = Math.floor(grandTotal - (grandTotal * 20) / 100);
                getId('grand-total').innerText = setGrandTotal;
            }
        }
    }

}

function grandTotal() {
    const totalPrice = getValue('total-price');
    const grandTotal = getId('grand-total');
    grandTotal.innerText = totalPrice;
}

function removeChildElementClass(elementId) {
    const element = getId(elementId);
    const removeElement = element.classList.remove('hidden')
    return removeElement
}

function addChildElementClass(elementId) {
    const element = getId(elementId);
    const addChildClass = element.classList.add('hidden');
    return addChildClass;
}

function getId(elementId) {
    const element = document.getElementById(elementId);
    return element;
}
function getValue(elementId) {
    const element = getId(elementId);
    const elementText = element.innerText;
    const elementTextValue = parseInt(elementText);
    return elementTextValue;
}




let add = 0;
let minus = 8;
const seatLeft = document.getElementById('seat-left');
const seatCount = document.getElementById('seat-count');
const seatSelection = document.getElementsByClassName('seat-class')
for (const item of seatSelection) {
    item.addEventListener('click', function () {
        add++;
        minus--;
        if (add >= 5) {
            // alert('Please select only 4 seat')
            return;
        }

        seatCount.innerText = add;
        seatLeft.innerText = minus;
        item.style.backgroundColor = '#1DD100';
        this.classList.add("pointer-events-none");

    })


}


