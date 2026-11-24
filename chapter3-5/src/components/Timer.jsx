import { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const timerIdRef = useRef(null)

    // 開始ボタンを押したときの処理
    const handleStart = () => {
        // タイマーがすでに動いている場合は、重複して開始しない
        if (timerIdRef.current !== null) return

        // 1秒ごとに経過時間を1ずつ増やすタイマーを開始する
        timerIdRef.current = setInterval(() => {
            setSeconds((previousSeconds) => previousSeconds + 1)
        }, 1000)
    }

    // 停止ボタンを押したときの処理
    const handleStop = () => {
        if (timerIdRef.current !== null) {
            // 保存しているタイマー番号を使ってタイマーを停止する
            clearInterval(timerIdRef.current)

            // タイマーが停止したことを保存し、次回開始できるようにする
            timerIdRef.current = null
        }
    }

    // コンポーネントを画面から削除するときもタイマーを停止する
    useEffect(() => {
        return () => {
            if (timerIdRef.current !== null) {
                clearInterval(timerIdRef.current)
                timerIdRef.current = null
            }
        }
    }, [])

    return (
        <div>
            <p>経過時間: {seconds}秒</p>
            <button onClick={handleStart}>開始</button>
            <button onClick={handleStop}>停止</button>
        </div>
    )
}

export default Timer
