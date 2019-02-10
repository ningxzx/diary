import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'
@withShare()
class Chuanxi extends Component {
    state = {}
    config = {
        navigationBarTitleText: '游记'
    }
    componentDidShow() {
    }
    render() {
        return (
            <View className='travel-note-wrapper' >
                <View className="title">川西行</View>
                <View className="paragraph">
                    去高原之前曾想过会不会挂在那儿的问题，因为这个被她笑了很久。
                </View>
                <View className="paragraph">
                    又因看到网上说在高原千万注意不能感冒，否则肺气肿，于是我们叮嘱彼此千万不能感冒，一旦暴露出一点点症状，就会被彼此温柔地说你别去了，偷偷感冒才是正解。总之，经历了17个小时硬座的折腾后，终于到了目的地。                </View>
                <View className="paragraph">
                    到了成都，急急忙忙的跑到了汽车站。我们很忐忑的排队然后很欣喜的拿到了去康定的票，突然发现，零食落在车上了，如果联系到之前我们很辛苦的走了几次超市，这件事完全是个悲剧。可是如果联系到后面我们又掉了一次零食，我开始明白，这是提示。
                </View>
                <View className="paragraph">
                    行车途中，两岸怪石迭出。透过窗户看，旁边老是有条河。关于河的故事，还是由她来说吧，咳，大约是我又犯了一次傻。
                </View>
                <View className="paragraph">
                    在停下洗车的时候，突然看到了雪山，人生第一次，不内涵，与激动同时到来的，是骤降的温度。在车子爬山过程中，隐隐头疼，由于对高原反应期待太久，突然到来内心涌现的竟然是惊喜，过了一段，觉得好多了，联系到此前她和我说的有人因为高原反应头疼的要写遗书，顿生豪迈，有种脚踩高原马放南山不炫耀不痛快的感受，然后车子经过一个牌子，写着海拔2000，当头一棒。
                </View>
                <View className="paragraph">
                    8个小时或者更久，我们到了康定。
                </View>
                <View className="paragraph">
                    首先是木格措，藏语所谓“野人海”或”无法逾越之海“。坐着巴士上的山，海拔大约3780。水面澄澈，天空蓝的刺眼。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi1.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    水上有冰，冰水交界格外明显。这个相片是她调的，不知道这个严肃的相框是怎么回事，但是当你置身这里，迎面的凉风吹来，你会说你想去看黄鹤楼么。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi2.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    湖面都是冰，然后出于各种力学~话说大学没学过物理~不断的碎冰滑到岸边，水与冰的声音有一种冷却不铿锵的质感。从有点热的武汉来到这里，大有夏虫可以语冰的节奏。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi3.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    沿着湖往里面走，就到了这里，有小小的沙滩，其实旁边还有个写着“黄金海岸”的石头，很多人在那拍照，就先拍了这个。沙子很硬，像冰淇淋，可以坐下来（回头看这个比喻略。。）。她在沙滩上写了“我爱宝贝”，然后拍了一张。然后，当我们正沉浸在清风徐来水波不兴的时候，身后传来“咦，这里有现成的'我爱宝贝‘，摆个姿势拍一张吧“。我们爆笑着跑掉了。嗯，结果是很晕——高原不能做剧烈运动。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi4.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    下山的时候我们没有坐巴士，选择了导游说的不安全的栈道。路旁积雪压弯的树，雪水汇集成小溪。潺潺声，与担心找不到公路的心情共鸣。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi5.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    她老是悲愤的想删掉这张。
                </View>
                <View className="paragraph">
                    七色海，上图不解释。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi6.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi7.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    回去的晚上头痛的不行，而且感冒了，之前偷偷小打小闹感冒的效果初显。她也头痛，依然照顾我。
                </View>
                <View className="paragraph">
                    第二天碰到了一个很好的藏族大哥当司机。我们在上雅家梗的山路上，遭遇飞石、积雪。司机几次给车轮上绑上链子，害怕陷着，尽管如此，依旧停了几次，因为几个自驾游的人不是太有经验，司机大哥一直扮演雷锋。这些虽则让人印象深刻，但是让我们记得最清楚的却是《绿旋风》，因为当他去帮忙时，我们坐在车内听着这首让人无比复杂的歌曲一遍遍循环。写到这里，就想起这一路上见到听到的，都是凤凰传奇，足以说明在中国传唱度最广的不是周杰伦，不是五月天，更不可能是许山高，而是坚持民族风的他们。如果没有听过的同学去补补吧，嘿，不会让你失望的。嘿喂狗。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi8.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    雪山上风很大，这里清楚的写着海拔，但我们精神都很好，还有一些很自信的照片，这里先放上她的，我的，我找找。还有司机大哥的照片后边再放到空间里。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi9.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    看不太清楚，大图还没有调。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/chuanxi10.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    先写到这里。写点题外话，今天下午又看了看以前的日志，想起王小波说的，”文学就是先写的好看，其余就去他妈的“。看很多地方都觉得不好看，因为写的太急。他说中国文字就是用来读的，没有音乐美就不好看，想一想确实应该读古文了。冯唐说五四那帮人没有把汉语改造的完全也有点道理，近代白话小说大部分都没有汉语的简洁含蓄，也希望大家能感受到古文的美吧。
                </View>
                <View className="paragraph">
                    另，大家都加油。
                </View>
            </View>
        )
    }
}

export default Chuanxi
