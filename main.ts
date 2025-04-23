input.onGesture(Gesture.Shake, function () {
    jumlah += 1
    basic.showNumber(jumlah)
})
let jumlah = 0
datalogger.setColumnTitles(
"langkah",
"jam"
)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
jumlah = 0
loops.everyInterval(500, function () {
    datalogger.log(
    datalogger.createCV("langkah", jumlah),
    datalogger.createCV("jam", control.eventTimestamp())
    )
})
basic.forever(function () {
    basic.showNumber(jumlah)
})
