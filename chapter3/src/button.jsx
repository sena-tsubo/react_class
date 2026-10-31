import { useState } from 'react'

const Button = () => {
    // count は現在の数、setCount は count を更新するための関数です。
    // 最初の数を 0 にして、このコンポーネントの状態として保存します。
    const [count, setCount] = useState(0)

    return (
        <>
            {/* クリックするたびに count を 1 増やします。 */}
            <button
                onClick={() => setCount(count + 1)}
                style={{ fontSize: '12px', padding: '3px 8px',width : '100px' }}
            >
                カウントUP
            </button>
        {/* クリックするたびに count を 1 減らします。 */}
            <button
                onClick={() => setCount(count - 1)}
                style={{ fontSize: '12px', padding: '3px 8px',width : '100px' }}
            >
                カウントDOWN
            </button>

            {/* 現在の count の値を画面に表示します。 */}
            <span style={{ fontSize: '12px', padding: '3px 8px' ,width : '100px'}}>{count}</span>
        </>
    )
}

export default Button