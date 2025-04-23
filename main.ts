input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    jumlah += 1
    basic.showNumber(jumlah)
})
let jumlah = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
jumlah = 0
basic.forever(function () {
	
})
