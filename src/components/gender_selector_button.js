import Gender from '../model/gender';
import '../bmi.css';

export default function GenderSelectorButton(props) {
    const gender           = props.gender;
    const currentSelection = props.currentSelection;
    const onSwitch         = props.onSwitch;
    
    const isCurrentlySelected = currentSelection === gender;
    
    return (
        <button 
            onClick={onSwitch} 
            className={isCurrentlySelected ? "btn-active btn-selector" : "btn-dis btn-selector"}
        >
            {gender === Gender.male ? "Male" : "Female"}
        </button>
    );
}