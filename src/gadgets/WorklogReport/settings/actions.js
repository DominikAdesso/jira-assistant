export function setValue(setState) {
    return function (field, value) {
        setState({ [field]: value });
    };
}

export function dateSelected(setState) {
    return function (dateRange) {
        setState({ dateRange });
    };
}

export function renderCheckbox(field, value, currentValue, setValue) {
    return (<input type="radio" className="form-check-input" name={field}
        checked={currentValue === value} onChange={() => setValue(field, value)} />);
}