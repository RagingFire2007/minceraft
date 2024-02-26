basic.clear_screen()
levels: List[str] = []
plotIndex = 0
levelIndex = 0
levels.append("000000000000000" + "00000" + "00000")
levels.append("1110000000000000000000000")
for index in range(25):
    if levels[levelIndex].char_at(index) == "1":
        led.plot(plotIndex % 5, plotIndex / 5 - plotIndex % 5 / 5)
    plotIndex += 1