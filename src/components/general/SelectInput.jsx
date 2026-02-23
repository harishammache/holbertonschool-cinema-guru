import "./general.css"

const SelectInput = ({label, options, className, value, setValue}) => {
    const handleSelect = (e) => {
        setValue(e.target.value)
    };

    return (
        <div className={className || ""}>
            {label && <label>{label}</label>}
            <select value={value} onChange={handleSelect}>
                {options.map((option, idx) =>
                typeof option === "object" ? (
                    <option key={option.value || idx} value={option.value}>
                    {option.label}
                    </option>
                ) : (
                    <option key={option} value={option}>
                    {option}
                    </option>
                )
                )}
            </select>
        </div>
  );
}

export default SelectInput