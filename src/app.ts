import { Component } from 'react'
import "moit-style"
// import './assets/less/tea/tea.less'
import './app.less'



class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
