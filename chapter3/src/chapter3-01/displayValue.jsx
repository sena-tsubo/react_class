import {useState} from "react";

const DisplayValue = () => {
    const [value, setValue] = useState("");
    const inputMatchText = "はろー";
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleInput = (event) => {
        if (event.target.value === inputMatchText) {
            alert("入力された値は「" + inputMatchText + "」です。");
        }
    }

    return (
        <>
        <input type = "text"
            value = {value}
            onChange = {handleChange}
            onInput = {handleInput}
        />
        <p>入力された値: {value}</p>
        </>
    )
}
export default DisplayValue;