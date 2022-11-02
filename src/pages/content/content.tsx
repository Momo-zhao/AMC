import { getCurrentInstance } from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { RadioGroup, Label, Radio, Text, View, Button} from '@tarojs/components'
import './index.scss'
import { toTargetPage } from '../../components/utils'
import { store } from '../../store/index'
import UseStore from '../../store/store'

interface optionType {
  id: string,
  title: string,
  options: optionsType[]
}
interface optionsType {
  value: string,
  text: string,
  checked: boolean
}
interface stateType {
  data: optionType,
  answer: {[key:string]:string},
  url: string,
  resultUrl: string,
}
const mock = {
  '1990': [
    {
      id: '1',
      title: 'Do you know what one plus one is?',
      options: [{value: '2', text: '2', checked: false},{value: '3', text: '3', checked: false}, {value: '4', text: '4', checked: false},{value: '5', text: '5', checked: false}]
    },
    {
      id: '2',
      title: 'Do you know what five plus five is?',
      options: [{value: '7', text: '7', checked: false},{value: '8', text: '8', checked: false}, {value: '9', text: '9', checked: false},{value: '10', text: '10', checked: false}]
    },
  ]}
export default class Content extends Component<PropsWithChildren> {
  state:stateType = {
    data: {
      id: '',
      title: '',
      options: [{
        value: '',
        text: '',
        checked:false
      }]
    },
    answer: {},
    url: '/pages/content/content',
    resultUrl: '/pages/result/result',

  }
  componentWillMount () {
   this.year = getCurrentInstance().router?.params.year || this.year;
   this.id = getCurrentInstance().router?.params.id || this.id;
   const option = mock[this.year].find(item => item.id == this.id);
   this.setState({data: option})
  }
  year:string = '1990';
  id:string = '1';

  changeRadioValue(e) {
    const target = e.currentTarget
    const val = target.getAttribute('for') || e.detail.value
    const items = this.state.data.options;
    target.style.background = '#f3f2f2';
    setTimeout(() => target.style.background = '#fff', 100)
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == val
    }
    const newOption = {
        id: this.state.data.id,
        title: this.state.data.title,
        options: items,
    }
    const answer = this.state.answer;
    answer[this.state.data.id] = val
    store.dispatch(UseStore.action.save(answer))
    this.setState({
      data: newOption,
      answer
    })
  }
  clickBtn() {
    if(this.state.answer[this.id]) {
      if(this.id < '2') {
        toTargetPage(this.state.url, {year: this.year, id: +this.id + 1 + ''})
      }else {
        const result = store.getState() // result为获取的全局state存储数据
        // 将所有答案发送给后端
        // 。。。
        // 获取后端返回的结果+跳转结果页
        toTargetPage(this.state.resultUrl, {year: this.year})
      }
    }
  }
  render () {
    return (
      <View className='bodyWrap'>
        <View className='bodyBoard'>
        <Text className='titleStyle'>
        {this.id}、{this.state.data.title}
        </Text>
        <RadioGroup className='radioStyle'>
          {this.state.data.options.map((item, i) => {
            return (
              <Label className='radio-list__label radioItemStyle' for={item.value} key={i} onClick={(e) => this.changeRadioValue(e)}>
                <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
              </Label>
            )
          })}
        </RadioGroup>
        <Button className='nextBtnStyle' disabled={!this.state.answer[this.id]} onClick={() => {this.clickBtn()}}>{this.id == '2' ? 'Submit' : 'Next'}</Button>
        </View>
      </View>
    )
  }
}