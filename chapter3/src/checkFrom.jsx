import {useState} from "react";

 {/*利用規約に同意したら送信できるフォーム */}
const CheckForm = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsAgreed(event.target.checked);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("フォームが送信されました。");
    }

    return (
        <form onSubmit ={handleSubmit}>
            <label>
                <input type="checkbox" 
                checked={isAgreed} 
                onChange={handleCheckboxChange} />
                利用規約に同意する
            </label>
            <br />
            <button type="submit" disabled={!isAgreed}>送信</button>
        </form>
    )

}
export default CheckForm;