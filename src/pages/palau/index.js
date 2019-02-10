import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper } from '@tarojs/components'
import { withShare } from '../../utils/helper'
@withShare()
class Sgns extends Component {
    state = {}
    config = {
        navigationBarTitleText: '游记'
    }
    componentDidShow() {
    }
    render() {
        return (
            <View className='travel-note-wrapper' >
                <View className="title">无由归海岛</View>
                <View className="paragraph">
                    十一去了四姑娘山。
                </View>
                <View className="paragraph">
                    说是去爬山，其实也就是路过。
                </View>
                <View className="paragraph">
                    ——以下是我们的路线介绍——
                </View>
                <View className="paragraph">
                    四姑娘山由四座连绵不断的山峰组成，它们从北到南，在3~5公里范围内一字排开，其海拔高度分别为6250M、5355M、5279M、5038M。
                </View>
                <View className="paragraph">
                    四姑娘山四面均被大雪山包围，在没有修建“官路”的明清甚至更早时期，这里与外界的沟通得益于一条古道，它由四姑娘山景区内的长坪沟一直向东北延伸，穿过海拔4668米的垭口，连通了与小金县东北部相邻的理县毕棚沟，成为运输盐巴、茶叶、衣物的血脉之道，这就是后人所称的“唐柏古道”。时日如梭，巴朗贯通，古道废弃。直至80年代初期，江苏一山友从资料中获得这一信息后，雇佣了数名当地向导和十余匹马，在雪中穿行14天，终于走通此路线，使它重新面世并逐渐成为中国境内经典的穿越路线之一。
                </View>
                <View className="paragraph">
                    ——最后一句暴露是软文。——
                </View>
                <View className="paragraph">
                    10月1日早，大概天安门国旗刚升起，我们就坐上了去日隆镇的车。我们前一天晚上2点刚接完从深圳飞来的LRY同学（机场还偶遇了霸道总裁明执鲜花暗藏横幅推箱求婚），随后回家整理东西直到5点，所以一路上都想睡觉。为什么是想，因为路太不平坦了。途经卧龙自然保护区，也就是野生大熊猫的家园，我们希望有个小熊猫跳出来，但是可能光头强太多了，路两边只有溪水声伴着红叶翠木。                </View>

                <View className="paragraph">
                    路上比较顺利，偶尔堵车也就十来分钟，下午两点左右开始开到了巴朗山。在盘山公路上慢慢的上升，渐生心胸开阔之感。上一次去川西，大概2000米头就有些痛，这次呼吸着冷冽的空气，到了3000多也感觉神清气爽。直到——
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns1.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    当然不可能是448，这里是路上的最高点。右边还有熊猫的模子，不知道什么时候自己跑走了，露出了后面的蓝天。司机停了下来，让我们拍拍照。路边有人卖烤肉串，有人自拍，有人奔跑，我很头痛，丹宁也是，一姐比较困，我们就催着师傅赶紧开车，这之后就是下坡路了，直到镇上我们预订的住处，海拔3200M左右。
                </View>
                <View className="paragraph">
                    住的地方叫桑珠客栈（下图右），共两层。老板一家人很和气，一楼接待大厅主要是一个小哥在忙，有问必答，每次去问小哥，都发现电脑在单曲循环孙燕姿的歌曲。有wifi，密码贴在墙上是sz888888，墙上其他挂着的是各种旅游团队的队旗，上面写着他们登峰的时间，其中有面韩文的旗帜引人瞩目。他的爸妈和妹妹在门外经营着烤架，有烤全羊和兔子，以及零碎的羊肉牛肉烤串，味道不错。二楼是我们的房间，整体还算干净，就是热水比较决绝，要么冷水要么烫，还有灯比较暗，这也可能是我习惯了高亮（highlight）。我们晚饭就在客栈里解决，饭菜除了最贵的其余的都可以，最贵的菜是羊肉汤，其实就是肉末煮大块烂熟胡萝卜汤。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns2.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    我们进房间收拾好后，准备出去走走。只见晴转多云，多云转冰雹，真的就下起了冰雹，冰雹颜色很白，我以前以为冰雹透明的跟冰球差不多，实际上白的像薄荷糖。虽只下了十分钟，我们已没有了出去的念头，就烤了下火，洗澡睡觉。晚上窗外的天空上挂满了星星，我确实好久没看到过星光了，算他乡故知吧，回想起来觉得很漂亮。
                </View>
                <View className="paragraph">
                    可能睡觉需要更多的氧，睡着了高原反应发作直接因为头痛醒过来，但是后面做了几个莫名其妙的梦感觉又好了起来，早上稍稍有些头痛，不影响走路。 发现队伍壮大了，原来是昨晚12点的时候，队伍剩下的6个人坐另一辆车到了。我们一行19人，有新手如我们仨，也有不走不舒服的徒步老手，网上认识，结伴出行。
                </View>
                <View className="paragraph">
                    第一天是沿着长坪沟徒步。早上我们仨6点就起来了，等其他人起床的缘故，8点开始早餐，是馒头和稀饭，还有店家的酸菜，嗯，味道有点奇怪。所有人集合后背上行囊，合了影就开心的出发了。阳光特别好，路上都是新鲜的马粪 。走了十分钟，队长招呼大家停了下来，准备去买门票。然后，大家发现队伍必须有向导才能进山。本来我和卢丹已联系好向导，按平时的价格收费，但来之前在群里，有几人言之灼灼，曰我朋友没有向导也进去了，于是大家决定不请向导了。须知，向导平时每日300，国庆600。卢丹愤懑不平，萌萌哒 ，让提议不请向导的人补差价。但是最终也不了了之，队长好说歹说，找了一个带队的，每天500，带队三天，收四天的钱。此君姓刘，排行老六，人称六爷，如果说旅程坑爹，此君之过（锅）。
                </View>
                <View className="paragraph">
                    为什么要说这个细节哩，一则告诉大家，去四姑娘山一定要请向导的，而且提前联系为好。二，人多就难免效率低，这种徒步四五人到八九人为佳。三，信攻略。
                </View>
                <View className="paragraph">
                    本是明媚清晨，找完导游，已近中午。我们10点半出发，步行五分钟左右到了进山口。导游建议我们坐登山车，大概是7公里的车程，随后再开始徒步，因为出发太晚担心找不到扎营的好地方。又有若干人曰坐了车还是徒步吗，让我们完整的徒步嘛。5分钟后，我们已经在车上开心的拍照了，海拔比较低，时间也没到晚秋，窗外的景色一般，开心的是天空依然很蓝。我们坐在最后面，我也不知道我为什么做了这个奇怪的手势，但这不是重点，重点是我们的东西堆满了车。每个人负重不一样，10斤到40斤不等。我背了15斤左右，卢丹和我差不多（她一直声称比我背的重得多），一姐也背了十多斤。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns3.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    路上风景。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns4.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    我们下了车，最先看到一个寺庙，人很多，在排队拍照。队长催促着我们，说好看的在前面呢，这有什么好拍的。我也觉得，确实没什么拍的，放一张证明不值得拍。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns5.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    然后就开始走，走，走。一路走着栈道，路旁有瀑布，溪水，但是六爷催着我们快点，加上人多，我们也走的飞快。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns6.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns7.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    终于到了一个亭子，应该是个不知道名字的景点。导游说歇会吧，我们其实带了很多饼干，牛肉，麦片，但是坐在那里，我们还是准备去小卖部买碗泡面。不是所有的店都叫小卖部，那是个木质的房子，屋顶还有草，四周墙壁木板中间还有塑料布，全身都在诠释两个字，低调，只有墙壁上印着彩色的“小卖部”三个字格外显眼。去的路上也有这样的店，声名不显，但是同样的三个彩色汉字出卖了他们。
                </View>
                <View className="paragraph">
                    我问导游，我们走了两个小时了，有没有走一半，导游说，有，走了5公里吧。
                </View>
                <View className="paragraph">
                    开心。
                </View>
                <View className="paragraph">
                    吃完就出发了。
                </View>
                <View className="paragraph">
                    路过这片树林，路很难走，林里幽静，感觉像回到了小时候在树林里睡觉。我问导游，还有多久，导游说两公里。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns8.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    走了半个小时穿过树林，我们到了一个河滩，逗留了一刻钟，拍了一些照片。我真的有点累了，尤其是再背上包，我问导游，还有多久啊，导游笑嘻嘻，一公里了。卢丹和一姐很开心的说了，噢噢噢。 （沿途这个地方很好看，但是回来之后太忙了，我们的照片还没有调光，以后再放上来。）
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns9.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    然后就是重复对话，走，还有多久啊，一公里。
                </View>
                <View className="paragraph">
                    走，有多久啊，一公里。
                </View>
                <View className="paragraph">
                    走，多久啊，一公里。
                </View>
                <View className="paragraph">
                    趴下了，多，一。
                </View>
                <View className="paragraph">
                    后来我们走一段就休息下，别人来问我们，还有多久啊，我说一公里。而我们问下山的人，他们笑着说，加油 。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns10.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    到了傍晚，我们终于看到扎营的地方的时候，那种激动，丝毫不亚于肖申克的救赎里，瑞德看到安迪在海边的那种心情。背靠四姑娘山即是终点，我们就以四姑娘山为背景拍了很多张。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns11.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns12.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    晚上一起扎营吃饭，很开心。除了被伐木工老爷坑了钱，其余都还好了。我们用自己带的高山炉做了火锅，还有来自杭州的球球（可爱的男孩子 ）做了年糕，吃饭的时候，我让导游保证不再给我们胡萝卜，他拍着胸脯说保证不骗我们。温度只有几度的情况下，扎帐篷，上厕所都有点麻烦，幸好顺利的度过了。至于睡眠质量，明明很暖却感觉冷，头痛。这一天也是高原反应最强烈的一天。
                </View>
                <View className="paragraph">
                    第二天一早起来，吃面，然后就出发了。临行前，导游说，路比昨天好走，也短，今天走的快。

                </View>
                <View className="paragraph">
                    实际上，路程确实不长，我们早上8点多出发，下午2点就到了，走的快的伙伴12点多就到了。但是平坦就是bullshit了。独木桥，大石头，小径基本都有。走到一半的时候女生实在扛不住了，我们就喊了马。

                </View>
                <View className="paragraph">
                    马驮东西上山150一个包，讲了价以后，两个齐天大圣（马主，不是下边的，是两个大叔）同意我们200元2个包，我背上最小的包，马背上已经有两个包，他们就自己背了上去。
                </View>
                <View className="paragraph">
                    建议同学们去的话，前两天看自己的情况，尽量在习惯走路后，还是保存体力。当然，你们最好不走这个路线，原因后面说吧。放张马的照片。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns13.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    路上风景比第一天更好，我还喝了一罐溪水，喝完忧心有寄生虫，后面就没喝，感觉是很冰，有点甜。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns14.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns15.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    第二天下午就到了要翻越的垭口脚下。卢丹和一姐的身体状态已经很糟糕，我怂怂的想要不要回去，被断然拒绝了。没错，我要开始黑这条路线了。这条路线永远没有备选方案，如果回去，我们还是得走两天。没有车上山，马又贵，而且也不快。当然，要是你作的话，或者热血的话，还是很不错的，一路向前。这天晚上，搞定了所有的干粮，为了减轻明天上山的负重，我们丢了地垫，防潮垫，防蚊水（为什么会有这个 ），还有好多零食，零食和一些餐具是被导游收起来了，说是我们对后来者的爱。这个地方海拔大概是3800M。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns16.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    吃饭的时候，导游就跟我们商量明天登山的事情。顺便总结下，如果你看到这里，要么你参加了这次旅行，要么就纯粹是时间多，那我就废话一点。我们的路线叫穿越，就是一个山两边都有沟，我们从外面沿着这边的沟走到山脚，在山上沿着路线走到山对面，到另一条山沟。前两天大概走了30公里，第三天上山下山的路程其实有20公里-。-。可见前两天确实是为了适应，如果前两天走的像我们一样，快累垮了，建议还是不要上山了，当然，你回去也要好久，所以还是不要来了 。下面放上地图。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns17.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    导游君为了第三天能够赶回我们第一天扎营的地方，就商量我们凌晨3点出发。前面有一个队伍是2点出发，上山只有一条路，必须得错开。这意味着1点他们就开始收拾帐篷了，因此我们的睡眠也就哈哈哈。
                </View>
                <View className="paragraph">
                    我们带了很多东西，包括两个帐篷，两个睡袋，每人两套保暖内衣，两袋小馒头，一大袋饼干，一袋麦片，一袋牛肉，雪套，鞋套，登山杖，充电宝，袜子，防晒霜，手套，手电。要感谢卢丹 弄了两个星期，查资料并且买到了这些东西。程序员的时间安排实在是太捉急了，么么哒。
                </View>
                <View className="paragraph">
                    但是，我们没有，头，灯，登山没有头灯应该说有点危险，手电的亮度太弱了。幸好球球同学带着头灯一直帮我们照路，还陪我们走到天亮，其实他是走的最快的几个，为什么比我瘦弱的体力都比我好 。登山时说话浪费体力，我也不打字了，放图片吧。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns18.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns19.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns20.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns21.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    这个地方是平台，我们停下来了拍了好些照片。估计是4500米左右。
                </View>
                <View className="paragraph">
                    左二为队长。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns22.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    回想起来，平台后的那100多米是最难爬的。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns23.jpeg" mode="aspectFill" ></Image>
                <Image className="note-image" src="https://images.forldn.cn/sgns24.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    卢丹走到4300米的时候快哭了，那会差不多是6点，走了两个多小时，山顶一直看着很近，但是体力已经耗得差不多了（其实，那会儿我们还有体力的，这样说不是为了表明人不知道自己的极限云云，而是因为后来我们下山走了上山的两倍路程）。我们相互鼓励，走十步休息一下，早上8点半左右，我们走到了垭口，海拔是4680M。期间我们一直担心一姐坚持不上来，因为第二天路程是平路，一姐已经难以为继，面无表情，像这样 ，但是一姐后来也爬上来了，RunningYijie，应该是10点左右。
                </View>
                <View className="paragraph">
                    山顶的景色应该是最美的了。
                </View>
                <View className="paragraph">
                    喘着气，拄着登山杖，看对面的山顶，云雾，只要看了一眼，有没有照片也无所谓了。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns25.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    我也不知道我在干嘛。。。。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns26.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    下图便是我们下坡的路了，坡度不小于70，雪化了成冰，路面湿滑，没有护栏也罢，最主要是路程远。我们走了一个下坡，花了一个半小时以为到了，发现，还有一个下坡，走到底，平着走，发现还有一个下坡，这种得而复失的感觉太糟糕了。而且，当我们终于下山，发现还要穿越树林，路过的藏人告诉我半个小时就可以找到了。我们走了一个小时。
                </View>
                <Image className="note-image" src="https://images.forldn.cn/sgns27.jpeg" mode="aspectFill" ></Image>
                <View className="paragraph">
                    丹宁途中几次都不想走了，因为太累了，脚掌每踩一步都痛，膝盖一直在打颤，而且，还很渴。
                </View>
                <View className="paragraph">
                    whatever，下午2点，我们走完了下山全程，到达了上图湖所在的地方。
                </View>
                <View className="paragraph">
                    路线太坑爹了。
                </View>
                <View className="paragraph">
                    有些队伍的向导会一起下山，拉着女旅客的手帮助她们走下去，而我们的向导在山顶就说再见了。据说只有给了钱才会帮助下山，不得而知。一姐感叹“有个索道也好啊”，这条路线就是这样，没有备选方案。
                </View>
                <View className="paragraph">
                    到达的地方叫毕棚沟，出去还要补门票，往年都没有，今年刚出了一个穿越人员须知。
                </View>
                <View className="paragraph">
                    so，这个路线还是别考虑了。
                </View>
                <View className="paragraph">
                    这次旅途除了路线本身坑爹，尚算顺利，来回没有堵车，也没有发生什么事故。队长人比较踏实，和他的好友，一个做农夫山泉，一个做脉动，都很友善，旅途其余人像球球等也都很好。
                </View>
                <View className="paragraph">
                    晚上10点回到成都。
                </View>
                <View className="paragraph">
                    谢谢一姐咯，从深圳飞过来，就负重行军了几天，而且据说还没瘦（只有我瘦了4斤），以后找到好的徒步路线再找你！
                </View>
                <View className="paragraph">
                    波波辛苦啦，惹你生气，对不起！要壮实一点才能应对挑战！么么哒！
                </View>
                <View className="paragraph">
                    p.s.《北平无战事》真的很好看。
                </View>
            </View>
        )
    }
}

export default Sgns
