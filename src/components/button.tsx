import { View, Button} from '@tarojs/components'

export const buttonComponets = (props) => {
    const data = props.data;
    const url = props.url;
    return ( 
    <View className='index' style='width:60%'>
         {data.map((item, index) => {
            return <Button className='button-bg-style' onClick={() => props.onClick({url, name: item})} key={index}>{item}</Button>
         })}
    </View>
    )
}