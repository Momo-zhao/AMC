import { Component, PropsWithChildren } from 'react'
import { Text, View, Button} from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import './index.scss'
import { toTargetPage } from '../../components/utils'

const mock = {
  '1990': [
    {
      id: '1',
      title: 'Do you know what one plus one is?',
      answer: '2',
      analysis: 'Because one plus one is Tow'
    },
    {
      id: '2',
      title: 'Do you know what five plus five is?',
      answer: '10',
      analysis: 'Because five plus five is Ten'
    },
  ]}
 
export default class Analysis extends Component<PropsWithChildren> {
  state = {
    data: {
      id: '1',
      title: 'Do you know what one plus one is?',
      answer: '2',
      analysis: 'Because one plus one is Tow'
    },
    url: '/pages/analysis/analysis'
  }

  componentWillMount () {
    this.year = getCurrentInstance().router?.params.year || this.year;
    this.id = getCurrentInstance().router?.params.id || this.id;
    const option = mock[this.year].find(item => item.id == this.id);
    this.setState({data: option})
   }
   year: string = '1990';
   id: string = '1';

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  render () {
    return (
      <View className='bodyWrap' style='padding:24px'>
        <View className='bodyBoard titleStyle'>
        <Text>
        {this.state.data.id}、 {this.state.data.title}
        </Text>
        <View>
          <Text>Answer:{this.state.data.answer}</Text>
        </View>
        <View>
          <Text>Analysis:</Text>
          <View>
            {this.state.data.analysis}
          </View>
        </View>
        <Button className='nextBtnStyle' disabled={this.state.data.id == '2'} onClick={() => this.state.data.id !== '2' && toTargetPage(this.state.url, {year: this.year, id: +this.state.data.id + 1})}>{this.state.data.id == '2' ? 'Over' : 'Next'}</Button>
        </View>
      </View>
    )
  }
}
