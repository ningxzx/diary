import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'

const TIMELINES = {
    'palau': [
        { date: '2017-01-28', title: '出发', location: '帕劳', url: '', },
        { date: '2017-01-28', title: '无由归海岛', location: '帕劳', url: '/pages/palau/index', },
        { date: '2017-01-30', title: '两个拖后腿的浮潜选手', location: '帕劳', url: '', }
    ],
    'africa': [
        { date: '2018-09-21', title: '', location: '成都，新加坡', url: '' },
        { date: '2018-09-22', title: '到达博茨瓦纳入住', location: '新加坡，约翰内斯堡，马翁', url: '' },
        { date: '2018-09-23', title: '去往三角洲', location: '奥卡万戈三角洲', url: '' }
    ]
}
@withShare()
class Timeline extends Component {
    state = {
        timelines: []
    }
    jumpTo(e) {
        const day = e.currentTarget.dataset.day
        if (day.title) {
            const url = day.url || '/pages/blank/index'
            Taro.navigateTo({
                url
            })
        }

    }
    componentDidShow() {
        const { site } = this.$router.params
        this.setState({
            timelines: TIMELINES[site]
        })
    }
    render() {
        return (
            <View className='timeline-wrapper' >
                {timelines.map((x, i) => {
                    return (
                        <View className="timeline" key={i} data-day={x} onClick={this.jumpTo}>
                            <View className="timeline-info">
                                <View className="timeline-date">{x.date}</View>
                                <View className="timeline-location">{x.location}</View>
                                {x.title ? <View className="timeline-title">{x.title}</View> : null}
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}

export default Timeline
