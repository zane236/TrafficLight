control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    while (true) {
        music.stopAllSounds()
        basic.clearScreen()
        rgb_led.showColor(neopixel.colors(NeoPixelColors.Red))
        images.iconImage(IconNames.No).showImage(0)
        basic.pause(2000)
        rgb_led.showColor(neopixel.colors(NeoPixelColors.Orange))
        images.iconImage(IconNames.Square).showImage(0)
        basic.pause(500)
        images.iconImage(IconNames.SmallSquare).showImage(0)
        basic.pause(500)
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        basic.pause(500)
        rgb_led.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showArrow(ArrowNames.North)
        ico_size = 0
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(1000)
        }
        for (let index = 0; index < 6; index++) {
            music.playTone(294, music.beat(BeatFraction.Quarter))
            basic.pause(150)
            if (ico_size == 0) {
                images.createImage(`
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    . . . . .
                    `).showImage(0)
                ico_size = 1
            } else {
                basic.showArrow(ArrowNames.North)
                ico_size = 0
            }
        }
    }
})
let ico_size = 0
let rgb_led: neopixel.Strip = null
music.stopAllSounds()
rgb_led = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
rgb_led.showRainbow(1, 360)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(100)
basic.showIcon(IconNames.Diamond)
basic.pause(100)
basic.showIcon(IconNames.Chessboard)
basic.pause(500)
