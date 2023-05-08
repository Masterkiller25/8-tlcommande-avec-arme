input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
    basic.pause(1000)
    radio.sendNumber(0)
})
basic.showLeds(`
    # # # . .
    . . . # .
    # # . . #
    . . # . #
    # . # . #
    `)
// Modifie en fonction de ton robot
radio.setGroup(5)
radio.sendString("ok")
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
})
