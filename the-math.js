function tipSpeedCalculator(diameter, volts, kVolts) {
    var circumferenceInches = diameter * Math.PI;
    var circumferenceMM = circumferenceInches * 25.4;
    var rpm = volts * kVolts;
    console.log({ circumferenceInches: circumferenceInches, circumferenceMM: circumferenceMM, rpm: rpm });
    var inchesPerMinute = circumferenceInches * rpm;
    var millimetersPerMinute = circumferenceMM * rpm;
    console.log({ inchesPerMinute: inchesPerMinute, millimetersPerMinute: millimetersPerMinute });
    var feetPerMinute = inchesPerMinute / 12;
    var metersPerMinute = millimetersPerMinute / 1000;
    console.log({ feetPerMinute: feetPerMinute, metersPerMinute: metersPerMinute });
    var milesPerMinute = feetPerMinute / 5280;
    var kilometersPerMinute = metersPerMinute / 1000;
    console.log({ milesPerMinute: milesPerMinute, kilometersPerMinute: kilometersPerMinute });
    var milesPerHour = milesPerMinute * 60;
    var kilometersPerHour = kilometersPerMinute * 60;
    console.log({ milesPerHour: milesPerHour, kilometersPerHour: kilometersPerHour });
    return [milesPerHour, kilometersPerHour];
}
console.log(tipSpeedCalculator(6, 22.2, 520));
