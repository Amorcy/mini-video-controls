/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */

function i18n(lang) {
    this.lang = lang;
    // in case someone says en-us, and en is present!
    this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;
    this.tran = (key) => {
        key = key.toLowerCase();
        return tranTxt[this.lang][key];
    };
}

// add translation text here
const tranTxt = {
    'zh-cn': {
        'danmaku-loading': '弹幕加载中',
        top: '顶部',
        bottom: '底部',
        rolling: '滚动',
        'input-danmaku-enter': '输入弹幕，回车发送',
        'about-author': '关于作者',
        'dplayer-feedback': '播放器意见反馈',
        'about-dplayer': '关于 DPlayer 播放器',
        loop: '洗脑循环',
        speed: '速度',
        'opacity-danmaku': '弹幕透明度',
        normal: '正常',
        'please-input-danmaku': '要输入弹幕内容啊喂！',
        'set-danmaku-color': '设置弹幕颜色',
        'set-danmaku-type': '设置弹幕类型',
        'show-danmaku': '显示弹幕',
        'video-failed': '视频加载失败',
        'danmaku-failed': '弹幕加载失败',
        'danmaku-send-failed': '弹幕发送失败',
        'switching-quality': '正在切换至 %q 画质',
        'switched-quality': '已经切换至 %q 画质',
        ff: '快进 %s 秒',
        rew: '快退 %s 秒',
        'unlimited-danmaku': '海量弹幕',
        'send-danmaku': '发送弹幕',
        setting: '设置',
        fullscreen: '全屏',
        'web-fullscreen': '页面全屏',
        send: '发送',
        screenshot: '截图',
        airplay: '无线投屏',
        chromecast: 'ChromeCast',
        subtitle: '字幕',
        off: '关闭',
        'show-subs': '显示字幕',
        'hide-subs': '隐藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '视频统计信息',
    }
};

export { i18n };
