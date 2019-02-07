import Taro from '@tarojs/taro'
import { QUOTES } from '../constants/app.js'

// 获取微信登录凭证
export const wxLogin = async () => {
    try {
        const res = await Taro.login()
        return res.code
    } catch (error) {
        console.log('微信获取临时凭据失败')
    }
}
// 获取微信登录凭证
export function withShare(opts = {}) {
    const l = QUOTES.length
    // 设置默认
    const defalutPath = '/pages/index/index';
    //TODO:后续通过接口返回
    const defalutTitle = QUOTES[Math.floor(Math.random()*l)]
    const defaultImageUrl = ''

    return function demoComponent(Component) {
        class WithShare extends Component {
            async componentWillMount() {
                wx.showShareMenu({
                    withShareTicket: true
                });
            }

            // 点击分享的那一刻会进行调用
            onShareAppMessage() {

                let { title, imageUrl, path = null } = opts;

                // 从继承的组件获取配置
                if (this.$setSharePath && typeof this.$setSharePath === 'function') {
                    path = this.$setSharePath();
                }

                // 从继承的组件获取配置
                if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
                    title = this.$setShareTitle();
                }

                // 从继承的组件获取配置
                if (
                    this.$setShareImageUrl &&
                    typeof this.$setShareImageUrl === 'function'
                ) {
                    imageUrl = this.$setShareImageUrl();
                } else {
                    imageUrl = defaultImageUrl
                }

                if (!path) {
                    path = defalutPath;
                }

                // 每条分享都补充用户的分享id
                // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
                const sharePath = `${path}`;

                return {
                    title: title || defalutTitle,
                    path: sharePath,
                    imageUrl: imageUrl 
                };
            }

            render() {
                return super.render();
            }
        }

        return WithShare;
    };
}