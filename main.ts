let azimuth = 0
basic.forever(function () {
    azimuth = input.compassHeading()
    if (azimuth > 22.5 && azimuth < 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (azimuth < 112.5 && azimuth > 67.5) {
        basic.showArrow(ArrowNames.West)
    } else if (azimuth > 112.5 && azimuth < 157.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (azimuth < 202.5 && azimuth > 157.5) {
        basic.showArrow(ArrowNames.South)
    } else if (azimuth > 202.5 && azimuth < 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (azimuth < 292.5 && azimuth > 247.5) {
        basic.showArrow(ArrowNames.East)
    } else if (azimuth > 292.5 && azimuth < 337.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (azimuth < 22.5 || azimuth > 337.5) {
        basic.showArrow(ArrowNames.North)
    }
})
