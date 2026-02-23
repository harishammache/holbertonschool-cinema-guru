import "./general.css"

const Input = ({ label, type, className, value, setValue, icon = null, inputAttributes = {} }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div className={`username ${className || ""}`}>
                {label && <label className="input-label">{label}</label>}
                <div className="input-wrapper">
                    {icon && <span className="input-icon">{icon}</span>}
                    <input
                        type={type}
                        value={value}
                        onChange={handleInput}
                        className="input-field"
                        {...inputAttributes}
                    />
                </div>
            </div>
            <div className={`date ${className || ""}`}>
                {label && <label className="input-label">{label}</label>}
                <div className="input-wrapper">
                    {icon && <span className="input-icon">{icon}</span>}
                    <input
                        type={type}
                        value={value}
                        onChange={handleInput}
                        className="input-field"
                        {...inputAttributes}
                    />
                </div>
            </div>
        </div>
    );
};


export default Input;