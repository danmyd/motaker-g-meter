radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber / 1000)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Avles")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Nullstill")
})
radio.setGroup(162)
