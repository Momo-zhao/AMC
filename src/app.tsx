import { Component, PropsWithChildren } from 'react'
import { Provider } from "react-redux"
import './app.scss'
import store from "./store/store"

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return (
    /*  <Provider store={store}>
     { this.props.children}
      </Provider> */
      this.props.children
      )
  }
}

export default App
