import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'
import { set as setGlobalData, get as getGlobalData } from '../../utils/globalData'
import './index.less'
@withShare()
class Index extends Component {
  state = {
    swipeIndex: 0,
    showTip: true,
    list: [
      {
        title: '川西',
        description: ['风烟俱静，天山共色', '听见碎冰滑到岸边的声音'],
        date: ['2012-04-01', '2012-04-08'],
        cover: 'https://images.forldn.cn/cover-chuanxi.jpeg',
        url: '/pages/chuanxi/index',
        timeline: ['木格措', '七色海', '雅家梗', '栈道', '甲居']
      },
      {
        title: '四姑娘山',
        description: ['风后面是风', '天空上面是天空', '道路前面还是道路'],
        date: ['2014-10-01', '2014-10-05'],
        cover: 'https://images.forldn.cn/cover-sgns.jpeg',
        url: '/pages/sgns/index',
        timeline: ['垭口','毕棚沟']
      },
      {
        title: '贡嘎',
        description: ['Go where you feel most alive','Hike more. Worry Less.'],
        date: ['2015-10-01', '2015-10-06'],
        cover: 'https://images.forldn.cn/cover-konka.jpeg',
        url: '/pages/blank/index',
        timeline: ['老榆林','日乌且','子梅村','子梅垭口','巴王海']
      },
      {
        title: '帕劳',
        description: ['Land is the secure ground of home,', 'the sea is like life, the outside, the unknown.'],
        date: ['2017-01-30', '2017-02-05'],
        cover: 'https://images.forldn.cn/cover-palau.jpeg',
        url: '/pages/timeline/index?site=palau',
        timeline: ['干贝城', '牛奶湖','珊瑚礁', '德国水道',  '大断层']
      },
      {
        title: '非洲',
        description: ['在我心灵深处，黑色的大鼓咚咚作响。','我听见黑色的历史在歌唱。'],
        date: ['2018-09-20', '2014-10-08'],
        cover: 'https://images.forldn.cn/cover-botswana.jpeg',
        url: '/pages/timeline/index?site=africa',
        timeline: ['马翁', '温得和克', '红沙漠', '鲸湾', '斯瓦靠科普蒙德', '埃托沙']
      }
    ]
  }
  config = {
    navigationBarTitleText: '往日时光'
  }
  swipeTab(e) {
    if ("touch" === e.detail.source) {
      let swipeIndex = e.detail.current
      this.setState({
        swipeIndex
      })
    }
  }
  jumptoArticle(e) {
    Taro.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
  componentDidShow() {
    const showCommentTipTimer = setTimeout(() => {
      this.setState({
        showTip: false
      }, () => {
        clearTimeout(showCommentTipTimer)
      })
    }, 3000)
  }
  render() {
    const { swipeIndex, list, showTip } = this.state
    return (
      <View className='index' >
        <Swiper current={swipeIndex} autoplay={true} circular={true} className="travels-swiper" onChange={this.swipeTab}>
          {list.map((x, i) => {
            return (<SwiperItem key={i}>
              <View className="travels-swiper-item">
                <View className="travels-wrapper" onClick={this.jumptoArticle} data-url={x.url}>
                  <Image className="travel-cover"  mode="aspectFill" src={x.cover}></Image>
                  <View className="travel-text-wrapper">
                    <View className="travel-title">{x.title}</View>
                    <View className="travel-dates">
                      <Text>{x.date[0]}</Text><Text className="horizontal-gap">~</Text><Text>{x.date[1]}</Text>
                    </View>
                    <View className="travel-descriptions">
                      {x.description.map((text, i) => {
                        return <View className="travel-description" key={i}>{text}</View>
                      })}
                    </View>
                    <View className="travel-sites">
                      {x.timeline.map((text, i) => {
                        return <Text className="travel-site" key={i}>{text}{i < x.timeline.length - 1 ? <Text className="horizontal-gap">-</Text> : null}</Text>
                      })}
                    </View>
                  </View>
                </View>
                <View className={`comment-zone-tip ${showTip ? 'show' : ''}`}>这里会是评论区^.^</View>
              </View>
            </SwiperItem>)
          })}
        </Swiper>
      </View>
    )
  }
}

export default Index
