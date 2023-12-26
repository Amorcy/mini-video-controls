import Icons from './icons';
import tplPlayer from '../template/player.art';
import utils from './utils';

class Template {
    constructor(options) {
        this.container = options.container;
        this.options = options.options;
        this.index = options.index;
        this.tran = options.tran;
        this.init();
    }

    init() {
        this.container.innerHTML = tplPlayer({
            options: this.options,
            index: this.index,
            tran: this.tran,
            icons: Icons,
            mobile: utils.isMobile,
            video: {
                current: true,
                pic: this.options.video.pic,
                screenshot: this.options.screenshot,
                airplay: utils.isSafari && !utils.isChrome ? this.options.airplay : false,
                chromecast: this.options.chromecast,
                preload: this.options.preload,
                url: this.options.video.url,
                subtitle: this.options.subtitle,
            },
        });

        this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner');
        this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar');
        this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap');
        this.volumeButton = this.container.querySelector('.dplayer-volume');
        this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon');
        this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content');
        this.playedBar = this.container.querySelector('.dplayer-played');
        this.loadedBar = this.container.querySelector('.dplayer-loaded');
        this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap');
        this.playedBarTime = this.container.querySelector('.dplayer-bar-time');
        this.danmaku = this.container.querySelector('.dplayer-danmaku');
        this.danmakuLoading = this.container.querySelector('.dplayer-danloading');
        this.video = this.container.querySelector('.dplayer-video-current');
        this.bezel = this.container.querySelector('.dplayer-bezel-icon');
        this.playButton = this.container.querySelector('.dplayer-play-icon');
        this.mobilePlayButton = this.container.querySelector('.dplayer-mobile-play');
        this.videoWrap = this.container.querySelector('.dplayer-video-wrap');
        this.controllerMask = this.container.querySelector('.dplayer-controller-mask');
        this.ptime = this.container.querySelector('.dplayer-ptime');
        this.settingButton = this.container.querySelector('.dplayer-setting-icon');
        this.settingBox = this.container.querySelector('.dplayer-setting-box');
        this.mask = this.container.querySelector('.dplayer-mask');
        this.loop = this.container.querySelector('.dplayer-setting-loop');
        this.loopToggle = this.container.querySelector('.dplayer-setting-loop .dplayer-toggle-setting-input');
        this.showDanmaku = this.container.querySelector('.dplayer-setting-showdan');
        this.showDanmakuToggle = this.container.querySelector('.dplayer-showdan-setting-input');
        this.unlimitDanmaku = this.container.querySelector('.dplayer-setting-danunlimit');
        this.unlimitDanmakuToggle = this.container.querySelector('.dplayer-danunlimit-setting-input');
        this.speed = this.container.querySelector('.dplayer-setting-speed');
        this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item');
       
        this.dtime = this.container.querySelector('.dplayer-dtime');
        this.controller = this.container.querySelector('.dplayer-controller');

        this.browserFullButton = this.container.querySelector('.dplayer-full-icon');
        this.webFullButton = this.container.querySelector('.dplayer-full-in-icon');
      
        this.camareButton = this.container.querySelector('.dplayer-camera-icon');
       
        this.barPreview = this.container.querySelector('.dplayer-bar-preview');
        this.barWrap = this.container.querySelector('.dplayer-bar-wrap');
        this.noticeList = this.container.querySelector('.dplayer-notice-list');
      
    }

    static NewNotice(text, opacity, id) {
        const notice = document.createElement('div');
        notice.classList.add('dplayer-notice');
        notice.style.opacity = opacity;
        notice.innerText = text;
        if (id) {
            notice.id = `dplayer-notice-${id}`;
        }
        return notice;
    }
}

export default Template;
