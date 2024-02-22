
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


function seat() {
    const seatClass = document.getElementsByClassName('seat-class')
    let seatCount = 0;
    let availableSeat = 8;
    for (item of seatClass) {
        item.addEventListener('click', function () {
            if (seatCount === 4){
                alert ('Please select only 4 seat')
                return;
            }
            seatCount++;
            availableSeat--;
            getId('seat-count').innerText = seatCount;
            getId('seat-left').innerText = availableSeat;
            this.style.backgroundColor = '#1DD100';
            const upperCase = this.innerText.toLowerCase() + '-eco';
            removeChildElementClass(upperCase);
            const ticketPrice = getValue('total-price');
            const totalTicketPrice = ticketPrice + 550;
            getId('total-price').innerText = totalTicketPrice;
            grandTotal();
            this.classList.add("pointer-events-none");
        })
    }
    coupon()
}



// console.log(newArray)


const nextBtn = getId('next-btn');
getId('input-number').addEventListener('keyup', function (event) {
    const text = parseInt(event.target.value);
    console.log(text)
    if(typeof text === 'number'){
        nextBtn.removeAttribute('disabled')
    }
    
})

seat()
