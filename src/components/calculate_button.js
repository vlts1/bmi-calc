import '../bmi.css';
export default function CalculateButton(props) {
    const calculator = props.calculator;
    const bodyStats  = props.bodyStats;

    function showResult() {
        calculator.displayBMI(bodyStats);
    }
    return (
        <button className="bmi-submitter" onClick={showResult}>Calculate</button>
    );
}