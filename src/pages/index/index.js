import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { withShare } from '../../utils/helper'
import { addDayStr, calDistance, getUniqueExercise } from '../../utils/tool'
import { set as setGlobalData, get as getGlobalData } from '../../utils/globalData'
import './index.less'
@withShare()
class Index extends Component {
  state = {
    chooseDate: 0,
    exercises: [],
    stores: [],
    authLocation: true,
    showSubButton: false,
    selectDateIndex: 0
  }
  config = {
    navigationBarTitleText: '游记'
  }

  componentDidShow() {
  }
  render() {
    const { stores, authLocation, showSubButton, exercises } = this.state
    return (
      <View className='index' >
      </View>
    )
  }
}

export default Index
