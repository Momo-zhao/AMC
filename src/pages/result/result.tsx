import { Component, PropsWithChildren } from 'react'
import { Text, View, Button} from '@tarojs/components'
import './index.scss'
import { toTargetPage } from '../../components/utils'

const mock = {
  score: 20,
  correct: 20,
  error: 5,
  total: 25
  }
export default class Result extends Component<PropsWithChildren> {
  state = {
    data: {
      score: 0,
      correct: 0,
      error: 0,
      total: 0
    },
    url: '/pages/analysis/analysis',
  }
  componentWillMount () {
    this.setState({data: mock})
  }

  render () {
    return (
      <View className='bodyWrap'>
        <View className='bodyBoard align titleStyle'>
        {/*   <Text className='titleStyle' style='font-size: 80px;align-self:center'>
          Score: {this.state.data.score}
          </Text> */}
          <View className='resultBtn'>
          <Text>
            Correct: {this.state.data.correct}
          </Text>
          </View>
          <View className='resultBtn'>
          <Text>
          Error: {this.state.data.error}
          </Text>
          </View>
          <View className='resultBtn'>
          <Text>
          Total: {this.state.data.total}
          </Text>
          </View>
          <Button className='viewDetailsBtnStyle' onClick={() => toTargetPage(this.state.url)}>View Details</Button>
        </View>
      </View>
    )
  }
}