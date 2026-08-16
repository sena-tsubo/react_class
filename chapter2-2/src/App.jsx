import './App.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="#jsx">JSX</a></li>
        <li><a href="#component">コンポーネント</a></li>
        <li><a href="#event">イベント</a></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  retutrn(
    <header>
      <h1>React学習</h1>
      <Navigation />
    </header>
  )
}

const Footer = () => {
  return(
    <footer>
      <Navigation />
      <p>&copy; 2026 React 学習サイト</p>
    </footer>
  )
}
function App() {
  return (
    <div className="app">
      
      {/* ナビゲーションを一つの部品として作成する。*/}
      <Header />
            {/* TODO: ヘッダー部分は HeroSection として切り出せます */}
      {/* const HeroSection = () => ( ... ) */}

      {/* TODO: 学習項目一覧は FeatureList として切り出せます */}
      {/* const FeatureList = () => ( ... ) */}

      {/* TODO: ボタンや CTA は Button として切り出せます */}
      {/* const CTAButton = () => ( ... ) */}
      <main>
        <h2 id = "jsx">JSX</h2>
        <p>JSXはJavaScriptの拡張構文で、HTMLのような構文をJavaScript内で使用できるようにするものです。</p>
        <h2 id = "component">コンポーネント</h2>
        <p>コンポーネントは、UIを構築するための再利用可能な部品です。Reactでは、関数またはクラスとして定義されます。</p>
        <h2 id = "event">イベント</h2>
        <p>Reactでは、ユーザーの操作に応じてイベントを処理することができます。例えば、ボタンのクリックやフォームの送信などがあります。</p>
      </main>

      <Footer />

    </div>
  )
}

export default App
