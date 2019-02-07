import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'
import { addDayStr, calDistance, getUniqueExercise } from '../../utils/tool'
import { set as setGlobalData, get as getGlobalData } from '../../utils/globalData'
import './index.less'
@withShare()
class Cat extends Component {
    state = {
        current: 'meme',
    }
    config = {
        navigationBarTitleText: '小小猫咪'
    }
    tapTab(e) {
        this.setState({
            current: e.currentTarget.dataset.idx
        })
    }
    swipeTab(e) {
        if ("touch" === e.detail.source) {
            let current = e.detail.current == 0 ? 'meme' : 'erer'
            this.setState({
                current
            })
        }
    }
    componentDidShow() {
    }
    render() {
        return (
            <View className='cat' >
                <View className="tabHeaderWrapper">
                    <View className={`tabHeader ${current == 'meme' ? 'on' : ''}`} data-idx='meme' onClick={this.tapTab}>么么</View>
                    <View className={`tabHeader ${current == 'erer' ? 'on' : ''}`} data-idx='erer' onClick={this.tapTab}>二二</View>
                </View>
                <View className="tabPaneWrapper">
                    <Swiper current={current == 'meme' ? 0 : 1}  onChange={this.swipeTab}>
                        <SwiperItem >
                        https://images.forldn.cn/1549509812402040.mp4
                        </SwiperItem>
                        <SwiperItem >
                           
                        </SwiperItem>
                    </Swiper>
                </View>

            </View>
        )
    }
}

export default Cat
