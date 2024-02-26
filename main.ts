basic.clearScreen()
let levels: string[] = []
let plotIndex = 0
let levelIndex = 0
levels.push("00000" + "00000" + "00000" + "00000" + "11111")
for (let index = 0; index <= 24; index++) {
    if (levels[levelIndex].charAt(index) == "1") {
        led.plot(plotIndex % 5, Math.floor(plotIndex / 5))
    }
    plotIndex += 1
}
