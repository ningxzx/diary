import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'
import { set as setGlobalData, get as getGlobalData } from '../../utils/globalData'
@withShare()
class Chuanxi extends Component {
    state = {}
    componentDidShow() {
    }
    render() {
        return (
            <View className='travel-note-wrapper' >
            
            </View>
        )
    }
}

export default Chuanxi
