input.onButtonPressed(Button.A, function () {
    basic.showString("beep!")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . # . .
        # . # . .
        . . . . .
        # # # # .
        # . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . # . .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . #
        . . # . #
        . . . . .
        . # # # #
        . . . . #
        `)
})
basic.showLeds(`
    # # . # #
    . # . # .
    . . . . .
    . # # # #
    # . . . .
    `)
