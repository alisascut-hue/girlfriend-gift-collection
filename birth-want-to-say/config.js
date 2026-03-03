// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最最亲爱的Jerry布布猪",  // 同上...
        "今天是你的生日",
        "这是我陪宝宝一起过的",
        "第一个生日！",
        "这一年来，我见过你",
        "帅帅的样子"
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "很遗憾我没有陪在你的身边",
        "但是我的祝福和爱会一直在哟",
        "今年要健健康康的",
        "吃饱饱的",
        "然后才有力气干活",
        "还有想我！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "最最亲爱的Jerry布布猪": "./imgs/nothing.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我陪宝宝一起过的": "./imgs/zaiyiqi.png",
        "第一个生日！": "./imgs/nothing.jpg",
        "这一年来，我见过你": "./imgs/yangzi.jpeg",
        "帅帅的样子": "./imgs/nothing.jpg",
        "奇怪的样子": "./imgs/nothing.jpg",
        "可爱的样子": "./imgs/nothing.jpg",
        "生气的样子": "./imgs/nothing.jpg",
        "都是我喜欢的样子": "./imgs/nothing.jpg",
        "很遗憾不能在这个重要的日子陪在你身边": "./imgs/chuo.gif",
        "但是我的祝福和爱会一直在哟": "./imgs/chihaodian.jpeg",
        "今年要健健康康的": "./imgs/chihaodian.jpeg",
        "吃饱饱的": "./imgs/weibao.jpeg",
        "然后才有力气干活": "./imgs/nothing.jpg",
        "还有想我！": "./imgs/nothing.jpg",
        "生日快乐~~": "./imgs/nothing.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '超爱你的一二宝~'
};
