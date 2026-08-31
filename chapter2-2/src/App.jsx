import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
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
        < Content id = "jsx" title = "JSX" description = "JSXは、JavaScriptの中でHTMLのような構文を使えるようにする拡張機能です。Reactでは、UIを定義するためにJSXを使用します。"/>
        < Content id = "components" title = "コンポーネント" description = "コンポーネントは、UIを構築するための再利用可能な部品です。Reactでは、コンポーネントを組み合わせて複雑なUIを構築します。"/>
        <Content id = "props" title = "Props" description = "Propsは、コンポーネントにデータを渡すための仕組みです。親コンポーネントから子コンポーネントにデータを渡すことができます。">
          <p>タグの間に書いた内容は、<strong>props.children</strong>で受け取れます。</p>
        </Content>
        < Content id = "state" title = "State" description = "Stateは、コンポーネントの状態を管理するための仕組みです。Stateが変更されると、コンポーネントは再レンダリングされます。"/> 
      </main>

      <Footer />

    </div>
  )
}

export default App;
