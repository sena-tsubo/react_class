import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const massage = 'Hello React!'
  const tabnumber = 0
  const tabClassName = 'tabClassName' + tabnumber
  const attr = {
    className: 'tabClassName' + tabnumber,
    tabIndex: tabnumber
  }
  const myFavoriteFruit = 'りんご'
  const fruits = ['りんご', 'みかん', 'ぶどう','もも','ばなな']
  const isLogin = false
  return (
    <>
      <h1>JSXの基本</h1> {/*P49の内容を描く。*/}
      <p>これはp要素です。</p>{/*P51の内容を描く。*/}
      <h1 className="font-normal">Classの書き方</h1>{/*P54の内容を描く。*/}
      <label htmlFor="input">htmlForの書き方</label>{/*P54の内容を描く。*/}
      <p tabIndex="0">tabIndexの書き方</p>{/*P55の内容を描く。*/}
      <p>{massage}</p>{/*P56の内容を描く。*/}
      <p className={tabClassName}>classNameの書き方</p>{/*P56の内容を描く。*/}
      <p {...attr}>スプレッド構文の書き方</p>{/*P57の内容を描く。*/}
      <p>{isLogin && 'ログイン済み'}</p>{/*P58の内容を描く。*/}
      <p>{isLogin ? 'ログイン済み' : '未ログイン'}</p>
      {/* <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))} {/*アロー関数が一般的なので、return記法は教えません
      </ul> */}

      {fruits.map((fruit , index ) => (
        <li key={index}>{
          fruit == myFavoriteFruit ? <p style = {{color : 'red'}}>{fruit}</p>
          : <p>{fruit}</p>
        }
          </li>
      ))}
    </>
  )
}

export default App
