const a1 = document.getElementById('A1');
a1.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('a1-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const a2 = document.getElementById('A2');
a2.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('a2-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const a3 = document.getElementById('A3');
a3.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('a3-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const a4 = document.getElementById('A4');
a4.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('a4-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const b1 = document.getElementById('B1');
b1.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('b1-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const b2 = document.getElementById('B2');
b2.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('b2-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const b3 = document.getElementById('B3');
b3.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('b3-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})

const b4 = document.getElementById('B4');
b4.addEventListener('click', function () {
    this.classList.add('bg-[#1DD100]')
    const seat = getValue('seat-left') - 1;
    getId('seat-left').innerText = seat;
    const seatCount = getValue('seat-count') + 1;
    getId('seat-count').innerText = seatCount;
    removeChildElementClass('b4-eco');
    // console.log(totalPrice)
    const totalTicketPrice = getValue('total-price');
    const totalTicketPriceValue = totalTicketPrice + 550;
    getId('total-price').innerText = totalTicketPriceValue;
    grandTotal()
    
})


function coupon () {

    const inputValue = getId('input').value;
    if('NEW15' === inputValue || 'Couple 20' === inputValue){
        addChildElementClass('input-field');
        const grandTotal = getValue('grand-total');
        
        if('NEW15'){
            const setGrandTotal = Math.floor(grandTotal - (grandTotal * 15) / 100);
            getId('grand-total').innerText = setGrandTotal;
        }
        if('Couple 20'){
            const setGrandTotal = Math.floor(grandTotal - (grandTotal * 20) / 100);
            getId('grand-total').innerText = setGrandTotal;
        }
    }
   
}

function grandTotal () {
    const totalPrice = getValue('total-price');
    const grandTotal = getId('grand-total');
    grandTotal.innerText = totalPrice;
}

function removeChildElementClass (elementId){
    const element = getId(elementId);
    const removeElement = element.classList.remove('hidden')
    return removeElement
}

function addChildElementClass(elementId){
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
