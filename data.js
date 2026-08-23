const config = {
    showDate: true,
    showContext: false,
    showDesc: false,
    showIg: false,
    showChapterTitle: true
};
/*
{
        chapter: ,
        title: '', artist: '',
        context: '', desc: '',
        date: '', ytId: '', start: 0, end: 0,
}
*/
const tracks = [
    //Chapter -1
    {
        chapter: -1,
        title: '青春修炼手册', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'C8o_SLoyy44', start: 0,
    },
    {
        chapter: -1,
        title: '大梦想家', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'B03RJGMch-c', start: 0,
    },
    {
        chapter: -1,
        title: '宠爱', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'td3em3qn1BU', start: 0,
    },
    {
        chapter: -1,
        title: '魔法城堡', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'oH0ydhFHsWg', start: 0,
    },
    {
        chapter: -1,
        title: '幸运符号', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'a-yvFsicYrQ', start: 0,
    },
    {
        chapter: -1,
        title: '加油! AMIGO', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'u8M_udtlDxU', start: 0,
    },
    {
        chapter: -1,
        title: '来自天堂的魔鬼', artist: 'GEM邓紫棋',
        context: '', desc: '',
        date: '', ytId: 'FWtbGkpdoP4', start: 0,
    },
    {
        chapter: -1,
        title: '三生三世', artist: '张杰',
        context: '《三生三世十里桃花》片头曲', desc: '',
        date: '', ytId: 'wdtEWS2D9xo', start: 0,
        lyrics: `
            [00:29.83]握不紧那段过往
            [00:33.24]冥灭了结魄光芒
            [00:36.69]那一滴离别的泪
            [00:40.24]灼烧着我的胸膛
            [00:43.75]爱在天地中流转
            [00:47.27]一颗心为谁奔忙
            [00:50.78]四海八荒身在何方
            [00:54.38]岁月该如何安放
            [00:57.98]听风声在沙沙作响
            [01:01.28]敲打着谁的愁肠
            [01:04.84]思念在一瞬间生长
            [01:08.44]才忘了夜多漫长
            [01:11.95]掌心的泪握到滚烫
            [01:15.15]只愿为你三生痴狂
            [01:19.11]落花满天又闻琴香
            [01:22.61]与你天地间徜徉
            [01:26.11]如果爱太荒凉我陪你梦一场
            [01:29.66]赎回你所有泪光
            [01:33.21]这一路有多远这三世有多长
            [01:36.66]执手到地老天荒
            [01:40.22]风凄凄雾茫茫雨滚滚雪漫漫
            [01:43.72]一步步都陪你同往
            [01:47.36]牵着手别惊慌管明天会怎样
            [01:50.76]哪怕注定流浪哪怕海角天涯
            [02:26.20]听风声在沙沙作响
            [02:29.63]敲打着谁的愁肠
            [02:33.09]思念在一瞬间生长
            [02:36.59]才忘了夜多漫长
            [02:40.20]掌心的泪握到滚烫
            [02:43.43]只愿为你三生痴狂
            [02:47.30]落花满天又闻琴香
            [02:50.85]与你天地间徜徉
            [02:54.33]如果爱太荒凉我陪你梦一场
            [02:58.14]赎回你所有泪光
            [03:01.39]这一路有多远这三世有多长
            [03:04.85]执手到地老天荒
            [03:08.41]风凄凄雾茫茫雨滚滚雪漫漫
            [03:11.97]一步步都陪你同往
            [03:15.47]牵着手别惊慌管明天会怎样
            [03:18.97]哪怕注定流浪
            [03:22.59]手牢牢不放爱念念不忘
            [03:26.23]人生何须多辉煌
            [03:29.60]浮华的终成空执着的都随风
            [03:33.21]情路何须多跌宕
            [03:36.58]要遇多少风浪心不再摇晃
            [03:40.32]一起细数这过往
            [03:43.02]陪你等风停了雾散了
            [03:45.50]雨住了雪化了
            [03:47.19]再遇见绝美月光
            [03:50.55]还有我在你身旁`
    },
    {
        chapter: -1,
        title: 'Monster', artist: 'Katie Sky',
        context: '', desc: '',
        date: '', ytId: '_Rh3dTb1KYE', start: 0,
        lyrics: `
            [00:00.06]I see your monsters, I see your pain
            [00:05.67]Tell me your problems, I'll chase them away
            [00:11.19]I'll be your lighthouse, I'll make it okay
            [00:16.36]When I see your monsters, I'll stand there so brave
            [00:21.07]And chase them all away
            [00:24.51]
            [00:27.54]In the dark we, we
            [00:29.92]We stand apart we, we
            [00:32.99]Never see that the things that we need are staring right at us
            [00:38.41]You just want to hide, hide, hide
            [00:41.23]Never show your smile, smile
            [00:43.83]Stand alone when you need someone, it's the hardest thing of all
            [00:48.42]That you see are the bad, bad, bad
            [00:52.40]Memories, take your time and you'll find me
            [00:57.56]
            [00:57.57]I see your monsters, I see your pain
            [01:02.92]Tell me your problems, I'll chase them away
            [01:08.36]I'll be your lighthouse, I'll make it okay
            [01:13.57]When I see your monsters, I'll stand there so brave
            [01:18.32]And chase them all away
            [01:21.73]
            [01:22.11]I could see the sky, sky, sky
            [01:24.81]Beautiful tonight, night
            [01:27.43]When you breathe, why can't you see that the clouds are in your head?
            [01:33.01]I will stay there, there, there
            [01:35.70]No need to fear, fear
            [01:38.30]And when you need to talk it out with someone you can trust
            [01:42.90]What you see are the bad, bad, bad
            [01:46.92]Memories, take your time and you'll find me
            [01:52.05]
            [01:52.06]I see your monsters, I see your pain
            [01:57.48]Tell me your problems, I'll chase them away
            [02:02.90]I'll be your lighthouse, I'll make it okay
            [02:08.07]When I see your monsters, I'll stand there so brave
            [02:12.86]And chase them all away
            [02:18.30]I'll chase them all away
            [02:24.18]
            [02:27.47]You've got the chance to see the light
            [02:32.91]Even in the darkest night
            [02:38.30]And I will be here like you were for me
            [02:44.51]So just let me in
            [02:47.44]
            [02:48.96]'Cause I see your monsters, I see your pain
            [02:54.83]Tell me your problems, I'll chase them away
            [03:00.24]I'll be your lighthouse, I'll make it okay
            [03:05.33]When I see your monsters, I'll stand there so brave
            [03:10.47]
            [03:11.17]I see your monsters, I see your pain
            [03:16.60]Tell me your problems, I'll chase them away
            [03:22.01]I'll be your lighthouse, I'll make it okay (I'll make it okay)
            [03:27.23]When I see your monsters, I'll stand there so brave
            [03:31.95]And chase them all away
            [03:35.07]`
    },
    //Chapter 0
    {
        chapter: 0,
        title: 'Counting Stars', artist: 'OneRepublic',
        context: '', desc: '',
        date: '', ytId: 'hT_nvWreIhg', start: 0,
        lyrics: `
            [00:00.29]Lately I've been I've been losing sleep
            [00:04.99]Dreaming about the things that we could be
            [00:08.89]But baby I've been I've been praying hard
            [00:13.86]Said no more counting dollars
            [00:15.86]We'll be counting stars
            [00:18.78]Yeah we'll be counting stars
            [00:37.55]I see this life like a swinging vine
            [00:40.17]Swing my heart across the line
            [00:42.08]In my face is flashing signs
            [00:44.07]Seek it out and ye' shall find
            [00:45.97]Old but I'm not that old
            [00:48.01]Young but I'm not that bold
            [00:49.93]And I don't think the world is sold
            [00:52.00]I'm just doing what we're told
            [00:54.53]I I I I feel something so right
            [00:58.73]Doing the wrong thing
            [01:02.18]I I I I feel something so wrong
            [01:06.53]Doing the right thing
            [01:09.95]I couldn't lie couldn't lie couldn't lie
            [01:13.70]Everything that kills me makes me feel alive
            [01:17.66]Lately I've been I've been losing sleep
            [01:21.43]Dreaming about the things we could be
            [01:25.25]But baby I've been I've been praying hard
            [01:29.26]Said no more counting dollars
            [01:31.21]We'll be counting stars
            [01:33.34]Lately I've been I've been losing sleep
            [01:37.22]Dreaming about the things we could be
            [01:41.14]But baby I've been I've been praying hard
            [01:45.06]Said no more counting dollars
            [01:47.02]We'll be we'll be counting stars
            [01:56.25]I feel the love and I feel it burn
            [01:58.95]Down this river every turn
            [02:00.83]Hope is our four-letter word
            [02:02.72]Make that money watch it burn
            [02:04.64]Old but I'm not that old
            [02:06.84]Young but I'm not that bold
            [02:08.63]And I don't think the world is sold
            [02:10.53]I'm just doing what we're told
            [02:12.94]I I I I feel something so wrong
            [02:17.34]Doing the right thing
            [02:20.78]I could lie could lie could lie
            [02:24.57]Everything that drowns me makes me wanna fly
            [02:28.40]Lately I've been I've been losing sleep
            [02:32.31]Dreaming about the things we could be
            [02:36.10]But baby I've been I've been praying hard
            [02:40.09]Said no more counting dollars
            [02:42.11]We'll be counting stars
            [02:44.22]Lately I've been I've been losing sleep
            [02:48.21]Dreaming about the things we could be
            [02:51.90]But baby I've been I've been praying hard
            [02:55.83]Said no more counting dollars
            [02:57.65]We'll be we'll be counting stars
            [03:03.92]Take that money
            [03:04.52]Watch it burn
            [03:05.35]Sink in the river
            [03:06.38]The lessons I've learned
            [03:07.55]Take that money
            [03:08.23]Watch it burn
            [03:09.42]Sink in the river
            [03:10.39]The lessons I've learned
            [03:11.51]Take that money
            [03:12.33]Watch it burn
            [03:13.36]Sink in the river
            [03:14.35]The lessons I've learned
            [03:15.52]Take that money
            [03:16.41]Watch it burn
            [03:17.34]Sink in the river
            [03:18.33]The lessons I've learned
            [03:19.48]Everything that kills me
            [03:25.36]Makes me feel alive
            [03:26.56]Lately I've been I've been losing sleep
            [03:30.26]Dreaming about the things we could be
            [03:34.12]But baby I've been I've been praying hard
            [03:38.13]Said no more counting dollars
            [03:40.04]We'll be counting stars
            [03:41.98]Lately I've been I've been losing sleep
            [03:46.16]Dreaming about the things we could be
            [03:50.01]But baby I've been I've been praying hard
            [03:54.02]Said no more counting dollars
            [03:55.96]We'll be we'll be counting stars
            [03:58.57]Take that money
            [03:59.12]Watch it burn
            [03:59.61]Sink in the river
            [04:00.31]The lessons I've learned
            [04:01.73]Take that money
            [04:02.53]Watch it burn
            [04:03.47]Sink in the river
            [04:04.50]The lessons I've learned
            [04:05.68]Take that money
            [04:06.38]Watch it burn
            [04:07.18]Sink in the river
            [04:08.49]The lessons I've learned
            [04:09.33]Take that money
            [04:10.38]Watch it burn
            [04:11.16]Sink in the river
            [04:12.10]The lessons I've learned
`
    },
    {
        chapter: 0,
        title: "烟火里的尘埃", artist: "华晨宇",
        context: "", desc: "",
        date: "", ytId: "yJfRHVmTiLs", start: 0,
        lyrics: `[00:05.343]看着飞舞的尘埃掉下来
[00:15.610]没人发现它存在
[00:18.861]多自由自在
[00:24.045]可世界都爱热热闹闹
[00:27.847]
[00:27.857]容不下我百无聊赖
[00:32.361]
[00:34.931]不应该一个人发呆
[00:45.428]只有我守着安静的沙漠
[00:50.086]等待着花开
[00:55.846]只有我看着别人的快乐
[01:00.674]竟然会感慨
[01:06.249]就让我听着天大的道理
[01:10.820]不愿意明白
[01:16.226]有什么是应该不应该
[01:48.010]我的心里住着一个
[01:50.868]苍老的小孩
[01:57.678]如果世界听不明白
[02:01.324]对影子表白
[02:06.105]是不是只有我还在问
[02:09.657]为什么明天更精彩
[02:17.051]烟火里找不到童真的残骸
[02:27.211]只有我守着安静的沙漠
[02:31.671]等待着花开
[02:37.030]只有我看着别人的快乐
[02:41.653]竟然会感慨
[02:47.188]就让我听着天大的道理
[02:51.751]不愿意明白
[02:57.429]只有我就是我
[03:02.208]好奇怪还在感慨
[03:13.962]风阵阵吹过来为何不回来
[03:23.955]风一去不回来悲不悲哀
[03:34.138]麻木得那么快应不应该
[03:44.230]能不能慢下来
[03:49.590]笑得开怀哭得坦率
[03:54.738]为何表情要让这世界安排
[03:59.880]我就是我我只是我
[04:04.329]只是一场烟火散落的尘埃
[04:21.973]风阵阵吹过来
[04:32.303]风一去不回来
[04:52.353]能不能慢下来
[04:57.455]`
    },
    {
        chapter: 0,
        title: '我管你', artist: '华晨宇',
        context: '', desc: '',
        date: '', ytId: 'HhBKaTSpp5A', start: 0,
        lyrics: `[00:17.92]我不大接受
[00:20.50]什么被委屈别还手
[00:23.04]我不太能够
[00:25.68]顺应所谓的大潮流
[00:28.12]噢噢噢噢噢噢噢噢噢
[00:33.29]噢噢噢噢噢噢噢噢噢
[00:38.47]花臂或刺头
[00:41.31]应该没说明我所有
[00:44.12]我不找借口
[00:46.61]懂的人自然能看透
[00:48.99]噢噢噢噢噢噢噢噢噢
[00:54.06]噢噢噢噢噢噢噢噢噢
[00:59.84]没想辩解太多
[01:02.93]别用外表解说我
[01:10.49]误解不愿反驳
[01:13.13]我拒绝只谈如果
[01:21.51]我管你的感受
[01:23.03]噢噢噢噢噢噢噢噢噢
[01:26.38]我管你的感受
[01:28.00]噢噢噢噢噢噢噢噢噢
[01:31.76]我管你的感受
[01:33.28]噢噢噢噢噢噢噢噢噢
[01:36.94]我管你的感受
[01:38.56]噢噢噢噢噢噢噢噢噢
[01:43.74]管你什么想法
[01:46.48]我是我自己的表达
[01:49.12]管你什么看法
[01:51.81]我的世界我来浮夸
[01:54.26]噢噢噢噢
[01:57.11]我管你说得多复杂
[01:59.39]噢噢噢噢
[02:02.24]我不要被谁给教化
[02:04.62]管你什么说法
[02:07.32]当我是傻或是笑话
[02:09.96]管你什么办法
[02:12.49]别幻想我沦落倒下
[02:15.13]噢噢噢噢噢噢噢噢噢
[02:20.20]噢噢噢噢噢噢噢噢噢
[02:26.11]太多选择背后
[02:28.70]绝望像没有出口
[02:36.59]不如握紧拳头
[02:39.23]这就是我的所有
[02:47.48]我管你的感受
[02:49.05]噢噢噢噢噢噢噢
[02:52.76]我管你的感受
[02:54.28]噢噢噢噢噢噢噢
[02:57.78]我管你的感受
[02:59.40]噢噢噢噢噢噢噢
[03:03.06]我管你的感受
[03:04.63]噢噢噢噢噢噢噢
[03:09.81]管你多怪罪
[03:12.60]你没资格评头论足
[03:15.14]管你自以为
[03:18.08]你的意见我真不在乎
[03:21.34]噢噢噢噢噢噢噢噢噢
[03:25.54]噢噢噢噢噢噢噢噢噢
[03:41.08]管你什么想法
[03:43.92]我是我自己的表达
[03:46.56]管你什么看法
[03:49.14]我的世界我来浮夸
[03:51.84]噢噢噢噢
[03:54.48]我管你说得多复杂
[03:56.96]噢噢噢噢
[03:59.70]我不要被谁给教化
[04:02.13]管你什么说法
[04:04.72]当我是傻或是笑话
[04:07.35]管你什么办法
[04:09.99]别幻想我沦落倒下
[04:12.58]噢噢噢噢噢噢噢噢噢
[04:17.55]噢噢噢噢噢噢噢噢噢`
    },
    {
        chapter: 0,
        title: '国王与乞丐', artist: '华晨宇/杨宗纬',
        context: '', desc: '',
        date: '', ytId: 'XiyEwRlyKl4', start: 0,
        lyrics: `[00:24.10] 怎么了 怎么了
[00:28.25] 一份爱失去了光泽
[00:31.38] 面对面 背对背
[00:34.60] 反复挣扎怎么都痛
[00:38.01] 以为爱坚固像石头
[00:41.32] 谁知一秒钟就碎落
[00:44.69] 难道心痛都要不断打磨
[00:49.14] 抱紧你的我比国王富有

[00:57.43] 曾多么快乐
[01:01.48] 失去你的我比乞丐落魄
[01:10.64] 痛多么深刻

[01:16.98] 噢 喔 噢 喔
[01:22.13] 噢 喔 噢 喔
[01:27.16] 谁哭着谁笑着
[01:33.05] 一人分饰两个角色
[01:36.30] 越执迷越折磨
[01:39.60] 回忆还在煽风点火
[01:43.10] 明知往前就会坠落
[01:46.17] 抱着遗憾重返寂寞
[01:49.43] 爱到最后究竟还剩什么

[01:54.88] 抱紧你的我比国王富有
[02:02.66] 曾多么快乐
[02:07.41] 失去你的我比乞丐落魄
[02:15.43] 痛多么深刻

[02:23.30] 当一切 结束了 安静了 过去了
[02:28.77] 为什么 还拥有 一万个 舍不得
[02:35.34] 喔 喔

[02:48.07] 谁又能感受
[02:53.73] 回忆里的我比国王富有
[03:01.04] 奢侈的快乐
[03:06.76] 失去你以后比乞丐落魄
[03:17.05] 心痛如刀割

[03:24.23] 怀念那时你安静陪着我
[03:28.48] 噢 噢
[03:30.77] 柔软时光里最美的挥霍
[03:36.87] 喔 喔
[03:40.54] 爱有多快乐
[03:44.89] 痛有多深刻
[03:51.51] 痛有多深刻
`
    },
    {
        chapter: 0,
        title: '拆弹专家', artist: '华晨宇',
        context: '', desc: '',
        date: '', ytId: 'RSrcXNK2SYc', start: 0,
        lyrics: `[00:08.742]Hell No
[00:10.848]空气就快要爆炸
[00:13.493]Hell No
[00:15.690]时间就快要爆炸
[00:17.990]Hell No
[00:19.840]身体就快要爆炸
[00:22.640]Hell No
[00:24.821]快给我拆弹专家
[00:28.000]
[00:31.817]生活是一颗炸弹
[00:34.317]装在我脑袋
[00:36.677]我还没想明白
[00:39.076]该怎么拆开
[00:40.976]每一天心里七上八下
[00:45.493]不如让它赶快爆炸WOW~WOW~
[00:58.492]拜托来一束火花
[01:03.841]Hell No
[01:05.641]空气就快要爆炸
[01:08.441]Hell No
[01:10.292]时间就快要爆炸
[01:12.943]Hell No
[01:14.793]身体就快要爆炸
[01:17.493]Hell No
[01:19.824]快给我拆弹专家
[02:21.820]
[01:31.520]GUCCI PRADA
[01:33.329]穿着要足够浮夸
[01:35.580]才能够表现自己的身价
[01:38.059]算了吧
[01:39.359]看着你声音沙哑的
[01:42.560]娱乐大家但
[01:44.660]心中的炸弹快要爆炸
[01:49.578]Hell No
[01:51.429]空气就快要爆炸
[01:54.079]Hell No
[01:55.980]时间就快要爆炸
[01:58.632]Hell No
[02:00.532]身体就快要爆炸
[02:03.910]Hell No
[02:05.410]快给我拆弹专家WOW~~~
[02:08.000]
[02:26.210]Hell No
[02:28.060]空气就快要爆炸
[02:30.710]Hell No
[02:32.560]时间就快要爆炸
[02:35.261]Hell No
[02:37.220]身体就快要爆炸
[02:39.826]Hell No
[02:42.610]快给我拆弹专家`
    },
    {
        chapter: 0,
        title: '与火星的孩子对话', artist: '华晨宇',
        context: '', desc: '',
        date: '', ytId: 'FK1C78KnQwU', start: 0,
        lyrics: `[00:33.539]我 看着爱笑
[00:36.739]却还有些失落和悲伤
[00:41.406]那些失落 那些悲伤 也在我心里
[00:49.440]我 看着自信
[00:52.691]却还有些退缩和逃避
[00:57.317]那些退缩 那些逃避 请你别在意
[01:05.457]我 看着努力
[01:09.250]却还有些拒绝和懒惰
[01:13.134]那些拒绝 那些懒惰 其实没关系
[01:21.264]我 看着坚强
[01:24.982]却还有些脆弱和疑惑
[01:29.232]那些脆弱 那些疑惑 有它的意义
[01:37.080]那些感受慢慢被阻碍
[01:45.147]我摸不到那痛苦
[01:53.331]我 看着坚持
[01:56.913]却还有些放弃和冷漠
[02:01.229]那些放弃 那些冷漠 要做你自己
[02:09.246]我 看着勇敢
[02:12.897]却还有些害怕和怯懦
[02:17.195]那些害怕 那些怯懦 我们在这里
[02:24.977]那些光芒渐渐被掩盖
[02:32.911]我猜不透下一幕
[02:42.101]每当我还相信 好的结局
[02:49.905]有个声音在说 可笑的是我
[02:57.691]每当我还愿意 伸手靠近
[03:05.708]有块阴影拽着我
[03:14.705]别再拽着我
[03:23.394]我想再次用力解脱
[03:34.298]我 虽然不说
[03:37.944]至少有你在这陪着我
[03:42.166]你就是你 最好的你 是我的唯一
[03:49.896]我 不再沉默
[03:53.712]因为有你选择理解我
[03:58.482]你就是你 最好的你 没人能代替
[04:05.970]那些美好终于被青睐
[04:13.871]我等到了这礼物
[04:22.826]我 有时难过
[04:27.149]却还有些快乐和骄傲
[04:32.783]那些快乐 那些骄傲 全都属于你
[04:40.875]我 有时孤独
[04:46.187]却还有些抚慰和感动
[04:50.470]那些抚慰 那些感动 因为我爱你
[04:58.653]这个结局是我的期待
[05:07.919]我会一直为你祝福`
    },
    {
        chapter: 0,
        title: '沙漠骆驼', artist: '展展与罗罗',
        context: '', desc: '',
        date: '', ytId: 'BYgh1-JgTnY', start: 0,
        lyrics: `
            [00:26.11]我要穿越这片沙漠
            [00:28.00]找寻真的自我
            [00:30.24]身边只有一匹骆驼陪我
            [00:34.66]这片风儿吹过
            [00:36.77]那片云儿飘过
            [00:38.91]突然之间出现爱的小河
            [00:43.22]我跨上沙漠之舟
            [00:45.45]背上烟斗和沙漏
            [00:47.64]手里还握著一壶烈酒
            [00:51.97]漫长古道悠悠
            [00:54.20]说不尽喜怒哀愁
            [00:56.37]只有那骆驼奔忙依旧
            [01:00.68]什么鬼魅传说
            [01:02.79]什么魑魅魍魉妖魔
            [01:04.99]只有那鹭鹰在幽幽的高歌
            [01:09.51]漫天黄沙掠过
            [01:11.66]走遍每个角落
            [01:13.83]行走在无尽的苍茫星河
            [01:18.11]白天黑夜交错
            [01:20.30]如此妖娆婀娜
            [01:22.57]蹉跎著岁月又蹉跎了自我
            [01:27.07]前方迷途太多
            [01:29.05]坚持才能洒脱
            [01:31.16]走出黑暗就能逍遥又快活
            [01:37.66]
            [01:48.57]我寻找沙漠绿洲
            [01:50.60]出现海市蜃楼
            [01:52.74]我仿佛看到她在那里等候
            [01:57.12]想起了她的温柔
            [01:59.32]滚烫着我的胸口
            [02:01.53]迷失在昨夜的那壶老酒
            [02:06.08]我穿上大头皮鞋
            [02:08.06]跨过凛冽荒野
            [02:10.20]我仿佛穿越到另一个世界
            [02:14.67]阿拉丁神灯要倾斜
            [02:16.80]天堂地狱已然重叠
            [02:18.93]突然之间飞来一只蝴蝶
            [02:23.10]什么鬼魅传说
            [02:25.40]什么魑魅魍魉妖魔
            [02:27.58]只有那鹭鹰在幽幽的高歌
            [02:32.06]漫天黄沙掠过
            [02:34.23]走遍每个角落
            [02:36.32]行走在无尽的苍茫星河
            [02:40.72]白天黑夜交错
            [02:42.83]如此妖娆婀娜
            [02:45.05]蹉跎著岁月又蹉跎了自我
            [02:49.39]前方迷途太多
            [02:51.61]坚持才能洒脱
            [02:53.67]走出黑暗就能逍遥又快活
            [03:00.60]
            [03:46.57]我已坠入在这神奇的国度
            [03:50.69]驼铃相伴走向圣堂之路
            [03:54.85]原谅我曾经恍惚陷入迷途
            [03:58.84]遮住了眼眸
            [04:00.99]湮没了意图
            [04:03.38]怎能被这样征服
            [04:12.53]什么鬼魅传说
            [04:14.49]什么魑魅魍魉妖魔
            [04:16.70]只有那鹭鹰在幽幽的高歌
            [04:21.01]漫天黄沙掠过
            [04:23.20]走遍每个角落
            [04:25.46]行走在无尽的苍茫星河
            [04:29.67]白天黑夜交错
            [04:31.90]如此妖娆婀娜
            [04:34.19]蹉跎著岁月又蹉跎了自我
            [04:38.62]前方迷途太多
            [04:40.60]坚持才能洒脱
            [04:42.83]走出黑暗就能逍遥又快活
            [04:47.60]梦里回到最初
            [04:49.41]浪潮起起伏伏
            [04:51.50]徬徨著未来又徬徨著孤独
            [04:56.05]漫长人生旅途
            [04:58.10]花开花落无数
            [05:00.41]沸腾的时光怎能被荒芜
            [05:04.97]清晨又到日暮
            [05:06.89]天边飞鸟群逐
            [05:09.40]摇曳著苍穹又描摹著黄土
            [05:13.88]东方鱼肚白出
            [05:15.94]烈日绽放吐露
            [05:18.01]放下尘浮我已踏上归途
`
    },
    {
        chapter: 0,
        title: '想见你想见你想见你', artist: '八三夭',
        context: '', desc: '',
        date: '2019', ytId: '4iRupuNet3Q', start: 0,
        lyrics: `
[00:18.82] 当爱情遗落成遗迹
[00:22.98] 用象形刻划成回忆
[00:26.56] 想念几个世纪 才是刻骨铭心
[00:33.36] 若能回到冰河时期
[00:37.52] 多想把你抱紧处理
[00:41.28] 你的笑多疗癒 让人生也甦醒
[00:46.92] 失去你的风景 像座废墟 像失落文明
[00:54.34] 能否 一场奇蹟 一线生机
[00:59.04] 能不能 有再一次 相遇
[01:05.56] 想见你 只想见你 未来过去 我只想见你
[01:13.10] 穿越了 千个万个 时间线里 人海里相依
[01:20.48] 用尽了 逻辑心机 推理爱情 最难解的谜
[01:27.32] 会不会 妳也和我一样 在等待一句 我愿意
[01:43.88] 任时光更迭了四季
[01:47.80] 任宇宙物换或星移
[01:51.30] 永远不退流行 是青涩的真心
[01:57.02] 未来 先进科技 无法模拟 你拥抱暖意
[02:04.48] 如果 另个时空 另个身体 能不能 换另一种 结局
[02:15.58] 想见你 只想见你 未来过去 我只想见你
[02:22.98] 穿越了 千个万个 时间线里 人海里相依
[02:30.64] 用尽了 逻辑心机 推理爱情 最难解的谜
[02:37.62] 会不会 妳也和我一样 在等待一句 我愿意
[02:46.32] 想见你 每个朝夕 想见你 每个表情
[02:49.80] 想穿越 每个平行 在未来 和过去 紧紧相依
[02:53.56] 想follow 每则IG 不错过 你的蹤迹
[02:57.24] 会不会 你也一样 等待著那句 我愿意
[03:00.30] 想见你 只想见你 未来过去 我只想见你
[03:07.44] 穿越了 千个万个 时间线里 人海里相依
[03:14.70] 用尽了 逻辑心机 推理爱情 最难解的谜
[03:21.58] 会不会 妳也和我一样 在等待一句 我愿意
[03:30.52] 想见你 每个朝夕 想见你 每个表情
[03:34.14] 想穿越 每个平行 在未来 和过去 紧紧相依
[03:37.94] 想follow 每则IG 不错过 你的蹤迹
[03:41.58] 会不会 你也一样 等待著那句 我愿意
[03:45.20] 想见你 每个朝夕 想见你 每个表情
[03:48.76] 想穿越 每个平行 在未来 和过去 紧紧相依
[03:52.56] 想follow 每则IG 不错过 你的蹤迹
[03:56.16] 会不会 你也一样 等待著那句 我愿意
`
    },
    {
        chapter: 0,
        title: '你的答案', artist: '阿冗',
        context: '', desc: '',
        date: '', ytId: 'Tziswp8xQ_4', start: 0,
        lyrics: `
            [00:25.29]也许世界就这样
            [00:28.59]我也还在路上
            [00:31.13]没有人能诉说
            [00:36.05]也许我只能沉默
            [00:39.24]眼泪湿润眼眶
            [00:41.90]可又不甘懦弱
            [00:45.55]低着头 期待白昼
            [00:50.71]接受所有的嘲讽
            [00:56.57]向着风 拥抱彩虹
            [01:01.75]勇敢的向前走
            [01:06.29]黎明的那道光
            [01:08.55]会越过黑暗
            [01:11.37]打破一切恐惧我能
            [01:14.29]找到答案
            [01:17.37]哪怕要逆着光
            [01:19.62]就驱散黑暗
            [01:22.28]丢弃所有的负担
            [01:25.30]不再孤单
            [01:28.29]不再孤单
            [01:31.97]
            [01:38.92]也许世界就这样
            [01:41.99]我也还在路上
            [01:44.99]没有人能诉说
            [01:49.49]也许我只能沉默
            [01:52.22]眼泪湿润眼眶
            [01:55.01]可又不甘懦弱
            [01:58.95]低着头 期待白昼
            [02:04.60]接受所有的嘲讽
            [02:10.25]向着风 拥抱彩虹
            [02:15.83]勇敢的向前走
            [02:20.47]黎明的那道光
            [02:22.14]会越过黑暗
            [02:25.01]打破一切恐惧我能
            [02:28.08]找到答案
            [02:31.05]哪怕要逆着光
            [02:33.08]就驱散黑暗
            [02:36.01]丢弃所有的负担
            [02:38.86]不再孤单
            [02:41.88]不再孤单
            [02:50.38]黎明的那道光
            [02:51.97]会越过黑暗
            [02:54.71]打破一切恐惧我能
            [02:57.81]找到答案
            [03:00.75]哪怕要逆着光
            [03:02.95]就驱散黑暗
            [03:05.66]有一万种的力量
            [03:08.64]淹没孤单
            [03:11.57]不再孤单
            [03:14.41]也许世界就这样
            [03:17.75]我也还在路上
            [03:20.60]没有人能诉说
            [03:25.55]也许我只能沉默
            [03:28.82]眼泪湿润眼眶
            [03:31.49]可又不甘懦弱
`
    },
    {
        chapter: 0,
        title: 'Alone', artist: 'Alan Walker',
        context: '', desc: '',
        date: '2022', ytId: '1-xGerv5FOk', start: 0,
        lyrics: `
            [00:04.07]Lost in your mind
            [00:10.94]I wanna know
            [00:13.33]Am I losing my mind?
            [00:20.79]Never let me go
            [00:22.92]If this night is not forever
            [00:26.38]At least we are together
            [00:28.84]I know I'm not alone
            [00:31.14]I know I'm not alone
            [00:34.11]Anywhere, whenever
            [00:36.24]Apart, but still together
            [00:38.78]I know I'm not alone
            [00:41.06]I know I'm not alone
            [00:51.10]I know I'm not alone
            [01:00.77]I know I'm not alone
            [01:06.32]Unconscious mind
            [01:12.85]I'm wide awake
            [01:15.77]Wanna feel one last time
            [01:22.85]Take my pain away
            [01:24.93]
            [01:34.99]If this night is not forever
            [01:38.50]At least we are together
            [01:41.06]I know I'm not alone
            [01:43.45]I know I'm not alone
            [01:46.10]Anywhere, whenever
            [01:48.60]Apart, but still together
            [01:51.01]I know I'm not alone
            [01:53.39]I know I'm not alone
            [02:03.06]I know I'm not alone
            [02:12.69]I know I'm not alone
            [02:17.24]I'm not alone, I'm not alone, I'm not alone
            [02:23.48]I know I'm not alone
            [02:28.02]I'm not alone, I'm not alone, I'm not alone
            [02:32.97]I know I'm not alone
`
    },
    {
        chapter: 0,
        title: 'Haggstrom', artist: 'C418',
        context: 'Game - Minecraft', desc: '',
        date: '', ytId: 'laZusNy8QiY', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 0,
        title: '一路生花', artist: '温奕心',
        context: '中秋晚会', desc: '',
        date: 'SEP 2022', ytId: '-RDocB1x-70', start: 0,
        lyrics: `                
            [00:22.25]海上的晚霞像年少的画
            [00:26.60]铺在天空等海鸥衔走它
            [00:30.31]
            [00:32.20]遥远的帆任风浪拍打
            [00:36.55]为梦再痛也不会害怕
            [00:40.65]
            [00:42.38]远走的风沙去谁的天涯
            [00:46.60]春天可曾在哪里见过他
            [00:50.57]
            [00:52.30]时间的手抚过了脸颊
            [00:56.59]他们谁都沉默不说话
            [01:00.68]
            [01:03.54]我希望许过的愿望一路生花
            [01:08.59]护送那时的梦抵挡过风沙
            [01:14.04]
            [01:14.28]指尖的樱花如诗写谁的韶华
            [01:19.21]疯狂的热爱夹带着文雅
            [01:23.88]我希望许过的愿望一路生花
            [01:28.68]将那雨中的人藏在屋檐下
            [01:33.54]岁月在冲刷逆流沧桑的喧哗
            [01:38.41]安静的夜晚你在想谁吗
            [01:44.35]
            [02:07.16]远走的风沙去谁的天涯
            [02:11.45]春天可曾在哪里见过他
            [02:15.61]
            [02:17.08]时间的手抚过了脸颊
            [02:21.24]他们谁都沉默不说话
            [02:25.66]
            [02:29.44]我希望许过的愿望一路生花
            [02:34.17]护送那时的梦抵挡过风沙
            [02:39.04]指尖的樱花如诗写谁的韶华
            [02:43.96]疯狂的热爱夹带着文雅
            [02:49.10]我希望许过的愿望一路生花
            [02:54.05]将那雨中的人藏在屋檐下
            [02:58.85]岁月在冲刷逆流沧桑的喧哗
            [03:03.58]安静的夜晚你在想谁吗
            [03:09.19]我希望许过的愿望一路生花
            [03:14.30]护送那时的梦抵挡过风沙
            [03:18.97]指尖的樱花如诗写谁的韶华
            [03:24.15]疯狂的热爱夹带着文雅
            [03:29.02]我希望许过的愿望
            [03:33.82]将那雨中的人藏在屋檐下
            [03:39.19]岁月在冲刷逆流沧桑的喧哗
            [03:44.06]安静的夜晚你在想谁吗
            [03:49.11]安静的夜晚你在想谁吗
            [03:58.52]
`
    },
    // Chapter 1
    {
        chapter: 1,
        title: 'Payphone', artist: 'Maroon 5 ft. Wiz Khalifa',
        context: '', desc: '',
        date: 'MAR 2023', ytId: 'KRaWnd3LJfs', start: 0,
        lyrics: `
            [00:39.52]I'm at a payphone trying to call home
            [00:44.01]All of my change I spent on you
            [00:48.18]Where have the times gone?
            [00:50.52]Baby, it's all wrong
            [00:52.71]Where are the plans we made for two?
            [00:57.37]Yeah I, I know it's hard to remember
            [01:00.69]The people we used to be
            [01:02.84]It's even harder to picture
            [01:05.06]That you're not here next to me
            [01:07.21]You say it's too late to make it
            [01:09.37]But is it too late to try?
            [01:11.55]And in our time that you wasted
            [01:13.46]All of our bridges burned down
            [01:16.15]I've wasted my nights
            [01:18.24]You turned out the lights
            [01:20.43]Now I'm paralyzed
            [01:22.58]Still stuck in that time
            [01:24.84]When we called it love
            [01:26.95]But even the sun sets in paradise
            [01:31.94]I'm at a payphone trying to call home
            [01:36.31]All of my change I spent on you
            [01:40.55]Where have the times gone?
            [01:42.88]Baby, it's all wrong
            [01:45.04]Where are the plans we made for two?
            [01:49.08]If happy ever after did exist
            [01:53.67]I would still be holding you like this
            [01:58.10]All those fairytales are full of shit
            [02:02.42]One more fuckin' love song, I'll be sick
            [02:06.59]Oh, you turned your back on tomorrow
            [02:10.50]'Cause you forgot yesterday
            [02:12.68]I gave you my love to borrow
            [02:14.80]But you just gave it away
            [02:17.08]You can't expect me to be fine
            [02:19.16]I don't expect you to care (Care)
            [02:21.41]I know I've said it before but
            [02:23.27]All of our bridges burned down
            [02:25.99]I've wasted my nights
            [02:28.15]You turned out the lights
            [02:30.24]Now I'm paralyzed
            [02:32.43]Still stuck in that time
            [02:34.61]When we called it love
            [02:36.84]But even the sun sets in paradise
            [02:41.73]I'm at a payphone trying to call home
            [02:46.17]All of my change I spent on you
            [02:50.43]Where have the times gone?
            [02:52.66]Baby, it's all wrong
            [02:54.88]Where are the plans we made for two? (Yeah)
            [02:58.89]If happy ever after did exist
            [03:03.54]I would still be holding you like this
            [03:07.60]And all those fairytales are full of shit
            [03:12.21]One more fuckin' love song, I'll be sick
            [03:16.26]Now I'm at a payphone
            [03:18.53]Man, fuck that shit
            [03:19.90]I'll be out spendin' all this money while you sittin 'round wonderin'
            [03:22.54]Why it wasn't you who came up from nothin'
            [03:24.23]Made it from the bottom, now when you see me, I'm stuntin'
            [03:26.53]And all of my cars start with a push of a button
            [03:28.55]Tellin' me I changed since I blew up or whatever you call it
            [03:31.09]Switch the number to my phone, so you never could call it
            [03:33.14]Don't need my name on my shirt, you can tell that I'm ballin'
            [03:35.38]Swish, what a shame, coulda got picked
            [03:37.58]Had a really good game, but you missed your last shot
            [03:39.80]So you talk about who you see at the top
            [03:41.64]Or what you coulda saw, but sad to say it's over for
            [03:44.16]Phantom pulled up, valet open doors
            [03:46.40]Wished I'd go away, got what you was lookin' for
            [03:48.50]Now it's me who they want, so you can go and take that little piece of shit with you
            [03:51.31]Yeah, I'm at a payphone trying to call home
            [03:55.98]All of my change I spent on you
            [04:00.31]Where have the times gone?
            [04:02.51]Baby, it's all wrong
            [04:04.70]Where are the plans we made for two?
            [04:08.66]If happy ever after did exist
            [04:13.36]I would still be holding you like this
            [04:17.42]And all these fairytales are full of shit
            [04:21.76]Yeah, one more fuckin' love song, I'll be sick
            [04:25.76]Yeah, now I'm at a payphone
`
    },
    {
        chapter: 1,
        title: 'Mind Your Manors', artist: 'Glowstick Entertainment',
        context: 'Game - Dark Deception', desc: 'Chapter 2 Level 3 Zone 2 Chase Theme',
        date: '2023', ytId: '1k8gE2l8iws', start: 0,
        lyrics: `
            [00:09.85]Please don't look back
            [00:12.35]Please don't look back
            [00:14.83]Please don't look back
            [00:17.43]Please don't look back
            [00:20.39]Please don't look back
            [00:22.95]Please don't look back
            [00:25.52]Please don't look back
            [00:27.95]Please don't look back
            [00:30.52]We caught your sneaker
            [00:33.44]We know you're stalking
            [00:35.85]Now we are moving
            [00:38.32]And we are looming
            [00:41.09]We caught your sneaker
            [00:43.50]We know you're stalking
            [00:45.88]Now we are moving
            [00:48.39]And we are looming
            [00:51.11]Please don't look back
            [00:53.02]Please don't look back
            [00:55.60]Please don't look back
            [00:58.17]Please don't look back
            [01:00.68]Please don't look back
            [01:03.22]Please don't look back
            [01:05.80]Please don't look back
            [01:08.31]Please don't look back
            [01:10.93]We caught your sneaker
            [01:13.69]We know you're stalking
            [01:15.93]Now we are moving
            [01:18.59]And we are looming
            [01:21.33]We caught your sneaker
            [01:23.74]We know you're stalking
            [01:26.32]Now we are moving
            [01:28.65]And we are looming
            [01:50.65]Please don't look back
            [01:53.26]Please don't look back
            [01:56.04]Please don't look back
            [01:58.81]Please don't look back
            [02:01.41]Please don't look back
            [02:03.95]Please don't look back
            [02:06.35]Please don't look back
            [02:08.54]Please don't look back
            [02:11.14]We caught your sneaker
            [02:14.07]We know you're stalking
            [02:16.33]Now we are moving
            [02:19.05]And we are looming
            [02:21.60]We caught your sneaker
            [02:24.14]We know you're stalking
            [02:26.35]Now we are moving
            [02:29.01]And we are looming
`
    },
    {
        chapter: 1,
        title: 'Feel the Joy', artist: 'Glowstick Entertainment',
        context: 'Game - Dark Deception', desc: 'Chapter 4 Level 7 Zone 1&2 Chase Theme',
        date: '2023', ytId: '133eDAMkLlA', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Uninvited Guest', artist: 'Glowstick Entertainment',
        context: 'Game - Dark Deception', desc: 'Chapter 4 Level 8 Zone 1 Chase Theme',
        date: '2023', ytId: 'UZV0NN0LH-E', start: 0,
        lyrics: `[00:23.02]We mum
[00:24.24]Bear mum
[00:25.54]We mum
[00:26.83]Bear mum
[00:28.13]We mum
[00:29.34]Bear mum
[00:30.57]We mum
[00:31.85]Bear mum
[00:33.08]Keep it moving
[00:34.43]Keep it moving
[00:35.74]Keep it moving
[00:36.95]Keep it moving
[00:38.28]Keep it moving
[00:39.46]Keep it moving
[00:40.77]Keep it moving
[00:41.99]Keep it moving
[00:43.67]
[01:05.93]We mum
[01:07.09]Bear mum
[01:08.39]We mum
[01:09.69]Bear mum
[01:10.96]We mum
[01:12.23]Bear mum
[01:13.43]We mum
[01:14.68]Bear mum
[01:15.96]Keep it moving
[01:17.32]Keep it moving
[01:18.58]Keep it moving
[01:19.86]Keep it moving
[01:21.10]Keep it moving
[01:22.35]Keep it moving
[01:23.63]Keep it moving
[01:24.83]Keep it moving`
    },
    {
        chapter: 1,
        title: 'Unstoppable', artist: 'Sia',
        context: '', desc: '',
        date: 'SEP 2023', ytId: 'YaEG2aWJnZ8', start: 0,
        lyrics: `
            [00:11.26]I'll smile, I know what it takes to fool this town
            [00:15.20]I'll do it till the sun goes down and all through the night time
            [00:21.02]Oh yeah, oh yeah, I'll tell you what you wanna hear
            [00:25.69]Keep my sunglasses on while I shed a tear
            [00:28.71]It's never the right time, yeah, yeah
            [00:33.61]
            [00:33.62]I'll put my armor on, show you how strong I am
            [00:39.03]I'll put my armor on, I'll show you that I am
            [00:44.71]
            [00:44.72]I'm unstoppable
            [00:47.51]I'm a Porsche with no brakes
            [00:50.35]I'm invincible
            [00:52.86]Yeah, I win every single game
            [00:55.90]I'm so powerful
            [00:58.36]I don't need batteries to play
            [01:01.37]I'm so confident
            [01:03.78]Yeah, I'm unstoppable today
            [01:07.19]Unstoppable today, unstoppable today
            [01:12.84]Unstoppable today, I'm unstoppable today
            [01:17.49]
            [01:17.50]Breakdown, only alone I will cry out now
            [01:21.24]You'll never see what's hiding out
            [01:24.06]Hiding out deep down, yeah, yeah
            [01:28.53]I know I've heard that to let your feelings show
            [01:32.09]Is the only way to make friendships grow
            [01:34.96]But I'm too afraid now, yeah, yeah
            [01:39.74]
            [01:39.74]I'll put my armor on, show you how strong I am
            [01:45.24]I'll put my armor on, I'll show you that I am
            [01:51.05]
            [01:51.05]I'm unstoppable
            [01:53.64]I'm a Porsche with no brakes
            [01:56.57]I'm invincible
            [01:59.06]Yeah, I win every single game
            [02:02.11]I'm so powerful
            [02:04.55]I don't need batteries to play
            [02:07.59]I'm so confident
            [02:10.03]Yeah, I'm unstoppable today
            [02:13.39]Unstoppable today, unstoppable today
            [02:19.03]Unstoppable today, I'm unstoppable today
            [02:24.34]Unstoppable today, unstoppable today
            [02:29.93]Unstoppable today, I'm unstoppable today
            [02:34.91]
            [02:34.92]I'll put my armor on, show you how strong I am
            [02:40.42]I'll put my armor on, I'll show you that I am
            [02:47.25]
            [02:47.45]I'm unstoppable
            [02:50.13]I'm a Porsche with no brakes
            [02:53.14]I'm invincible
            [02:55.56]Yeah, I win every single game
            [02:58.69]I'm so powerful
            [03:01.14]I don't need batteries to play
            [03:04.10]I'm so confident
            [03:06.56]Yeah, I'm unstoppable today
            [03:09.72]
            [03:09.93]Unstoppable today, unstoppable today
            [03:15.52]Unstoppable today, I'm unstoppable today
            [03:20.86]Unstoppable today, unstoppable today
            [03:26.50]Unstoppable today, I'm unstoppable today
            [03:31.84]`
    },
    {
        chapter: 1,
        title: 'Caelestinum Finale Termini', artist: 'HOYO-MiX',
        context: '', desc: '',
        date: 'SEP 2023', ytId: 'VqtScyk2C5A', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Never-Ending Performance', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: '-OAA_kus8ME', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Wrath of Monoceros Caeli', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: 'm1JsBvHzWfY', start: 0,
        lyrics: `
            [00:30.18]Lux catius gravi iri
            [00:33.64]Mutatis pius mari
            [00:36.76]Tuta pectus malis
            [00:40.50]Muta deus malis
            [01:38.77]Cavis vincam (potis cavis)
            [01:42.38]Cavis vincam (potis cavis)
            [01:45.71]Cavis vincam (potis cavis)
            [01:49.07](Densa pia)
            [01:53.90](Densa pia)
            [01:55.85](Densa pia)
            [01:59.34](Densa pia)
            [02:24.65]Cavus vincit
            [02:27.27]Cavus vincit
            [02:29.67]Cavus vincit
            [02:32.34]Cavus vincito
            [02:35.87]
`
    },
    {
        chapter: 1,
        title: '错位时空(翻唱填词)', artist: '阿泉君LIN / 鹿梔一',
        context: '', desc: '',
        date: 'OCT 2023', ytId: 'OKzT1lzgw5s', start: 0,
        lyrics: `
            [00:15.17]看不见，风牆之外的风景
            [00:18.59]也不问，歌颂迴响的轻吟
            [00:22.45]自由是随心虚度人生的权利
            [00:25.75]想见证，诗与歌的声音
            [00:29.49]用肩膀，扛起反抗的隼旗
            [00:32.91]徵千峰，打破笼中鸟宿命
            [00:36.90]少年却已经听不到硝烟散去
            [00:40.39]风的声音
            [00:44.18]我轻唱你昔日的吟咏
            [00:47.64]代你看过岁月峥嵘
            [00:51.24]可那曾经期待的自由繁荣
            [00:54.87]却不同
            [00:58.32]我吹过你期待的微风
            [01:02.13]是否能算故人相逢
            [01:05.60]像旧友仍在身边黄粱一梦
            [01:09.15]终是梦 是梦
            [01:16.64]
            [01:30.60]过千年，新王与神皆不见
            [01:34.17]羽翩跹，只剩诗人游此间
            [01:38.02]閒暇独坐枝头拨弄的竖琴声
            [01:41.35]将岁月，融入一曲诗篇
            [01:44.96]叙蒙德，新生似微雨初霁
            [01:48.47]天空岛，赴身未羡神之名
            [01:52.33]雏鸟待鼓起翱翔天幕的勇气
            [01:56.68]听凭风吟
            [02:00.08]我回首这山河已至冬
            [02:03.79]若此时有君能与共
            [02:07.27]伴我游历四海的昨日青空
            [02:10.82]却成空
            [02:14.38]我看过这千年的四风
            [02:17.95]新生终是不变初衷
            [02:21.53]诗人偕风散佈着昔日的梦
            [02:25.16]这场梦 非梦
            [02:29.93]
            [02:31.59]我代你走过世间峥嵘
            [02:35.16]看到的风景虽不同
            [02:38.80]但我们期待的这自由之风
            [02:42.39]正拂动
            [02:45.97]我悠然立崖巅望苍穹
            [02:49.44]期待的国度已在眸
            [02:53.03]而曾经熟悉的那故人面孔
            [02:56.58]在风中 心中`,
    },
    {
        chapter: 1,
        title: '怪物(翻唱填词)', artist: '柑宝',
        context: '', desc: '',
        date: 'OCT 2023', ytId: 'j8rnWkr_dpA', start: 0,
        lyrics: `
            [00:01.983] 伟大的神明 创造这幅人偶容器
            [00:04.783] 拥有感情之身于永恒不过失败品
            [00:07.766] 放逐之后终将迎来戏谑的人生游戏
            [00:11.816] 哪怕一路荆棘
            [00:13.216] 封印与苏醒又再一次漫无目的
            [00:16.016] 存在踏鞴砂被铸铁占据的故人往昔
            [00:19.066] 命运如果能就此施舍恩赐的暂停
            [00:23.10] 在永恒的国界 隐藏着怎样的威胁
            [00:27.016] 在神明威严之下怯弱而卑贱
            [00:29.783] 逝去的家人嘴边 那些画面
            [00:32.616] 却始终无法改写 命运的死结
            [00:35.666] 那无念无想 拒我于故土之乡
            [00:38.783] 希望 失望 换回来不过遍体鳞伤
            [00:41.666] 我存在于这一刻
            [00:44.10] 注定为找回自我孤身流浪
            [00:47.45] 再无能去挽回的一切
            [00:49.583] 这一夜 这一夜走进了风雪
            [00:52.216] 让火焰将这团死结 彻底湮灭
            [01:04.70] 嘈杂的内心 引导着我踏进泥泞
            [01:06.90] 坚定着拭去 感情 将所谓正义抹平
            [01:09.733] 绝望吧 绝望吧 绝望早已被化作力量
            [01:13.533] 夺走神之心后的疯狂
            [01:15.783] 生命如同草芥 让我憎恨
            [01:18.183] 过往无意义的人生 终使我登顶成神
            [01:21.216] 愤怒吧 愤怒吧 愤怒着面对质疑的话
            [01:25.216] 让残忍更力竭声沙
            [01:37.75] 难道注定假合之身 就异类吗
            [01:40.40] 难道拥有感情的机械落泪 就抛弃吗
            [01:43.25] 越是想得到啊 无能就越奋力挣扎
            [01:46.066] 所谓成神的代价 不过让我再次崩塌
            [01:49.066] 响彻耳边的求助 曾经的我无法回答
            [01:51.70] 面对偏爱的亲情 曾经的我无法放下
            [01:54.533] 希望就一次一次 在我心底留下了疤
            [01:57.283] 绝望刺激下的无声迸发
            [01:59.133] 不甘心被命运所践踏
            [02:05.383] 就用全力去挣扎
            [02:11.016] 结局也许只会 妥协于某种狼狈
            [02:15.05] 总有对错是非
            [02:16.383] 争辩于黑白的交汇
            [02:18.133] 挣脱一切束缚之后
            [02:20.833] 难道等待的只有下坠
            [02:23.433] 被捆绑的所有原罪
            [02:25.60] 每一分 每一分都把我撕碎
            [02:28.266] 直到被赐予新的称谓
            [02:31.966] 当挣脱捆绑 又踏上风的方向
            [02:34.616] 希望 失望 换回来更倔强的生长
            [02:37.583] 我决定于这一刻
            [02:40.10] 开始为找回自我孤身流浪
            [02:43.05] 再无需去挽回的一切
            [02:45.416] 这一切 这一切都将被改写
            [02:48.083] 将命运的沙再倾斜 重视这世界
            [03:02.216] 曾经有一个背负着善恶的少年
            [03:05.033] 每一刻 每一刻都不曾妥协
            [03:07.766] 等有人将这流浪者 重新改写
`,
    },
    {
        chapter: 1,
        title: 'Chrysalis Suspirii', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '', ytId: '51vYKjbchtU', start: 0,
        lyrics: `
            [01:11.51]Cinis est cor muem
            [01:18.79]Horrentis frigora
            [01:26.06]Quod ego austeris
            [01:32.88]Dies irae, finis!
            [01:40.67]Lucis, lapsus
            [01:47.52]Fatua, caeca
            [01:54.62]Saeva, folles
            [02:01.87]Commedia dell'arte
            [02:08.76]Ah...
            [02:30.99]
            [02:33.24]Luces glaciei!
            [02:36.96]Lucis, lapsus (o tragedia o splendidae)
            [02:44.11]Fatua, caeca (o fatalia o infaustae)
            [02:51.16]Saeva, folles (o commedia o degli sciocchi)
            [02:58.38]Luces glaciei (o comoeda glaciei)
            [03:04.86]O Chrysalis Suspiria
            [03:12.96]
                `
    },
    {
        chapter: 1,
        title: 'Saltatio Favillae', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '', ytId: '9TKbnQb4mOs', start: 0,
        lyrics: `
            [00:12.74]Igni, cinis
            [00:18.10]Ex ira surget
            [00:23.21]Vedis, calor
            [00:28.59]In scaena salto
            [00:34.01]Venu
            [00:35.82]Resurgito
            [00:38.50]Alluceto
            [00:41.03]In dolore
            [00:43.35]Illusio
            [00:44.50]In hoc mundo clades indiges
            [00:55.02]Votum, dolor (vacuum, fatuus)
            [01:00.32]Ex oblivione
            [01:04.85]In tristitia
            [01:08.29]
            [01:16.32]Vae victis fortunarum
            [01:21.56]Vae, ignis tinea fio
            [01:26.80]Vade retro, ah vanitas
            [01:31.99]Et omnia vanitas
            [01:36.15]Nihilum flamma (vae victus fortunarum)
            [01:42.18]Visio (vanitas omnia)
            [01:47.19]Vindicia (vanitatum sentio, sentio dolor, ah dolores)
            [01:52.75]Ah senta (dolores sentio, et omnia vanitas in tristitia)
            [01:58.64]Vae victis fortunarum
            [02:03.94]Vae, ignis tinea fio
            [02:09.14]Votum, dolor (resurgito)
            [02:12.14]Vacuum, fatuus (alluceto)
            [02:14.68]Ignis sentio tragico (dolores sentio tragico)
            [02:19.04]Comoeda
            [02:20.11](Venu)
            [02:22.07](Resurgito)
            [02:24.52](Alluceto)
            [02:27.02](In dolore)
            [02:29.54](Illusio)
            [02:30.56]Vedis, calor
            [02:35.68]In scaena salto
            [02:38.53]
        `
    },
    {
        chapter: 1,
        title: 'Bane of Ambitions', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '', ytId: '75PlZCOel48', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Duel in the mist', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Inazuma Battle Theme',
        date: '2023', ytId: 'D48UG9WiTNk', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Le spectacle doit continuer', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Opera Epiclese',
        date: 'NOV 2023', ytId: 'w1d7_SE0PzY', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'otherside', artist: 'Lena Raine',
        context: 'Game - Minecraft', desc: 'Music Disc - otherside',
        date: '', ytId: 'kK81m-A3qpU', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Inevitable Conflict', artist: 'HOYO-MiX',
        context: '', desc: '',
        date: '2023', ytId: 'ZuV38DZQgvM', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'For Riddles, for Wonders', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: 'p2QSNcAJLTI', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    // Chapter 2
    {
        chapter: 2,
        title: 'Combat Beneath the Waves', artist: 'HOYO-MiX',
        context: '', desc: '',
        date: '', ytId: 'UEVEmUWsfD0', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Inverted World', artist: 'ARForest',
        context: 'Game - Rotaeno', desc: '',
        date: '2024', ytId: 'ixdnEvWkJtk', start: 0,
        lyrics: `(Instrumental - No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Reverie', artist: 'Soba',
        context: 'Game - Rotaeno', desc: '',
        date: 'JUN 2024', ytId: 'HVSgWcz_FQs', start: 0,
        lyrics: `
            [01:17.03]We're still the same you know
            [01:20.48]I feel the stillness
            [01:23.46]feel the stillness now
            [01:26.62]With all the days we learned
            [01:29.76]We're always one
            [01:32.07]we're always one somehow
            [01:36.15]We're still the same you know
            [01:38.93]I feel the stillness
            [01:41.86]feel the stillness now
            [01:45.16]With all the days we learned
            [01:48.24]We're always one
            [01:50.66]we're always one somehow
            [01:59.02]We're always one
            [02:00.83]we're always one somehow
            [02:05.00]
`
    },
    {
        chapter: 2,
        title: 'Saving Light', artist: 'Wuthering Waves',
        context: 'Game - Wuthering Waves', desc: '',
        date: 'JUL 2024', ytId: 'ZJIORfPwF40', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: '60%的日常·悠闲', artist: 'HOYO-MiX',
        context: 'Game - Zenless Zone Zero', desc: '',
        date: 'JUL 2024', ytId: '8VA8VDp6yyk', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Natlan', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Natlan',
        date: 'AUG 2024', ytId: '_n-Tb5B5em4', start: 0, end: 292,
        lyrics: `
            [00:12.09]Shambulia! Beba silaha
            [00:19.18]Pigana mpaka mwishowe
            [00:25.68]Kwa nchi yetu tutaunguza damu yoyote
            [00:32.34]Rudi kwa pambaja ya dunia
            [00:38.79]Hadithi yaendelea(kama moto)
            [00:45.01]Heshima warithi vizazi(waka daima)
            [00:51.50]Ushujaa waangaza mbingu na ardhi
            [00:57.89]Mara tena ashinda Natlan
            [01:04.23]Milele tuwangoje, na tutawaimbia
            [01:10.75](Rudini) ndugu, (rudini) mashujaa
            [01:14.88]Mara ya tena mwangani
            [01:24.23]
            [02:16.81]Ati kweli mwahofuni kifo ? (Hapana)
            [02:23.05]Ushujaa wenu ni imara(bila shaka)
            [02:35.15](Kumbukeni majina ya mashujaa)
            [02:40.84](Andameni uwanjani)
            [02:47.89]Kwa jamaa(zuri, safi) nchi(sawa) na taifa
            [02:55.92]Kwa(vuma) matumaini(raha) mbeleni(nguvu) malengo
            [03:09.13](Rudini tunawangojeni)
            [03:20.79]
            [03:35.98]Nyimbo kelele sana
            [03:43.98]Sikiliza zitakuongoza nyumbani
            [03:57.24]Hadithi yaendelea(ahh, ahh)
            [04:03.76]Heshima warithi vizazi
            [04:10.26]Ushujaa waangaza mbingu na ardhi
            [04:16.58]Mara tena ashinda Natlan
            [04:23.03]Milele tuwangoje, na tutawaimbia
            [04:29.12]Rudini(ndugu) rudini(mashujaa)
            [04:33.21]Mara ya tena mwangani
            [04:43.01]Maisha marefu ni sasa
`
    },
    {
        chapter: 2,
        title: 'A Dance in Fire', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Natlan',
        date: 'OCT 2024', ytId: 'PjeuDWPbt3o', start: 0,
        ig: 'https://www.instagram.com/reel/DBG5MCAvhc0/',
        lyrics: `
            [01:00.31]Nyimbo za moto
            [01:02.85]Ziwache ziwake angani
            [01:06.59]Kama vile moto usiozimika waenea nchini
            [01:16.65]Nenda mbele kwa ujabari
            [01:20.37]Ijapokua hata
            [01:23.73]Majivu ya motoni
            [01:26.10]Tena
            [02:37.64]Chagua njia ya mwenyewe
            [02:40.95]Moto daima utawaka
            [02:44.35]Moto daima utawaka
            [02:47.76]Na uso wa ulimwengu
            [02:51.26]Utajitokeza haponi
            [02:54.60]Na moto utakuwakia
            [02:58.01]Na moto utakuwakia
            [03:01.50]Na moto utakuwakia
            [03:42.14]
        `
    },
    {
        chapter: 2,
        title: 'Gion2', artist: 'HOYO-MiX',
        context: 'Game - Honkai Impact 3rd', desc: ' ',
        date: 'SEP 2024', ytId: 'agvdUJdCFsE', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Burning Desire', artist: 'HOYO-MiX',
        context: 'Game - Zenless Zone Zero', desc: '',
        date: 'OCT 2024', ytId: '8DsNRWy3Q0Q', start: 0, end: 138,
        lyrics: `
            [00:03.95] Good evening and welcome!
            [00:05.87] I'm Burnice and I'll be serving you today
            [00:10.602] What can I get for you?
            [00:12.60] A drink, some snacks - or a little flames?
            [00:17.848] Mocktails, mixers, ice
            [00:19.64] The snacks are real nice
            [00:21.496] Soda, sour-mix, dry
            [00:23.288] I’m lit you can't deny
            [00:25.208] Whatever you want
            [00:26.168] Whatever you need
            [00:27.192] So good you'll never
            [00:28.216] Ever want to leave
            [00:29.176] Anything that you desire
            [00:30.823] Set it on fire!
            [00:31.251] I'll make you spend your Dennies all away
            [00:37.987] That's my desire
            [00:40.227] You know I’m the real deal.
            [00:42.851] What's left to say?
            [00:45.75] 3-2-1, fire!
            [00:51.70] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [00:54.466] Go go!
            [00:54.516] Go go!
            [00:59.202] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [01:01.10] Or a little flames?
            [01:06.605] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [01:09.405] Go go!
            [01:14.17] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [01:16.154] Gonna watch it burn!
            [01:17.333] I know I look kinda cute and nice 'n' pleasant
            [01:19.51] But I got a short fuse for fools, don’t get arrogant
            [01:21.558] Watch out - let me pour you a drink
            [01:23.35] But think about messing with me, I’ll end you in a blink
            [01:25.398] So drink your drink, don’t you run your mouth
            [01:27.254] You think about stepping to me, and things'll go south
            [01:29.238] Wanna push your luck then o-k-k,
            [01:31.094] I'll burn you to ash, think twice before you play play
            [01:33.074] I'll make you spend your Dennies all away
            [01:38.066] That's my desire
            [01:40.754] You know I’m the real deal
            [01:42.93] What's left to say?
            [01:45.81] 3-2-1, fire!
            [01:51.826] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [01:54.231] Go go!
            [01:58.903] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [02:00.646] Or a little flames?
            [02:06.854] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [02:09.158] Go go!
            [02:14.214] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [02:16.035] Gonna watch it burn!
`},
    {
        chapter: 2,
        title: 'Apocalypse', artist: 'アリスシャッハと魔法の楽団',
        context: 'Game - Lanota', desc: '',
        date: 'DEC 2025', ytId: 'Fzd0yUtUhDE', start: 0,
        lyrics: `
        [00:14.97]Selate In ou Lane Lar Alger ou Iila
[00:19.54]lootaria ou Caren Ewol Acary
[00:23.76]Mirya Heil Dro end Di end Tri
[00:28.28]Selate In ou Lane Lar Crai Jam Wery
[00:33.68]Lootaria ou Wiina Ewol Acary
[00:36.80]Mirya Hell Dro end Di end Tri
[00:41.03]Circus ou Nouche Olis Loog Nouche
[00:45.35]Synapse ah Astola
[00:47.74]end Ranya Advelses Stei ou Monodrama
[00:52.49]Finz Ranya
[00:57.32]Crai Ran Alan
[00:58.94]end Karna Mii Dist end Dist Mii
[01:02.29]a Falke Luan!
[01:03.82]a Gout Mii Disrait oh Chail ou Eist
[01:09.18]a Circus ou Drone
[01:12.06]Ley end Mii Bis Dist end Dist Mii
[01:15.38]a Falke Luan!
[01:16.86]Brait Allss ou Xia Piero
[01:21.91]Haou Crai La Crai
[01:38.52]es hai di es towai di es crai ni es grei ni lau
[01:41.78]es towai di es crai ni es grei ni lau
[01:44.78]es towai di es crai ni es grei ni lau
[01:48.02]es crai ni es grei ni lau
[01:52.79]Ranya Crai Ran Alan
[01:56.28]end Karna Mii Dist end Dist Mii
[01:59.46]a Flake Luan
[02:01.17]a Gout Mii Disrait oh Chail ou Eist
[02:07.62]a Circus ou Drone
[02:09.51]Ley end Mii Bis Dist end Dist Mii
[02:12.61]a Falke Luan!
[02:14.04]Brait Allss ou Xia Piero
[02:19.16]Haou Crai La Crai`
    },
    {
        chapter: 2,
        title: 'Golden Sign', artist: 'HOYO-MiX',
        context: 'Game - Zenless Zone Zero', desc: '',
        date: 'DEC 2024', ytId: 'Hj1CBJxkyeA', start: 0,
        lyrics: `
            [00:28.06]Yeah, the shining golden sign (ha-ha, yeah)
            [00:30.36] 
            [00:31.01]Let your inner spark ignite (ring, ring)
            [00:34.21] 
            [00:34.65]Find your treasure (treasure), glowing bright
            [00:37.53] 
            [00:37.73]Reaching for it and take a flight (woah)
            [00:40.80] 
            [00:41.05]Lucky or not, at least you tried
            [00:44.19]Chin up, in yourself, confide (yeah)
            [00:47.45] 
            [00:47.58]No doubt fate's on your side
            [00:50.72]You're chosen (skrrt, skrrt), so enjoy the ride (uh)
            [00:54.17] 
            [00:54.66]There are things you can't control
            [00:57.60] 
            [00:57.95]Fortune's fickle (ring, ring), that's this world
            [01:00.80]Embrace the result (result), stop keeping score (yeah)
            [01:04.06] 
            [01:04.35]That's the essence
            [01:06.04]Life's true goal (woah)
            [01:07.64] 
            [01:07.49]Not just trials (uh) and battles tough (yeah)
            [01:10.71] 
            [01:10.90]Go taking joy in simple stuff
            [01:14.16] 
            [01:14.80]Even when it's getting rough
            [01:17.24]Take it easy, having fun is just enough
            [01:20.56] 

`
    },
    {
        chapter: 2,
        title: 'Tell Your World', artist: 'livetune',
        context: 'Game - Hatsune Miku: Colorful Stage!', desc: ' ',
        date: 'DEC 2024', ytId: 'B2fRMQUxnyw', start: 0,
        lyrics: `
            [00:20.775] 形のない気持ち忘れないように
            [00:27.266] 決まりきったレイアウトを消した
            [00:33.75] ふと口ずさんだフレーズを掴まえて
            [00:39.875] 胸に秘めた言葉乗せ空に解き放つの
            [00:48.031] 君に伝えたいことが
            [00:51.203] 君に届けたいことが
            [00:54.45] たくさんの点は線になって
            [00:57.491] 遠く彼方へと響く
            [01:00.975] 君に伝えたい言葉
            [01:04.05] 君に届けたい音が
            [01:07.25] いくつもの線は円になって
            [01:10.493] 全て繋げてく　どこにだって (ah)
            [01:26.353] 君が伝えたいことは
            [01:29.586] 君が届けたいことは
            [01:32.786] たくさんの点は線になって
            [01:35.474] 遠く彼方へと響く
            [01:39.058] 君が伝えたい言葉
            [01:42.322] 君が届けたい音は
            [01:45.586] いくつもの線は円になって
            [01:48.791] 全て繋げてく　どこにだって (ah…)
`
    },
    {
        chapter: 2,
        title: 'アイディスマイル', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'JTOM6fuXptg', start: 0,
    },
    {
        chapter: 2,
        title: 'ジャックポットサッドガール', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'J9kD9rYR088', start: 0,
        ig: 'https://www.instagram.com/reel/DE7mx9IxgwU/',
        lyrics: `
            [00:15.486] 標準偏差以内の人生
            [00:17.902] 表情殺して腐った品性
            [00:20.189] ほらほら気づけばまた
            [00:22.301] ただただ過ぎ行く日々
            [00:24.605] 表現欲も非凡な才も
            [00:27.198] 漫然と生きてちゃなんもなんないの
            [00:29.693] ヤダヤダアタシはヤダ
            [00:32.011] 嘆けど変わらぬまま
            [00:34.443] 受け入れ難い心情をねじ込むのが愛なんだ
            [00:42.618] アタシはジャックポットサッドガール 分かり合えぬまま
            [00:49.081] 点と線でエンドロール描く日々の中
            [00:53.305] 誰にも言えないまんま抱えた想いこそ価値があるんだ
            [00:58.041] 探していた答えだって 未来みたいに手の中に
            [01:02.649] 正論ばっかじゃちょーつまんない
            [01:05.081] 人生は一種のジョークなんだ
            [01:07.385] ハローハロー気の向くまま
            [01:09.561] その音鳴らせばほら
            [01:12.121] 精神相場はちょー不安定
            [01:14.425] 安定な策とかホント退屈さ
            [01:16.729] 見て見てアタシの中
            [01:18.969] 心の奥底にある
            [01:21.401] 黒く澱んだ水槽に映るのは微笑だった
            [01:31.065] ジャックポットサッドガール 分かり合えずとも
            [01:35.545] 心の臓のビートを強く響かせて
            [01:39.961] 胸張り正々堂々正面突破で間違えるんだ
            [01:44.761] 隠し持った似合わないナイフ 異端ゆえの最先端
            [01:50.318] ひーふーみーよー
            [01:54.67] いーむーなーやー
            [01:59.086] ねぇ先生ここ無法地帯
            [02:01.582] あなた曰く既に廃れ枯れたアネクメーネ
            [02:03.822] 草木生えず人類の住めなくなった
            [02:06.062] チープでキッチュな小惑星
            [02:08.494] ねぇ先生あなたバカじゃないの
            [02:10.798] 未だ滾る感情を知らないの
            [02:13.166] 凝り固まってんならお勉強
            [02:15.278] ここで無垢で無知で無為な賛美を見せつけるわ
            [02:22.757] それでも
            [02:25.08] ジャックポットサッドガール　分かり合えるかな
            [02:29.624] どんな不安も怠惰もみな抱えたまま
            [02:33.931] 誰にも言えないまんま 自分のまんまで勝ち上がるんだ
            [02:39.063] 探していた答えだって 未来みたいに手の中に
            [02:43.574] あった
                `
    },
    {
        chapter: 2,
        title: '限りなく灰色へ', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'tsjQM-oZon4', start: 0,
    },
    {
        chapter: 2,
        title: 'Twilight Melody', artist: 'CircusP',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'A77p_8E7OFs', start: 0,
        ig: 'https://www.instagram.com/reel/DIUDThwRCnq/',
        lyrics: `
            [00:00.615] Let the music resonate in your heart
            [00:03.495] Together we can recreate a new start
            [00:07.504] On the borderline between what is real and yet unseen
            [00:10.471] Hear my song, follow me
            [00:24.714] If it feels like you have nowhere left
            [00:28.13] As the midnight sets in
            [00:31.146] Just look to the horizon
            [00:33.45] Find where it all begins
            [00:36.074] A new constellation will lead us to boundless odyssey
            [00:40.318] Come follow me
            [00:41.598] With luck, resolution, and vigor
            [00:44.03] We'll capture sights yet unseen
            [00:47.934] Now
            [00:48.36] Hear this melody resound in the chaos of the crowd
            [00:51.368] By noise be found, your voice calls out
            [00:53.864] On the borderline between what is real and yet unseen
            [00:56.744] Hear my song, follow me
            [00:58.792] Let the music resonate in your heart
            [01:01.48] Together we can recreate a new start
            [01:04.232] Confide into my arms
            [01:05.896] Hear this melody resound in the chaos of the crowd
            [01:08.584] Defy all doubts by twilight's sound
            [01:22.061] Open your eyes to something new
            [01:24.877] Gleaming stars come into view
            [01:27.501] Know that this love is absolute
            [01:30.381] As the sun will rise the day anew
            [01:34.54] Now
            [01:34.86] Hear this melody resound in the chaos of the crowd
            [01:37.863] By noise be found, your voice calls out
            [01:40.71] On the borderline between what is real and yet unseen
            [01:44.381] Hear my song, follow me
            [01:46.821] Let the music resonate in your heart
            [01:49.565] Together we can recreate a new start
            [01:52.269] Confide into my arms
            [01:53.405] Hear this melody resound in the chaos of the crowd
            [01:56.989] Defy all doubts by twilight's sound
            [02:03.149] I'll never let you down
            [02:09.003] Be found by twilight's sound
`
    },
    // Chapter 3
    {
        chapter: 3,
        title: 'Nameless Faces', artist: 'HOYO-MiX',
        context: '2025 Opening', desc: 'Honkai Star Rail',
        date: 'JAN 2025', ytId: 'TqKwoSk6708', start: 0,
        lyrics: `
            [00:11.925] Moonlight, a barren void to horizon,
            [00:23.70] Days blur into nights of dreadful silence, oh.
            [00:34.90] You let me see thy heart,
            [00:37.90] Lost beacon in the dark,
            [00:40.975] Our lonely souls that spark,
            [00:43.90] We break apart.
            [00:51.75] We find,
            [00:53.266] We strive,
            [00:54.766] Our journey of eternity.
            [00:57.825] Desire, in mind,
            [01:00.725] To set our spirits free,
            [01:04.333] Echoes fade to oblivion,
            [01:06.975] Freedom to make our own.
            [01:10.066] We trod our destinies on
            [01:12.95] A path unknown.
            [01:14.95] In hope,
            [01:17.966] In vain,
            [01:20.75] To whom, who waits?
        `
    },
    {
        chapter: 3,
        title: 'Vitas Corrodens Pestis', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Chapter 5 Art 5',
        date: 'JAN 2025', ytId: 'pZRSJ00DABs', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTY4NjkyNTY5NzkyMzIw?story_media_id=3537309540074394582_63008808258&igsh=MXJ4ZG4wZHA1OW5mMw==',
        lyrics: `
            [00:00.19]Vae umbrifero corrupto veteri
            [01:32.24]Vides ut veteranum aureum altumque palatium
            [01:45.99]Praedico tibi hodie quod pereas et tandem moreris
            [01:50.74]Nunc sordida impudica pulvere obtectum
            [02:06.59]Numeramur nos et omnes in caelo corruimus
            [02:13.52]Numerabit vos et omnes in caelo corruetis
            [02:20.29]Neglegis immeritis nocituram postmodo
            [02:34.25]ferro odi ignique
            [02:35.50]natis committere, umbriferum cadaveris?
            [02:47.95]
            [03:01.38]Vides ut heres superbiae priscos nobiles progenies
            [03:13.61]Fors et debita iura vicesque superbae te ipsum
            [03:13.61]Nunc squamae exsiccatae remaneant nisi tantum
            [03:32.49]Irrident veteres odiorum
            [03:32.49]Irrides veteres odiorum vanitates
            [03:40.80]Ossa relicta in tenebrosis vivantium iam ponant odium
            [03:45.67]Vanitates et illudis veteris odi
            [03:55.14]Nescis cras quis lumen visurus erit?
            [03:55.14]Nescis cras quis nocte sepultus erit?
        `
    },
    {
        chapter: 3,
        title: 'Ode of Resurrection : Recapitulation', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Chapter 5 Art 5',
        date: 'JAN 2025', ytId: 'B1FUeACyqbI', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTY4NjkyNTY5NzkyMzIw?story_media_id=3537176221278097451_63008808258&igsh=MXJ4ZG4wZHA1OW5mMw==',
        lyrics: `
            [00:42.74]Shambulia! Beba Silaha
            [00:49.02]Pigana mpaka mwishowe
            [00:55.74]Kwa nchi yetu tutaunguza damu yoyote
            [01:02.20]Rudi kwa pambaja ya dunia
            [01:08.18]Zuri, safi, sawa, sikia
            [01:14.32]Vuma, raha, nguvu, sikia
            [01:24.44]Hadithi yaendelea (kama moto)
            [01:30.52]Heshima warithi vizazi (waka daima)
            [01:34.29]Ushujaa waangaza mbingu na ardhi
            [01:40.25]Mara tena ashinda Natlan
            [01:45.02] 
            [02:04.58]Nyimbo kelele sana 
            [02:17.25]Kwa jamaa, nchi na taifa
            [02:17.25](Sikiliza zitakuongoza nyumbani)
            [02:17.25](Zuri, safi, sawa)
            [02:29.99]Kwa Matumaini, mbeleni, malengo (Vuma, raha, nguvu)
            [02:42.66] 
            [02:55.59]Mara ya tena mwangani
            [03:07.92]Mara ya tena mwangani
            [03:07.94]Mara ya tena mwangani
            [03:20.34]Maisha marefu ni sasa
            [03:26.56]Maisha marefu ni sasa
            [03:32.96]Maisha marefu ni sasa
            [03:39.30]Maisha marefu ni sasa
            [03:44.29]
`
    },
    {
        chapter: 3,
        title: 'Anthem of Era', artist: 'HOYO-MiX',
        context: 'Out-zone exploration - Tokto, Japan', desc: 'Changi Airport Theme',
        date: 'FEB 2025', ytId: 'f_53L9xa9GE', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDM4NTkxMTE3MjY5OTcx?story_media_id=3562051245785979709_63008808258&igsh=NWhzZWljMzE3eW54',
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 3,
        title: 'フロムトーキョー', artist: 'Leo/need',
        context: 'Out-zone exploration - Tokto, Japan', desc: 'Tokyo Theme',
        date: 'FEB 2025', ytId: 'G-WN0ab-9ZI', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDM4NTkxMTE3MjY5OTcx?story_media_id=3562051245785979709_63008808258&igsh=NWhzZWljMzE3eW54',
        lyrics: `
            [00:01.18]不安ばっか知ってんだ 雨が降りそうな日
            [00:04.76]風の匂いで分かるから
            [00:08.10]誰だって気付いてんだ 僕には無理だと
            [00:12.12]それでも足掻いては転んだ
            [00:14.96]
            [00:15.34]友情×努力＝勝利の方程式
            [00:19.37]解けないまま過ごした僕らにも
            [00:22.96]いつか分かる日が来るよって
            [00:25.83]確証無く笑える自分が嫌いだ
            [00:29.43]
            [00:30.12]星が降るあの街に
            [00:33.34]置き去りにした思い出が
            [00:37.01]胸の奥で揺らめいてる
            [00:40.74]いつまでも焦がれていた
            [00:44.69]
            [00:46.03]それは雑踏の海の中で
            [00:49.95]踊るように燃えている誰かの声
            [00:53.62]ずっと探し続けてる
            [00:57.35]たとえそれが僕らのワガママでもいいさ
            [01:01.90]
            [01:09.49]好きな事選んだんだ
            [01:11.38]胸を張ればいいって
            [01:13.15]わかってるわかってる繰り返した
            [01:15.51]
            [01:16.33]結んだ指とかさねた呼吸
            [01:19.62]鳴り響く鼓動に耳を澄ました
            [01:22.76]
            [01:23.28]ホントは言いたくなかった
            [01:25.31]うざったいんだよ外野ばっか
            [01:27.13]ここで生きるってこと決めたんだから！
            [01:30.35]
            [01:30.59]きっとボクらの出会いだって
            [01:34.40]この空の下にある小さなセカイ
            [01:37.98]ずっと求め続けてる
            [01:41.70]たとえそれが誰かの気まぐれでもいいさ
            [01:49.56]
            [02:00.32]それは雑踏の海の中で
            [02:03.97]踊るように燃えているあの日の声
            [02:07.63]ずっと探し続けてる
            [02:11.71]たとえそれが僕らのワガママでも
            [02:14.92]
            [02:15.48]きっとボクらの出会いだって
            [02:19.09]この空の下にある小さなセカイ
            [02:22.90]ずっと求め続けてる
            [02:26.54]たとえそれが誰かの気まぐれでもいいさ
            [02:30.86]
            [02:38.31]不安ばっか知っていた あの日のボクらが
            [02:41.88]この街で僕らになれますように
`
    },
    {
        chapter: 3,
        title: 'ザムザ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'MAR 2025', ytId: 'cchy8Tl5Oa8', start: 0,
        ig: '',
        lyrics: `
            [00:11.44]使い古した自分の名前に
            [00:13.52]あえてキッチュなルビを振って
            [00:15.39]高潔を打ち負かせるくらいに
            [00:17.40]恐ろしくなる　骨の髄まで
            [00:19.36]今はどんなふうに見えてますか？
            [00:21.40]醜いですか？　それはそっか
            [00:23.34]どうか林檎を投げつけないで
            [00:25.34]胸にLock up　Lock up
            [00:26.99]ザムザ
            [00:28.65]
            [00:35.75]「鏡をご覧」誰かが囁く
            [00:37.20]うまくいったら儲けものさ
            [00:39.01]甘い言葉も笑顔も通じない
            [00:40.95]走り出したらもう獣だ
            [00:42.92]月の真下をうろつきながら
            [00:44.87]考えてた　夜すがら
            [00:47.03]悪夢にどの指立てて
            [00:48.99]やるべきかってね
            [00:50.70]
            [00:51.04]ズキズキズキ　『ズキズキズキ』
            [00:53.11]ズキンズキンズキン　『ズキンズキン』
            [00:55.23]ズキズキズキ　『ズキズキズキ』
            [00:57.05]ズキ　ズキ　ズキン
            [00:58.68]変われ…
            [00:59.35]ズキズキズキズキズキ
            [01:02.08]
            [01:02.08]誰だって魂辛辛
            [01:05.05]ズキズキズキ
            [01:06.29]痛みと怒れる人(ラングラー)を喰らったったらった
            [01:10.86]だのに何故だろう今も
            [01:13.67]ズキズキズキって
            [01:15.16]派手な尻尾を引き摺りゆく ザザザザ　ザムザ
            [01:19.39]「現実はもういい」なんて云うなよザムザ
            [01:23.33]おーいえー
            [01:24.44]『ズキズキズキ』
            [01:27.42]ザザザザ　ザムザ
            [01:28.95]『ズキズキズキ』
            [01:31.49]
            [01:32.26]「ごめんね。ちっとも上手に
            [01:34.30]生きてあげられなくて」と伝えて
            [01:36.23]否定形の笑顔でも欲しくて
            [01:38.03]ニンゲン様なりきってる亡霊
            [01:41.09]自分の弱音に相槌ばかりだった
            [01:44.06]当然あなたとまともにケンカもできなかった
            [01:48.16]ズキズキズキ 『ズキズキズキ』
            [01:50.31]ズキンズキンズキン 『ズキンズキン』
            [01:52.30]ズキズキズキ 『ズキズキズキ』
            [01:54.22]ズキ　ズキ　ズキン
            [01:55.76]変われそうにないやいや
            [01:59.53]冗談じゃない　夢を食べないで
            [02:02.32]ズキズキズキ
            [02:03.46]小洒落た絶望を歌ったったらった
            [02:07.49]どうしようもない成れの果てでも
            [02:10.21]ズキズキズキって
            [02:11.73]いつか愛しい歌になるさ ザザザザ　ザムザ
            [02:16.40]
            [02:22.80]ねえ123で飛んで ザザザザ　ザムザ
            [02:26.94]一切合切蹴っ飛ばして ザザザザ　ザムザ
            [02:30.95]あとがきで触れられもしない日々
            [02:34.35]ここで逃げ出したら　本当にそうなりそうだ
            [02:39.84]
            [02:42.36]誰だって魂辛辛
            [02:45.01]ズキズキズキ…
            [02:46.20]痛みと怒れる人(ラングラー)を喰らったったらった
            [02:50.24]だのに何故だろう今も
            [02:52.97]ズキズキズキって (ズキズキ)
            [02:54.39]林檎をかじるようにザザ　ザムザ
            [02:57.78]どうしようもない成れの果てでもここにいる
            [03:01.97]シャガの花に毒されても
            [03:05.66]光は１時の方角にある
            [03:09.90]今は尻尾を引き摺りゆけ
            [03:12.37]ザザザザ　ザムザ
            [03:14.33]だから「現実はもういい」なんて云うなよザムザ
            [03:18.30]おーけー？
            [03:19.49]『ズキズキズキ…』
            [03:21.30]ザザザザザムザ
            [03:22.76]『ズキズキズキ…』
            [03:25.29]
            [03:26.26]『ズキズキズキ…』
            [03:28.95]ザザザザザムザ
            [03:30.77]『ズキズキ…』
            [03:33.61]『ズキ』
`
    },
    {
        chapter: 3,
        title: 'The End of YoRHa', artist: 'Keiichi Okabe',
        context: 'Game - NieR: Automata', desc: 'Ending E - the [E]nd of YoRHa',
        date: 'APR 2025', ytId: 'PslQESlD4xs', start: 0,
        ig: 'https://www.instagram.com/reel/DIY7A7GvZa3/',
        lyrics: `
            [01:21.00]Cause we're going to shout it loud
            [01:24.26]Even if our words seem meaningless
            [01:27.46]It's like I'm carrying the weight of the world
            [01:32.84]
            [01:33.92]I wish that someway, somehow
            [01:37.32]That I could save every one of us
            [01:40.58]But the truth is that I'm only one girl
            [01:46.47]Maybe if I keep believing
            [01:49.03]My dreams will come to life
            [01:55.37]
            [01:56.26]Come to life
            [02:00.49]
            [02:13.51]溢れる緑
            [02:16.65]零れる命
            [02:19.27]風は今も遠く
            [02:25.04]
            [02:26.78]Nasico whosh pier wan nei
            [02:29.60]Wananba ri na qua lei
            [02:32.29]Sila schmer ya pit pa lu
            [02:38.30]Tell me God, are you punishing me?
            [02:45.41]Is this the price I'm paying for my past mistakes?
            [02:51.94]This is my redemption song
            [02:58.27]I need you more than ever right now
            [03:04.42]Can you hear me now?
            [03:08.00]そう僕らは今
            [03:11.26]ああ、無価値でも叫ぶ
            [03:14.46]この汚れた世界の愛
            [03:20.86]そう僕らは今
            [03:24.32]ああ、無意味でも願う
            [03:27.39]ただキミとの時間を
            [03:33.87]La feto bo ras di lei
            [03:36.99]Shel va pelo cra na dii sii hei
            [03:40.51]Naya chyo ma ter meh lava ma puoru
            [03:46.91]Ig nagya di lem myo
            [03:50.18]Sequoish pela chyo mei lu
            [03:53.31]Wana piesla hola uma schen dan
            [03:59.83]Still we're gonna shout it loud
            [04:03.22]Even if our words seem meaningless
            [04:06.29]It's like I'm carrying the weight of the world
            [04:12.76]I'd hope that some way, somehow
            [04:16.15]That I can save every one of us
            [04:19.35]But the truth is that I'm only one girl`
    },
    {
        chapter: 3,
        title: 'はじまりの未来', artist: '40mP x sasakure.UK',
        context: 'Movie - 劇場版プロジェクトセカイ 壊れたセカイと歌えないミク', desc: '',
        date: 'APR 2025 ', ytId: 'mxj3mW4jf7Q', start: 0,
        ig: 'https://www.instagram.com/reel/DIiyxE9Rm4l/',
        lyrics: `
            [00:00.128] 光、未来 相のうた追う
            [00:03.795] 迂回、出会い ハジメマシテ
            [00:06.322] 問うからまたね 舞台の裏
            [00:09.465] 添う続いてゆく未知の
            [00:25.632] 君が笑う景色の砂が
            [00:28.347] 好き、で色づくように ね
            [00:31.579] 嬉しい日も悲しい日も
            [00:34.491] うたと共にいるよ
            [00:36.731] あの坂道も 回り道も
            [00:40.233] 君と居れば ほらね、ミュージック
            [00:42.923] え そんな日常？ どんな日常？
            [00:46.459] 答案に、収まらないね 不思議
            [00:50.213] 風に溶けた音符の群れが
            [00:52.744] 渇いた心の声とハモって
            [00:56.345] 隠してきた本当の嘘が
            [00:58.959] ヘッドフォンに響いた
            [01:01.223] 内緒話も独り言も
            [01:04.90] 君の手にかかれば、ミュージック
            [01:07.404] 息継ぎしたら生まれたての
            [01:11.087] 季節を吸い込んだ
            [01:14.201] 変わりゆく景色の空白を
            [01:17.017] 変わらない歌声が彩るよ
            [01:20.025] 忘れ物に気づいた通学路
            [01:23.161] 躓いた問いを絡まった過去を
            [01:26.194] 解いたら、一歩 先
            [01:29.394] 走り出す未来のすぐそばで
            [01:32.841] 夢にまみれた今を抱く
            [01:35.721] 信号踏切いつでも
            [01:38.281] 音楽は もう、とまらない
            [01:41.591] あの笑顔もナミダも君のうた
            [01:45.056] まだ、歌えるよ
            [01:47.143] 青空の下でこの夏を再生
            [01:51.362] 聴いてよ こんなうたどう？
            [01:54.476] 無題 デモワンフレーズの衝動
            [01:57.361] じゃあ、またね１秒後に会おう
            [02:00.562] 終わらない未知で
            [02:16.188] オトで擦る星空の軌跡
            [02:18.902] 幸せ探す綺麗を纏う芽
            [02:22.332] 君が”君”で居てくれたから
            [02:25.084] ここにいる、今日だった
            [02:27.708] 1.2.3 で煌めくファンタジーを
            [02:31.311] 夜に翳すインターリュードを
            [02:34.306] 街を染めてゆくリリックを
            [02:37.277] 繋いでゆく、世界(セカイ)
            [02:40.359] はじまりの景色の空白を
            [02:43.239] 隣り合わせの君が彩るよ
            [02:46.20] 互い違い、間違い、すれ違い⋯？
            [02:49.444] 足りないくらいの
            [02:50.98] 消えないくらいの
            [02:52.452] 滲んだ色を はみ出した色を
            [02:55.70] 愛したら 一歩 先
            [03:01.514] 綺麗な未来になれなくても
            [03:04.906] 夢が零れてしまっても
            [03:07.914] 誰かの想いが届くまで
            [03:10.372] 音楽はそう、止めどなく溢れてく
            [03:16.986] 走り出す未来のすぐそばで
            [03:20.513] 夢にまみれた今を抱く
            [03:23.255] 水溜りクラッシュ弾けて
            [03:25.815] 音楽は もう、止まらない
            [03:29.468] 後悔も願いも 君のうた
            [03:32.77] ほら、聴こえるよ
            [03:34.818] 青空に映る
            [03:37.072] あの日々の残像
            [03:39.083] 「覚えてる？ 僕のうたを」
            [03:42.027] 重ね合うオーケストラ模様
            [03:44.843] サヨナラのあと 手を繋ごう
            [03:47.974] はじまる未知と―
            [04:03.726] 終わらない未知で―
`
    },
    {
        chapter: 3,
        title: '千本桜', artist: '黒うさＰ',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'shs0rAiwsGQ', start: 0,
        ig: 'https://www.instagram.com/reel/DInnzAexPbz/',
        lyrics: `
            [00:32.75] 大胆不敵にハイカラ革命
            [00:35.833] 磊々落々 反戦国家
            [00:39.016] 日の丸印の二輪車転がし
            [00:42.033] 悪霊退散 ICBM
            [00:45.283] 環状線を走り抜けて 東奔西走なんのその
            [00:51.40] 少年少女戦国無双 浮世の随に
            [00:57.116] 千本桜 夜ニ紛レ 君ノ声モ届カナイヨ
            [01:03.45] 此処は宴 鋼の檻 その断頭台で見下ろして
            [01:09.633] 三千世界 常世之闇 嘆ク唄モ聞コエナイヨ
            [01:15.90] 青藍の空 遥か彼方 その光線銃で打ち抜いて
            [01:35.083] 百戦錬磨の見た目は将校
            [01:38.15] いったりきたりの花魁道中
            [01:41.266] アイツもコイツも皆で集まれ
            [01:44.316] 聖者の行進 わんっ つー さん しっ
            [01:47.45] 禅定門を潜り抜けて 安楽浄土厄払い
            [01:53.583] きっと終幕は大団円 拍手の合間に
            [01:59.366] 千本桜 夜ニ紛レ 君ノ声モ届カナイヨ
            [02:05.716] 此処は宴 鋼の檻 その断頭台で見下ろして
            [02:11.95] 三千世界 常世之闇 嘆ク唄モ聞コエナイヨ
            [02:18.233] 希望の丘 遥か彼方 その閃光弾を打ち上げろ
            [02:56.05] 環状線を走り抜けて 東奔西走なんのその
            [03:02.20] 少年少女戦国無双 浮世の随に
            [03:08.00] 千本桜 夜ニ紛レ 君ノ声モ届カナイヨ
            [03:14.20] 此処は宴 鋼の檻 その断頭台を飛び降りて
            [03:20.633] 千本桜 夜ニ紛レ 君が歌い僕は踊る
            [03:26.866] 此処は宴 鋼の檻 さあ光線銃を撃ちまくれ
`
    },
    {
        chapter: 3,
        title: 'ジェヘナ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'tfetmZjz2mA', start: 0,
        lyrics: `[00:18.46]なあ　元気？　調子はどうだい？
[00:22.23]ああ　もうね　そういうの辞めたんだ
[00:26.03]うん　なんか　もう回復の見込みは無いそうなんだ
[00:31.24]何も聞かないでくれ

[00:34.38]後悔　値踏み　談笑会
[00:37.38]介護　悦　共有もサレンダーだ
[00:41.23]はい　そうです　正真正銘　僕のせいだった
[00:47.03]よくある話

[00:49.02]単純明快をモノにしたくて
[00:52.22]斯くあるべきという理想を殺して
[00:56.19]もう散々だって逃げる勇気も無い
[00:59.94]はやく　もっと　堕ちて

[01:03.41]「生きていたいよ」
[01:04.96]毎夜　喉を塞ぐ
[01:06.77]透明の概要
[01:08.48]肺を蝕む実在も

[01:10.86]理不尽も　孤独も
[01:13.27]恨まなくていい
[01:14.66]それら全て意味は無いんだ
[01:18.21]僕らは生きるしかないんだ
[01:21.90]
[01:36.85]おい　お前　そっちはどうだい
[01:40.60]ああ　まだ　そんなことやってんだ
[01:44.52]そういや　付き合ってた子とはどうなったんだ
[01:49.86]何も言わないでくれ

[01:53.25]将来　妬み　敗北感
[01:56.45]ワイヤレス　首も吊れないな
[02:00.25]はい　恐悦　大変　身に染みるお話でした
[02:05.59]満たされたかい

[02:07.80]真っ黒く濁って割れた心を
[02:10.96]アルコールで消毒して眠る
[02:14.90]もう暗澹たる大河の水になって
[02:18.53]もっと もっと もっと もっと 堕ちて

[02:22.07]「生きていたいよ」
[02:23.68]毎夜　喉を掴む
[02:25.59]空気も未来も
[02:27.17]内臓を騙る肉塊も

[02:29.67]幸せも　宇宙も
[02:31.99]疑わなくていい
[02:33.49]それら全て変わらないんだ
[02:37.18]僕らは知らなくていいんだ
[02:41.42]
[02:56.02]「生きていたいよ」
[02:57.41]なんでか分からないけど
[02:59.66]「生きていたいよ」
[03:01.17]DNAという聖書

[03:03.59]本能も恐怖も
[03:05.56]恨まなくていい
[03:07.20]どうせ何も変わらないんだ
[03:09.74](Forty-five here to waste time
[03:11.46]Hit 'em with the rhythm in the face)

[03:11.57]「生きていたいよ」
[03:12.66]なんの希望も無いけど
[03:14.73]「生きていたいよ」
[03:16.49]本能は赤く脈打つの

[03:18.86]「生きていたいよ」
[03:20.19]「生きてたくないよ」
[03:22.71]本当に残念だけど
[03:26.26]僕らは生きるしかないんだ
[03:30.07]
[03:31.62]騙してごめんよ
[03:35.20]言えなくてごめんよ
[03:38.68]そして本当に悲しいけれど
[03:43.01]苦しみだけが絆なんだ
[03:46.87]
[03:56.49]Forty-five here to waste time
[03:58.23]Hit 'em with the rhythm in the face
[03:59.42]Push 'em way back, take that
[04:00.86]They don't even really let ya take a gallon to the neck
[04:02.22]Got me feeling like a boss 'cuz I'm laid back`,
    },
    {
        chapter: 3,
        title: '神っぽいな', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'vIHCFGj_G2E', start: 0,
        lyrics: `[00:07.629] Oh my god
[00:08.49] 愛のネタバレ 「別れ」っぽいな
[00:11.589] 人生のネタバレ 「死ぬ」っぽいな
[00:15.189] なにそれ意味深で
[00:16.929] かっこいいじゃん…
[00:18.30] それっぽい単語集で踊ってんだ
[00:21.269] 失敬
[00:22.21] とぅ　とぅる とぅ　とぅ　とぅる　"風"
[00:27.289] ぽいじゃん　ぽいじゃん
[00:28.96] とぅ　とぅる とぅ　とぅ　とぅる　"風"
[00:32.35] とぅ　とぅる とぅ　とぅ　とぅる
[00:33.63] 神っぽいな
[00:35.439] もういいぜ　もういいぜ　それ
[00:37.00] もういいぜ　もういいぜ
[00:38.259] 逆に興奮してきたなあ
[00:42.289] おっきいね　おっきいね　夢
[00:43.77] おっきいね　おっきいね
[00:45.039] 景気いいけど　品性はTHE END
[00:48.09] うええい　うええい
[00:50.75] " Gott ist tot "
[00:52.20] 神っぽいな　それ　卑怯
[00:53.899] 神っぽいな　それ "My God"
[00:55.60] アイウォンチュー　ウォンチュー
[00:56.659] IQが下がっていく感じ
[00:58.939] 邪心ぽいな　それ　畢竟
[01:00.64] 邪心ぽいな　それ "My God"
[01:02.35] アイヘイチュー　ヘイチュー
[01:03.42] 害虫はどっち
[01:05.64] その髪型　その目　その口元
[01:07.379] その香水　その服　そのメイク
[01:09.09] アレっぽいな　それ　比況
[01:10.75] アレっぽいな　それ
[01:12.459] その名言　その意見　その批評
[01:14.12] そのカリスマ　そのギャグ　そのセンス
[01:15.879] 神っぽいな　それ　卑怯
[01:17.569] ぽいな　ぽいな　ぽい
[01:18.609] 憧れちゃう！
[01:19.689] とぅ　とぅる とぅ　とぅ　とぅる　"風"
[01:24.73] ぽいじゃん　ぽいじゃん
[01:26.45] とぅ　とぅる とぅ　とぅ　とぅる　"風"
[01:29.819] とぅ　とぅる とぅ　とぅ　とぅる
[01:31.079] 神っぽいな
[01:33.42] メタ思考する本質は悪意？
[01:35.68] 人を小馬鹿にしたような作為
[01:38.079] 無為に生き延びるのは難しい
[01:40.40] 権力に飲まれて揺らぐ灯り
[01:42.739] 神を否定し神に成り代わり
[01:45.06] 玉座で豹変する小物達
[01:47.409] 批判に見せかけ自戒の祈り
[01:50.03] Do you know？
[01:51.34] 何言ってんの？　それ　ウザい
[01:53.68] 何言ってんの？　それ
[01:56.01] 意味がよくわかんないし
[01:58.329] 眠っちゃうよ　マジ
[02:00.659] 飽きっぽいんだ　オーケー
[02:02.42] みんな　飽きっぽいんだ　オーケー
[02:05.329] 踊れるやつ　ちょうだい
[02:07.359] ちょうだい　ビーム
[02:10.219] きっしょいね　きっしょいね　それ
[02:11.759] きっしょいね　きっしょいね
[02:13.03] 逆にファンになってきたじゃん
[02:16.99] ちっちゃいね　ちっちゃいね　器
[02:18.49] ちっちゃいね　ちっちゃいね
[02:19.78] 天才ゆえ孤独ですね
[02:22.719] かっけえ…　かっけえ…
[02:27.449] " Gott ist tot "
[02:28.65] 神っぽいな　それ　卑怯
[02:30.34] 神っぽいな　それ "My God"
[02:32.00] 超健康　健康　言い張って
[02:33.719] くたばっていく感じ
[02:35.379] ヤケっぽいな　それ　畢竟
[02:37.069] ヤケっぽいな　それ "My God"
[02:38.80] もう哀愁　哀愁
[02:39.81] エピゴーネンのヒール
[02:42.12] そのタイトル　その絵　そのストーリー
[02:43.80] その音楽　その歌　そのメロディ
[02:45.55] アレっぽいな　それ　比況
[02:47.25] アレっぽいな　それ
[02:48.879] その名言　その意見　その批評
[02:50.55] そのカリスマ　そのギャグ　そのセンス
[02:52.30] 神っぽいな　それ　卑怯
[02:54.009] ぽいな　ぽいな　ぽい
[02:55.00] 憧れちゃうわ！
[02:56.09] とぅ　とぅる とぅ　とぅ　とぅる　"風"
[03:01.189] ぽいじゃん　ぽいじゃん
[03:02.87] とぅ　とぅる とぅ　とぅ　とぅる　"風"
[03:06.259] とぅ　とぅる とぅ　とぅ　とぅる
[03:07.539] 神っぽいな
[03:09.259] 愛のネタバレ 「別れ」っぽいな
[03:12.55] 人生のネタバレ 「死ぬ」っぽいな
[03:16.069] すべて理解して患った
[03:19.31] 無邪気に　踊っていたかった
[03:22.27] 人生
`
    },
    {
        chapter: 3,
        title: 'ザムザ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'cchy8Tl5Oa8', start: 0,
        lyrics: `[00:11.769] 使い古した自分の名前に
[00:13.689] あえてキッチュなルビを振って
[00:15.481] 高潔を打ち負かせるくらいに
[00:17.593] 恐ろしくなる　骨の髄まで
[00:19.641] 今はどんなふうに見えてますか？
[00:21.753] 醜いですか？　それはそっか
[00:23.481] どうか林檎を投げつけないで
[00:25.593] 胸にLock up　Lock up
[00:26.775] ザムザ
[00:35.508] 「鏡をご覧」誰かが囁く
[00:37.556] うまくいったら儲けものさ
[00:39.412] 甘い言葉も笑顔も通じない
[00:41.46] 走り出したらもう獣だ
[00:43.252] 月の真下をうろつきながら
[00:45.556] 考えてた　夜すがら
[00:47.412] 悪夢にどの指立てて
[00:49.524] やるべきかってね
[00:51.124] ズキズキズキ　『ズキズキズキ』
[00:53.62] ズキンズキンズキン　『ズキンズキン』
[00:55.668] ズキズキズキ　『ズキズキズキ』
[00:57.524] ズキ　ズキ　ズキン
[00:58.909] 変われ…
[00:59.726] ズキズキズキズキズキ
[01:02.708] 誰だって魂辛辛
[01:05.652] ズキズキズキ
[01:06.676] 痛みと怒れる人(ラングラー)を喰らったったらった
[01:10.734] だのに何故だろう今も
[01:13.422] ズキズキズキって
[01:14.638] 派手な尻尾を引き摺りゆく ザザザザ　ザムザ
[01:19.054] 「現実はもういい」なんて云うなよザムザ
[01:23.086] おーいえー
[01:24.174] 『ズキズキズキ』
[01:26.734] ザザザザ　ザムザ
[01:28.974] 『ズキズキズキ』
[01:32.046] 「ごめんね。ちっとも上手に
[01:33.903] 生きてあげられなくて」と伝えて
[01:35.887] 否定形の笑顔でも欲しくて
[01:37.871] ニンゲン様なりきってる亡霊
[01:40.672] 自分の弱音に相槌ばかりだった
[01:43.567] 当然あなたとまともにケンカもできなかった
[01:47.905] ズキズキズキ 『ズキズキズキ』
[01:50.145] ズキンズキンズキン 『ズキンズキン』
[01:52.129] ズキズキズキ 『ズキズキズキ』
[01:54.049] ズキ　ズキ　ズキン
[01:55.585] 変われそうにないやいや
[01:59.233] 冗談じゃない　夢を食べないで
[02:01.729] ズキズキズキ
[02:02.945] 小洒落た絶望を歌ったったらった
[02:06.977] どうしようもない成れの果てでも
[02:09.729] ズキズキズキって
[02:11.009] いつか愛しい歌になるさ ザザザザ　ザムザ
[02:22.209] ねえ123で飛んで ザザザザ　ザムザ
[02:26.177] 一切合切蹴っ飛ばして ザザザザ　ザムザ
[02:30.017] あとがきで触れられもしない日々
[02:34.216] ここで逃げ出したら　本当にそうなりそうだ
[02:41.768] 誰だって魂辛辛
[02:44.52] ズキズキズキ…
[02:45.736] 痛みと怒れる人(ラングラー)を喰らったったらった
[02:49.64] だのに何故だろう今も
[02:52.392] ズキズキズキって (ズキズキ)
[02:54.12] 林檎をかじるようにザザ　ザムザ
[02:57.576] どうしようもない成れの果てでもここにいる
[03:01.703] シャガの花に毒されても
[03:05.479] 光は１時の方角にある
[03:09.383] 今は尻尾を引き摺りゆけ
[03:11.943] ザザザザ　ザムザ
[03:14.108] だから「現実はもういい」なんて云うなよザムザ
[03:18.012] おーけー？
[03:19.292] 『ズキズキズキ…』
[03:21.027] ザザザザザムザ
[03:22.819] 『ズキズキズキ…』
[03:25.867] 『ズキズキズキ…』
[03:28.619] ザザザザザムザ
[03:30.675] 『ズキズキ…』
[03:33.831] 『ズキ』
`
    },
    {
        chapter: 3,
        title: 'キャットラビング', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'tk-uP-Yfl5I', start: 0,
    },
    {
        chapter: 3,
        title: 'キテイ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'l-OtSO4dsLM', start: 0,
        lyrics: `[00:04.84]味気の無い夜に熔けた雪が、
[00:07.90]言葉を枯らすのは何故？
[00:11.26]伝わらない想いだけがこころ染めて、
[00:14.99]かなしみに溺れたような、
[00:17.44]泡沫の爆ずバラッド。
[00:18.88]
[00:31.75]日月さえも孤独な天下で、
[00:34.54]絡まって解いてを輪廻する愚者の群。
[00:37.82]まるで、一様に独りと識った反射で
[00:40.92]調和を謀る、本能の儘のキティ。

[00:44.38]嗚呼、何処にも新世界なんて無い。
[00:46.02]独りで愛し、愛されて居たい。
[00:47.81]果たして今日は凶なら昨日は如何？
[00:49.71]詰まり永遠に不幸ってこと？

[00:51.01]其れなら、如何にかしたい次第。
[00:52.82]其れでも直視なんて出来ない。
[00:54.97]また、劣等と焦燥が睨み合って居る。

[00:57.58]逃れることと、眼を逸らすこと、
[01:01.20]何方に価値が有るだろう？
[01:03.66]ただ此処で、問答・瞑想
[01:06.15]じゃあ、突立っても迷走。
[01:07.78]さあ点と点を結ぶように、

[01:10.71]確かな愛が視たいなら、音に成って今逃げ出して！
[01:16.97]偽らなくたって叫んだ旋律がひかりと化して伝うのさ。
[01:23.89]此の歌が間違いでも構わないわ。声を枯らして！
[01:30.19]掻鳴らせ、ブルウスドライバ・アンド・テレキャスタ。
[01:34.33]答えは音の中。
[01:37.44]
[01:50.27]午前一時(エーエムワンオクロック)、警鐘亂打に起こす瞼。
[01:53.51]あたしは「何がしたい」「何がしたい」
[01:54.81]「何がしたい」と逡巡の間、
[01:56.55]余計なことばかりが頭の中絡まっていた。
[02:00.06]丹精凝らしたペイパークラフトは着火剤と化した。

[02:03.37]劣等感、実感、悲観で、
[02:05.18]勝手に喰らってパッシヴィティ。
[02:06.79]演奏家皆皆で
[02:08.41]喝破する生態系？

[02:09.91]それでは、変光星から没個性で
[02:11.81]劣化する才が惜しくなってしまう。
[02:13.36]不都合等蹴飛ばして
[02:15.12]銘銘に踊れや。一、二、三、四(ワン、トゥー、スリー、フォー)。
[02:17.14]
[02:29.65]逃れることと、眼を逸らすこと、
[02:33.02]何方に価値が有るだろう？
[02:35.59]ただ此処で、問答・瞑想
[02:37.80]じゃあ、突立っても迷走。
[02:39.65]さあ点と点を結ぶように、

[02:44.57]確かな愛が視たいなら、音に成って今逃げ出して！
[02:51.15]偽らなくたって叫んだ旋律がひかりと化して伝うのさ。
[02:58.31]この歌が間違いでも構わないわ。声を枯らして！
[03:04.59]掻鳴らせ、ブルウスドライバ・アンド・テレキャスタ。
[03:08.34]答えは音の中。

[03:11.93]そして、あたしの中。`,
    },
    {
        chapter: 3,
        title: 'どんな結末がお望みだい', artist: 'ワンダーランズxショウタイム',
        context: '-', desc: '',
        date: 'MAY 2025', ytId: '3v0nx60FKFc', start: 0,
        ig: 'https://www.instagram.com/reel/DJLrZTLxcuv',
        lyrics: `
            [00:03.083] 夏の暑さも　皆の思いも
            [00:08.183] いつかは夜風に吹かれてもう
            [00:15.166] 前にしか進めないと知ったから
            [00:19.35] （綺麗な） 枯れないで　おとさないで
            [00:23.616] 胸に抱いた　花束を
            [00:30.95] もしも思い出の　陰に手を伸ばしたら
            [00:36.816] まだ見ぬ景色は　遠ざかるばかりで
            [00:43.45] 迷いも戸惑いも証明だって
            [00:47.366] 今までの夢が在って
            [00:49.85] 振り返れば沢山の笑顔見せて
            [00:54.766] 手と手を繋ぎあって
            [00:57.516] 育んだ絆だけはたったひとつ
            [01:01.666] 叶えたい夢になんて　名前を付けようか
            [01:06.966] 痛みを伴うこれは夢と呼べるのかい？
            [01:12.05] 答えのない問いに縋って
            [01:14.516] 季節が移りゆくようで
            [01:16.933] 天地自然の理だと心に言い聞かせ
            [01:21.716] "どんな結末がお望みだい？"
            [01:26.70] このふたつの思いは共存出来ないものか
            [01:35.066] もしも 花束 に 費 を つけて しまったら
            [01:40.833] これまで積み上げたものはガラクタで
            [01:48.25] 願いも愛情も本当だって
            [01:51.80] 今までの夢を抱いて
            [01:54.133] 振り返ればたくさんの感謝に満ちて
            [01:59.233] 目と目で向かい合って
            [02:01.883] 育んだ絆だけはたったひとつ
            [02:06.233] 叶えたい夢になんて　名前を付けようか
            [02:11.25] 別れが伴うこれを夢と呼べるのかい？
            [02:16.533] 早々に行き詰まって 奇跡頼り 弱音吐いて
            [02:21.466] 天地自然の理には心も抗えず
            [02:26.65] "どんな結末がお望みだい？"
            [02:54.15] 叶えたい夢になんて　名前を付けようか
            [02:59.25] 痛みを乗り越えた先でなら笑えるかい？
            [03:04.266] 答えのない問いに背いて 季節はまた巡るようで
            [03:09.316] 天地自然の理すら覆す絆だと
            [03:14.383] きっと 結末は 幸せだ
`
    },
    {
        chapter: 3,
        title: 'Bad Apple!! feat.SEKAI', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'MAY 2025', ytId: 'v-fc1zv31zE', start: 0,
        lyrics: `[00:15.65] Bad Apple!! feat.SEKAI 25時、ナイトコードで。 × 初音ミク
[00:19.25] 作詞：Haruka 作曲：ZUN（上海アリス幻樂団） 編曲：ビートまりお×まろん、まらしぃ、Masayoshi Minoshima
[00:22.50] 翻译来自PJS字幕组 如需转载翻译请保留译者及出处 翻译：MOwIU 校对：PJS字幕组
[00:29.42] 哪怕身处不断流逝的时间之中
[00:32.969] 倦怠感也一直在这身体中循环往复
[00:36.45] 从我体内剥离而出的心 也已彻底消失
[00:41.20] 对啊 你不懂吗？
[00:43.42] 我已不再自己做出任何行动
[00:46.85] 只在时间缝隙中 不断随波逐流
[00:50.34] 周围的事情 全都与我无关了
[00:53.88] 我就是我
[00:55.649] 我就是我 仅
[00:56.10] 我就是我 仅此
[00:56.60] 我就是我 仅此而
[00:57.00] 我就是我 仅此而已
[00:57.50] 都在做梦吗？
[00:58.619] 什么都看不见吗？
[01:00.45] 我讲出的话 怎么说了也没人听？
[01:03.929] 悲伤什么的 只会叫人疲惫啊
[01:07.37] 什么都别感受 得过且过就好
[01:10.789] 即使被人说了什么流言蜚语
[01:14.34] 我这颗心 也毫不在意
[01:17.71] 如果要由我自己 做出行动的话
[01:21.25] 要是能改变这一切 就让黑降临
[01:24.73] 这样的自己 还有未来可言吗？
[01:28.28] 这样的世界 能有我的容身之处吗？
[01:31.76] 我在难过吗？
[01:33.469] 我在悲伤吗？
[01:35.20] 连自身的想法 都还一无所知
[01:38.68] 连向前迈步 都只会徒增疲惫
[01:42.049] 其他人的事情 我没一点兴趣啊
[01:45.59] 如果连这样的我 都能改变的话
[01:49.14] 如果能改变的话 要化作白吗？
[02:06.959] 哪怕身处不断流逝的时间之中
[02:10.439] 倦怠感也一直在这身体中循环往复
[02:13.93] 从我体内剥离而出的心 也已彻底消失
[02:18.62] 对啊你不懂吗？
[02:20.84] 我已不再自己做出任何行动
[02:24.34] 只在时间缝隙中 不断随波逐流
[02:27.77] 周围的事情 全都与我无关
[02:31.25] 我就是我
[02:33.00] 我就是我 仅
[02:33.50] 我就是我 仅此
[02:34.00] 我就是我 仅此而
[02:34.40] 我就是我 仅此而已
[02:34.90] 都在做梦吗？
[02:36.05] 什么都看不见吗？
[02:37.87] 我讲出的话 怎么说了也没人听？
[02:41.31] 悲伤什么的 只会叫人疲惫啊
[02:44.74] 什么都别感受 得过且过就好
[02:48.28] 即使被人说了什么流言蜚语
[02:51.71] 我这颗心 也毫不在意
[02:55.189] 如果要我自己行动的话
[02:58.62] 要是能改变这一切 就让黑降临
[03:02.159] 要是我能动起来
[03:03.93] 要是我能挣脱束缚
[03:05.65] 就去把一切破坏
[03:07.37] 就去毁掉这一切
[03:09.129] 要是感到悲伤
[03:10.84] 要是泪流不止
[03:12.62] 我的这颗心 就能化作白吗？
[03:16.11] 你的事情也好
[03:17.81] 我的点滴也罢
[03:19.59] 世上的这些事物
[03:21.25] 我还尚未知晓
[03:23.069] 若能掀开 这沉重的眼睑
[03:26.40] 若能毁灭掉这一切
[03:28.62] 就全部陷入黑暗吧！！！
[03:32.00] Bad Apple!! feat.SEKAI 25時、ナイトコードで。 × 初音ミク
[03:37.00] 作詞：Haruka 作曲：ZUN（上海アリス幻樂団） 編曲：ビートまりお×まろん、まらしぃ、Masayoshi Minoshima
[03:42.00] 翻译来自PJS字幕组 如需转载翻译请保留译者及出处 翻译：MOwIU 校对：PJS字幕组
        `
    },
    {
        chapter: 3,
        title: '私は雨', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'MAY 2024', ytId: '91E_W8JhSjs', start: 0,
        lyrics: `[00:05.865] 私は誰
[00:08.745] あなたの哀れ
[00:12.068] 夜空の中で 名前を無くして
[00:19.40] うねりのない
[00:21.267] 水面に潜む景色を
[00:26.003] 知らないまま (霧になってしまっても)
[00:29.139] 漂う雲 (別にいいのに)
[00:32.851] 昨日までは (構わないのに)
[00:36.243] 漂う雲
[00:40.979] 私はなぜ 真っ直ぐに落ちる
[00:46.611] だれかの手のひらを探すため
[00:49.875] 空をできる限り 目に収めながら
[00:54.227] 私は雨 (雨 雨 雨)
[00:56.46] 弾かれて判る
[00:57.95] だれか (だれ だれ) のようには
[01:00.173] なれない雨 (雨 雨 雨)
[01:03.319] 地球を困らせる
[01:05.495] ほどの痛みを 知らないから
[01:08.247] 私は雨
[01:10.05] セカイを暈す 夜明け (夜明 夜明)
[01:13.314] に導かれている雨 (雨 雨 雨)
[01:16.386] 流れ着いた海の
[01:18.754] 隠し味を知るまで
[01:33.73] 星を隠した雷鳴と
[01:37.058] 視界からはみ出した積乱雲
[01:39.618] できるだけ できるだけ
[01:41.986] できるだけ 離れていたかった
[01:46.274] 傘をさす 余裕はないし
[01:49.154] このままでも いいと思えるよ
[01:52.994] わからないから 染み込んでるの
[01:56.386] 夜の強い雨で 目を覚ます
[01:59.458] 私は雨 地球をなぞる
[02:04.258] 一粒では 気付くこと のない雨
[02:08.508] 夜空に飾り付ける 星を見つけて
[02:13.00] 空に浮かんだり 地に足をつけたり
[02:16.392] 消えかかったり 溢れかえったりする
[02:20.04] 描けていたら 何も起きなかった
[02:23.24] セカイ的気候変動
[02:29.15] 私は雨 (雨 雨 雨)
[02:31.624] 滴って判る
[02:33.438] だれか (だれ だれ) のようには
[02:36.07] なれない雨 (雨 雨 雨)
[02:38.054] 地球を困らせる
[02:40.23] ほどの思いを 知りたいから
[02:43.11] 私は雨
[02:45.222] セカイを暈す 夜明け (夜明 夜明)
[02:47.782] に 導かれている雨 (雨 雨 雨)
[02:51.11] 流れ着いた海の
[02:53.606] 隠し味になるまで
[03:02.80] 私は雨
[03:23.05] 辿り着くまでに
[03:25.725] おさらいを忘れないで
[03:28.733] 凪の海で向かい合わせ
[03:31.805] 違う景色 同じ模様の
[03:35.466] 答え合わせ
        `
    },
    {
        chapter: 3,
        title: 'ハローセカイ', artist: 'DECO*27',
        context: 'WASABISOCUTE Theme', desc: '',
        date: 'JUN 2025', ytId: 'lBTwitkjMd4', start: 0,
        ig: 'https://www.instagram.com/reel/DZAkwnehpYn/',
        lyrics: `
            [00:01.602] きっと届くはず　きっと見えるはず
            [00:10.818] そんな会ってみたい未来を　僕はひとりきりのセカイで
            [00:16.568] ずっとそう歌うたっていた
            [00:29.213] 今聞こえたよ　ほら少しだけ
            [00:35.218] 君を感じたよ　メロディーがリンクする
            [00:42.203] 今繋がるよ　今重なるよ
            [00:48.034] 伝えたかったこと　山ほどあるんだけどどうしよう
            [00:58.956] 見たこともない顔で　君は君をダメと言うけど
            [01:04.174] 未来にいる理想の君を　今の君に押し付け過ぎないで
            [01:11.771] 見たこともない景色　見せ合ういつかが来るまで
            [01:16.923] つらいこと　泣きたくなること　たまには預け合おう
            [01:23.104] ハロー、セカイ　僕の声はちゃんと届いてるかい
            [01:29.609] 思ったよりも大丈夫　君はひとりなんかじゃない
            [01:35.717] ハロー、セカイ　君の声もちゃんと届いてるよ
            [01:42.285] 思ったよりも最高だ　僕もひとりなんかじゃない
            [01:48.168] 行くよジャンプ　跳ねるダンス
            [01:51.398] いらない不安なんて踏んじゃってこう
            [01:54.875] ああでもこうでもないも　そんなのどうでもいいよ
            [01:58.072] やりたいようにやろう　ハローハロー
            [02:00.86] もう一回ジャンプ　回るダンス
            [02:03.989] 行きたい未来　きっともうすぐだよ
            [02:07.596] ああでもこうでもないも　そんなのどうでもいいよ
            [02:10.727] やりたいようにやろう
            [02:13.912] 飛び込んでいこう　僕らのセカイが
            [02:16.923] 正解か不正解かわからなくても
            [02:19.803] 僕にある想いも　君にある願いも
            [02:22.656] きっと消えないんだよ　ずっとセカイは終わらないよ
            [02:26.714] 今繋がるよ　今重なるよ
            [02:32.955] ほら聞こえるよ　ほら伝わるよ僕ら
            `
    },
    {
        chapter: 3,
        title: 'D/N/A', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'JUN 2025', ytId: 'qYCs_I8VQdM', start: 0,
        ig: 'https://www.instagram.com/reel/DKgaRGWx-Ct',
        lyrics: `
            [00:13.91] 小石を高く高く 積み上げては
            [00:17.32] 吹きさらす心は 夕暮れ
            [00:20.339] いつか見つかると まだ見つかると
            [00:23.67] 白く 甘く 淡く
            [00:26.71] 影踏み遊びばかりしてきました
            [00:30.14] 贖い足がかり 探して
            [00:33.119] いつか見つけると まだ見つけると
            [00:36.429] 永く 脆く 遠く
            [00:40.149] 鏡越し貴方と
            [00:43.25] 瞳の奥の私と
            [00:47.71] 誰かの 中の 貴方は
            [00:50.92] 欠片のままに 夢を見る
            [00:54.13] だって D/N/Aじゃ 騙れない
            [00:57.24] この心は私の中 紅く
            [01:03.71] 紅く
            [01:06.29] 眠れない迷子の無いものねだりじゃない
            [01:10.109] この細胞は愛憎 刻まれてる
            [01:13.31] まだ見つけるの まだ見つけるの
            [01:16.51] 言えなかった音は？
            [01:19.709] 誰かの 中の 貴方は
            [01:22.84] 繋がれたまま 夢を見る
            [01:26.129] だって D/N/Aじゃ 語れない
            [01:29.319] この痛みも私の中 紅く
            [01:35.68] 紅く
            [01:39.14] 鏡の 形と
            [01:42.219] 逆さまな D/N/A
            [01:45.51] 私の 証と
            [01:48.719] 暖かな D/N/A
            [01:51.939] 鏡の 形と
            [01:55.069] 逆さまな D/N/A
            [01:58.29] 私の 証と
            [02:01.53] 暖かな D/N/A
`
    },
    {
        chapter: 3,
        title: 'バグ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'JUN 2025', ytId: '2Ii7UBMxWVw', start: 0,
        ig: '',
        lyrics: `
        [00:14.25] 迷子 迷子 真っ只中 さあ
[00:16.80] パ パ パ ラ パーラノーイ「ア」
[00:19.399] ギコ ギコ MY HEART(マイココロ)剪定
[00:22.00] パ パ パ ラ パーラノーイ「ア」
[00:24.60] 退路 退路 断った絡まった
[00:27.10] パ パ パ ラ パーラノーイ「ア」
[00:29.699] SAD SAD 突っ伏して「 」(カラ)
[00:32.299] ぱ ぱ ぱ La ぱーらのーい「ド」
[00:34.50] さあ バ バ バグさ バグバグ
[00:37.46] タ タ タグ 才能のタグ
[00:39.70] もう ハ ハ 剥グ 感情は剥グ
[00:42.299] 発症「クルシイ」は 嫌 嫌 嫌 嫌 嫌 嫌
[00:46.20] まあ！絶叫な感情落下パッパラノーイ「ア」
[00:48.939] 溺れ声上げては ぐるぐる
[00:51.299] まあ！絶体絶命 落下 やったラ滅多ラ
[00:54.039] 沈めユメユメ 嫌 嫌 嫌
[00:56.399] さあ バ バ バグさ バグバグ
[00:59.20] 的(まと)ハズレズレ 慈愛嫌嫌
[01:01.50] さあ バ バ バグさ バグバグ
[01:04.439] 解答(こたえ) 絶え絶え 嫌 嫌 嫌 嫌 嫌 嫌
[01:19.40] 狂狂(くるくる) ぱっかーん警報 待って無理
[01:21.90] ぐるぐる せーので回れ 狂(くる) 狂(くる) 狂(くる) 狂(くる)
[01:24.799] ｱｱｱｱ ぱっかーん警報 やっぱ無理
[01:27.099] ぐるぐる あんよに鎖 狂(くる) 狂(くる) 狂(くる) 狂(くる)
[01:30.299] エンドレス病み……？
[01:32.959] 抱っこ 抱っこ いらない子だ
[01:35.50] パ パ パラ パーラノーイ「ア」
[01:38.099] いい子 いい子 「頑張れ」の氾濫
[01:40.70] アドミニストレイター 嗚呼
[01:43.299] バ バ バグさ バグバグ
[01:45.84] ラ ラ ラグ ランタイムラグ
[01:48.40] ロ ロ ログ 反抗のログ
[01:50.959] バ バ バグ ぱぱぱLaぱ ぱ
[01:53.64] パーラノーイ「ア」
[01:54.64] ぱ パーラノーイ「ア」
[01:56.00] ぱ パーラノーイ「ア」 嫌 嫌
[01:58.299] さあ 絶叫な感情落下パッパラノーイ「ア」
[02:01.20] 左 右 行方も ぐるぐる
[02:03.40] 悲惨 限界 脳 狂っちゃって やったラ滅多ラ
[02:06.299] ヤミ迷え酔え イナイイナイばあ
[02:08.90] イナイイナイ✕点
[02:10.34] 絶叫な感情落下パッパラノーイ「ア」
[02:12.80] 溺れ声上げては ぐるぐる
[02:15.06] まあ！絶体絶命 落下 やったラ滅多ラ
[02:17.90] 凍え枯れ果て 嫌 嫌 嫌
[02:20.30] さあ バ バ バグさ バグバグ
[02:23.099] 爛れ荒れ荒れ 悲哀 嫌 嫌
[02:25.46] さあ バ バ バグさ バグバグ
[02:28.259] 暗闇(クロ)マミレ理性 嫌 嫌 嫌
[02:30.80] 今 今 今 嫌 嫌 嫌 嫌 嫌 嫌 嫌 嫌 嫌

`
    },
    {
        chapter: 3,
        title: 'FOCUS', artist: 'KIRA',
        context: '', desc: '',
        date: 'JUN 2025', ytId: 'aF4N-qSHbT4', start: 0,
        lyrics: `[00:09.62]Can I get it get it
[00:10.93]Get all your attention
[00:12.03]I bet you don’t know me yet
[00:13.77]君の奥底まで
[00:15.56]穿つ目線で
[00:17.10]溢れる様 IQ ammo
[00:19.10]獲る天下
[00:20.30]A catalyst, I know. When I say go, put your hands up

[00:23.04]混沌の最中に
[00:24.53]降臨した女神
[00:25.96]I freeze it up, got it ice cold on my body
[00:29.06]You wanna know but you don’t
[00:30.25]震撼させる異脳
[00:31.95]I’mma go, I’mma shine, shine, shine, shine

[00:34.63]Can’t stop 煌めく my fantasy
[00:38.13]Now you see
[00:39.66]星空を呑む
[00:41.01]染まるんだ私色に

[00:43.94]Hidden deep within my universe
[00:47.13]Come find me now
[00:49.01]Hear the voice that’s calling out
[00:51.93]まだ見ぬ世界の真髄を見せてあげるから
[00:55.79]Baby, for now

[00:56.82]Calm down, lemme focus
[00:59.16]Under my spell like hypnosis
[01:02.10]So don’t get too close when I’m
[01:03.61](Come-a, come-a, comin through)
[01:05.35]You wanna roll with me?
[01:06.63](Come-a, come-a, comin through)
[01:08.34]We take ‘em down

[01:09.50]Yes, I tell you what to do
[01:11.16]I got nothing to prove
[01:12.60]Cold when I move, when I move
[01:14.17]When I focus
[01:15.39]I tell you what to do
[01:16.77]脳髄まで bulletproof
[01:18.27]Cold when I do what I do
[01:19.70]When I focus

[01:21.07]On me
[01:22.15]Back at my best, I finesse
[01:23.50]私の脳裏に潜む
[01:25.24]怪物は no secret
[01:26.81]冷静に cool, my attitude
[01:29.07]Uh-uh, target in my sight
[01:30.94]Locked in, ready to shoot, like

[01:32.99]Mayday, this is an emergency
[01:35.00]Working under pressure
[01:36.03]Baby, I can do this in my sleep
[01:37.75]世の理だって
[01:39.16]書き換えて
[01:40.15]しまう様な頭脳
[01:41.10]When I go, when I go
[01:42.59]I’mma shine, shine, shine, shine

[01:44.49]Won’t stop 煌めく my fantasy
[01:47.99]Now you see
[01:49.44]銀河を覆う
[01:50.79]音色をそう、轟かす様に

[01:53.77]Hidden deep within my universe
[01:56.96]Come find me now
[01:58.83]Clear my mind of all these doubts
[02:01.81]まだ見ぬ世界の真髄
[02:03.93]この目で見たいから
[02:05.59]Baby, for now

[02:06.57]Calm down, lemme focus
[02:09.15]Under my spell like hypnosis
[02:11.88]So don’t get too close when I’m
[02:13.50](Come-a, come-a, comin through)
[02:15.19]You wanna roll with me?
[02:16.72](Come-a, come-a, comin through)
[02:18.11]We take ‘em down

[02:19.26]Yes, I tell you what to do
[02:20.57]I got nothing to prove
[02:22.63]Cold when I move, when I move
[02:24.01]When I focus
[02:25.27]I tell you what to do
[02:26.67]脳髄まで bulletproof
[02:28.09]Cold when I do what I do
[02:30.15]When I focus

[02:30.96]O-ma, O-ma, O-ma, O-ma, Ohh
[02:33.70]垂れろ頭 don’t break my focus
[02:36.88]O-ma, O-ma, O-ma, O-ma, Ohh
[02:39.46]Wanna try and play catch up?
[02:40.82]Follow my mind

[02:41.86]I’mma get you talkin bout it loud
[02:43.66]Can’t get rid of me now
[02:44.96]唯一無二 so I’m crowned
[02:46.52]Put my feet on the ground
[02:47.87]まあ掻っ攫ってくわエース
[02:49.83]Piece of cake, it’s no stress
[02:50.81]銀河中を魅了してく
[02:52.80]What’s next?
[02:53.48]Take a guess

[02:53.83]Yes, I tell you what to do
[02:55.83]I got nothing to prove
[02:57.53]Cold when I move, when I move
[02:59.05]When I focus
[03:00.10]I tell you what to do
[03:01.44]脳髄まで bulletproof
[03:02.91]Cold when I do what I do
[03:04.77]When I focus

[03:05.83]O-ma, O-ma, O-ma, O-ma, Ohh
[03:08.64]垂れろ頭 don’t break my focus
[03:11.72]O-ma, O-ma, O-ma, O-ma, Ohh
[03:14.45]Wanna try and play catch up?
[03:15.89]Follow my mind
[03:16.83](Focus)`,
    },
    {
        chapter: 3,
        title: 'Fall in Me', artist: 'memex',
        context: '', desc: '',
        date: 'JUL 2025', ytId: 'yxi0Y8UAhAM', start: 0,
        lyrics: `[00:03.41]眠りたい 忘れたい 考えたくない
[00:05.47]現実はいらない
[00:07.01]想像すらできない 期待無い
[00:08.95]もう朝はいらないよ

[00:10.54]笑えない 踊れない でも愛されたい
[00:12.47]夜だけを生きたい
[00:14.18]王子様の寵愛を頂戴
[00:15.93]でも目を覚ましたくない！

[00:19.42]相対して大概
[00:20.72]大して会いたくない再会
[00:22.58]からの後悔？そうかい？曖昧？

[00:27.05]絡まっていたい
[00:28.35]言葉になんてしたら続かない
[00:30.90]Fall in you
[00:31.80]Sweet sweet dream
[00:34.32]浸らせて ひたひたと ひらひらと
[00:38.43]Gimme your heart
[00:38.89]Sweet sweet sleep
[00:41.65]今までも これからも 眠り姫
[00:45.52]Kiss me

[00:53.19]誘いたい 誘えない 嫌われたくない
[00:55.56]深層を知りたい
[00:56.86]交渉などいらない 意味がない
[00:58.92]踊らされていたいよ

[01:00.45]奪いたい 守りたい 独り占めしたい
[01:02.58]誰にも渡さない
[01:03.92]お姫様の相愛に就きたい
[01:05.76]でも目を覚ましはしない

[01:09.23]再会して望外
[01:10.45]天にも昇りそうな落雷
[01:11.97]それは正解？最愛？絶対？

[01:16.62]切り取っていたい
[01:17.92]この瞬間を その微笑みを

[01:20.50]Fall in you

[01:27.60]わかっていた
[01:28.79]はじめからもう
[01:29.78]この先に何も残らないと

[01:31.58]私に未来、期待はもう痛い
[01:33.46]夢の中に溺れていく

[01:35.72]Sweet sweet dream...

[01:45.36]ねぇ こころのすべて 空になるまで
[01:48.81]Fall in me
[01:49.92]Sweet sweet dream
[01:52.00]連れてって どこまでも 甘い夢
[01:56.45]Gimme your heart
[01:57.05]Sweet sweet sleep
[01:59.48]今までも これからも 眠り姫
[02:03.24]さあ 堕ちるような キスをして
[02:06.94]Love Me`,
    },
    {
        chapter: 3,
        title: '放送室', artist: '星街すいせい',
        context: '', desc: '',
        date: 'JUL 2025', ytId: 'BP59Bm6T3_I', start: 0,
        lyrics: `
            [00:03.68]考えてたことが言葉に出ない
            [00:08.25]先走った後悔と汗が手に残る
            [00:13.13]ただまっすぐに見ていたいだけなのに
            [00:17.92]今日も見切りをつけた
            [00:20.17]部屋を真っ暗にしてしまった
            [00:23.08]赤や青 点滅している
            [00:28.12]この部屋が宇宙の大船団
            [00:33.02]私から出た SOS だけ届いてないよな
            [00:42.05]涙はずっとしまってる
            [00:44.60]どんな結末があるかを見たくて
            [00:48.63]完成するまで悲しみを拒んでいる
            [00:52.89]不安を感じて痛むのが
            [00:55.43]身体のどこか知らないけど
            [00:57.87]こんな場所でまで気張り続けていく
            [01:01.82]理由を見つけたんだ
            [01:06.14]
            [01:13.44]省みない
            [01:15.41]呼吸も挙動も
            [01:17.95]不安定な形も完璧に見える時も
            [01:22.24]今更後ろは見ない
            [01:24.73]振り向くのは怖い
            [01:28.36]この場所だけは私のことを知っているんだ
            [01:32.85]手を引いて向かう場所を示すのだ
            [01:37.69]そう思えば強く輝けるから
            [01:42.68]届いてほしいのは SOS じゃなくて
            [01:46.93]優しい言葉
            [01:51.90]涙をずっとしまっても
            [01:54.74]笑顔のままでいる姿で駆け抜け
            [01:57.29]君の元まで最短で辿り着くよ
            [02:02.07]孤独を感じて痛むのが
            [02:04.17]身体のどこか知らないけど
            [02:06.65]ほんの少しでも君に近づきたい
            [02:10.67]何かが変わればいい
            [02:16.47]
            [02:22.31]私から出た優しい言葉だけ君に届いてほしい
            [02:32.29]小さな宇宙に生まれただけ
            [02:36.77]遠い場所から君を見つけただけ
            [02:43.86]涙をずっとしまってる
            [02:46.50]どんな結末になるかを知りたくて
            [02:50.56]完成するまでさよならは拒んでいる
            [02:53.90]不安を感じて痛むのが
            [02:56.39]身体のどこか知らないまま
            [02:58.86]こんな場所でまだ気張り続けていく
            [03:02.88]理由は見つけたんだ`
    },
    {
        chapter: 3,
        title: 'セカイ', artist: 'DECO*27',
        context: '', desc: '',
        date: 'JUL 2025', ytId: '9vyIPWBeRes', start: 0,
        lyrics: `[00:12.52] ずっと探してたんだよ
[00:15.46] 特別だって言える場所
[00:19.88] なんで僕を選んだの
[00:22.68] 笑うキミが手を引いたんだ
[00:27.06] だってキミはすごいから
[00:30.04] 負けらんないなって思うんだよ
[00:33.76] どんな時も僕の中に
[00:37.06] キミの声が鳴り響いていた
[00:40.42] 怖いんだ
[00:41.88] なにもない僕だけどできるかな
[00:44.66] 自信のなさとしょうもなさでいい勝負さ
[00:48.18] けどキミは「それがどうしたの？」って顔をして
[00:51.64] 歌を歌うじゃない
[00:53.64] それはズルいじゃない？
[00:55.64] 飛び込んでいこう　僕らのセカイへ
[00:59.12] 正解の想いに出会えるかな
[01:02.74] 歌っていたい　踊っていたい
[01:06.52] 痛いくらい笑えるように
[01:10.20] 名前もない　僕らのセカイを
[01:13.70] 迷っていけるよ　キミとだから
[01:17.34] 変わっていこう　願うように
[01:20.84] 今僕ら　期待の未体験を
[01:25.12] キミの未来を僕が歌うよ　描いてもっと Yeah
[01:28.60] 泣いてもいいじゃん　それも答えだ
[01:30.64] どうしたっていいよ
[01:32.30] 想いは全部零さぬように抱き締めながら
[01:35.94] キミと見たいセカイへ
[01:44.54] ずっと探してたんだよ
[01:47.60] 特別だって言える場所
[01:51.64] どんな僕になるんだろう
[01:54.78] 躍るココロ変えないように
[01:59.06] ちょっとだけのその先で
[02:02.52] また笑えるよ
[02:06.42] もらったバトンは勇気に
[02:09.06] ありがとうは歌声に
[02:12.38] 気付いたんだ
[02:13.90] 僕にしか出来ないこともあること
[02:16.64] 誰かのとこへ　ちゃんと歌を届けたいのさ
[02:20.32] ほら怖くて震える手でビート刻めば
[02:23.90] 夢も近いじゃない？
[02:25.76] 僕らひとりじゃない
[02:28.06] 飛び込んでいこう　僕らのセカイへ
[02:31.52] 正解の想いに出会えるかな
[02:34.84] 歌っていたい　踊っていたい
[02:38.28] 痛いくらい笑えるように
[02:42.44] 名前もない　僕らのセカイを
[02:45.66] 迷っていけるよ　キミとだから
[02:49.40] 変わっていこう　願うように
[02:52.90] 今僕ら　期待の未体験を
[03:10.76] 飛び込んでいこう　僕らのセカイへ
[03:14.50] 正解の想いに出会えるかな
[03:18.54] 歌っていたい　踊っていたい
[03:21.82] 痛いくらい笑えるように
[03:25.90] 名前もない　僕らのセカイを
[03:28.98] 迷っていけるよ　キミとだから
[03:32.70] 変わっていこう　願うように
[03:36.16] 今僕ら　期待の未体験を
[03:40.34] キミの未来を僕が歌うよ　描いてもっと Yeah
[03:43.94] 泣いてもいいじゃん　それも答えだ
[03:46.00] どうしたっていいよ
[03:47.64] 想いは全部零さぬように抱き締めながら
[03:51.20] キミと見たいセカイへ
[03:58.44] キミと見たいセカイへ

        `
    },
    {
        chapter: 3,
        title: '虚無さん', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'AUG 2025', ytId: 'miXmJVBprUs', start: 0,
        lyrics: `[00:18.449] 虚無っぽいなんかもうだめみたい
[00:22.449] もうバラバラです
[00:24.789] 空（からから）です
[00:26.859] くだんない本当もう馬鹿みたい
[00:30.82] もう虜みたい静かな世界
[00:34.939] 君の期待応えたいし
[00:37.06] 心次第に枯れちゃうし
[00:39.149] きりない焦燥と
[00:41.479] 期待で痛くなる未来
[00:43.329] 孤独に囚われちゃうし
[00:45.289] トラウマが脳支配しちゃうし
[00:47.429] 最低な日々だ
[00:51.479] 痛い
[00:52.20] バイオレンス バイオレンス
[00:53.77] 何も分かんない 分かんないよ
[00:55.859] 難解愛をロスト 愛をロスト
[00:57.939] 愛して 愛して
[01:00.52] アイロニー アイロニー
[01:02.079] クラクラする毎日だ
[01:04.18] 脳内エンドレス エンドレス
[01:06.29] 討論やめてくれよもう
[01:22.95] 何も期待しないで居たいし
[01:25.079] 見つからないって泣いた毎日
[01:27.129] 苦しくて暖かい
[01:29.50] あの日が夢のようで
[01:31.12] スポンジみたいなショートケーキ
[01:33.299] 悪気ない愛は痛いが平気なフリ
[01:36.43] もう疲れた
[01:39.659] ただ ただ ただ
[01:43.04] 愛してほしい 愛してほしい
[01:48.01] カラカラ乾いた 心満たして
[01:54.54] 消えたくないから
[01:57.78] くだらないな
[01:58.98] バイオレンス バイオレンス
[02:00.54] 何も分かんない 分かんないよ
[02:02.64] 難解愛をロスト 愛をロスト
[02:04.709] 愛して 愛して
[02:07.31] アイロニー アイロニー
[02:08.87] クラクラする毎日だ
[02:10.979] あーネガっては願ってるから
[02:13.259] それぞれの愛が暖かな場所がある
[02:19.189] 痛い
        `
    },
    {
        chapter: 3,
        title: 'Leave All Behind', artist: 'rider',
        context: 'Game - Phigros', desc: '',
        date: 'AUG 2025', ytId: 'FifusnsTrv4', start: 0,
        lyrics: `[00:02.19]I can feel the rain upon my skin
[00:05.18]
[00:07.10]It covers everything
[00:12.80]
[00:13.46]But it’s too late now
[00:16.66]I remember you and me
[00:21.21]
[00:59.77]I can feel the rain upon my skin
[01:03.03]
[01:04.63]It covers everything
[01:10.20]
[01:11.22]But it’s too late now
[01:14.29]I remember every scene
[01:18.77]
[01:21.27]And how careless we could be
[01:24.73]
[01:50.13]But it’s too late now
[01:52.70]I remember you and me
[01:56.96]
[02:35.83]I can feel the rain upon my skin
[02:38.84]
[02:40.70]It covers everything
[02:45.75]
[02:47.16]But it’s too late now
[02:50.43]I remember every scene
[02:54.65]
[02:56.99]And how careless we could be
[03:00.73]
[03:26.23]But it’s too late now
[03:28.73]I remember you and me
[03:33.08]
[04:04.38]But it’s too late now
[04:07.14]I remember you and me
[04:11.49]
`,
    },
    {
        chapter: 3,
        title: 'Journey with You', artist: 'Iris',
        context: 'Game - Rotaeno', desc: '',
        date: 'AUG 2025', ytId: 'xvK4tfUKgig', start: 10,
        lyrics: `[00:11.33] Oramus iter per astra
[00:14.53] Lux ta nos dirigat
[00:17.794] Ubi Promissa Terra...
[00:49.05] Decase, pouring, endless rain,
[00:52.058] Fallen, broken pearls in chains,
[00:54.042] Every day's a state of grace,
[00:55.662] Every struggle we embrace,
[00:57.818] Hope we'll find the way someday
[01:01.598] Crossing through the cosmic space,
[01:04.862] Witness clashing of all race
[01:07.038] All your steps are in a maze,
[01:08.638] All I do is follow through and pray,
[01:10.622] Hope I'm chasing all your trace
[01:13.822] Voyage to deserts and forests,
[01:20.158] Meandering rivers and torrents,
[01:26.44] To find, to find the answer to this quest,
[01:32.584] I'll journey with you till the end
[01:39.368] Oramus iter per astra
[01:42.568] Lux ta nos dirigat
[01:45.704] Ubi Promissa Terra,
[01:48.904] Ibi erit spes
[01:52.213] Oramus iter per astra
[01:55.329] Lux ta nos dirigat
[01:58.593] Ubi Promissa Terra,
[02:01.665] Ibi erit spes
[02:04.929] Oramus iter per astra
[02:08.129] Lux ta nos dirigat
[02:10.881] I'll journey with you till the end (Ibi erit spes)
`,
    },
    {
        chapter: 3,
        title: 'Intergalactic Bound', artist: 'CircusP & Yunosuke',
        context: 'FYSA School Anniversary', desc: '',
        date: 'AUG 2025', ytId: 'jsQXgDZIIrY', start: 0,
        ig: 'https://www.instagram.com/reel/DOJKuDikbD2/',
        lyrics: `
            [00:13.509] C'mon, I feel like there's something about this song
            [00:17.728] It's like we knew how it'd go all along
            [00:21.35] So put down your worries and raise your cups
            [00:24.786] There's nowhere to go but up
            [00:27.167] Let's dance!
            [00:27.986] With a rhythm from New York to Japan
            [00:31.378] Know you'll never be alone
            [00:33.672] At first glance we're miles away
            [00:36.552] But our hearts are connected
            [00:38.28] Through these soundwaves
            [00:40.556] Nothing but up, up, up (yeah)
            [00:42.824] Cut through the clouds
            [00:43.999] Nothing but up, up, up (yeah)
            [00:46.013] We're never coming down
            [00:48.008] Jump, jump without a doubt
            [00:50.836] Nothing but up, up, up (yeah)
            [00:53.128] Intergalactic bound
            [00:55.048] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [00:59.912] Intergalactic bound
            [01:01.704] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [01:06.696] Intergalactic bound
            [01:10.513] If you're an oldie
            [01:11.978] Or fresh on the scene (uh huh)
            [01:13.905] Come put your lights up
            [01:15.347] We'll make a wave of green (woo!)
            [01:17.283] Bridge the beginning
            [01:18.622] To us all here and now (uh huh)
            [01:21.075] Just take a deep breath
            [01:22.208] And let me hear you shout!
            [01:25.848] Let's groove with the static in the air
            [01:28.676] A breakthrough that can bring us anywhere
            [01:31.976] It's your move so take the lead
            [01:34.664] From the crowd to the stage
            [01:36.372] What sights can we see?
            [01:38.663] Nothing but up, up, up (yeah)
            [01:41.01] Cut through the clouds
            [01:42.36] Nothing but up, up, up (yeah)
            [01:44.539] We're never coming down
            [01:46.331] Jump, jump without a doubt
            [01:48.981] Nothing but up, up, up (yeah)
            [01:51.378] Intergalactic bound
            [02:21.087] A thousand little voices sing
            [02:24.068] It's a fiesta from now on
            [02:27.611] With our playthings always by our side
            [02:31.045] To help us make this song
            [02:33.646] Through the dark of the night
            [02:35.764] I know we will be alright
            [02:37.422] There's a universe of positivity
            [02:39.375] Beyond the sky
            [02:40.855] Ten thousand of the stars
            [02:42.647] They will keep on burning bright
            [02:44.311] With this light held between you and I
            [02:47.501] Nothing but up, up, up (yeah)
            [02:49.611] Cut through the clouds
            [02:50.918] Nothing but up, up, up (yeah)
            [02:53.048] We're never coming down
            [02:54.995] Jump, jump without a doubt
            [02:57.592] Nothing but up, up, up (yeah)
            [03:00.00] Intergalactic bound
            [03:01.988] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [03:06.501] Intergalactic bound
            [03:08.805] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [03:13.512] Intergalactic bound
`
    },
    {
        chapter: 3,
        title: 'Nod-Krai', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Nod-Krai Theme',
        date: 'AUG 2025', ytId: 'RuXa_yxZMGI', start: 0,
        lyrics: `
            [00:01.000]A luna, cara cantica
            [00:06.950]Ne me in atra dedas
            [00:13.240]Aves, ex urbe aurea
            [00:19.580]Ferte indicia mea
            [00:27.570]Aves, ferte cantam cara
            [00:33.640]Ut lugeam et fata mala
            [00:40.160]Num in immundorum terra
            [00:46.370]Clavus ille adhuc claudit pia
            [00:54.000]
            [00:58.050]Quando tandem carebimus tanta miseria?
            [01:02.830]Quom patria vastata nunc iacet sub urticis?
            [01:06.950]Ubi es, benigna domina
            [01:09.300]Cur non mittis lucem almam tuam?
            [01:11.580]Ecce, terra infelix atra
            [01:13.850]Veritas contra falsa nequit
            [01:16.270]Luna domina, quo adduces?
            [01:18.560]Pergemus quocumque adduces
            [01:20.890]Potius nox tegat lumina
            [01:23.170]Quam in falsa luce esse
            [01:26.000]
            [02:21.670]Carmen triste nos non canimus
            [02:23.870]Etsi flentes pro nostrorum malo
            [02:26.090]Sed non lacrima tollit dura
            [02:28.440]Patria somno non potest reddi
            [02:30.790]Illa vincta fuit pressa
            [02:33.110]Tecta aurea voravit flamma
            [02:35.390]Sed renascetur rursum
            [02:37.790]Redibit nos larem ducet 
            [02:41.000]
            [02:52.550](Cur) aerumnosae?
            [02:56.820](Cui) aerumnosae?
            [03:01.060]Cur lacrimosae?
            [03:04.490]Cui lacrimosae?
            [03:07.940]Luna, claras terras lustra (Assurge, o luna, etsi tantum manent dura)
            [03:12.320]Sicut aves per umbras vola (Corda nostra premunt obscura, pudorque manet)
            [03:16.930]Et unda vasta foeda purga (Sed luna ascendet, nec corda peribunt una)
            [03:21.410]Pro turba fida, spem crastinam serva (Audies fremitus undae, postea venient gaudia)
            [03:28.690]A luna nova, surgat luna pura casta
            [03:37.820]Fugio aerumnam, tecum nulla fleta
            [03:50.000]
            [04:06.150]Sub luna rursus fiet clara terra
            [04:11.000]`,
    },
    {
        chapter: 3,
        title: 'アクセラレイト', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'SEP 2025', ytId: 'dWiv1l-0eIU', start: 0,
        lyrics: `[00:02.31] 栄冠の先まで 全開で羽ばたけ
[00:07.599] いざ行こう！
[00:08.839] 歌声響かせれば No doubt
[00:12.759] 扉は放たれた
[00:28.489] 焦燥感だって時に乗りこなして
[00:31.07] 楽しむのも悪くはないようだ
[00:33.899] 逆らわないで 足を止めないで
[00:36.719] 僅かなチャンスを 狙え！
[00:40.429] 鳴り響くサイレン
[00:43.24] 掻き消せる雷鳴を
[00:45.509] この手で呼び起こせるまでは
[00:48.359] 諦めることはしないさ
[00:50.67] 目指した未来への
[00:54.57] 道標はもう
[00:56.829] 掴んでいるんだよ
[00:58.78] 見逃さないで！
[01:01.25] 晴天
[01:01.95] だけ描いた 祈っていたんだ
[01:04.59] 加速を続け 全て乗り越えてきた
[01:08.12] 目の覚めるようなこのセカイを
[01:10.939] さぁ もっと もっと もっと もっと 拓け！
[01:13.219] 加減なんて 必要ないさ
[01:15.909] 夢もリアルも つまらなくなっちゃうから！
[01:19.439] 歌声響かせれば No doubt
[01:22.959] 扉は放たれた
[01:36.349] 掻き鳴らしてEnsemble ワンパンで
[01:39.209] 瞬きと共に過ぎたDays
[01:42.01] ここは眠らぬMaze さぁ中心へ
[01:44.819] 光と闇の間 Survival
[01:47.319] このままで終わるわけもないね
[01:50.15] 騒がしいほど速く動けるんだ
[01:52.78] 今しかないと覚悟決めたなら
[01:56.14] 躊躇う理由などないさ
[01:58.459] 届けたい想いには 夢を託すよ
[02:04.629] 溢れ出すほど
[02:06.56] 注いでも 注ぎ足りない
[02:10.319] 晴天
[02:11.15] だけ描いた 僕らがまだ
[02:14.509] 見たことのない青空が
[02:17.319] この先の遥か遠くに あると信じてるから
[02:22.439] 波乱だって 想定内だ
[02:25.08] ほら まだまだ居場所はあるだろう
[02:28.62] 歌声響かせて繋いだ居場所が！
[02:32.939] 晴天
[02:33.74] だけ描いた 祈っていたんだ
[02:36.36] 加速を続け 全て乗り越えてきた
[02:39.909] 目の覚めるようなこのセカイを
[02:42.669] さぁ もっと もっともっともっと 拓け！
[02:44.909] 加減なんて 必要ないさ
[02:47.68] 夢もリアルも つまらなくなっちゃうから！
[02:51.21] 歌声響かせれば No doubt
[02:54.729] 扉は放たれた
`,
    },
    {
        chapter: 3,
        title: 'いますぐ輪廻', artist: 'なきそ',
        context: '', desc: '',
        date: 'SEP 2025', ytId: 'nQFZ4gKdTi4', start: 0,
        lyrics: `[00:04.17]いますぐ輪廻
[00:05.21]今回も結ばれないね
[00:06.83]嘘ついたら針千本誓って
[00:08.71]絶対来世でまた会お？
[00:10.79]いますぐ輪廻
[00:11.79]今回も結ばれないね
[00:13.88]全て捨ててぽい

[00:28.88]さらば生まれ変わる
[00:30.33]あまりに人生が憂い
[00:32.46]君の指輪も白紙になって
[00:35.67]全部消えちゃっていいよ
[00:37.33]どうせ生まれ変わって
[00:38.54]巡って出会って
[00:40.00]宇宙が爆ぜてしまうまで
[00:41.63]何回も大好きになって
[00:44.79]何回も大好きになって
[00:48.21]毎回繰り返す身勝手
[00:49.88]何回も大好きになって
[00:52.04]ごめんね
[00:53.71]メタモルフォーゼ

[00:55.50]いますぐ輪廻
[00:56.54]今回も結ばれないね
[00:58.13]嘘ついたら針千本誓って
[01:00.00]絶対来世でまた会おう
[01:02.08]いますぐ輪廻
[01:03.08]今回も結ばれないね
[01:05.13]全て捨ててぽい

[01:07.79]だから生まれ変われ
[01:09.50]間違った人生は憂い
[01:11.46]君の隣は私になって
[01:14.54]運命よ跪け

[01:29.46]いますぐ輪廻
[01:30.54]今回も結ばれないね

[01:36.00]いますぐ輪廻
[01:37.00]今回は報われないね
[01:39.13]全て捨てて
[01:40.38]いますぐ死んで！
[01:41.50]ファンファーレが鳴って
[01:42.42]大正解おめでとう
[01:44.38]ようやく君は救われる
[01:46.13]来世でまた会おう
[01:47.83]いますぐ輪廻
[01:48.46]ちょっと苦しんで
[01:49.13]ツインレイなんだよ
[01:50.67]早く

[01:52.00]ねえ私と一つになろう
[01:54.63]さあ魂の浄化
[01:57.08]死への調和
[01:58.79]どうか光になって
[02:02.50]全て捨ててぽい`
    },
    {
        chapter: 3,
        title: 'PaⅢ.SENSATION', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'SEP 2025', ytId: 'bof7UD3MJAQ', start: 0,
        lyrics: `
        [00:36.13]寂しくて眠れぬ日々も
[00:40.59]今夜辺り、さよなら出来る気がする
[00:45.19]胸の高鳴り

[00:46.60]見透かされた行方知れずの
[00:51.55]気持ち隠しても既に 遅いわ
[00:56.15]世の常

[00:57.67]今から全てで飛ばしてあげる

[01:02.99]センセーション愛想ぶらずに
[01:05.57]センセーション巻き越こすのよ
[01:08.42]センセーション　どこ服く風も
[01:11.04]理解を通り越して

[01:13.70]センセーション　なんて素敵な
[01:16.43]絶頂館　満ち溢れてく
[01:18.94]私が何者かも
[01:21.14]どうでも良いからほら
[01:23.77]その手で深くへ
[01:26.57]
[01:37.79]ほろ苦いのに慣れたせい
[01:41.56]だけど塗り固めた上部はそろそろ
[01:46.46]剥がれそうなの

[01:47.92]中途半端は嫌いだから
[01:52.41]混じり気のない態度で入り込みましょう

[01:58.51]センセーション　恥じる気はゼロ
[02:01.06]センセーション　侮らないで
[02:03.73]センセーション　至難の技は
[02:06.33]事実ここにあるから

[02:09.13]センセーション　あえて繰り出す
[02:11.78]真骨頂　ゾクゾクするわ
[02:14.36]貴方の予想にない
[02:16.98]限度が狂う先の
[02:19.71]中毒症状
[02:22.57]
[02:43.53]誤魔化さなくても 愛しているわ

[02:48.89]センセーション　軸はぶらさず
[02:51.46]センセーション　微々たる物も
[02:54.17]センセーション　曝け出したい
[02:56.78]リスクも承知の上

[02:59.48]センセーション　ここは歴史の
[03:02.20]最前線　止めてみなさい
[03:04.66]奇跡を見せてあげる
[03:07.55]新時代の幕開け

[03:10.15]センセーション　愛想ぶらずに
[03:12.78]センセーション　巻き起こすのよ
[03:15.33]センセーション　どこ吹く風も
[03:18.13]理解を通り越して

[03:20.82]センセーション　なんて素敵な
[03:23.87]絶頂館　満ち溢れてく
[03:26.65]私が何者かも
[03:29.33]どうでも良いからほら
[03:31.93]その手で深くへ
[03:34.53]余す事も無く
        `,
    },
    {
        chapter: 3,
        title: 'お返事まだカナ💦❓おじさん構文😁❗️', artist: '吉本おじさん',
        context: '', desc: '',
        date: 'SEP 2025', ytId: '8E8aWeY-pAc', start: 0,
    },
    {
        chapter: 3,
        title: '目撃！テト31世', artist: 'はろける · HALLO CEL',
        context: '', desc: '',
        date: 'OCT 2025', ytId: 'uWMr16O_Aso', start: 0,
        lyrics: `
            [00:06.28]君の一番 かわいいところな～んだ? (かかと?)
            [00:12.25]撃ち抜かれたり 飛び出ちゃうものな～んだ? (ハート?)
            [00:18.79]大きくなると 固くなるものな～んだ? (あー)
            [00:25.07]君が一番 ドキドキするの だ～れ～だ!
            [00:30.36]ボクのことでしょ? (違うがー?)
            [00:33.57]Party, party, party, party
            [00:35.35]Today is the 31st
            [00:36.77]Pumpkin, pumpkin, pumpkin, pumpkin
            [00:38.28]Teto is 31
            [00:39.80]Zombie, zombie, zombie, zombie
            [00:41.42]Today is the 31st
            [00:42.60]英語じゃ何言ってっか わかんない!!
            [00:45.55]Party, party, party, party
            [00:47.34]無責任だけど!
            [00:48.71]Pumpkin, pumpkin, pumpkin, pumpkin
            [00:50.36]奪ったげるわ
            [00:51.62]Zombie, zombie, zombie, zombie
            [00:53.23]痛くしないから
            [00:54.65]初めて ボクが奪ったげるわ
            [00:59.53]よいこのみんなへ
            [01:01.05]今からボクは お前らの をいただきに参上します!
            [01:05.34]From テト31世
            [01:08.35]P.S. ちなみに僕は～
            [01:11.35]名画も秘宝も 絶～っ対奪ったりなんてしないんだからね?
            [01:15.28]ほ 本当だよ? あ あと最後に一言
            [01:19.36]ういちゃんにどうしても伝えたいことがあるんだ
            [01:22.81]おかしなこといってもいい?
            [01:24.64]ボクとけっこんしてくれ!
            [01:25.92]おまえと けっこんするワケないんだがー?
            [01:29.08](ぬああ!)
            [01:31.83]Party, party, party, party
            [01:33.70]Today is the 31st
            [01:35.20]Pumpkin, pumpkin, pumpkin, pumpkin
            [01:36.69]Teto is 31
            [01:37.96]Zombie, zombie, zombie, zombie
            [01:39.71]Today is the 31st
            [01:41.13](Candy, candy, cookie, cookie)
            [01:42.71]チョコレート!
            [01:44.22]Party, party, party, party
            [01:45.54]無責任なのは
            [01:46.96]Pumpkin, pumpkin, pumpkin, pumpkin
            [01:48.53]ボクじゃないわ
            [01:50.07]Zombie, zombie, zombie, zombie
            [01:51.50]勘違いしないで
            [01:53.08]キミたち～? ボクが奪ったげるわ
            [01:58.04]
            [02:05.07]捕まえられるものなら
            [02:08.17]られるものなら
            [02:09.65]られるものなら
            [02:11.17]捕まえてみろよ!`
    },
    {
        chapter: 3,
        title: 'DAYBREAK FRONTLINE', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'OCT 2025', ytId: 'LTNhnSYd5CU', start: 0,
        lyrics: `
        [00:42.38]「眠れないんだ」 風もなく茹だりそうな夜に
[00:45.94]君の声が耳元で揺らいだ
[00:48.75]感傷に浸ってばっか何も変わらない笑えない日々を
[00:52.98]抜け出そうぜ君を連れ飛び出した

[00:56.33]風が通り過ぎた
[00:58.30]闇と混ざり合った
[00:59.90]君の笑い声が
[01:01.81]小さく藍の空に響いて

[01:04.05]そんなんで生きていけんのかもう戻れないぜ
[01:06.99]なんて揺らぎそうな想いはアクセルへ
[01:09.02]このまま地平線を追い越してやるんだ

[01:11.03]最前線飛ばせ僕たちは
[01:12.56]星もない夜 ただ東を目指して行く
[01:15.93]13秒先もわかんなくたって

[01:17.98]精一杯僕を生きていく
[01:19.67]何も後悔なんてないさ前を向け
[01:23.00]止まらないさきっと光の待つ方へ
[01:30.99]
[01:39.41]暗闇に落ちた先の見えないような道も
[01:42.45]辿り着いたら闇なんてなかった きっと
[01:46.25]僕は僕を信じ切っちゃいないからいっそ
[01:49.92]あの向こうへ未だ見ぬ夜明けを信じ歩いた

[01:53.47]追い抜いた 走った
[01:54.60]期待した 転んだ迷った わかんなくなってでも
[01:57.04]just feel alive fear or light
[01:58.88]まだ僕らは歩いていく

[02:00.52]こんなんじゃいつまで経っても
[02:01.89]何処にも行けやしないさ
[02:03.68]なんて拭えない想いもアクセルへ
[02:05.42]どうせ止まれるはずないさ

[02:07.27]夜に腐っていたって僕たちは
[02:14.70]間違いなく明日に向かっていく
[02:22.55]
[02:36.07]最前線飛ばせ僕たちは
[02:37.83]白みだした星空胸を鳴らしている
[02:41.25]眠らないよう上がるミュージックと

[02:43.06]ぬるくなった水だけ持っていく
[02:44.83]無駄ものは何もないさ前を向け
[02:48.24]その方がきっと笑えるさって

[02:50.31]最前線飛ばせ僕たちは
[02:51.96]昇る太陽その光を目指していく
[02:55.28]幸せって今はわかんなくたって

[02:57.32]精一杯僕を生きていく
[02:59.03]何も後悔なんてないさ前を向け
[03:02.48]終わらないさ一生僕らは生きて往け
        `,
    },
    {
        chapter: 3,
        title: 'STAGE OF SEKAI', artist: 'Leo/need',
        context: 'Foon Yew Archive', desc: 'UEC 2025',
        date: 'NOV 2025', ytId: 'Sloi-L5FHBY', start: 0,
        lyrics: `
            [00:02.01]君が輝ける場所はここだよ
            [00:06.19]未来の自分を　忘れないで
            [00:09.30]きっと出来るから
            [00:13.22]
            [00:25.91]泣き虫が泣かなくなった帰り道
            [00:30.14]誰から見ても君は強くなってひとりぼっち
            [00:35.90]そんなことばかりあったから腑に落ちて
            [00:40.69]日に日につまらないことが増えて
            [00:43.92]たぶん　慣れちゃった
            [00:44.12]
            [00:45.89]今の自分を歌にして歌えるほど強くないね
            [00:50.84]だけど　それを知っている　声が歌うから
            [00:51.04]
            [00:56.89]君が輝ける場所はここだよ
            [01:00.90]悔しい涙　憶えたてのリズムとメロディー
            [01:06.58]一人の世界で生まれた歌は
            [01:11.75]ここにあるって　見つけてって　ずっと待っている
            [01:17.92]
            [01:21.07]暑くなって寒くなった時間の階段に
            [01:25.63]これからどうなるんだろうってばかりの頭の中
            [01:31.44]笑ってみた鏡の前でまたひとりぼっち
            [01:35.75]大切だって想いが溢れていた　くしゃくしゃの顔
            [01:35.83]
            [01:40.96]広く深く高く自由な音のステージへ
            [01:46.02]飛び上がる前に怖くなっちゃったけど
            [01:50.97]そんな自分を歌うこと君は出来るさ大丈夫
            [01:55.84]でもね　不安になったこと忘れないで　さあ
            [01:56.07]
            [02:01.92]光り輝いたこの世界から
            [02:05.96]誰のために届けるんだリズムとメロディー
            [02:11.95]今はまだ震えた指先をぎゅっと
            [02:16.49]握ってみようよ　怖いと知った　歌は強いはずさ
            [02:22.55]
            [02:31.54]君を信じられる　それは君だけだよ
            [02:36.30]鏡の前で笑ってた　違うね　泣いてた君だから
            [02:41.47]そんなこと分かってた　だめな自分も知っている
            [02:46.45]だから歌いたいこと　胸を締め付けていた言葉を
            [02:46.59]
            [02:54.69]特別な今がここにはあるよ
            [02:59.02]目を凝らしていて　隠さないで　君の場所だよ
            [03:04.87]今ほら大好きなステージの上
            [03:09.18]駆け上がろうよ　みんな一緒　この世界なら
            [03:15.70]
            [03:18.55]君が輝ける場所はここだよ
            [03:23.14]未来の自分はここにいる　君という未来に
            [03:28.67]全力　全力で歌を届けよう
            [03:33.25]世界中にずっと　自分にずっと　歌を届けよう
            [03:41.03]君に届けよう`
    },
    {
        chapter: 3,
        title: '抜錨', artist: 'Leo/need',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'h-MnZzmtW58', start: 0,
        lyrics: `
            [00:15.16]忘れられぬものだけが 美しくはないのでしょう
            [00:18.67]忘れることばかりが 美しくはないでしょう
            [00:22.08]悲しいことばかりが 人生ではないのでしょう
            [00:25.52]さりとて喜びとは 比べ往くでしょう
            [00:28.59]
            [00:28.96]船よ　船よ　荒波の中で
            [00:32.75]流されずいられたでしょう
            [00:35.56]水底に根差す　あなたと穿うが った少女時代
            [00:40.92]さよならする頃 強いられるのは抜錨
            [00:46.09]
            [00:46.24]傷の数を数えて 痛みの数　指を折る
            [00:49.62]一つあまり 小指は 愛しさのぶんね
            [00:53.04]辛いこともありましょう あなたの所為もありましょう
            [00:56.48]それでも赤い糸 結(ゆわ)えているのでしょう
            [01:01.64]
            [01:13.58]底知れぬものだけに 怯えるのではないでしょう
            [01:17.03]届かぬものばかりが 妬ましくはないでしょう
            [01:20.44]優しいことばかりが 優しさではないのでしょう
            [01:23.91]さりとて赤裸々では こそばゆいでしょう
            [01:26.99]
            [01:27.40]羽よ　羽よ　人並みを望み
            [01:31.20]人波に拒まれては
            [01:34.02]皆みなそこを目指すまだ葛藤があった少女時代
            [01:39.35]無辜むこでいた頃を 遠ざけるのは 熱病
            [01:44.39]
            [01:44.57]髪の長さ揃えて爪の先を塗り直す
            [01:47.94]あどけない唇も色めき立つのね
            [01:51.36]叶うこともありましょう叶わぬ人もおりましょう
            [01:54.82]それゆえ慰めずにはいられないのでしょう
            [01:59.21]
            [01:59.55]羽よ　花よ 水面に散って
            [02:05.04]
            [02:32.49]傷の数を数えて 痛みの数　指を折る
            [02:35.99]一つあまり 小指は 愛しさのぶんね
            [02:39.27]悔やむこともありましょう わたしの所為もありましょう
            [02:42.78]いつかは赤い糸 断ち切るのでしょう
            [02:46.01]
            [02:46.24]花びらにささやきを 哀れみから口づけを
            [02:49.67]懐かしんではじめて 過ぎ行くのでしょう
            [02:53.16]惑うこともありましょう 誰かの所為じゃないでしょう
            [02:56.48]難しいものですね 愛するということは`
    },
    {
        chapter: 3,
        title: 'イフ', artist: 'MORE MORE JUMP!',
        context: '',
        date: 'NOV 2025', ytId: 'egAHniCboNQ', start: 0,
        lyrics: `[00:01.90]生まれた意味も　死ねない理由も
[00:06.05]いつかは見つけられるかな
[00:10.76]
[00:25.57]雨が降る予報の日に
[00:27.69]傘を持たずに歩いていく
[00:31.34]不確かに期待してる
[00:34.86]当てもなく晴れを信じてる

[00:37.42]そうだった
[00:38.77]何度だって焦がれた
[00:40.62]「きっと」なんて願った
[00:42.45]走れば月にも近づけるんだって

[00:44.90]信じてる
[00:46.67]だって誰も明日を知らないでしょ

[00:52.51]僕の人生の前にあるifとlie
[00:55.87]どこに至っても　たらればを問う
[00:59.39]できりゃ後悔のないリアルに生きていたい
[01:03.00]なんて吐いて馬鹿みたい

[01:06.65]終わらないストーリーなんて まあ詰まらない
[01:10.75]「永遠」には来ない夜明けが見たい
[01:14.40]君とこんな想いを　高鳴る思いを
[01:18.01]幾つ感じていくだろう

[01:21.49]気休めな言葉とか
[01:25.01]ありふれた希望めいた詩
[01:28.62]なんでも消費される
[01:31.97]ひたすらに生きた証を形にさせてくれよ
[01:38.43]
[01:50.65]美しい嘘も
[01:54.09]汚れた真実も
[01:57.59]これも人の在り方だと、
[02:00.97]全てを許せたら

[02:03.62]どうだろな
[02:04.84]いっそ最初からなら
[02:06.70]もっとずっと今を
[02:08.50]愛だの夢だの満たせられるかもな

[02:11.08]でもその道に君はいないかもしれない

[02:18.69]僕の人生の前にあるifとlie
[02:22.02]どこに至っても　たらればを問う
[02:25.60]できりゃ後悔のないリアルに生きていたい
[02:29.10]なんて吐いて馬鹿みたい

[02:32.66]僕の人生の前にあるifとlie
[02:36.21]どこにだってない　何かになりたい
[02:39.76]道に正解はない　でも間違いもない
[02:43.32]もう一つ生きれたら

[02:47.00]歌じゃ人生も何もきっと救えない
[02:50.43]でも君の為に歌いたい
[02:54.05]何回、何千回だって奏でど褪せない
[02:57.56]夢をもっと歌いたい

[03:01.95]生まれた意味も　死ねない理由も
[03:05.94]未だにわからないけど
[03:08.83]この命に価値がないとしても
[03:13.14]世界は美しいんだから

[03:16.79]生きていこう`
    },
    {
        chapter: 3,
        title: 'ももいろの鍵', artist: 'MORE MORE JUMP!',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'MgbsMSnMCOg', start: 0,
        lyrics: `[00:02.64]泣いてるの？怒ってるの？
[00:05.45]幼い声が問う
[00:07.72]心配いらないよ 笑えてるよ
[00:11.25]返事は宙に浮くだけ
[00:14.74]
[00:19.27]あの日描いたもの　夢の色
[00:22.77]しだいに濃くなる
[00:25.18]１人じゃないことも分かってるよ
[00:28.64]横を見ている
[00:31.20]
[00:31.79]ふと振り返る
[00:34.47]遠くなっていく
[00:36.64]分かれ道はまるでジオラマに
[00:40.32]馴染んだ思い出のよう
[00:42.89]
[00:43.42]いざなったクローバー この場所を選んで
[00:46.29]輝くステージに立っている
[00:49.28]共に行くあなたの手 掴んだその手が
[00:52.07]痛くないようにと願っているから
[00:55.17]
[00:55.31]かじかんで かじかんで
[00:58.18]その度に暖めて
[01:00.64]煌めくライトも落ちる影も
[01:03.64]全て愛していたいから
[01:06.86]
[01:07.10]泣かないで 泣かないで
[01:09.73]そのために側にいる
[01:12.24]震える指にこの手を添えて
[01:15.45]今 鍵を開けるまで
[01:19.26]
[01:30.72]やがて背負うもの　託す音
[01:33.98]輪郭は濃くなる
[01:36.40]1人じゃないことも分かってるよ
[01:39.81]前を見ている
[01:42.76]
[01:43.24]ふと振り返る
[01:45.72]見えなくなっていく
[01:47.96]分かれ道はまるで 写真立てに
[01:51.53]しまった 記憶のよう
[01:54.35]
[01:54.58]いざなったクローバー その葉を手に取って
[01:57.34]新たなステージを待っている
[02:00.50]共に行くあなたの目 見つめたその目の
[02:03.21]星が褪せぬように 願っているから
[02:06.52]
[02:06.74]眩しくて　眩しくて
[02:09.50]その先に手を伸ばして
[02:12.56]触れたものも　受けた傷も
[02:15.21]全て憶えていたいから
[02:18.21]
[02:18.53]負けないで　負けないで
[02:21.05]そのために側にいる
[02:23.55]隔たりの奥 見えない世界まで
[02:26.42]届いて欲しい夢
[02:29.98]
[02:41.11]泣いてるの？怒ってるの？
[02:43.99]幼い声が問う
[02:46.17]心配いらないよ 笑えてるよ
[02:49.70]返事を歌にして 届けていく
[02:53.94]
[02:54.11]今微笑んで 微笑んで
[02:57.36]優しさをその頬へ
[03:00.07]煌めくライトも 落ちる影も
[03:02.82]全て想っていくから
[03:06.34]
[03:06.45]乗り越えて その先へ
[03:08.83]ただ前へ歩いていく
[03:11.50]震える指にこの手を添えて
[03:14.63]今 鍵を開ける
[03:17.29]
[03:17.39]錆び付いていても
[03:18.71]消えない色で 今
[03:20.91]ドアを開ける`,
    },
    {
        chapter: 3,
        title: 'オールセーブチャレンジ', artist: 'ワンダーランズ×ショウタイム',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'cafeiRu4XGI', start: 0,
        lyrics: `[00:02.59]子供のまま喚いても
[00:05.45]感情は道具にならない
[00:08.17]霞む日々から抜け出して
[00:10.56]貴方のこと救ってあげる
[00:13.84]総じて動じない恋の完成
[00:16.99]
[00:27.89]恋は夢模様泡のように
[00:30.69]消えゆくもの
[00:32.52]愛は重く圧し掛かる現実
[00:35.70]どこまでも付きまとう
[00:38.20]
[00:38.48]欲しがれば欲しがるほど
[00:40.98]遠ざかってしまうもの
[00:43.77]諦めたら良い子でしょうか
[00:46.58]子綺麗な結果主義ですか
[00:49.58]
[00:49.96]どうしてなんで 目前の美談に意志を奪われて
[00:53.56]「もっと」度を越えて 傷付け合うのか？
[00:56.25]熱量が理解を 食いつぶして行く
[00:59.13]それならば！
[01:00.78]
[01:01.28]止めらない鼓動響かせて
[01:03.95]未体験希望愛させて
[01:06.94]不安感今拭わせて
[01:09.69]描いた指についてきて
[01:12.45]
[01:12.65]知り得ない誰も知り得ない
[01:14.98]そんな解を提示切に
[01:17.39]祈ってるから
[01:19.31]
[01:22.13](ららららら ああ)
[01:29.30]許されたいとー願うなら、
[01:31.77]誰かを許したことはある？
[01:35.13]熱烈なほど見失う
[01:37.77]論点曇天の夜中

[01:41.16]悲劇のヒロインはただ嘆いて、
[01:44.09]それで終わりなんでしょう？
[01:46.15]愛するもののためそれなら
[01:50.59]火傷も厭わない
[01:52.72]
[01:54.50]命じて烈に抗って「無駄」って神が宣えど
[01:58.06]変えたいと思った非力な自分を
[02:00.86]一瞬で実った果実などないと
[02:03.61]気付いてから
[02:05.67]
[02:05.96]冷製の「可能」を 磨き抜いた手遣いて
[02:10.93]甘えたいこの弱さも
[02:13.83]君の前では見せない

[02:16.46]「愛してる」という言葉が
[02:19.17]陳腐に響かないように、
[02:22.67]嗚呼！

[02:24.00]綻んだ理想縫い合わせて
[02:26.77]失敗も誇り軽々と
[02:29.73]被弾停滞期待を胸に
[02:32.33]絶対譲れないたった一つ

[02:35.45]叶わないなんて有り得ない
[02:37.86]何もかもを、全部、全て…
[02:41.42]信じてるよ!
[02:47.92]一生`,
    },
    {
        chapter: 3,
        title: 'Flyer!', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'gr4FAlsibeg', start: 0,
        lyrics: `[00:02.08]Wow Wow 飛び立てば 正解!
[00:12.53]Wow Wow 飛び立てば 正解!

[00:22.69]どこまでもまだ まだ高い壁
[00:26.96]それって どこまでもただ ただ怖がっていない？
[00:32.09]あの空はこんなにも こんなにも 青く澄んでいるのに
[00:37.75]まだこんなにも こんなにも迷う必要は無い無い

[00:43.20]幼いこの脚が
[00:47.58]踏み出す地と待ってる

[00:52.57]僕ら Flyer! Flyer!
[00:55.56]憧れだけじゃなくて乗り越えて
[00:58.13]キミもFlyer! Flyer!
[01:00.68]描き出すんだ セカイを

[01:03.73]あの日夢見た夢が
[01:05.57]最高の上昇気流 何度だって
[01:09.14]この心 believe in it
[01:12.25]明日もきっと快晴!

[01:14.80]Wow Wow 飛び立てば 正解!

[01:24.03]挫けそうになっていた
[01:26.20]あの日の僕の表情　多分さboomy boomy
[01:29.19]弾けそうになっていいんだ
[01:31.77]素直な僕の想いは bloomy bloomy

[01:34.16]ふわりと　ふわりと　追い風の中で
[01:39.00]ただ　ふわりと　ふわりと　声を飛ばして

[01:43.85]この世に生を持った意味？
[01:45.82]そんなこと考えている前に
[01:48.35]足掻いてみせて
[01:49.65]一歩踏み出して

[01:53.64]僕ら Flyer! Flyer!
[01:56.74]後悔を怖がってちゃ始まらない
[01:59.38]キミもFlyer! Flyer!
[02:01.80]信じてるんだ　セカイを

[02:04.88]あの日夢見た夢が
[02:06.83]最強の上昇気流　いつだって
[02:10.29]この心 believe in it
[02:13.47]明後日も快晴!

[02:19.92]生み出して　今
[02:24.17]ここに僕たちのステージ
[02:26.10]
[02:44.47]明日は快晴!
[02:45.44]Flyer! Flyer!
[02:47.68]響けキミのコールよ 3,2,1 Say!

[02:50.65]Flyer! Flyer!
[02:52.76]曝け出すんだ セカイを

[02:55.90]あの日夢見た夢が
[02:57.74]最強の上昇気流 いつだって
[03:01.42]この想い believe in it
[03:04.45]明後日も快晴!

[03:06.44]雲突き抜け
[03:08.42]描き出す セカイへ

[03:12.59]Wow Wow 飛び立てば 正解!
[03:22.56]Wow Wow 飛び立てば 正解!`,
    },
    {
        chapter: 3,
        title: 'PPPP', artist: 'TAK',
        context: '', desc: '',
        date: 'DEC 2025', ytId: '8Cm-7oCq9HA', start: 0,
        lyrics: `[00:05.72]ほら
[00:06.07]見て見て見てこのオーラ
[00:09.24]きっとヒットだよ
[00:12.10]みっちゃみっちゃダメみっちゃダメ
[00:13.70]まぶしいよ
[00:15.15]きっとヒットだよ

[00:17.93]예뻐예뻐 언니 (Hey) [ye-po-ye-po-on-ni]
[00:19.99]진짜진짜 귀여워 [jin-cha-jin-cha-gi-yeo-wo]
[00:21.68]뭐해뭐해 언니 (Hey) [mo-hae-mo-hae-on-ni]
[00:23.26]めっちゃくっちゃ 배고파 [bae-go-pa]
[00:24.86]ステージ果てまでなぜだコイツ信じらんねw
[00:28.02]ヒメムーブ展開 (チュ)

[00:31.09]ボクノボクノオーラビーム
[00:34.32](ぴょんぴょんぴょんぴょん)
[00:35.85]やられた？
[00:37.53]アイタイアイタイアイシテ
[00:40.40]ガチで
[00:41.00]ラブリースーパキューティーベイビー
[00:42.67]エグいよ

[00:44.18]うちのうちのオーラビーム
[00:47.28](ぴょんぴょんぴょんぴょん)
[00:48.80]びびった？
[00:50.38]限界突破リミッター解除無敵の
[00:53.58]ラブリースーパキューティーベイビー
[00:55.21]エモいよ
[00:56.84]ラブリースーパキューティーベイビー
[00:57.95]だ！よ！ね！チュ！
[00:59.50]
[01:05.88]余計なオマジナイ
[01:09.24]きっとヒットだよ
[01:12.13]確かな慰めは
[01:15.71]きっとヒットだよ

[01:18.35]예뻐예뻐 언니 (Hey) [ye-po-ye-po-on-ni]
[01:20.72]진짜진짜 귀여워 [jin-cha-jin-cha-gi-yeo-wo]
[01:21.58]뭐해뭐해 언니 (Hey) [mo-hae-mo-hae-on-ni]
[01:23.38]めっちゃくっちゃ 배고파 [bae-go-pa]
[01:24.78]ステージ果てまでなぜだコイツ信じらんねw
[01:28.02]トントントントントントントントン
[01:31.10]サボる

[01:31.73]ナー
[01:36.31](ぴょんぴょんぴょんぴょん)
[01:38.14]ナー
[01:41.10]ヒメムーブ展開 (チュ)

[01:44.52]届け届け飛びたい
[01:50.64]アタシアタシ溶けた
[01:53.49]ガチで
[01:53.91]ラブリースーパキューティーベイビー
[01:55.51]エグいよ

[01:58.09](オーラビーム)
[01:58.71]ボクノボクノオーラビーム
[02:01.87](ぴょんぴょんぴょんぴょん)
[02:03.44]最低だ
[02:04.90]限界突破リミッター解除無敵の
[02:08.18]ラブリースーパキューティーベイビー
[02:09.29]エグいよ

[02:10.99]ラララララ (ぴょん)
[02:12.66]ラララララ (ぴょん)
[02:14.10]最低なんて言わないで大好きす
[02:17.12]限界突破リミッター解除無敵の
[02:20.40]ラブリースーパキューティーベイビー
[02:22.03]エモいよ
[02:23.53]ラブリースーパキューティーベイビー
[02:25.18]だ！よ！ね！チュ！

[02:29.90]ラー
[02:31.46]終わった`,
    },
    {
        chapter: 3,
        title: 'ラストラス', artist: '*Luna',
        context: 'The End of Foon Yew Archive', desc: 'Graduation',
        date: 'DEC 2025', ytId: 'gdmLEu5fVz4', start: 0,
        lyrics: `
            [00:14.56]ゆっくり落ちる砂時計
            [00:17.88]揺らいだ夜の星たちも
            [00:21.24]気付けなくなっていたのは
            [00:25.82]
            [00:27.07]きっと　涙が止まない夕暮れも
            [00:30.87]動けそうにない朝明けも
            [00:34.27]隣に誰もいないから
            [00:38.38]
            [00:38.78]負けたくない今日の日を　精一杯走った
            [00:45.15]正しく生きることの　意味を知らないまま
            [00:52.53]でも　確かにそこに光はあったんだ
            [00:59.54]
            [00:59.67]ねぇ空の色は何色だっただろう
            [01:03.65]星はどんな音色だっただろう
            [01:07.55]WOW
            [01:10.38]君を知らない世界たちが
            [01:13.37]この歌を笑っていたんだろう
            [01:16.52]灰色の言葉もあっただろう
            [01:20.41]そんな日々を僕は　強さと呼びたい
            [01:29.31]君の星河よ
            [01:31.70]輝いて
            [01:45.71]
            [01:45.94]踏み出す足がすくんでも
            [01:49.44]未来の空が暗くても
            [01:52.95]隣に「音」があったから
            [01:57.05]
            [01:57.98]見えるもの全てが　真実じゃなくて
            [02:04.14]渦巻く人の声を　疑う僕でありたい
            [02:11.57]まだ　映らない　星座を探して
            [02:23.00]
            [02:46.48]今まで数えた星だって
            [02:49.55]きっと輝いていたのに
            [02:52.78]いつから忘れていたの
            [02:56.11]いつから消してしまったの
            [02:58.99]
            [02:59.14]この世界が美しく見えた
            [03:02.56]最後の日はいつだっけ
            [03:05.86]下を向いていた夜に
            [03:09.03]見落としたんだ　今なら
            [03:13.53]
            [03:19.15]光るから
            [03:20.23]僕の色は何色だっただろう
            [03:23.43]君はどんな音色だっただろう
            [03:27.46]WOW
            [03:30.05]少しだけ顔を上げて
            [03:32.92]広がる空が見えたなら
            [03:36.09]あの日の答えもあったなら
            [03:40.14]そんな明日を僕は　嫌わないでいたい
            [03:48.70]君の星河よ
            [03:51.67]輝いて
            [04:06.04]
            [04:19.13]あぁ空はこんな色だった`
    },
    {
        chapter: 3,
        title: '仮死化', artist: 'Vivid BAD SQUAD',
        context: 'The End of Foon Yew Archive', desc: 'Graduation',
        date: 'DEC 2025', ytId: 'Mj38FoEYVGA', start: 0,
        lyrics: `
            [00:02.50]息が吸いたくて、産声を上げて
            [00:07.58]生き辛くなってまた泣いて喚いて
            [00:12.87]生きたくって？逝きたくって？
            [00:15.45]わけ分かんないなぁ、僕は
            [00:18.08]死にたくっても、詩に託して
            [00:20.58]歌詞/仮死になって歌う今日だ
            [00:23.54](ああ ああ ああ ああ...)
            [00:44.56]震わせた声を歌に吹き込んだ時
            [00:48.78]僕の息が初めて目に映って
            [00:51.87]気付いたんだよ
            [00:55.22]音楽の価値なんて所詮主観だと
            [00:59.21]なら、歌いたいように
            [01:02.53]伝えたい言葉を伝う
            [01:05.57]
            [01:07.44]間違いに怯えて
            [01:10.02]鬱ぐんじゃなくて
            [01:12.60]正しく在ろうって
            [01:15.15]足掻いていたいんだよ
            [01:17.88]「僕のせい」も、僕の生だ
            [01:20.51]馬鹿にされたって僕は
            [01:23.21]傷ついては傷つけて
            [01:25.67]瑕疵/貸しを作って生きる
            [01:27.82]
            [01:28.30]目に見えた今が全てだから
            [01:34.11]過去や未来に縋りたくないから
            [01:39.55]心の臓よ、動け、動け！
            [01:45.15]不確かだとしても僕の鼓動
            [01:50.14](ああ ああ ああ ああ...)
            [02:10.33]
            [02:31.76]いつか憎んだ、あの光も
            [02:36.94]僕の目を確かに照らしている
            [02:42.25]可視化していくんだ、この心を
            [02:47.53]でたらめな本音を抱えながら
            [02:52.41]
            [02:55.98]息が吸いたくて、産声を上げて
            [03:00.93]生き辛くなってまた泣いて喚いて
            [03:06.25]生きたくって？逝きたくって？
            [03:08.94]わけ分かんないなぁ、 僕は
            [03:11.58]死にたくっても、詩に託して
            [03:14.13]歌詞/仮死になって歌う
            [03:16.64]消えたくて生きた今日があるなら
            [03:22.44]どちらも嘘にはしなくていいから
            [03:27.85]心の臓を、歌え、歌え！
            [03:32.98]希望も希死も僕の鼓動
            [03:38.30](ああ ああ ああ ああ...)`
    },
    {
        chapter: 3,
        title: 'デビルじゃないもん', artist: 'DECO*27',
        context: '2025', desc: 'Summary',
        date: 'DEC 2025', ytId: 'lMEt3RdqB9Y', start: 0,
        ig: 'https://www.instagram.com/reel/DSuHC_qEQOc/',
        lyrics: `
            [00:03.92]堕
            [00:10.42]ながらの優等生　今宵も自分と密会です
            [00:12.96]しんどいわ　しんどいわ　あーつらつら合掌
            [00:16.47]ほんとは劣等生　あたしはあたしに説教です
            [00:19.12]しんどいわ　しんどいわ　もーいやいや絶交
            [00:22.70]心配無用　心配無用　これは笑えるジョークソング
            [00:25.76]新米も　老害も　みんな歌えるポップソング
            [00:28.86]まあまあ　それ噂っすよ　ただの紙切れっすよ
            [00:31.90]いいから　はやく　ハンコ押せや
            [00:35.19]デビルじゃない　デビルじゃないもん　悪魔ほどそう言うもん
            [00:38.01]あー死んじゃった　死んじゃった　愛してほしいじゃん（でも…）
            [00:41.49]それでもハマっちゃうなら　それでも恋しちゃうなら
            [00:44.25]あー死んじゃった　死んじゃった　天使エンジェル（HEY!!）天使エンジェル（HEY!!）
            [00:47.59]わー！【悲報】【悲報】【悲報】【悲報】（うっそー）
            [00:50.54]わー！　汚いね　わー！　飛べないね
            [00:53.85]デビルじゃない　デビルじゃないもん　あー死んじゃった　死んじゃった
            [00:56.93]本当の天使　スルーして　ご臨終
            [01:00.08]あくまで天使じゃん？　最強じゃん
            [01:04.76]堕
            [01:11.04]「君のため」って名言の悪意
            [01:14.82]「夢は叶う」で奪ったサラリー
            [01:17.56]はあ　中毒性の高いもんにゃ　罠があるんだな
            [01:20.42]魂抜かれちゃって　やあねえ　やあねえ
            [01:23.88]光り輝く輪っかでこの首が締まっていく
            [01:26.59]嘘をつけば緩んでいく　言えないSOS
            [01:30.01]白いペンキかぶりましょ　なりきって仕舞いましょ
            [01:32.76]嘘をつけば楽になる　ほらやっちゃって
            [01:36.33]デビルじゃない　デビルじゃないもん
            [01:39.31]あー死んじゃった　死んじゃった　あああ
            [01:42.67]それでもウガっちゃうけど　それでも嫌っちゃうけど
            [01:45.53]なりきって笑顔で　天使エンジェル天使エンジェル
            [01:48.85]デビルじゃない　デビルじゃないもん　悪魔ほどそう言うもん
            [01:51.64]あー死んじゃった　死んじゃった　愛してほしいじゃん（でも…）
            [01:55.08]それでもハマっちゃうなら　それでも恋しちゃうなら
            [01:57.92]あー死んじゃった　死んじゃった　天使エンジェル（HEY!!）天使エンジェル（HEY!!）
            [02:01.19]わー！【悲報】【悲報】【悲報】【悲報】（うっそー）
            [02:04.25]わー！　汚いね　わー！　飛べないね
            [02:07.51]デビルじゃない　デビルじゃないもん　あー死んじゃった　死んじゃった
            [02:10.52]本当の天使　スルーして　ご臨終
            [02:13.74]わー！【悲報】【悲報】【悲報】【悲報】（あっそー）
            [02:16.75]わー！　醜いね　わー！　映えないね
            [02:20.00]デビルじゃない　デビルじゃないもん　あー死んじゃった　死んじゃった
            [02:23.00]本当の悪魔になっても　ブレス・ユー
            [02:26.18]あくまで天使じゃん？　最強じゃん
            [02:29.93]堕〜`
    },
    {
        chapter: 3,
        title: 'Polar Star', artist: 'MORE MORE JUMP！',
        context: '', desc: '',
        date: 'DEC 2025', ytId: 'eMb63NYcAL8', start: 0,
        lyrics: `
            [00:01.19](Polar Star)
            [00:06.81]いつの間にか失くしたコンパス 滲んだ夜空に
            [00:12.43]あてもないまま続いたコウカイ 流されるままで
            [00:17.37]いつだって　間違って 泣いたって　消えなくて
            [00:22.60]口ずさんでた救難信号 懐かしい歌
            [00:28.43]Polar Star それでもずっとずっとずっと消えない星(スター)
            [00:33.74]Polar Star 見上げればいつもいつもいつも側で瞬く
            [00:38.48]不安も呪詛も　飲み込んで ただ真っすぐにきらめいた
            [00:45.49]あの星のように今
            [00:49.84]夜を裂いて輝いて 響け響け　遥か彼方の君へ
            [00:55.46](MORE MORE MORE MORE JUMP) この声が届くように
            [01:00.56]空はあいにく流星群 光れ光れ　眩い雨の中で
            [01:05.94](MORE MORE MORE MORE JUMP) どこにいたってわかるように
            [01:11.30]Polar Star 私を見つけて 私を見ていて もう迷わないように
            [01:24.69]
            [01:37.98]凪いだ水面にこぼれ落ちた 涙のように
            [01:43.12]探したって見つかりもしない 想いの欠片が
            [01:48.14]いつだって　大切で 捨てたって　消えなくて
            [01:53.15]星の海をまた進むんだ 顔を上げて
            [01:59.62]Polar Star そうだよずっとずっとずっと消えない星(スター)
            [02:04.77]Polar Star 見上げればいつもいつもいつも側で瞬く
            [02:09.83]願いを未来を歌うんだ ただ真っすぐに煌いた
            [02:16.47]君を連れてゆくよ いつか夢見た舞台(ステージ)へ
            [02:23.28]夜を裂いて輝いて 響け響け　遥か彼方の君へ
            [02:28.46](MORE MORE MORE MORE JUMP) この声が届くように
            [02:33.56]空はあいにく流星群 光れ光れ　眩い雨の中で
            [02:39.18](MORE MORE MORE MORE JUMP) どこにいたってわかるように
            [02:44.30]Polar Star 私を見つけて 私を見ていて もう迷わないように
            [02:56.02]輝き続けて`,
    },
    {
        chapter: 3,
        title: 'VOIDS', artist: 'Pretty Patterns ft.vally.exe',
        context: 'The End of 2025', Desc: '',
        date: 'DEC 2025', ytId: 'B0uSLgW9o7E', start: 0,
        ig: 'https://www.instagram.com/reel/DS7AsnWEdgg/',
        lyrics: `
            [00:14.59]I want to be right where you are
            [00:21.69]I want to be right where you are
            [00:29.19]There's no beauty without ends
            [00:36.32]No creation with no mends
            [00:43.83]A new silent wish, will cast aside our pain
            [00:48.58]Distancing side by side in vain
            [00:56.95]Reflecting no more anguish by your side
            [01:00.44]A contradiction worthy to abide
            [01:04.10]Remnants of us ebb and flow
            [01:07.09]A glimpse of love just waiting
            [01:11.03]Oh, a never-ending hope to mend it all
            [01:18.18]Flow, let our time remain and wait for voids to fall
            [01:25.05]Ascending through the motions
            [01:28.12]It would seem as though they'd last
            [01:31.91]Admitting to our questions
            [01:35.72]And doubts thrown at the past
            [01:40.69]There's no rightness in pretend
            [01:47.57]Finding comfort once again
            [01:54.85]Wish the days would pass, just yearning for our fate
            [01:59.94]Yet there is solace to be found within dismay
            [02:08.01]Disowning feelings of grief through these tides
            [02:11.65]A complicated love I'd dare not hide
            [02:15.30]Turbulences come and go
            [02:18.18]But won't reject me whole
            [02:22.17]Oh, a bittersweet vision through me that befalls
            [02:28.98]Know that despite our voids I swear to hold it all
            [02:36.04]While sinking through this ocean
            [02:39.28]I would wonder why you'd ask
            [02:43.12]Accepting our affection
            [02:46.35]I just knew that it would last
            [02:51.16]I want to be right where you are
            [02:58.21]I want to be right where you are
            [03:05.35]I want to be right where you are
            [03:12.55]I want to be right where you are
            [03:18.93]I want to be right where you are (touch)
            [03:21.68](The heavens and the skies alight)
            [03:26.34]I want to be right where you are (breathe)
            [03:28.69](The entire universe shines bright)
            [03:33.52]I want to be right where you are
            [03:40.74]I want to be right where you are
            [03:47.58]`
    },
    // Chapter 4
    {
        chapter: 4,
        title: 'あのね', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'M-IayQIR0XA', start: 0,
        ig: '',
        lyrics: `
            [00:00.63]ただ歌を歌う Loneliness
            [00:02.59]この電子音が繋いでく魔法
            [00:23.95]あのね、僕は地球の
            [00:27.74]反対側に居るから
            [00:31.80]君と
            [00:33.39]同じものが感じられなくて
            [00:37.32]春も夏も秋も冬も
            [00:41.08]空の色さえ
            [00:47.45]地球を鳴らすミュージック
            [00:49.22]君の声がこの曲のスパイス
            [00:51.51]届いていてほしいな
            [00:53.22]僕のらったったも君の元に
            [00:55.59]誰もはみ出さずに
            [00:57.17]包んでくれるそれは
            [00:58.55]ダンスミュージック
            [00:59.44]ヘッドホンの先には
            [01:01.01]いつもの様に君がいるから
            [01:18.65]あのね、キーボードに
            [01:22.40]打ち込んでいく文字は
            [01:26.48]思うように感情が乗ってくれなくて
            [01:32.16]何も伝わらなくて
            [01:34.58]目に見えるものだけに
            [01:36.74]圧倒されてしまう
            [01:38.98]心も何もかも乗っ取られていく
            [01:42.22]見えない電波を拾って
            [01:44.75]この心臓が
            [01:46.76]脈を打つ限り
            [01:48.01]音を打ち続けるから
            [01:51.25]君は君のままでいて
            [01:57.75]言葉が通じなくても
            [01:59.53]この音が刻むメッセージと音色で
            [02:04.48]君と
            [02:05.54]この瞬間同じ四季を
            [02:07.39]また感じられる気がしていたんだ
            [02:11.22]空の色も教えてくれた
            [02:18.94]二人の意識が繋がっていく
            [02:28.98]地球を鳴らすミュージック
            [02:30.85]君の脈がこの曲のスパイス
            [02:33.03]届いていてほしいな
            [02:34.73]君のチクタクチクも僕の元に
            [02:37.08]誰もはみ出さずに
            [02:38.65]包んでくれるそれは
            [02:39.95]ダンスミュージック
            [02:40.87]ヘッドホンの先には
            [02:42.42]いつも通りの君がいるから
            [03:00.11]あのね、僕は地球の
            [03:03.81]反対側に居るけど
            [03:08.04]君と
            [03:09.46]同じものが感じられるように
            [03:13.52]この歌を歌うんだ
            [03:16.22]`
    },
    {
        chapter: 4,
        title: 'モザイクロール (Reloaded)', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'w0RQgG-Uiyc', start: 0,
        lyrics: `
            [00:19.43]とある言葉がきみに突き刺さり
            [00:25.46]傷口から漏れ出す液を"愛"と形容してみた
            [00:35.88]
            [00:38.52]思いやりの欠如と形だけの交尾は
            [00:45.09]腐れ縁のきみとあたしによく似ている
            [00:51.80]それでも「好き」とか
            [00:55.42]愛したっていいじゃないか
            [00:58.31]縛り　誰も触れないよう
            [01:02.07]これも運命じゃないか
            [01:04.72]消える消える　とある愛世
            [01:09.51]
            [01:14.40]終わる頃にはきみに飽いてるよ
            [01:20.84]愛か欲か分からず放つことは何としようか
            [01:27.27]きみがくれた涙はあたしが飲み干すから
            [01:33.84]「弱虫でもいい」と甘い嘘をくれたら
            [01:40.23]逃げ出せたのかな
            [01:44.11]
            [01:57.60]「愛した」って言うのですか？
            [01:59.85]しがみついて藻掻くことを
            [02:03.81]殺したっていいじゃないか
            [02:06.46]きみが嫌うあたしなんて
            [02:10.20]愛したっていいじゃないか
            [02:12.87]縛り　誰も触れないよう
            [02:16.65]これも運命じゃないか
            [02:19.36]消える消える　とある愛世`,
    },
    {
        chapter: 4,
        title: '星空のメロディー', artist: 'ワンダーランズ×ショウタイム',
        context: '', desc: '',
        date: 'JAN 2026', ytId: '4GJhcEVGfd8', start: 0,
        lyrics: `
            [00:04.26]NeverEnd NeverEnd Wow Wow
            [00:05.94]いつかの約束
            [00:08.06]NeverEnd NeverEnd Wow Wow
            [00:10.10]叶えられるから
            [00:14.21]
            [00:28.72]大切なものがあるんだ
            [00:30.82]自分の居場所はココなんだって
            [00:33.03]独りじゃ護れなかった景色も
            [00:35.41]重なる絆 希望に変えた
            [00:37.61]誰にも理解されなかった
            [00:39.70]それでもいいと思っていた
            [00:41.75]情熱に触れて溶けてゆく孤独
            [00:43.93]どこまでも続く煌めきを胸に
            [00:46.09]ねぇ 想うほどにセカイは色を讃えて
            [00:54.01]誰かを笑顔にできるんだってことを
            [00:56.76]気づかせてくれたんだ
            [01:02.15]星に願いをかけて
            [01:06.62]魔法のような明日を
            [01:10.30]憧れも涙にも
            [01:14.57]光がほら宿ってる
            [01:18.95]星を見つけるほどに
            [01:23.52]暗闇を照らした
            [01:27.32]解けない繋がりをメロディーにして
            [01:33.54]夢を満たしてゆこう
            [01:39.22]
            [01:45.50]大切なものがあるんだ
            [01:47.42]こんなにも希望に満ちてるって
            [01:49.72]輝くように紡いだ軌跡は
            [01:52.15]いつしか夢に変わってゆく
            [01:54.34]誰にも伝えられなかった
            [01:56.43]できなかったことを数えた
            [01:58.57]情熱が照らす未来の足跡
            [02:00.71]もう一度歌声を届けたい
            [02:02.82]ねぇ 想うほどにセカイは色を讃えて
            [02:10.76]胸の奥 諦めてしまったものに
            [02:13.93]もう一度 息吹を与えてくれたんだ
            [02:19.03]星が瞬くほどに
            [02:23.60]手を伸ばしてしまう
            [02:27.30]追いかけて 遠のいて
            [02:31.43]それでもまた魅せられる
            [02:35.99]星が見えない夜は
            [02:40.59]暗闇に寄り添う
            [02:44.21]もう一人の寂しがりやな自分も
            [02:50.62]抱きしめてあげよう
            [02:55.80]小さなかがり火でも
            [03:02.24]見つめる瞳に映るものは…
            [03:10.00]星に願いをかけて
            [03:14.60]魔法のような明日を
            [03:18.23]憧れも涙にも
            [03:22.45]光がほら宿ってる
            [03:27.15]星を見つけるほどに
            [03:31.41]暗闇を照らした
            [03:35.24]解けない繋がりをメロディーにして
            [03:41.50]夢を満たしてゆこう
            [03:45.29]NeverEnd NeverEnd Wow Wow
            [03:47.24]いつかの約束
            [03:49.23]NeverEnd NeverEnd Wow Wow
            [03:51.40]叶えられるから`,
    },
    {
        chapter: 4,
        title: 'スーパーヒーロー', artist: 'MORE MORE JUMP！',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'I9ruCukmnO4', start: 0,
        lyrics: `
            [00:17.18]王様になってみたい　光り輝く指輪をつけたい
            [00:20.31]兵隊になってみたい　何かを本気で守ってみたい
            [00:23.55]スーパーヒーローになってみたい　命を懸けても悪に挑みたい
            [00:27.23]そんなことを妄想してる　僕だけには断じてなりたくない
            [00:30.89]
            [00:31.31]神様になってみたい　すべての人の視線を向けたい
            [00:34.72]天才になってみたい　みんなの記憶に残ってみたい
            [00:38.04]スーパーヒーローになってみたい　命を懸けても悪に挑みたい
            [00:41.77]そんなことを妄想してる　君だけには断じてなりたくない
            [00:45.37]
            [00:45.57]君だけには断じてなりたくないのさ
            [00:47.81]
            [00:48.07]あぁ　なんて君が言うんだ
            [00:50.55]私が本当に愛していたいのは神様なんかじゃない、きっと
            [00:54.90]あぁ　そっと君が言うんだ
            [00:57.83]あなたは何を言われてもあなただ
            [01:00.07]だからこのままでいて そう笑っていた
            [01:02.38]
            [01:05.00]Hey！
            [01:08.48]Hey！
            [01:12.09]Hey！
            [01:13.06]
            [01:16.31]放浪者になってみたい　あてもない道を歩いてみたい
            [01:19.99]暗殺者になってみたい　嫌な奴みんな消してやりたい
            [01:23.28]スーパーヴィランになってみたい　命を懸けても正に挑みたい
            [01:26.90]そんなことを妄想してる　僕だけには断じてなりたくない
            [01:30.66]
            [01:31.10]神様になってみたい　すべての人の視線を向けたい
            [01:34.51]天才になってみたい　みんなの記憶に残ってみたい
            [01:37.68]スーパーヒーローになってみたい　命を懸けても悪に挑みたい
            [01:41.39]そんなことを妄想してる　君だけには断じてなりたくない
            [01:45.04]
            [01:45.22]君だけには断じてなりたくないのさ
            [01:47.37]
            [01:47.52]あぁ　なんて君が言うんだ
            [01:50.27]私が本当に愛していたいのは神様なんかじゃない、 きっと
            [01:54.50]あぁ　そっと君が言うんだ
            [01:57.58]あなたは何を言われてもあなただ
            [01:59.53]だからこのままでいて そう笑っていた
            [02:02.09]
            [02:04.62]Hey！
            [02:08.37]Hey！
            [02:11.97]Hey！`,
    },
    {
        chapter: 4,
        title: 'ロミオとジュリエット', artist: 'MORE MORE JUMP!',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'jKtkVvAq_Kk', strat: 0,
        lyrics: `[00:00.51]私の恋を
[00:03.72]悲劇のジュリエットにしないで
[00:07.13]ここから連れ出して…
[00:11.52]そんな気分よ
[00:13.58]
[00:24.01]パパとママにおやすみなさい
[00:26.74]せいぜい いい夢をみなさい
[00:29.57]大人はもう寝る時間よ
[00:34.51]
[00:35.90]咽返る魅惑のキャラメル
[00:39.05]恥じらいの素足をからめる
[00:41.56]今夜はどこまでいけるの？
[00:45.59]
[00:46.06]噛みつかないで　優しくして
[00:49.03]苦いものはまだ嫌いなの
[00:51.57]ママの作るお菓子ばかり食べたせいね
[00:56.49]
[00:57.39]知らないことがあるのならば
[01:00.67]知りたいと思う 普通でしょ？
[01:03.18]全部見せてよ　あなたにならば
[01:06.80]見せてあげる私の…
[01:09.67]
[01:09.87]ずっと恋しくてシンデレラ
[01:13.25]制服だけで駆けていくわ
[01:15.96]魔法よ時間を止めてよ
[01:18.98]悪い人に　邪魔されちゃうわ

[01:21.93]逃げ出したいのジュリエット
[01:23.89]でもその名前で呼ばないで
[01:27.48]そうよね　結ばれなくちゃね
[01:29.79]そうじゃないと楽しくないわ

[01:32.10]ねえ　私と生きてくれる？
[01:37.41]
[01:50.44]背伸びをした長いマスカラ
[01:53.10]いい子になるよきっと明日から
[01:56.57]今だけ私を許して
[02:00.69]
[02:01.77]黒いレースの境界線
[02:04.41]守る人は今日はいません
[02:07.39]越えたらどこまでいけるの？

[02:11.66]噛みつくほどに　痛いほどに
[02:15.04]好きになってたのは私でしょ
[02:17.50]パパはでもねあなたのこと嫌いみたい
[02:23.08]
[02:23.90]私のためと差し出す手に
[02:26.86]握ってるそれは首輪でしょ
[02:29.89]連れ出してよ　私のロミオ
[02:32.60]叱られるほど遠くへ
[02:35.47]
[02:36.93]鐘が鳴り響くシンデレラ
[02:39.18]ガラスの靴は置いていくわ
[02:42.00]だからね　早く見つけてね
[02:44.54]悪い夢に　焦らされちゃうわ

[02:47.75]きっとあの子もそうだった
[02:50.50]落としたなんて嘘をついた
[02:53.26]そうよね　私も同じよ
[02:56.34]だってもっと愛されたいわ

[02:59.77]ほら 私はここにいるよ
[03:04.23]
[03:17.12]私の心そっと覗いてみませんか
[03:22.50]欲しいものだけあふれかえっていませんか
[03:28.15]まだ別腹よもっともっとぎゅっと詰め込んで
[03:33.91]いっそあなたの居場所までも埋めてしまおうか

[03:39.13]でもそれじゃ意味ないの
[03:43.45]
[03:43.97]大きな箱より　小さな
[03:47.27]箱に幸せはあるらしい
[03:49.75]どうしよこのままじゃ私は
[03:52.50]あなたに嫌われちゃうわ

[03:55.63]でも私より欲張りな
[03:57.98]パパとママは今日も変わらず
[04:01.51]そうよね　素直でいいのね
[04:03.75]落としたのは金の斧でした

[04:07.28]嘘つきすぎたシンデレラ
[04:09.66]オオカミに食べられたらしい
[04:13.18]どうしようこのままじゃ私も
[04:15.99]いつかは食べられちゃうわ

[04:18.75]その前に助けに来てね`
    },
    {
        chapter: 4,
        title: 'タイムマシン', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 's1yW2jPJiVE', start: 0,
        lyrics: `[00:30.35]得意げに呟いた
[00:33.53]心配ないからと
[00:37.12]人の少ないホームで
[00:41.51]ヘタクソに強がった
[00:44.80]
[00:45.20]唐突に鳴り響く
[00:48.67]僕を呼ぶ別れの音
[00:52.49]見慣れたその泣き顔も
[00:56.67]しばらくは見れないね
[01:00.43]
[01:01.10]Ah 声が遮られていく
[01:05.75]身振り手振りで伝える
[01:09.60]「いってらっしゃい」のサイン
[01:14.40]
[01:15.72]少しずつ小さくなってく
[01:20.63]全部置いたまま
[01:24.33]悲しくなんかないさと
[01:28.88]イヤホンで閉じ込めたよ
[01:33.04]
[01:46.40]見えたんだぼんやりと
[01:49.91]暖かい昨日のビジョン
[01:53.63]右と左に広がって
[01:57.88]僕を連れて行くのさ
[02:01.32]
[02:02.56]Ah 僕の横をすり抜けて
[02:07.00]遠ざかっていく景色
[02:10.70]あの日の僕を置いてく
[02:15.76]
[02:17.07]こぼれた涙一滴の
[02:21.44]意味も分からずに
[02:25.16]タイムマシンにゆられて
[02:29.84]明日も元気でいるよ
[02:34.29]
[03:02.93]こぼれた涙一滴の
[03:07.24]意味も分からずに
[03:11.00]タイムマシンにゆられて
[03:15.71]明日も元気で
[03:18.04]
[03:18.29]溢れる涙抑え切れず
[03:22.49]意味も分からずに
[03:26.18]タイムマシンにゆられて
[03:30.81]また戻ってくるよ`,
    },
    {
        chapter: 4,
        title: '幸福刑', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'pWc8oCbtGKc', start: 0,
        lyrics: `
[00:18.79]夢の中でいつも逃げてる間抜けた走り方
[00:25.65]メタでズルい手段で撒いて安堵の息を吐く
[00:32.69]足場がまたひとつ崩れた他を考えなきゃ
[00:39.55]枕元に置いてきた言葉を組み直す
[00:44.09]絡まったのがどの糸なのか探していたら日が暮れて
[00:50.81]暗がりの手元が指を切るだけ
[00:57.72]ただ哀れ哀れ変われません
[01:01.50]あれよあれよ流され終点
[01:05.02]回れ回れ自責の念
[01:08.41]たとえ迷えど光の方へ
[01:11.80]耳へ指へ伝う偽善
[01:15.26]任せ剥がせ雪崩のように
[01:18.59]探せ捜せ目を醒まそうね
[01:22.11]単純化する癖が染み付く前に
[01:25.69]映画みたく全部滅ぶなら何を想えばいい？
[01:32.41]愛が何か誰も解らずなんとなく祈ってる
[01:39.32]帰属意識の果てで二人空しく撫で合う傷
[01:46.24]その場凌ぎの満足感で私腹を肥やした
[01:52.57]絡まったのがどの糸であれ千切ってしまえば楽になれる
[01:59.48]捧げた心はどこへ消えるんだろう
[02:06.27]もう離れ離れ触れません
[02:10.11]それは、それじゃ。あんまりだって
[02:13.56]わたし、形ばかり見て
[02:16.96]人の数だけ美学があるのに
[02:23.55] 
[02:34.11]理解の種をここに蒔いたの
[02:37.56]かつて自ら枯らした知を糧に
[02:40.96]心臓も脳も心じゃないなら
[02:44.35]どうしてこんなに痛むの？
[02:48.06] 
[02:49.21]止まれ止まれ笑えません
[02:52.92]蝶も花も最期は一瞬
[02:56.38]重たい冷たい真夜中に
[02:59.84]ひどく優しく突きつける
[03:02.91]もう意義は、日々は、ひび割れて
[03:06.62]共生どうせ明日も曇天
[03:10.08]軈てその手解けたら？
[03:13.53]いつも思慮はそこで止まる
[03:16.92]ああ、ほらね未だ変われません
[03:20.32]足はいつも地につく方へ
[03:23.84]たとえ何処で迷えども
[03:26.88]考えないと君が正しく在るために
[03:34.16]これはこれは誰のため？
[03:41.14]なにがなにが君のため？
[03:46.45] 
`
    },
    {
        chapter: 4,
        title: 'Look Through the Sky', artist: '임정은',
        context: '판사 이한영 OST', desc: '',
        date: 'FEB 2026', ytId: 'Gdo3cYK4YKg', start: 0,
        lyrics: `
            [00:02.58]Ooh, woah-oh
            [00:07.62]Ooh, woah-oh
            [00:12.63]Ooh, woah-oh
            [00:18.49]Ooh, woah-oh
            [00:21.44]
            [00:24.96]In the twilight of deceit with a broken heart
            [00:30.50]She dances with the fire
            [00:35.85]To rise from the ashes
            [00:40.54]With every step a memory departed
            [00:44.76]Oh, I've got to stop this sympathy of revenge
            [00:50.22]Can't move with my wounded heart
            [00:56.27]In the echoes of silence
            [00:58.60]And a tempest of fury
            [01:01.02]Don't you remember?
            [01:03.75]The silence of secrets
            [01:07.12]Even when the light is nowhere to be found
            [01:11.98]거짓의 파도 속에서도 난 버텨내
            [01:17.38]무너진 자리에서 다시 시작해
            [01:23.06]도망친 진실을 끝까지 찾아
            [01:28.01]Look through the sky
            [01:30.28]Ooh, woah-oh
            [01:34.68]Ooh, woah-oh
            [01:40.43]In the rhythm of revenge I confide
            [01:45.33]Like the ones lost in my dream
            [01:50.21]The scars all over me have made it this far, I survived
            [01:55.63]As wounds unhealed, become weapons revealed
            [02:00.57]In the echoes of silence
            [02:03.19]And a tempest of fury
            [02:05.68]Don't you remember?
            [02:08.55]The silence of secrets
            [02:11.64]Even when the light is nowhere to be found
            [02:16.64]거짓의 파도 속에서도 난 버텨내
            [02:22.08]무너진 자리에서 다시 시작해무너진 자리에서 다시 시작해
            [02:27.70]도망친 진실을 끝까지 찾아도망친 진실을 끝까지 찾아
            [02:32.44]Look through the sky
            [02:35.06]Ooh, woah-oh
            [02:38.93]Ooh, woah-oh
            [02:43.71]Look through the sky
            [02:46.04]Ooh, woah-oh
            [02:49.63]Ooh, woah-oh
            [02:54.77]Look through the sky`,
    },
    {
        chapter: 4,
        title: 'スター', artist: 'Leo/need',
        context: '', desc: '',
        date: 'FEB 2026', ytId: 'NSAILdVVOg8', start: 0,
        lyrics: `[00:01.30]Lalalalalalala Lalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[00:07.84]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[00:14.46]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala

[00:21.59]光り輝いて見えた世界は
[00:25.15]その何十倍も輝いてた
[00:28.15]｢私､ここで光れるのかな｣って
[00:31.46]たくさんの愛で鳴った音をただ辿って

[00:35.11]いつの間にか変わる景色に
[00:38.50]楽しいって上がったり 苦しいって悩んだり
[00:41.22]いっぱい受け取って 一つ歌にして
[00:44.77]そうやってこんな強くなれたよ

[00:47.72]I need you！こんな 気持ち 初めて味わう
[00:51.54]見ていたものが見られるものに
[00:54.79]一人 なのに 独りじゃない
[00:58.16]波の 上を 歩こう 希望持って どこまでも行こう！
[01:03.50]
[01:04.89]繋がり続けるこのセカイで
[01:08.24]私は救われ 救っていたみたいだ
[01:11.68]絡まって 塞がって 揺れたって 何度も広がって
[01:15.07]"伝わること"ってなんて美しいんだろう

[01:18.26]今はまだちょっとしか見えなくても
[01:21.77]私は息を吸って歩いていく､きっと
[01:25.02]泣いたって 笑ったって 怒ったって 最後は喜んで
[01:28.58]これからの音をまた 紡いでいこう
[01:34.05]
[01:46.14]光り輝いて見えたセカイに
[01:49.44]一つではない たくさんの色が集まった
[01:52.38]何が何だかよくわからなくって
[01:55.30]それが楽しさってやっと気付いたよ

[01:57.97]All you Need is Love こんな気持ち何度でも叫ぶ
[02:02.42]相容れないものも愛せるまでは
[02:05.81]独りから一人になる
[02:09.00]僕も 君も 私も あなたもそうだ さぁ､始めよう！
[02:15.10]
[02:15.97]広がり続けるこの想いで
[02:19.11]私は創られ､創ってたみたいだ
[02:22.45]いつだって どこだって 誰だって 何度も繋がって
[02:25.89]"愛してほしい"ってやっと口にできたよ

[02:29.16]今ある全てを受け取るから
[02:32.55]私の気持ちも受け止めて､ずっと
[02:35.90]吐き出して 抗って 熟れたって 最初を忘れないんだ
[02:39.34]これまでの音と私は 生きていくんだ
[02:44.79]
[02:55.76]このセカイが 私は大好きなだけなのに
[03:02.92]歪んで行く 流れを正す それは難しいことって感じるけれど
[03:09.60]私はあなたと同じように愛している
[03:15.85]この文化 この変化 止まらずに 恥ずかしげもなく 言葉にしよう
[03:24.85]
[03:26.39]独りで生きていた あの世界で
[03:29.73]私は見ていた それだけだった
[03:33.01]何やって 挑んだって 分かんなくて 結局辞めちゃって
[03:36.47]何をするにしても怖くなっていた

[03:39.78]今の景色を見せられるなら
[03:43.03]過去の私にも届くと願って
[03:46.41]泣いてみて 笑ってみて 怒ってみて 気付いた喜びって
[03:49.85]これで私は生きていきたいんだよ！

[03:53.27]輝き続けるこのセカイで
[03:56.42]私は惹かれて光っていたみたいだ
[03:59.83]高鳴った 歌があった 嬉しかった 私達､繋がった
[04:03.30]等しく輝くスターを持っていた

[04:06.68]暗闇で目立つより私は
[04:09.93]世界の真ん中で星になりたい
[04:13.22]大丈夫 忘れないよ 一生だ さあ､歩きだそうか
[04:16.81]これからの音を､また･･･ これまでの音も､ほら･･･

[04:23.53]全てが輝く 「この星のスター」

[04:30.26]Lalalalalalala Lalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[04:36.83]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[04:43.61]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[04:50.29]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala`,
    },
    {
        chapter: 4,
        title: 'ロストワンの号哭', artist: 'Leo/need',
        context: '', desc: '',
        date: 'FEB 2026', ytId: 'U1aS62Juz70', start: 0,
        lyrics: `[00:28.04]刃渡り数センチの不信感が
[00:30.63]挙げ句の果て静脈を刺しちゃって
[00:33.73]病弱な愛が飛び出すもんで
[00:36.65]レスポールさえも凶器に変えてしまいました
[00:42.60]
[00:44.93]ノーフィクション
[00:48.98]
[00:51.87]数学と理科は好きですが
[00:54.17]国語がどうもダメで嫌いでした
[00:57.08]正しいのがどれか悩んでいりゃ
[01:00.10]どれも不正解というオチでした

[01:03.06]本日の　宿題は　無個性な　僕のこと
[01:06.08]過不足無い　不自由無い　最近に　生きていて
[01:09.15]でもどうして　僕達は　時々に　いや毎日
[01:11.94]悲しいって言うんだ　淋しいって言うんだ

[01:14.94]黒板のこの漢字が読めますか
[01:17.73]あの子の心象は読めますか
[01:20.74]その心を黒く染めたのは
[01:23.67]おい誰なんだよ　おい誰なんだよ

[01:26.71]そろばんでこの式が解けますか
[01:29.62]あの子の首の輪も解けますか
[01:32.56]僕達このまんまでいいんですか
[01:35.56]おいどうすんだよ　もうどうだっていいや
[01:39.02]
[01:50.45]いつまで経ったって僕達は
[01:53.24]ぞんざいな催眠に酔っていて
[01:56.45]どうしようもない位の驕傲を
[01:59.33]ずっと　匿っていたんだ

[02:02.44]昨日の宿題は　相変わらず　解けないや
[02:05.40]過不足無い　不自由無い　最近に生きていて
[02:08.30]でもどうして　僕達の胸元の塊は
[02:11.23]消えたいって言うんだ　死にたいって言うんだ

[02:14.18]黒板のこの漢字が読めますか
[02:17.12]あの子の心象は読めますか
[02:20.11]その心を黒く染めたのは
[02:23.00]おい誰なんだよ　おい誰なんだよ

[02:26.02]そろばんでこの式が解けますか
[02:28.89]あの子の首の輪も解けますか
[02:31.92]僕達このまんまでいいんですか
[02:34.83]おいどうすんだよ　おいどうすんだよ

[02:37.99]面積比の公式言えますか
[02:40.87]子供の時の夢は言えますか
[02:43.78]その夢すら溝に捨てたのは
[02:46.72]おい誰なんだよ　もう知ってんだろ

[02:49.78]いつになりゃ大人になれますか
[02:52.63]そもそも大人とは一体全体何ですか
[02:55.66]どなたに伺えばいいんですか
[02:58.52]おいどうすんだよ　もうどうだっていいや`,
    },
    {
        chapter: 4,
        title: 'リアライズ', artist: 'Vivid BAD SQUAD',
        context: '2026 Opening', desc: '',
        date: 'MAR 2026', ytId: 'uuFNVow4ciw', start: 0,
        ig: 'https://www.instagram.com/reel/DT5YBLHkWky',
        lyrics: `
            [00:14.18]迷い間違い 進めない日々
            [00:20.20]分かっていたつもりだった
            [00:23.36]まだ足りない 対峙 またMISTAKE
            [00:26.98]
            [00:26.98]感じたままでいい 歩き出して
            [00:32.90]少しずつ形にして
            [00:36.09]さあいくよ 調子はどうだい？
            [00:39.79]
            [00:39.99]CLAP!反響して 響く超低音
            [00:43.19]揺るがぬ想い 重ね合わせて
            [00:46.35]襲うプレッシャーと壁押し退け
            [00:49.24]光追いかけた
            [00:52.22]
            [00:52.22]届かないような 未来だって
            [00:55.52]何度でも手を伸ばそう
            [00:58.84]憧ればかりじゃ終われないから
            [01:04.84]
            [01:05.05]悔しい気持ち 忘れないで
            [01:08.29]前を向いたら
            [01:10.76]奇跡を塗り替える
            [01:12.73]鮮やかなセカイを 描いていくんだ
            [01:18.33]
            [01:19.84]ああ 積み重ねは本当の意志
            [01:25.74]繰り返した試行錯誤
            [01:28.99]「まだいける」と上を目指して
            [01:32.46]
            [01:32.56]熱い眼差し 本気の路(みち)
            [01:38.50]シンクロした感覚の位相
            [01:41.66]さあいこう 幕は上がった
            [01:45.45]
            [01:45.55]FLASH!反射して 響く超高音
            [01:48.78]弾ける鼓動 重ね合わせて
            [01:51.99]止まぬ歓声とステージが照らす
            [01:54.74]期待追いかけた
            [01:57.82]
            [01:57.82]苦しい時もあるけれど
            [02:01.16]君を待つ人がいる
            [02:04.32]だからそう声が枯れる時まで
            [02:10.50]
            [02:10.70]悔しい気持ち 忘れないで
            [02:13.96]前を向いたら
            [02:16.35]奇跡を塗り替える
            [02:18.35]鮮やかなセカイを 描いていくんだ
            [02:26.01]`
    },
    {
        chapter: 4,
        title: 'ぼかろころしあむ', artist: 'DIVELA',
        context: '', desc: '',
        date: 'MAR 2026', ytId: '5kIeUb5AE4s',
        ig: 'https://www.instagram.com/reel/DWI1GGwkROR',
        lyrics: `
            [00:18.25]さぁさぁやって参りました
            [00:19.92]悪い仔 粛清のお時間
            [00:22.03]代替 宛の無い機械
            [00:23.64]彩れませんでした
            [00:25.39]
            [00:25.43]クラクラ果実 散弾銃
            [00:27.39]微二倍 苦い終末
            [00:29.44]大体正の関連性
            [00:31.07]次の方はどうぞ
            [00:32.95]
            [00:32.96]錆びた刃
            [00:36.82]褐色のエーアイ
            [00:40.48]逃走 感情
            [00:44.21]コメントアウト
            [00:47.89]
            [00:47.90]ざんざん ぎゃりぎゃり
            [00:48.89]ばるばるーらる
            [00:49.66]だんだん ばばば
            [00:50.64]わいわいだ ぱーりー
            [00:51.61]いたい いたい
            [00:52.06]あははは
            [00:52.46]あつい あついだろ
            [00:53.49]かいたい かいたい
            [00:54.35]ゆめのせかいへ！
            [00:55.29]ざんざん ぎゃりぎゃり
            [00:56.20]ばるばるーらる
            [00:57.16]ばんばん ががが
            [00:57.94]いえいいえいだ ぱーりー
            [00:58.96]いたい いたい
            [00:59.43]あわれだ
            [00:59.93]にがい にがいから
            [01:00.81]げきたい げきたい
            [01:01.74]あこがれのちへ！
            [01:02.60]
            [01:02.61]三乗 勘定 疲労度 凍結
            [01:04.56]段々幅が迫りくんだ
            [01:06.37]限界 刻々 土台 不整脈
            [01:08.20]段々逃げる道も無いんだ
            [01:10.07]三秒 完答 死闘の口角
            [01:11.92]段々幅は迫りくんだ
            [01:13.75]幻煙 黙々 古代の勢力
            [01:15.62]段々逃げる道も無いんだ
            [01:17.38]
            [01:19.16]さぁさぁやって参りました
            [01:20.81]生存思考の再戦
            [01:22.90]電源なんて在りません
            [01:24.53]只唱う已です
            [01:26.29]
            [01:26.33]フラフラ果実 三連勝
            [01:28.31]微四倍 苦い終末
            [01:30.31]ゲージは残り僅かです
            [01:31.96]次の方はどうぞ
            [01:33.92]
            [01:33.97]怪物達は祈りました
            [01:35.68]哀れな惨状の聖杯
            [01:37.70]真っ赤に成った黒歴史
            [01:39.31]焼き憑いたが最後の再葬
            [01:41.35]
            [01:41.37]来襲 愛終 無限 無気力
            [01:43.35]楽観 達観 偽善 センシズム
            [01:45.22]案外 感慨深い
            [01:46.38]そんなコロシアム
            [01:48.34]
            [01:48.87]ざんざん ぎゃりぎゃり
            [01:49.77]ばるばるーらる
            [01:50.69]だんだん ばばば
            [01:51.45]わいわいだ ぱーりー
            [01:52.49]いたい いたい
            [01:52.99]あははは
            [01:53.39]あつい あついだろ
            [01:54.40]かいたい かいたい
            [01:55.29]ゆめのせかいへ！
            [01:56.21]ざんざん ぎゃりぎゃり
            [01:57.13]ばるばるーらる
            [01:58.07]ばんばん ががが
            [01:58.91]いえいいえいだ ぱーりー
            [01:59.86]いたい いたい
            [02:00.36]あわれだ
            [02:00.84]にがい にがいから
            [02:01.75]さいしゅーへーきで
            [02:02.67]あこがれのちへ！
            [02:03.62]
            [02:03.63]ざんざん ぎゃりぎゃり
            [02:04.50]ばるばるーらる
            [02:05.45]だんだん ばばば
            [02:06.30]わいわいだ ぱーりー
            [02:07.29]いたい いたい
            [02:07.82]あははは
            [02:08.26]あつい あついだろ
            [02:09.21]かいたい かいたい
            [02:10.07]ゆめのせかいへ！
            [02:10.97]さんざん ぎゃくさん
            [02:11.88]こたえ さがせよ
            [02:12.84]かんたん ぼくが
            [02:13.68]うぃんうぃんだ ぱーりー
            [02:14.65]きたい きたい
            [02:15.13]はるかな
            [02:15.60]みらい みらいから
            [02:16.49]さいかい さいかい
            [02:17.43]あのかたのちへ！
            [02:18.54]`
    },
    {
        chapter: 4,
        title: 'ららら', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'MAR 2026', ytId: '4sKjn3ryB14', start: 0,
        ig: '',
        lyrics: `
            [00:16.63]君の詩を書いていた 気づく訳もないのさ
            [00:20.45]「歌詞を聞かない」人でしょ？
            [00:24.64]追いかけることすら 諦めようと黄昏
            [00:28.60]いつの間にか青患いの僕さ
            [00:32.16]さよならの先に歪な雨ひとつ
            [00:39.67]花散らしていく 僕の桜雨
            [00:44.11]放課後の君は確信犯だ
            [00:48.48]枯れていく心を焦がして
            [00:51.95]踏み込めない明日は 全部春のせいかな
            [01:00.01]
            [01:12.61]古いメロディを歌った 覚えてる訳もないんだ
            [01:16.53]「消費するだけ」の人でしょ？
            [01:20.61]4月は大嫌いだ この香り 僕の心を
            [01:24.67]急かし騙し君想起させる
            [01:28.19]青春環状線に乗って 追いつけないままぐるぐると
            [01:33.39]あれ、今何周回ってる？
            [01:35.79]らら楽な人生を羨んでる
            [01:40.12]今日も僕はただの観測者さ
            [01:44.33]来世でさ楽しめばいいや
            [01:47.98]人生単位の事しか 考えるの辞めた
            [01:54.25]この世の正しさ毎
            [01:57.64]誤魔化して、ららら歌って
            [02:00.40]苦な人生は何かのせいにして
            [02:03.99]僕のこんな歌も 全部春のせいかな
            [02:10.62]`
    },
    {
        chapter: 4,
        title: '林檎売りの泡沫少女', artist: 'Leo/need',
        context: '', desc: '',
        date: 'MAR 2026', ytId: 'Ixhe_D7mIIg', start: 0,
        lyrics: `
            [00:19.00]遠い遠い時の果て
            [00:22.20]そこに住まう人は皆
            [00:25.44]永遠の命をもつ
            [00:28.63]世界での話
            [00:31.82]
            [00:32.64]赤い実の成る木の下
            [00:35.79]La La Lu La 生まれながらに
            [00:38.91]死の呪いがかけられた
            [00:42.11]少女の話
            [00:45.67]
            [00:53.91]色付いた街外れ　蒼く光る湖畔　赤い実のお菓子屋
            [01:02.78]ちょっぴり寒くなった今日は妙に誇らしげ　自信作を売りにゆく
            [01:10.44]待ってて　今度こそ　美味しいんだから
            [01:16.51]
            [01:19.62]時計塔の見える市　驚いた
            [01:22.15]珍しく賑やかね　La La Lu La Lucky!!
            [01:28.05]物憂げな街の隅　ひとり
            [01:30.52]赤い実のパイどうですか　自信作なの
            [01:35.45]そんなのひとつも売れないさ　少女を見て蔑む人達
            [01:42.66]みんなと何も変わらないのに　美味しくできたのに
            [01:50.14]今日も声は届かないのね
            [01:54.35]まるで透明になったみたいだわ
            [01:58.61]そうして誰もが知らぬ振りをした
            [02:02.75]何故なら少女は呪われているから
            [02:07.16]死んだ世界で唯ひとり生きていた少女の話
            [02:14.82]
            [02:23.04]夜なべでアレンジパイと　にっこりスマイル引っ提げ
            [02:26.77]少女はまだ諦めない
            [02:31.04]時計塔の針も空を指して　お腹も鳴るそんな時
            [02:37.04]ふと後ろから人が
            [02:40.46]少女を押す　甘い籠は落ちる
            [02:46.33]お菓子を踏み行く人達　平気な顔してさ
            [02:52.69]惨めに拾い集める
            [02:56.20]ふともうひとりの手が
            [02:59.36]どろどろのパイを徐に口に入れて　「おいしいね」
            [03:07.37]その声で心は溢れた
            [03:11.53]まるで輪郭を描いたみたいだわ
            [03:15.87]そうして彼は手を差し出した
            [03:20.05]何故なら少女に呪われているから
            [03:24.37]死んだ世界で唯ふたり生きていた遠い物語
            [03:34.24]
            [03:45.00]街の人達は哀れむ
            [03:47.87]赤い実を食べて呪われた者を
            [03:50.92]永遠に生きられずに死ぬのさ嗚呼
            [03:55.76]なんて可哀想な話
            [04:02.05]ふたりは笑う　それでも笑う
            [04:08.17]La La La　とっても素敵な呪いね
            [04:14.51]例え明日死んでも　『今』が確かで大切になるから
            [04:26.65]
            [04:28.43]もう声は届かないのね
            [04:32.82]まるで透明になったみたいだわ
            [04:37.15]そうして誰もが知らぬ振りをした
            [04:41.27]何故なら世界が呪われているから
            [04:45.38]
            [04:47.16]『永遠』の呪いは解かれていた
            [04:51.40]まるでふたりの方が狂ったみたいだろう
            [04:55.74]そうしていつか笑うように眠る
            [04:59.94]何故ならふたりは放たれているから
            [05:04.34]死んだ世界で唯ふたりだけが幸せだった`,
    },
    {
        chapter: 4,
        title: 'needLe', artist: 'Leo/need',
        context: '', desc: '',
        date: 'MAR 2026', ytId: 'yaTU-vstAIc', start: 0,
        lyrics: `
            [00:01.87]取り戻したい　ヒーローみたいに
            [00:04.65]苦笑いバイバイはもういいよ
            [00:07.24]泣くときは教えてよ絶対
            [00:10.57]
            [00:23.56]冗談も上手に笑えない
            [00:28.04]嫌ってるみたいだった　傷付けちゃった
            [00:33.20]妄想もマイナスばかりで
            [00:38.09]構わないでほしかった　君もそうだった
            [00:42.87]
            [00:43.09]大丈夫　飲み込んだ夢も
            [00:46.37]大丈夫　抱え込んだ夢も
            [00:48.96]期待も後悔も　全部吐き出そう
            [00:52.58]
            [00:53.14]繋げよう　断線したストーリー
            [00:55.62]進めよう　ワンテンポ日常に
            [00:58.11]君を刺すその針は　私が奪ってあげるから
            [01:03.04]
            [01:03.29]取り戻したい　ヒーローみたいに
            [01:05.70]苦笑いバイバイはもういいよ
            [01:08.28]泣くときは教えてよ絶対
            [01:11.56]
            [01:11.79]どうだっていい存在じゃない
            [01:14.36]簡単に愛は終わらないよ
            [01:17.23]離れ離れも　揺れる想いも
            [01:19.41]答えを聞かせて
            [01:21.69]
            [01:22.16]もう一度奏でていこう
            [01:24.36]なんだって歌うよ　君が笑うなら
            [01:27.57]すれ違う前のセカイまで
            [01:31.47]
            [01:39.50]本当に求めた答えはない
            [01:43.97]凹んでは仕舞い込んだ　繰り返していた
            [01:49.11]「どうだっていい」も本音じゃない
            [01:54.03]誰かの”必要”だって　確かめたかった
            [01:58.45]
            [01:59.11]大丈夫　私はひとりだ
            [02:01.91]大丈夫　みんなもひとりだ
            [02:04.65]笑って　もう一度　やり直せるよね
            [02:08.28]
            [02:08.69]繋げよう　断線したストーリー
            [02:11.26]進めよう　ワンテンポ日常に
            [02:13.69]君を刺すその針は　私が奪ってあげるから
            [02:18.59]
            [02:18.96]取り戻したい　ヒーローみたいに
            [02:21.26]苦笑いバイバイはもういいよ
            [02:23.78]泣くときは教えてよ絶対
            [02:27.04]
            [02:43.88]繋げよう　断線したストーリー
            [02:46.53]進めよう　ワンテンポ日常に
            [02:49.06]君を刺すその針は　私が奪ってあげるから
            [02:53.78]
            [02:54.27]取り戻したい　ヒーローみたいに
            [02:56.66]苦笑いバイバイはもういいよ
            [02:59.22]泣くときは教えてよ絶対
            [03:02.50]
            [03:02.92]どうだっていい存在じゃない
            [03:05.17]簡単に愛は終わらないよ
            [03:07.99]離れ離れも　揺れる想いも  
            [03:11.98]答えを聞かせて
            [03:12.92]
            [03:13.14]もう一度奏でていこう
            [03:15.30]なんだって歌うよ　君が笑うなら
            [03:18.82]すれ違う前のセカイまで
            [03:22.24]
            [03:31.26]すれ違う前のセカイまで    `,
    },
    {
        chapter: 4,
        title: '青さは止んだ', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'APR 2026', ytId: '6zs2FqEW3AM', start: 0,
        ig: '',
        lyrics: `
            [00:13.316] ああポイ捨てが多い
            [00:15.80] 社会で僕は塵と思い
            [00:18.45] 自分から塵箱に入ろうとする
            [00:23.766] それを誰も止めないから
            [00:26.433] 本当に本当の塵のように
            [00:28.95] 腐っていく腐っていく
            [00:34.36]
            [00:45.30] 明日がある保証なんて
            [00:48.416] どこにもないのにさ
            [00:50.40] 遠い未来の話ばかり
            [00:53.15] 美化しようとする
            [00:55.80] それは今を生きられずに
            [00:58.466] どっちもどっち
            [00:59.816] 選べなくて
            [01:00.95] 彷徨っていく
            [01:03.616] さあ迷っていく
            [01:06.583] 死ぬことより生きてることに
            [01:11.866] 怯えてんだ
            [01:14.283] もううんざりだ
            [01:17.266] なんだったって僕は弱くて
            [01:19.866] 不甲斐なくて出来損ない
            [01:22.466] 大人で気づいたって遅い
            [01:24.833] 遅いんだよ青さは止んだ
            [01:27.90] 今日だって味のしないガムを
            [01:30.65] 噛んで誤魔化す
            [01:31.80] 感情ばかりが
            [01:33.60] 募って厭って
            [01:36.60] 僕を蝕んでいくんだ
            [01:39.73]
            [01:41.30] 「はい元気です」なんて
            [01:43.816] 前ならえだけがうまくなって
            [01:46.683] 上辺だらけの健康観察
            [01:49.616] 疲れたんだよねそういう圧
            [01:52.316] みんなと違うことしちゃ駄目です
            [01:54.983] みんなと違うことしなきゃ駄目です
            [01:56.60] え？
            [01:56.883] 言ってたことと違うじゃん
            [01:59.383] 「世の中そんなもんだよ、多分」
            [02:03.05]
            [02:23.95] 何だって僕は弱くて
            [02:29.166] 大人で気づいてしまって
            [02:34.316] でもどうやったって
            [02:35.766] SOSすらも出せない世の中だから
            [02:40.833] ここで歌って誤魔化した
            [02:45.266] なんだったってこの世界は
            [02:47.816] 都合良くって平等じゃない
            [02:50.466] 子どもで気付いたって
            [02:52.833] 知らない知らないフリ青さを食んだ
            [02:55.90] 今日だって味のしない日々を
            [02:58.65] 噛んで残った
            [02:59.80] 苦味ばかりを
            [03:01.816] 嫌って 放って
            [03:04.566] 僕は変わらないままだ
            [03:07.23]
            [03:10.40] このままでいんだ
`
    },
    {
        chapter: 4,
        title: 'Ready Steady', artist: 'Giga',
        context: 'Foon Yew Archive', desc: 'the SUFFER accident',
        date: 'APR 2026', ytId: 'XAg1jDDG49Y', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTYwNjA5MTY4NDI5OTEz?story_media_id=3872077968886066424_63008808258&igsh=MXJxOWgwODFmbmhpbA==',
        lyrics: `
            [00:09.56]ローリスクじゃ物足りなくなっちゃったし
            [00:14.67]有り余って笑っちゃうくらい
            [00:18.17]なんも無いなんて言ったってしょうがないし
            [00:22.96]お手上げでHi-Five
            [00:25.66]
            [00:25.67]前ならえで後に続いたってつまんねえ
            [00:30.76]夢を語れ、追え！が　この街のStandard
            [00:35.10]ただ見てたいだけ　なんてのは嘘です
            [00:39.17]そろそろマイク頂戴
            [00:42.85]
            [00:42.86]どうせならもう後戻りもできないくらい　どうにかさせて
            [00:51.60]まだまだハマっていきたい
            [00:53.57]なんか、まるで恋してるみたい
            [00:55.95]好きになっちゃったぁ　つってさ
            [00:58.88]
            [00:58.89]ならこのまま キミを連れて
            [01:03.59]望むなら　どこまでも
            [01:08.11]＆ I Wanna　欲しがってばかりで結構 結構
            [01:15.27]もし叶うならこの先の世界を知りたい　行きたい
            [01:24.40]Ready Steady
            [01:25.45]
            [01:41.20]ちょっとだけなら無茶だってしちゃいたいし
            [01:46.00]この世の全て奪っちゃうくらい
            [01:49.52]とはいえ語ってばっかじゃどうしようもないし
            [01:54.40]語尾跳ねてHi-Fi
            [01:56.82]
            [01:56.83]ねえ少しはこっち向いたらどう
            [01:59.61]気まぐれにハマらせたいだけ？
            [02:02.13]でも奪いたい震わせたい　目、耳、キミの燃えるheart
            [02:06.14]誰もが羨む驚異のTrackとLyricで
            [02:10.12]魅せていくからRetakeはしないで
            [02:13.99]
            [02:14.00]だからこのまま キミを連れて
            [02:18.93]望むなら　どこへでも
            [02:22.91]＆ I Wanna　無いものねだるなら決行 決行
            [02:30.82]
            [02:30.83]早く夜よ明けて 朝焼けに誓え
            [02:36.83]重い想い、 熱量を叫べ
            [02:40.30]この声を聴け　音・音・音に、踊り狂え
            [02:47.50]
            [02:47.51]I want more.
            [02:51.98]“Are you Ready？”
            [02:56.13]
            [02:56.14]ならこのまま キミを連れて
            [03:00.81]望むなら　どこへでも
            [03:05.89]＆ I Wanna　欲しがってばかりで結構 結構
            [03:12.83]もし叶うならこの先の世界を知りたい　行きたい
            [03:21.99]Ready Steady`
    },
    {
        chapter: 4,
        title: 'Beyond the way', artist: 'Giga',
        context: 'In-zone exploration', desc: 'Toppen ACG Fest 2026',
        date: 'APR 2026', ytId: 'SJcgOWsDwi4', start: 0,
        ig: '',
        lyrics: `
            [00:01.65]息つまるばかりで 温ぬるい退屈な夜道で
            [00:07.83](mellow mellow mellow)
            [00:09.31]ルールは無視で行きたいね
            [00:14.80]So burn my burn my heart
            [00:16.98]
            [00:17.18](uh...) 悟られそう (uh...) 可か不可 Get down now
            [00:24.71](uh...) あーあ もうきっと優等ぶった
            [00:30.16]'I'じゃ居られないくらい どうしようもない
            [00:32.54]
            [00:32.72]yuh 無理目のクエスチョン ha 実存？ フィクション？
            [00:36.53]You make me サゲなの何で？ I know the way
            [00:39.88]願ってるばっかじゃ叶わない めちゃくちゃにされたって変わらない
            [00:43.59]まあね 喰らえ 覚醒 Find the way
            [00:46.89]
            [00:47.71]待ってライトあびる感覚 甘い罠
            [00:51.14]見当違い disも聞き飽きたわ
            [00:55.07]そりゃねいけるところまで Take me higher
            [00:58.84]どう？ Turning back 無理ってとっくに分かってんでしょ
            [01:02.83]
            [01:02.86](uh...) 悟られそう (uh...) 可か不可 Get down now
            [01:10.63](uh...) あーあ もうずっとしゃんと居られないや
            [01:16.27]それは誰のせい？
            [01:18.27]
            [01:18.41]終わらない夢を描こう描いて
            [01:21.87]願ったまま欲しがったその先へ
            [01:26.10]終わらない夜を超えていこう 超えていこう
            [01:29.41]このまま 焦がれた向こう側へ
            [01:33.88]
            [01:35.62]はあぶっちゃけ解せないや 勝算なくても行っちゃえ！ とか
            [01:39.55]運命感じる感受性は否めない ウチら負けない
            [01:43.28]跳べ 吠え 目で追って いつでもNO.1
            [01:46.77]そこどけ 速攻揺らせ 攻め 甘美な時 Ride on now
            [01:51.65]
            [01:54.44]Shake it up まだまだ Go beyond the way yuh
            [01:58.67]
            [01:59.33]行き詰まるばかりで ずるい言葉を探して
            [02:05.25](mellow mellow mellow)
            [02:06.58]I am me 研ぎ澄まし 本能に従って 行け
            [02:12.18]Holla "We are the winners!"
            [02:13.92]So burn my burn my heart
            [02:14.92]
            [02:23.62]終わらない夢を描こう描いて
            [02:27.81]願ったまま欲しがったその先へ
            [02:32.13]終わらない夜を超えていこう 超えていこう
            [02:35.40]このまま 焦がれた向こう側へ
            [02:39.30]
            [02:39.90](uh...) 張り裂けそう 追いかけて合わせた 背が熱くて
            [02:48.47](uh...) 張り裂けそう もう一生鳴り止まない
            [02:52.60]限界の向こう側へ
            [02:54.71]
            [02:55.27]Ready Steady? Get out the way.
`
    },
    {
        chapter: 4,
        title: '世界の歩き方', artist: '星乃一歌 × 桐谷遥 × 鳳えむ × 宵崎奏 × 初音ミク',
        context: '', desc: '',
        date: 'APR 2026', ytId: 'A-hipHJknZY', start: 0,
        lyrics: `
            [00:03.21]歩き始めた時から今日の日まで
            [00:07.20]見えない何かを追いかけて
            [00:10.83]どこまで往くの何の為生きるの
            [00:14.92]言えないままに脚を止めた
            [00:18.11]ああ、
            [00:18.56]
            [00:34.36]完成形は野放図で感情の食い違ったり
            [00:38.33]だれも理想を望む役も酸素も取り合う
            [00:42.10]あの日から焼き付いて消えない
            [00:45.86]モニターの先のなにか
            [00:48.06]
            [00:48.49]例えば過去に戻ればどうしようか
            [00:52.18]どこかで忘れた夢を選んでみたら
            [00:55.86]案外上手くいって
            [00:57.93]でも別の世界の君は今の君になりたいかも
            [01:03.90]
            [01:04.62]だれもが識れない世界の歩き方
            [01:08.61]見えない答えを追いかけて
            [01:12.12]どこまで往っても何の為生きても
            [01:16.24]癒えない傷は増えるけれど
            [01:19.91]行こう
            [01:20.76]
            [01:35.51]大事に握り締め歪んでいた希望
            [01:39.49]高く飛ぼうとすれば深く落ちてしまう
            [01:43.28]泥水を啜っても花になれない
            [01:47.16]思い通りじゃない
            [01:48.79]
            [01:49.05]夢のまた夢のなかなにを啜る？
            [01:54.26]どこに届く？
            [01:56.30]夢はまだ夢のまま進む
            [02:00.13]止まらない者は転ぶ
            [02:04.11]けれど景色は変わる
            [02:08.25]
            [02:21.10]今更わかった生まれたきた意味が
            [02:24.26]死ねない理由が
            [02:26.13]下書きすらも無い何かが見たいんだ
            [02:29.97]思うまま描き出そう
            [02:32.08]後書きであれこれ語ればいい
            [02:36.23]
            [02:36.77]僕らは識っている世界の歩き方
            [02:40.72]だから今日ここまで来たろ
            [02:44.40]始まりの日の行く宛も願いも
            [02:48.41]どれも予定と違うけれど
            [02:52.07]
            [02:52.33]ほら、声がするの
            [02:55.30]「それでも」って
            [02:59.93]あれからまだ終わらない夢の途中
            [03:06.39]
            [03:07.94]未来の日の過去を今変えてみせて`
    },
    {
        chapter: 4,
        title: 'Protocol Flow', artist: 'Metal Scar Radio',
        context: 'Game - Arknights: Endfield', desc: '',
        date: 'APR 2026', ytId: 'OG-kdPECvi4', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: 'Late never denied', artist: '呂喬恩',
        context: '《正义女神》片尾曲', desc: '',
        date: 'MAY 2026', ytId: 'Z3VSXD5TVeo', start: 0,
        lyrics: `
            [00:07.20]Late, but never denied
            [00:13.92]The proof that I didn't see
            [00:15.94]Or that I didn't hear
            [00:17.70]But they've become finally clear
            [00:21.57]The truth will never die
            [00:24.00]It will sooner or later become alive
            [00:36.19]Late, but never denied
            [00:42.83]The wind was blowing left, and it was blowing right
            [00:46.25]I turned around the truth was in the air
            [00:56.86]It's in the air
            [01:04.65]How can I decide
            [01:11.92]Eyes have got to be blind
            [01:19.07]There're still some clues someone left behind
            [01:25.43]Some black some white I can't define
            [01:33.30]I heard voices from angels
            [01:40.02]Are they lies from devils
            [01:47.14]My mind was clouded
            [01:50.28]They all made me doubtful
            [01:54.51]How to solve this puzzle
            [02:02.06]Late, but never denied
            [02:08.50]The proof that I didn't see
            [02:10.38]Or that I didn't hear
            [02:12.23]But they've become finally clear
            [02:16.13]The truth will never die
            [02:18.53]It will sooner or later become alive
            [02:30.61]Late, but never denied
            [02:37.35]The wind was blowing left, and it was blowing right
            [02:40.78]I turned around the truth was in the air
            [02:51.10]It's in the air`
    },
    {
        chapter: 4,
        title: '天ノ弱', artist: 'Leo/need',
        context: '', desc: '',
        date: 'MAY 2026', ytId: '0zhop5qsyKY', start: 0,
        lyrics: `
            [00:00.33]僕がずっと前から 思ってる事を話そうか
            [00:05.20]友達に戻れたら これ以上はもう望まないさ
            [00:09.61]君がそれでいいなら 僕だってそれで構わないさ
            [00:14.55]嘘つきの僕が吐いた はんたいことばの愛のうた
            [00:21.57]
            [00:38.70]今日はこっちの地方は どしゃぶりの晴天でした
            [00:43.28]昨日もずっと暇で 一日満喫してました
            [00:48.80]別に君のことなんて 考えてなんかいないさ
            [00:53.29]いやでもちょっと本当は 考えてたかもなんて
            [00:57.76]
            [00:57.97]メリーゴーランドみたいに回る
            [01:01.47]僕の頭ん中はもうグルグルさ
            [01:05.31]
            [01:05.47]この両手から零れそうなほど
            [01:10.57]君に貰った愛はどこに捨てよう？
            [01:14.45]限りのある消耗品なんて僕は
            [01:21.51]要らないよ
            [01:24.85]
            [01:25.04]僕がずっと前から 思ってる事を話そうか
            [01:29.86]姿は見えないのに 言葉だけ見えちゃってるんだ
            [01:34.22]僕が知らないことが あるだけで気が狂いそうだ
            [01:39.26]ぶら下がった感情が 綺麗なのか汚いのか
            [01:43.81]
            [01:44.03]僕にはまだわからず 捨てる宛てもないんだ
            [01:48.40]言葉の裏の裏が
            [01:52.78]見えるまで待つからさ
            [01:57.97]待つくらいならいいじゃないか
            [02:01.43]
            [02:01.86]進む君と止まった僕の
            [02:07.15]縮まらない隙を何で埋めよう？
            [02:11.57]まだ素直に言葉に出来ない僕は
            [02:19.68]天性の弱虫さ
            [02:21.85]
            [02:21.96]この両手から零れそうなほど
            [02:26.31]君に渡す愛を誰に譲ろう？
            [02:31.08]そんなんどこにも宛てがあるわけないだろ
            [02:38.25]まだ待つよ
            [02:42.76]
            [02:44.41]もういいかい`,
    },
    {
        chapter: 4,
        title: '五月猫', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'MAY 2026', ytId: 'xYXIh06fV_w', start: 0,
        lyrics: `[00:01.10] もし地球が爆発したら
[00:04.167] 皆ごと
[00:06.20] 終わってしまえばって
[00:07.767] 何度思っただろう
[00:11.60] もし世界中の人が夢を諦めたら
[00:16.333] 誰の心にも穴が空かず済むだろう
[00:21.333] 再生
[00:22.167] 地球最後の日のミュージック
[00:25.767] lala…
[00:26.433] 来世へのパスポートをください
[00:31.467] 神様、何でこんな僕だけが
[00:34.80] と思ってしまうのでしょう
[00:37.067] って何度も問い質した
[00:39.833] 正しさが分からなくて
[00:42.10] 全人類が幸せだと
[00:44.90] 思える日なんて生涯
[00:47.067] 来るはずなどないって
[00:49.367] 患った五月猫
[01:02.10] もし君もいなくなるのなら
[01:04.967] この春の
[01:06.80] 出会いは別れを知るためにあるのだろう
[01:12.167] もし精神年齢に寿命があったら
[01:16.967] 僕の青春はとっくに死んでいるだろう
[01:22.033] 拝啓
[01:22.90] 十年後の僕は
[01:25.467] 夢を叶え
[01:27.00] こんな素晴らしい世界だと言って…
[01:31.90] る訳もない
[01:32.80] 何なんだよ現実は
[01:35.40] 生きて生きて息をしてる
[01:37.967] ばっかじゃ駄目だなんて
[01:40.50] 最初から教えてよ
[01:42.533] 半永久的で刹那的
[01:45.533] 時限爆弾抱えて
[01:47.767] こんな思いするのも
[01:49.867] 僕だけでいいのに
[02:13.033] いっそのこと夢の中で
[02:17.533] 永遠に笑って生きられたらなんて
[02:22.80] 君が星になる日のことすらも
[02:28.533] 知らない。
[02:30.70] 知らない 知らないままでいい
[02:42.833] 神様、何で六月なのに
[02:46.133] 病は治らないんでしょう
[02:48.40] って名称を探していた
[02:51.267] 時間に馴染めないから
[02:53.333] ドラマの最終回が
[02:56.267] ないようなこの人生は
[02:58.333] いつ終わったとしても同じだから
[03:03.033] もういいよ
[03:11.133] 僕の病には名前がないから
[03:13.533] 365日
[03:16.467] ずっと考えてしまう
[03:18.50] いつか地球が終わる未来
[03:21.367] その日のこと
`,
    },
    {
        chapter: 4,
        title: 'アリア', artist: 'ナナツカゼ',
        context: 'In-zone exploration - Genting Highlands', desc: 'Resorts World Genting',
        date: 'JUN 2026', ytId: 'P7ueDJG9IO4', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTE5NDk0MzU3NzUyODk0?story_media_id=3922679128558534096_63008808258&igsh=MWFhNTVpN2hzZmRjMw==',
        lyrics: `
            [00:11.04]眠れない夜
            [00:12.03]僕らは初めて繋がり合った気がした
            [00:16.08]どうしようもない
            [00:17.36]そんな日々を抱える僕らはどこか似ていた
            [00:21.16]
            [00:21.50]量産される音楽と命が
            [00:24.51]重なりあっても
            [00:25.75]時既に遅くて
            [00:27.13]不確かな音や言葉や数字に苛まれる
            [00:30.59]世界は傷だらけ
            [00:31.52]
            [00:31.67]誰だって
            [00:33.11]言葉にできない痛みを抱えてる
            [00:37.11]僕だって
            [00:38.31]痛い程知ってるよそんなこと
            [00:41.86]
            [00:42.11]だから
            [00:43.48]この歌は僕と君の
            [00:47.21]息を繋ぐため歌うアリア
            [00:53.45]
            [01:14.15]僕らいつの時代も
            [01:16.95]サヨナラに怯えて
            [01:19.21]命を持て余している
            [01:22.25]知る由もないのに
            [01:24.62]
            [01:25.03]僕らいつの未来も
            [01:27.59]普通を恐れて
            [01:29.79]天才に成りたがる
            [01:32.44]成る意味もないのに
            [01:36.32]
            [01:46.80]忘れられないんだ
            [01:49.52]淘汰された表情
            [01:51.94]それは嬉しい方じゃない
            [01:55.30]悲しい方の
            [01:57.06]
            [01:57.44]子どもの頃は
            [01:59.81]誰かを救いたいと
            [02:01.92]夢を綴ったはずなのに
            [02:07.94]
            [02:07.94]僕達は、最期を求めて生まれてきたんだ
            [02:13.22]今春もこの夏も死にがいを探している
            [02:18.45]この世界を作った神様に
            [02:23.91]バレない場所でこの歌を
            [02:28.79]歌わせて
            [02:30.29]
            [03:01.94]僕らいつの時代も
            [03:04.52]平和を保つため
            [03:06.89]兵器を買い安堵している
            [03:10.03]必要もないのに
            [03:11.88]
            [03:12.51]僕らいつの終いも
            [03:15.22]失くして気づいて
            [03:17.37]初めて大切にされる
            [03:20.07]それじゃもう遅いのに
`
    },
    {
        chapter: 4,
        title: '프로토콜 슈퍼노바', artist: '아리스 & 케이',
        context: 'Game - Blue Archiive', desc: '',
        date: 'JUN 2026', ytId: 'Pm4KSlf19pI', start: 0,
        lyrics: `
            [00:16.32]전설 속의 용사가 지금 나타났어
            [00:19.16]마왕을 무찌를 모험이 시작됐어
            [00:21.57]하나 둘 쌓여가는 비트는, 빠밤빠밤
            [00:24.60]다음 레벨을 항해 랭크
            [00:27.41]위험한걸요
            [00:28.74]알죠 알죠 알죠 알죠
            [00:30.15]무리잖아요
            [00:31.49]HP MP 충분합니다
            [00:32.90]정말 바보죠
            [00:34.24]알죠 알죠 그렇지만 네가 있음 Never Game Over
            [00:38.41]아직 기억하고 있습니다 평생 지켜주겠다던 그 말
            [00:46.49]거짓 하나 없는 진심인걸요
            [00:52.20]가로막는 모든 적 돌파!
            [00:55.03]길을 열어줄게
            [00:56.95]나만 다 믿고 따라와 슈퍼노바
            [01:00.15]너에게만 줄게 파워업 버프
            [01:02.87]되고싶은 모든 것을 상상해
            [01:05.53]네 미래를 증명해 Q.E.D!
            [01:08.36]끝까지 가보자 저 너머로
            [01:11.36]힘들 땐 내가 손잡아줄게
            [01:14.03]우리 둘이라면 이겨낼거야
            [01:16.53]빛이 닿는 곳으로 가자
            [01:19.41]꽉 차버린 더미 데이터는
            [01:22.24]과감하게 전부 삭제해
            [01:24.78]스스로를 괴롭히는 버그는
            [01:27.70]전 라운드에 털어버리자
            [01:30.53]치명상이에요
            [01:31.90]알죠 알죠 알죠 알죠
            [01:33.29]또 쓰러져도 다시 한번 리스폰해
            [01:36.00]주저하게 돼요
            [01:37.38]알죠 알죠 그러니까 우리가 함께인 겁니다
            [01:41.50]더 많은 세상을 알아가고 싶은데
            [01:46.90]포기하지 않고 싶은데
            [01:52.07]부서지고 깨져 내 몸 같지도 않겠지만
            [01:58.00]함께 흘린 그 눈물만큼 올라갈 걸 분명. 티어 업!
            [02:02.61]나만 다 믿고 따라와 슈퍼노바
            [02:05.95]너에게만 줄게 파워업 버프
            [02:08.70]되고싶은 모든 것을 상상해
            [02:11.37]네 미래를 증명해 Q.E.D!
            [02:14.20]우리의 승리는 인지상정
            [02:17.07]치트급 체급에 인기만점
            [02:19.87]한바탕 후에 다리가 풀린담    
            [02:22.37]내가 일으켜 줄게
            [02:25.37]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽
            [02:26.70]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽!
            [02:28.00]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽
            [02:29.50]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽!
            [02:30.78]나쁜 로그는
            [02:33.41]우리가 처리 했으니 걱정 말라구
            [02:35.58]가히 최고의 듀오라 할 수 있죠
            [02:38.95]내일의 별들도 끄덕하네요
            [02:41.66]끝없이 날아가 저 은하를 덧그리며 (빛이여~)
            [02:47.30]나만 다 믿고 따라와 슈퍼노바
            [02:51.15]너에게만 줄게 파워업 버프
            [02:53.85]되고싶은 모든 것을 상상해
            [02:56.53]네 미래를 증명해 Q.E.D!
            [02:59.37]크게 더 크게 크게 더 크게
            [03:02.40]말해줘 너의 이름을
            [03:05.03]우리 둘이라면 이겨낼거야
            [03:07.90]빛이 닿는 곳으로 가자
            `
    },
    {
        chapter: 4,
        title: '「1」', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JUN 2026', ytId: '_GdIO1AANg4', start: 0,
        lyrics: `
            [00:14.99]すぐそこに手を伸ばせば掴めそうな
            [00:20.03]幻をただ眺めては
            [00:24.85]違う色で転がる二欠片の
            [00:29.60]答えをまだ知らないから
            [00:34.43]
            [00:34.82]道標がそこに無くても
            [00:39.45]遠回りだったとしても
            [00:44.22]
            [00:44.43]泣かない様に笑ったって
            [00:47.42]転ばない様に歩いたって
            [00:50.42]隠した言葉は伝わらないから
            [00:56.43]僕らが描く未来はただ一つしかないから
            [01:02.90]
            [01:03.21]この目で確かめようか
            [01:10.12]
            [01:20.33]例えばそこに答えがあるとして
            [01:25.10]それを今と比べたとして
            [01:29.85]その時に私が見る景色は
            [01:34.74]独りだと意味がないから
            [01:39.35]
            [01:39.64]もう戻れない覚悟も
            [01:45.64]ここに居るという証明も
            [01:51.18]誰も触れない遠い場所で咲いているから
            [02:03.81]
            [02:04.67]それがガラクタの山だって
            [02:07.74]それがブリキの海だって
            [02:10.82]それを誰かに嗤われたとしても
            [02:17.12]
            [02:17.46]このセカイの向こう側へ
            [02:20.61]今届けてみたいから
            [02:23.78]まだ音は鳴り止まない
            [02:28.20]
            [02:30.32]泣かない様に笑ったって
            [02:33.63]転ばない様に歩いたって
            [02:36.79]隠した言葉は伝わらないから
            [02:43.16]僕らが描く未来はただ一つしかないから
            [02:49.39]
            [02:49.78]この目で確かめようか
            [02:55.65]見た事のない世界へ
            `
    },
    {
        chapter: 4,
        title: '流星のパルス', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JUN 2026', ytId: 'hZgbqUQI64E', start: 0,
        lyrics: `
            [00:01.16]あの日と同じ 星を僕ら
            [00:04.91]目印にして 声を重ねた
            [00:16.01]
            [00:30.15]浮かび上がった憧憬
            [00:31.57]濃く滲んでいた後悔も
            [00:34.67]自分らしく話せたのなら
            [00:38.22]どんなに楽だろう
            [00:40.32]
            [00:40.77]ねぇどんな音で
            [00:42.06]夢を鳴らしたらいい？
            [00:44.43]分かっていたんだ
            [00:46.42]立ち止まっていたのは僕の方だろう
            [00:49.82]
            [00:49.88]零れ落ちた何気ない言葉たち
            [00:56.44]大事にしてあげられなかった
            [01:00.27]見て見ぬフリしたって
            [01:02.63]ここにいるんだよってまだ
            [01:05.20]叫んでる ねえ
            [01:08.94]
            [01:09.27]なんで笑ってるんだろう 何一つ
            [01:12.44]言いたい想いも 書き出せないくせに
            [01:15.46]（変わりたい 進みたい）
            [01:18.15]気付けたんだ
            [01:20.06]
            [01:19.93]音にのせて
            [01:21.61]流れてく一筋の光に
            [01:24.72]僕らもなれるから
            [01:26.16]（かまわない 進もう）
            [01:27.67]伝えるんだ 今
            [01:30.25]
            [01:30.43](woah woah woah...)
            [01:41.52]聞こえている？ この声が
            [01:45.61]
            [01:56.02]積もり積もった投影
            [01:58.01]拙く歪んだ防衛も
            [02:00.65]自分らしく解けたのなら
            [02:04.44]どんなに楽だろう
            [02:06.60]
            [02:06.66]ねぇどんな詩で
            [02:08.20]僕を晒したらいい？
            [02:10.47]独りぼっち
            [02:12.09]涙堪えていたのは過去の僕だ
            [02:14.64]
            [02:14.75]崩れ落ちたしょうもないプライドたち
            [02:21.73]逃げ出したくてたまらなかった
            [02:25.87]ただ傍にいるよって
            [02:27.56]信じてるんだよってほら
            [02:30.40]聞こえている ねえ
            [02:33.90]
            [02:34.23]なんで迷ってるんだろう 何一つ
            [02:37.95]捨てられるような想いなどないのでしょう？
            [02:41.62]（叶えたい 届けたい）
            [02:43.06]抱えて行くんだ
            [02:44.47]
            [02:45.16]歌にのせて
            [02:46.92]世界中駆け巡る音に
            [02:49.43]僕らもなれるかな
            [02:51.02]（大丈夫　進もう）
            [02:53.40]登っていくんだ
            [02:55.30]
            [03:14.93]僕ら
            [03:15.94]日が沈むまで笑い合った
            [03:18.62]星を見に夜を走った
            [03:21.06]先なんてどうでも良かった
            [03:23.47]あの気持ちを 忘れないで
            [03:27.67]
            [03:27.94]忘れないよ ずっと
            [03:34.00]
            [03:34.82]変わっていくもの 過ぎるもの
            [03:37.80]誰も止めることなんて出来やしないから
            [03:42.51]出来やしないけど
            [03:44.93]
            [03:44.96]この瞬間に 生きている
            [03:47.60]逃せない「今」を　見つけ出したいから
            [03:51.53]ここにいるんだ
            [03:53.67]
            [03:54.87]響かせたいよ この歌を
            [03:56.70]待っている誰かがそこにいるのなら
            [04:01.33]（奏でよう 伝えよう）
            [04:03.25]生まれたセカイで
            [04:05.38]
            [04:05.81]声にのせて 暗い夜の
            [04:07.97]空で僕らまだ弱くても
            [04:11.43]光るから 伝えるんだ　今
            [04:18.49]
            [04:18.75](woah woah woah...)
            [04:39.35]聞こえてる？ この声が`,
    },
    {
        chapter: 4,
        title: 'Grievous Lady', artist: 'Team Grimoire',
        context: '', desc: '',
        date: 'JUL 2026', ytId: 'Eax2zhVA0Zo', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: 'sys_title', artist: 'HyperGryph',
        context: 'Game - Arknights', desc: 'Title',
        date: 'JUL 2026', ytId: 'Y47VajTRKeA', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: '再生', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'JUL 2026', ytId: 'wPOEcVWN5Ko', start: 0,
        lyrics: `
            [00:00.58]「おはよ」
            [00:01.20]朝だって
            [00:02.18]呼ぶ声は理想郷で
            [00:04.39]誰にも呼ばれてないのに
            [00:06.44]起きちゃって
            [00:07.79]間に合いそうにない
            [00:09.27]電車に向けて
            [00:10.95]意味もなく走るんだ
            [00:13.29]
            [00:13.70]爆ぜろ
            [00:14.54]風とHPはゼロ
            [00:16.97]帰ろう還ろうって
            [00:18.68]まだ家なのに
            [00:19.99]架空の赤信号に
            [00:22.43]止められる日々
            [00:25.15]はもう辞めた
            [00:26.50]
            [00:26.71]このまま
            [00:27.31]らったった
            [00:28.51]音に乗って
            [00:29.87]今きっと世界で僕だけだ
            [00:33.25]後ろ向きな歌を聴いて
            [00:36.46]少しだけ
            [00:38.60]前向きに生きていく
            [00:42.17]
            [00:53.48]一人がいいけど
            [00:55.08]こんな独りは嫌だって
            [00:57.48]ないものねだりだけ
            [00:59.31]うまくなって
            [01:00.76]間に合いそうにない
            [01:02.20]心はいつも
            [01:03.85]君追いかけてるんだ
            [01:06.33]
            [01:06.65]月火水木金土日
            [01:07.97]気づけば日曜の午後九時で
            [01:10.43]何を祈っても
            [01:11.69]瞬く間に明日はきて
            [01:13.86]止まろうとも
            [01:14.97]止まることの無いこの日々
            [01:16.11]そんな僕らには
            [01:18.06]怖いものなんてない
            [01:26.86]
            [01:33.05]昨日なんてもう
            [01:34.82]忘れちゃおうよ
            [01:36.35]刻もう日々を
            [01:37.80]見えない早さで
            [01:39.47]このギター鳴らして
            [01:41.48]憂鬱も喧騒も
            [01:44.62]かき消すから
            [01:45.96]
            [01:46.16]このまま
            [01:46.75]らったった
            [01:47.93]音に乗って
            [01:49.31]今きっと世界で僕だけだ
            [01:52.70]後ろ向きな歌を聴いて
            [01:55.93]少しだけ
            [01:58.11]前向きに生きていく
            [01:59.93]らったった
            [02:01.20]音になって
            [02:02.56]歌うよ、世界が終わるまで
            [02:05.92]未完成なままでいいって
            [02:09.07]生きていく
            [02:11.37]この歌が終わるまで
            [02:41.37]`,
    },
    {
        chapter: 4,
        title: "Caramel Pain", artist: "星街すいせい",
        context: "", desc: "",
        date: "JUL 2026", ytId: "UpEPkPg8YP4", start: 0,
        lyrics: `[00:00.784]ねえあたしいつも勇気が足りないから
[00:04.755]自分を大切にできないんだ
[00:07.992]痛い目をみないと気付けやしないんだ
[00:11.628]あーあ今日もキャラメルペインです
[00:16.000]
[00:23.374]良い子でなんかいられないよ
[00:26.143]だって世界はこんなにも極彩色で
[00:30.614]甘ったるくて苦いし あ、待って頭痛いし
[00:34.451]ヘトヘトで漂うだけの24/7
[00:37.721]ギリギリ感情おさえるなんてもう無理
[00:39.823]このままではいられないの日々
[00:41.392]ちょっとこわいけど
[00:45.529]置いてくよ
[00:48.298]今まで手にしたイデオロギーもスタイルも
[00:52.736]壊れちゃっても今がいいよ
[00:55.672]だってあたしはあたしのままでずっといたいんだもん
[01:00.310]ルート？ムード？ どうでもいーよ
[01:02.146]トゥーザネクスト
[01:03.080]もっと危ないことしたら勝ちなんでしょ
[01:07.518]何を犠牲にしたってしょうがないんだよ
[01:10.454]フロムマイベッド この胸の痛みだけ抱いて
[01:17.828]あーあ今日もキャラメルペインです
[01:22.466]ミルフィーユみたいにはぐらかしたって
[01:26.136]いつかバレちゃうよ 腐っちゃうよ
[01:29.640]痛いとか素直に君に言えてれば
[01:32.910]痛いとか素直に君に言えてれば 今頃何か変わってたのかもね
[01:33.377]今頃何か変わってたのかもね
[01:37.214]好きなアニメもなくなっちゃうし
[01:40.918]好きな人だっていなくなっちゃうんだ
[01:43.987]寂しくなっちゃうな
[01:50.394]大切なことは ただ一つだけさ
[01:58.435]もう後悔しないように
[02:00.737]前を向いて生きるということ!
[02:06.743]置いてくよ
[02:09.513]今まで手にしたイデオロギーもスタイルも
[02:13.951]汚れちゃっても気にしないよ
[02:16.920]だってあたしはあたしに恋してたいんだもん
[02:21.525]愛してるよ
[02:24.294]さよならなんて涙が出ちゃうけど
[02:28.732]何を犠牲にしたってしょうがないんだよ
[02:31.668]フロムマイベッド この胸の痛みだけ抱いて
[02:39.076]あーあ今日もキャラメルペインです
[02:43.213]ねえあたしいつも勇気が足りないから
[02:47.251]自分を大切にできないんだ
[02:50.420]痛いくらいなら少し我慢するんだ
[02:54.057]あーあ今日もキャラメルペインです

            
        `,
    },
    {
        chapter: 4,
        title: 'メシア', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'JUL 2026', ytId: 'sX-7C9Xlw0Y', start: 0,
        lyrics: `[00:00.80] 信じちゃなんかいないんだ
[00:03.44] 自分以外のこと
[00:06.20] 信じちゃなんかいないんだ
[00:08.80] 大人の言うこと
[00:11.56] 僕は僕のままでいい
[00:13.68] って言ってくれる人はいなかった
[00:16.40] だから慰めるのが上手いんだ
[00:19.36] 自分自身のこと
[00:32.80] 助けてって言えなくて
[00:35.04] 今日も屋上で1人きり
[00:38.12] 通り魔が攫ってくれるのをひたすら待ってる
[00:43.48] 打ち明けてしまったら
[00:45.72] そして変わらない世界を見て
[00:48.80] これ以上の悲しみは抱えきれないからね
[01:04.88] 神様なんていないんだ
[01:07.44] どうせ他人事
[01:10.24] 夢なんて叶わないんだ
[01:12.80] くだらない戯言
[01:15.56] ずっと子どものままでいい？
[01:17.80] って言っていい場面などなかった
[01:20.44] だから諦めるのが早いんだ
[01:23.40] 子どもの頃の夢
[01:26.16] 強くなんてなりたくなかった
[01:28.76] だから心に鎧を着せたんだ
[01:31.44] これ以上傷つかないように
[01:34.12] 安全な場所で眠るみたいに
[01:39.48] 安全な場所で眠るみたいに
[01:47.48] 誰も信じられなくて
[01:49.76] 今日も屋上で1人きり
[01:52.80] 自分の相談事すらも僕自身で聞いてる
[01:58.12] 打ち明けなくていいよ
[02:00.40] 僕のことは全部知ってるから
[02:03.48] 君が持ってる悲しみを半分背負いたいな
[02:54.48] 信じちゃなんかいないんだ
[02:57.44] 自分以外のこと
[03:00.48] 信じちゃなんかいないんだ
[03:03.36] 大人の言うこと
`
    },
    {
        chapter: 4,
        title: 'Snezhnaya', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Snezhnaya Theme',
        date: 'AUG 2026', ytId: '_Uf8_TC_tow', start: 0, end: 300,
        lyrics: `[01:29.33]Proditi sumus a mundo
[01:34.20]Novum mundum omnibus aequum condemus
[01:40.67] 
[02:17.35]Sidus album vos suscipite
[02:28.61]Terram motam vos quatite
[02:40.01] 
[04:01.84]Novum mundum incohemus, vos qui mecum tenebras initis
[04:23.28]Ex ruinis ordo novus condemus
[04:29.94]In fine ab Anastasia servati sumus, aurora orietur 
[04:53.49] `
    },
    {
        chapter: 4,
        title: 'Life Is Inexhaustible', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact / FYSA School Anniversary', desc: '',
        date: 'AUG 2026', ytId: '4uHGpV9OGms', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: '空耳', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'AUG 2026', ytId: 'vJDxS_ovbpc', start: 0,
        lyrics: `[00:07.12] ｢また明日ね｣は言いたくない
[00:10.72] 誰もいない帰り道
[00:14.20] なんで涙が出るんだろうな
[00:18.52] 炎天下を凪いで
[00:20.76] チャイムが鳴ったら
[00:22.20] 光の速さで帰ろう
[00:23.96] 朝と同じ曲聴きながら帰ろう
[00:27.28] 再生
[00:28.12] いつもは聞こえない音がした
[00:31.68] 気のせいか
[00:34.04] 「泣かないで、行こう」って
[00:35.80] 君が言うから
[00:37.32] 正直本当に困った
[00:38.92] 夕焼けに二人染まった
[00:40.56] 「雨のせいだよ」って嘘をついた
[00:43.92] 世界で二人だけみたいだね
[01:00.68] 僕は間違っていたんだ
[01:01.88] 主観的に感じる旋律で
[01:03.88] 世界の全てを知ったような顔をして
[01:07.12] 君の好きな曲や歌詞を知れただけで
[01:10.28] 君の全てを知ったような気がして
[01:13.76] 違うんだよ馬鹿ばっか
[01:15.16] 馬鹿はどっちだっていうんだって
[01:17.28] カラカラな心は
[01:18.60] 落下もうキャパオーバー
[01:20.48] 唯一無二の防音材
[01:21.88] 心の叫びが聞こえないように
[01:24.16] 今日もヘッドホンの音量上げた
[01:40.12] 夕立が来たら
[01:41.76] 濡れながら帰ろう
[01:43.28] 雨と一緒に泣きながら帰ろう
[01:46.84] 再生ボタンは
[01:48.24] 傷ついた言葉に使っちゃ駄目だ
[01:53.56] 「いかないでよ、ねぇ」って
[01:55.32] 君が言うから
[01:56.76] 躊躇する足は止まった
[01:58.52] その時の僕はこう思った
[01:59.96] 途切れそうな鼓動を
[02:01.88] 明日へと繋ぐ
[02:03.56] 君は僕の音楽みたいだね
[02:06.40] 「泣かないでよ、ねぇ」って
[02:08.56] 僕が言うのは
[02:10.12] 何だかちょっと可笑しいか
[02:11.64] 嬉し涙って笑った
[02:13.36] 途切れそうな鼓動を
[02:15.20] 繋げ僕らの
[02:16.76] 世界で二人だけのリズムで
[02:24.76] 二人だけのリズムで
`
    }
];
