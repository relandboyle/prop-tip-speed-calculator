function tipSpeedCalculator(diameter: number, volts: number, kVolts: number) {

    const circumferenceInches: number = diameter * Math.PI;
    const circumferenceMM: number = circumferenceInches * 25.4;
    const rpm: number = volts * kVolts;
    // console.log( { circumferenceInches, circumferenceMM, rpm } );

    const inchesPerMinute: number = circumferenceInches * rpm;
    const millimetersPerMinute: number = circumferenceMM * rpm;
    // console.log( { inchesPerMinute, millimetersPerMinute } );

    const feetPerMinute: number = inchesPerMinute / 12;
    const metersPerMinute: number = millimetersPerMinute / 1000;
    // console.log( { feetPerMinute, metersPerMinute } );

    const milesPerMinute: number = feetPerMinute / 5280;
    const kilometersPerMinute: number = metersPerMinute / 1000;
    // console.log( { milesPerMinute, kilometersPerMinute } );

    const milesPerHour: number = milesPerMinute * 60;
    const kilometersPerHour: number = kilometersPerMinute * 60;
    // console.log( { milesPerHour, kilometersPerHour } );

    return {milesPerHour, kilometersPerHour};
}


console.log(tipSpeedCalculator(6, 22.2, 2400));
console.log(tipSpeedCalculator(5, 25, 1800));