import './App.css'

function App() {
  const myInformation = '学籍番号　学科　氏名'
  const isLogin = true
  const myFavoriteFruit = '好きなフルーツ'
  const fruits = ['好きなフルーツ', 'りんご', 'みかん', 'ぶどう', 'もも', 'ばなな']
  const curryMake = [
    '具材を用意する',
    '玉ねぎを切る',
    '玉ねぎを炒める',
    '牛肉を入れて焼く',
    '水とルーを加える',
    '10分ほど煮込む',
    'ご飯にかけて完成'
  ]

  return (
    <>
      <h1>基礎課題</h1>
      <p className="font-bold">
        {isLogin ? 'こんにちはあなたの名前' : 'ログインしてください'}
      </p>
    
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit === myFavoriteFruit ? <strong>{fruit}</strong> : <p>{fruit}</p>}
          </li>
        ))}
      </ul>

      <h2>カレーの作り方</h2>
      <ol>
        {curryMake.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p style={{ fontWeight: 'bold'  , color: 'blue' }}>{myInformation}</p>
    </>
  )
}

export default App