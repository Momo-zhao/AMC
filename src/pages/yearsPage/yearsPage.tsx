import { Component, PropsWithChildren } from 'react'
import {View} from '@tarojs/components'
import { buttonComponets } from '../../components/button'
import { toTargetPage } from '../../components/utils'

export default class YearsPage extends Component<PropsWithChildren> {
  state = {
    data: ['1990','1991','1992', '1993','1994','1995','1996','1997','1998','1999', '2000'],
    url: '/pages/content/content'
  }

  render () {
    // const data = this.state.data;
    // const url = this.state.url;
    return (
      // <View>
      //   <ButtonComponets data={data} url={url} onClick={(params) => toTargetPage(params.url, {year: params.name, id: '1'})} />
      // </View>
      <View className='button-sp-area titleStyle'>
       { buttonComponets({data: this.state.data, url:this.state.url, onClick: (params) => toTargetPage(params.url, {year: params.name, id: '1'})})}
      </View>
      
    )
  }
}