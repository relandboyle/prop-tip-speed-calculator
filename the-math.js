function tipSpeedCalculator(diameter, volts, kVolts) {
    var circumferenceInches = diameter * Math.PI;
    var circumferenceMM = circumferenceInches * 25.4;
    var rpm = volts * kVolts;
    // console.log( { circumferenceInches, circumferenceMM, rpm } );
    var inchesPerMinute = circumferenceInches * rpm;
    var millimetersPerMinute = circumferenceMM * rpm;
    // console.log( { inchesPerMinute, millimetersPerMinute } );
    var feetPerMinute = inchesPerMinute / 12;
    var metersPerMinute = millimetersPerMinute / 1000;
    // console.log( { feetPerMinute, metersPerMinute } );
    var milesPerMinute = feetPerMinute / 5280;
    var kilometersPerMinute = metersPerMinute / 1000;
    // console.log( { milesPerMinute, kilometersPerMinute } );
    var milesPerHour = milesPerMinute * 60;
    var kilometersPerHour = kilometersPerMinute * 60;
    // console.log( { milesPerHour, kilometersPerHour } );
    return { milesPerHour: milesPerHour, kilometersPerHour: kilometersPerHour };
}
console.log(tipSpeedCalculator(6, 22.2, 2400));
console.log(tipSpeedCalculator(5, 25, 1800));
