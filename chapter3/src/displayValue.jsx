import {useState} from "react";

const DisplayValue = () => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
        <input type = "text"
            value = {value}
            onChange = {handleChange}
        />
        <p>入力された値: {value}</p>
        </>
    )
}
export default DisplayValue;