var contentOne = document.getElementById('ct_one')
var contentTwo = document.getElementById('ct_two')
var contentThree = document.getElementById('ct_three')

function btOne() {
    contentOne.style.display = 'block'
    contentTwo.style.display = 'none'
    contentThree.style.display = 'none'
}
function btTwo() {
    contentOne.style.display = 'none'
    contentTwo.style.display = 'block'
    contentThree.style.display = 'none'
}
function btThree() {
    contentOne.style.display = 'none'
    contentTwo.style.display = 'none'
    contentThree.style.display = 'block'
}