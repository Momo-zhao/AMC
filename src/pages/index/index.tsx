import { Component, PropsWithChildren } from 'react'
import {View} from '@tarojs/components'
import './index.scss'
import {buttonComponets} from '../../components/button'
import { toTargetPage } from '../../components/utils'
 
export default class Index extends Component<PropsWithChildren> {
  state = {
    data: ['AMC1','AMC2','AMC3'],
    url: '/pages/yearsPage/yearsPage'
  }

  // componentWillMount () {
  //  }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  render () {
    // const data = this.state.data;
    // const url = this.state.url;
    return (
      // <View>
      //   <ButtonComponets data={data} url={url} onClick={(params) => toTargetPage(params.url, {name: params.name})} />
      // </View>
      <View className='button-sp-area titleStyle'>
       { buttonComponets({data: this.state.data, url:this.state.url, onClick:(params) => toTargetPage(params.url, {name: params.name})})}
      </View>
      
      // <View className='index button-sp-area'>
      //   <Button className='button-bg-style' onClick={() => this.toTargetPage('/pages/helloWorld/helloworld')}>Hello world!</Button>
      //   <Button className='button-bg-style'>MOMO!</Button>
      //   <Button className='button-bg-style'>HEY!</Button>
      // </View>
    )
  }
}
