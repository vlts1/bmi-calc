import '../bmi.css';

export default function BMIForm(props) {
    const onInfoUpdate  = props.onInfoUpdate;
    const bodyStatsCopy = JSON.parse(JSON.stringify(props.bodyStats));

    function updateData(e) {
        const inputValue = e.target.value; 
        const inputName  = e.target.name;
        
        switch(inputName) {
            case "pounds":
                bodyStatsCopy.pounds = inputValue;
                break;
            case "ft":
                bodyStatsCopy.ft     = inputValue;
                break;
            case "inches":
                bodyStatsCopy.inches = inputValue;
                break;
            default: break;
        }
        onInfoUpdate(bodyStatsCopy);
    }

    return (
        <form>
            <input type="number" name="pounds" className='bmi-input bmi-input-long'  onChange={e => updateData(e)} value={bodyStatsCopy.pounds}></input>
            <div></div>
            <input type="number" name="ft"     className='bmi-input bmi-input-short' onChange={e => updateData(e)} value={bodyStatsCopy.ft}    ></input>
            <span class="pl-5"></span>
            <input type="number" name="inches" className='bmi-input bmi-input-short' onChange={e => updateData(e)} value={bodyStatsCopy.inches}></input>
        </form>
    );
}