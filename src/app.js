import '@tarojs/async-await'
import Taro, { Component, onSocketClose } from '@tarojs/taro'
import { Provider, connect } from '@tarojs/redux'
import { set as setGlobalData, get as getGlobalData } from './utils/globalData'



import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/cat/index'
    ],
    window: {
      backgroundColor: '#f4f4f4',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'CirCle30',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "旅行",
        iconPath: "./assets/images/ic_record.png",
        selectedIconPath: "./assets/images/ic_record_on.png"
      }, {
        pagePath: "pages/cat/index",
        text: "家",
        iconPath: "./assets/images/ic_home.png",
        selectedIconPath: "./assets/images/ic_home_on.png"
      }],
      color: '#666',
      selectedColor: '#14d0b4',
      backgroundColor: '#fff',
      borderStyle: 'black'
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于搜索附近的门店"
      }
    }
  }
  componentDidMount() {
    // 获取环境数据
    Taro.getSystemInfo().then(res => {
      setGlobalData(res)
    })
  }


  componentDidHide() { }

  componentCatchError() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
