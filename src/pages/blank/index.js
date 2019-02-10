import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'
@withShare()
class Timeline extends Component {
    config = {
        navigationBarTitleText: '恰似小项的财富'
    }
    render() {
        return (
            <View className="blank-wrapper" >
                <Image className="blank-image" src="https://images.forldn.cn/blank.png" />
                <Text className="blank-text" >马上就来！后台一弄好就来！</Text>
            </View>
        )
    }
}

export default Timeline
