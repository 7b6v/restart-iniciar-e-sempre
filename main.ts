basic.showString("Piscar")
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.pause(100)
})
