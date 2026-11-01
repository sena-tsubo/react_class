import {useState} from "react";
import React from "react";
{/*課題内容ユーザー名とパスワードが一致して利用規約に同意
    をするとログインボタンが置けるフォームの作成
 */}

const LoginForm = () => {
    const user = {
        username: "user1",
        password: "password1"
    };
    const [isAgreed, setIsAgreed] = useState(false);
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("メソッドの中身を使用しています : handleSubmit");
        if (username === user.username && password === user.password ){
            alert("ログインが成功しました");
        } else {
            dialog("ユーザー名またはパスワードが間違っています");
        }

    }
    return (
        <form>
            <h1>ログインフォーム</h1>
            <label htmlFor = "username">ユーザー名　:</label>
            <input type = "text" id = "username" name = "username" onChange={handleUsernameChange}/>
            <br />
            <label htmlFor = "password">パスワード　:</label>
            <input type = "password" id = "password" name = "password" onChange={handlePasswordChange}/>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="agreement"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                />
                利用規約に同意する
            </label>
            <br />
            <button type="submit" disabled={!isAgreed} onClick={handleSubmit}>
                ログイン
            </button>
        </form>
    )
};
export default LoginForm;
