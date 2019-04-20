import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, Video } from '@tarojs/components'
import { withShare } from '../../utils/helper'
import { addDayStr, calDistance, getUniqueExercise } from '../../utils/tool'
import { set as setGlobalData, get as getGlobalData } from '../../utils/globalData'
import './index.less'
@withShare()
class Cat extends Component {
    state = {
        current: 'meme',
        memeLogs: [
            {datetime:'2019-02-06 12:00:00',content:'春节在家，还是上门喂养，今天吃得少，屎尿正常，体温正常'},
            {datetime:'2019-02-05 12:00:00',content:'春节在家，上门喂养，比较活跃'}
        ],
        ererLogs: [
            {datetime:'2019-02-06 12:00:00',content:'春节在家，还是上门喂养，吃了特别多，疑似吐了猫粮'},
            {datetime:'2019-02-05 12:00:00',content:'春节在家，上门喂养，疯狂吃给自动喂食机猫粮'}
        ]
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
                    <Swiper current={current == 'meme' ? 0 : 1} className="cat-swiper" onChange={this.swipeTab}>
                        <SwiperItem className="cat-swiper-item" >
                            <View className="cat-log-wrapper">
                                {/* <Video className="cat-video" src='https://images.forldn.cn/meme.mp4' poster='https://images.forldn.cn/meme-cover.jpeg' title="2018的么么和二二"></Video> */}
                                <View className="cat-logs">
                                    {memeLogs.map((x, i) => {
                                        return (
                                            <View className="cat-log">
                                                <View className="cat-log-date">{x.datetime}</View>
                                                <View className="cat-log-content">{x.content}</View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        </SwiperItem>
                        <SwiperItem >
                            <View className="cat-log-wrapper">
                                {/* <Video className="cat-video" src='https://images.forldn.cn/erer.mp4' poster='https://images.forldn.cn/erer-cover.jpeg' title="营业的二二"></Video> */}
                                <View className="cat-logs">
                                    {ererLogs.map((x, i) => {
                                        return (
                                            <View className="cat-log">
                                                <View className="cat-log-date">{x.datetime}</View>
                                                <View className="cat-log-content">{x.content}</View>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>

                        </SwiperItem>
                    </Swiper>
                </View>

            </View>
        )
    }
}

export default Cat
