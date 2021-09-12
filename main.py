ico_size = 0
rgb_led = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
basic.show_icon(IconNames.SMALL_DIAMOND)
basic.pause(100)
basic.show_icon(IconNames.DIAMOND)
basic.pause(100)
basic.show_icon(IconNames.CHESSBOARD)

def on_forever():
    global ico_size
    music.stop_all_sounds()
    rgb_led.show_color(neopixel.colors(NeoPixelColors.RED))
    images.icon_image(IconNames.NO).show_image(0)
    basic.pause(2000)
    rgb_led.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    images.icon_image(IconNames.SQUARE).show_image(0)
    basic.pause(1000)
    images.icon_image(IconNames.SMALL_SQUARE).show_image(0)
    basic.pause(500)
    images.create_image("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """).show_image(0)
    basic.pause(500)
    rgb_led.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.show_arrow(ArrowNames.NORTH)
    ico_size = 0
    for index in range(4):
        music.play_tone(262, music.beat(BeatFraction.HALF))
        basic.pause(500)
    for index2 in range(4):
        if ico_size == 0:
            images.arrow_image(ArrowNames.NORTH).show_image(1)
            ico_size = 1
        else:
            basic.show_arrow(ArrowNames.NORTH)
            ico_size = 0
        music.play_tone(262, music.beat(BeatFraction.QUARTER))
        basic.pause(150)
basic.forever(on_forever)
