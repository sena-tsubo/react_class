import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

function Layout({ children }) {
  return (
    <div className="app">
      <Header>
        {children}
      </Header>
      <Footer />
    </div>
  )
}
const contets = [
  {
    id:"jsx",
    title:"JSX",
    description:"JSXは、JavaScriptの中でHTMLのような構文を使えるようにする拡張機能です。Reactでは、UIを定義するためにJSXを使用します。"
  },
  {
    id:"components",
    title:"コンポーネント",
    description:"コンポーネントは、UIを構築するための再利用可能な部品です。Reactでは、コンポーネントを組み合わせて複雑なUIを構築します。"
  },
  {
    id:"props",
    title:"Props",
    description:"Propsは、コンポーネントにデータを渡すための仕組みです。親コンポーネントから子コンポーネントにデータを渡すことができます。"
  },
  {
    id:"state",
    title:"State",
    description:"Stateは、コンポーネントの状態を管理するための仕組みです。Stateが変更されると、コンポーネントは再レンダリングされます。"
  }
]
function App() {
  return (

    <Layout>
         {/*教科書P78の内容 */}
        {contets.map((content) => (<Content key={content.id} {...content} />))}
        < Content id = "jsx" title = "JSX" description = "JSXは、JavaScriptの中でHTMLのような構文を使えるようにする拡張機能です。Reactでは、UIを定義するためにJSXを使用します。"/>
        < Content id = "components" title = "コンポーネント" description = "コンポーネントは、UIを構築するための再利用可能な部品です。Reactでは、コンポーネントを組み合わせて複雑なUIを構築します。"/>
        <Content id = "props" title = "Props" description = "Propsは、コンポーネントにデータを渡すための仕組みです。親コンポーネントから子コンポーネントにデータを渡すことができます。">
          <p>タグの間に書いた内容は、<strong>props.children</strong>で受け取れます。</p>
        </Content>
        < Content id = "state" title = "State" description = "Stateは、コンポーネントの状態を管理するための仕組みです。Stateが変更されると、コンポーネントは再レンダリングされます。"/> 
    </Layout>
  )
}

export default App;
