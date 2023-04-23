export default class BMICalculator {
    displayBMI(bodyStats) {
        const kg           = bodyStats.pounds / 2.205;
        const cmFromFt     = bodyStats.ft     * 30.48;
        const cmFromInches = bodyStats.inches * 2.54;
        const cm           = cmFromFt + cmFromInches;
        const m            = cm / 100;

        const bmi = kg / (m * m);
        alert(Math.round(bmi));
    }
}