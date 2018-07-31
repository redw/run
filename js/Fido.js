var Fido = Fido || {};

Fido.LocalStorage = function(bundleId) {
    this.id = bundleId;
}

Fido.LocalStorage.prototype.store = function(key, value) {
    localStorage.setItem(this.id + '.' + key, value);
}

Fido.LocalStorage.prototype.get = function(key) {
    return localStorage.getItem(this.id + '.' + key) || 0;
}

Fido.LocalStorage.prototype.remove = function(key) {
    localStorage.removeItem(this.id + '.' + key);
}

Fido.LocalStorage.prototype.reset = function() {
    for (var i in localStorage) {
        if (i.indexOf(this.id + '.') !== -1) localStorage.removeItem(i);
    }
}

function FidoAudio() {
    var cSoundPool = {};
    var DEFAULT_FADE_OUT_TIME = 1;
    var DEFAULT_FADE_IN_TIME = 1;
    var MUTE_ALL = false;

    var Device = new Fido.Device();
    var LocalStorage = new Fido.LocalStorage();

    var aSounds = [{
            src: 'audio/mainLoop',
            volume: 0.6,
            maxVolume: 0.6,
            loop: true,
            autoPlay: false,
            type: 'music',
            name: 'gameMusic'
        },
        {
            src: 'audio/footLoopRegular',
            volume: 0.0,
            maxVolume: 0.6,
            loop: true,
            autoPlay: false,
            type: 'music',
            name: 'runRegular'
        },
        {
            src: 'audio/footLoopFast',
            volume: 0.0,
            maxVolume: 0.6,
            loop: true,
            autoPlay: false,
            type: 'music',
            name: 'runFast'
        },
        {
            src: 'audio/thrustLoop',
            volume: 0.0,
            maxVolume: 0.4,
            loop: true,
            autoPlay: true,
            type: 'music',
            name: 'thrusters'
        },
        {
            src: 'audio/pickupGrab',
            volume: 0.5,
            maxVolume: 0.5,
            loop: false,
            autoPlay: false,
            type: 'sfx',
            name: 'pickup'
        },
        {
            src: 'audio/blockHit',
            volume: 0.2,
            maxVolume: 0.2,
            loop: false,
            autoPlay: false,
            type: 'sfx',
            name: 'blockHit'
        },
        {
            src: 'audio/lavaSplosh',
            volume: 0.5,
            maxVolume: 0.5,
            loop: false,
            autoPlay: false,
            type: 'sfx',
            name: 'lavaSplosh'
        },
        {
            src: 'audio/fallThud',
            volume: 1.0,
            maxVolume: 1.0,
            loop: false,
            autoPlay: false,
            type: 'sfx',
            name: 'thudBounce'
        },
        {
            src: 'audio/DeathJingle',
            volume: 0.7,
            maxVolume: 0.7,
            loop: false,
            autoPlay: false,
            type: 'sfx',
            name: 'deathJingle'
        },
        {
            src: 'audio/hyperMode',
            volume: 0.2,
            maxVolume: 0.2,
            loop: false,
            autoPlay: false,
            type: 'sfx',
            name: 'hyperMode'
        }
    ];

    function init() {
        if (Device.cocoonJS === true) {
            for (var i = 0; i < aSounds.length; i++) {
                var cSound = aSounds[i];

                switch (cSound.type) {
                    case 'music':

                        CocoonJS.App.markAsMusic(cSound.src + ".ogg");

                        var music = document.createElement('audio');
                        music.src = cSound.src + ".ogg";
                        music.loop = cSound.loop;

                        cSound.audio = new CocoonJS.Music().setAudio(music);
                        cSound.audio.volume(cSound.volume);

                        cSoundPool[cSound.name] = cSound;

                        if (cSound.autoPlay === true) cSoundPool[cSound.name].audio.play();

                        break;

                    case 'sfx':

                        var sfx = new Audio();
                        sfx.src = cSound.src + ".ogg";
                        cSound.audio = new CocoonJS.Audio().setAudio(sfx);
                        cSound.audio.volume(cSound.volume);

                        cSoundPool[cSound.name] = cSound;

                        break;
                }
            }
        } else {
            for (var i = 0; i < aSounds.length; i++) {
                var cSound = aSounds[i];

                cSound.audio = new Howl({
                    urls: [cSound.src + ".mp3"],
                    autoplay: cSound.autoPlay,
                    loop: cSound.loop,
                    volume: cSound.volume,
                    onload: function() {
                        //alert('loaded');
                    },
                    onend: function() {
                        //alert('finished playing sound');
                    },
                    onloaderror: function() {
                        alert('ERROR : Failed to load ' + cSound.src + ".m4a");
                    },
                    onplay: function() {
                        //alert('playing');
                    }
                });

                cSoundPool[cSound.name] = cSound;
            }
        }

        if (LocalStorage.get('gameMuted') === 'true') FidoAudio.muteAll();
    }

    function isMuted() {
        return MUTE_ALL;
    }

    function muteAll() {
        MUTE_ALL = true;
        LocalStorage.store('gameMuted', true);

        if (Device.cocoonJS === true) {
            var sKey = false;

            for (sKey in cSoundPool) {
                var cSound = cSoundPool[sKey];

                var holder = {
                    volume: cSound.audio.getVolume()
                };

                muteOneSound(cSound, holder);
            }
        } else {
            var cHolder = {
                volume: 1
            };

            TweenLite.to(cHolder, 1, {
                volume: 0,
                onUpdate: function() {
                    Howler.volume(this.target.volume);
                },
                onComplete: function() {
                    Howler.mute();
                }
            });
        }
    }

    function muteOneSound(cSound, holder) {
        TweenLite.to(holder, 1, {
            volume: 0,
            onUpdate: function() {
                cSound.audio.volume(this.target.volume);
            }
        });
    }

    function unMuteOneSound(cSound, holder) {
        TweenLite.to(holder, 1, {
            volume: cSound.volume,
            onUpdate: function() {
                cSound.audio.volume(this.target.volume);
            }
        });
    }

    function unMuteAll() {
        MUTE_ALL = false;
        LocalStorage.store('gameMuted', false)

        if (Device.cocoonJS === true) {
            var sKey = false;

            for (sKey in cSoundPool) {
                var cSound = cSoundPool[sKey];
                unMuteOneSound(cSound, {
                    volume: 0
                });
            }
        } else {
            var cHolder = {
                volume: 0
            };

            Howler.unmute();

            TweenLite.to(cHolder, 1, {
                volume: 1,
                onUpdate: function(cObject, sProperty) {
                    Howler.volume(this.target.volume);
                }
            });
        }
    }

    function play(id) {
        if (cSoundPool.hasOwnProperty(id)) {
            cSoundPool[id].audio.play();

        } else {
            console.log("WARNING :: Couldn't find sound '" + id + "'.");
        }
    }

    function fadeOut(sKey) {
        var cSound = cSoundPool[sKey];

        var holder = {
            volume: 0
        };

        muteOneSound(cSound, holder);
    }

    function fadeIn(id, time) {
        if (!soundExists(id)) return;

        var cSound = cSoundPool[id];
        var nFadeInTime = time || DEFAULT_FADE_IN_TIME;

        var cHolder = {
            volume: 0
        };

        TweenLite.to(cHolder, nFadeInTime, {
            volume: cSound.maxVolume,
            onUpdate: function(cObject, sProperty) {
                setVolume(id, this.target.volume);
            }
        });
    }

    function soundExists(id) {
        return cSoundPool.hasOwnProperty(id);
    }

    function setVolume(id, volume) {
        if (!soundExists(id)) return;

        if (MUTE_ALL === true) {
            cSoundPool[id].volume = volume;
        } else {
            cSoundPool[id].audio.volume(volume);
        }
    }

    function stop(id) {
        cSoundPool[id].audio.stop();
    }

    return {
        init: init,
        play: play,
        stop: stop,
        fadeOut: fadeOut,
        fadeIn: fadeIn,
        setVolume: setVolume,
        muteAll: muteAll,
        unMuteAll: unMuteAll,
        isMuted: isMuted
    }
}

Fido.Device = function() {
    this.arora = false;
    this.chrome = false;
    this.epiphany = false;
    this.firefox = false;
    this.mobileSafari = false;
    this.ie = false;
    this.ieVersion = 0;
    this.midori = false;
    this.opera = false;
    this.safari = false;
    this.webApp = false;
    this.cocoonJS = false;
    this.android = false;
    this.chromeOS = false;
    this.iOS = false;
    this.linux = false;
    this.macOS = false;
    this.windows = false;
    this.desktop = false;
    this.pixelRatio = 0;
    this.iPhone = false;
    this.iPhone4 = false;
    this.iPad = false;
    this.blob = false;
    this.canvas = false;
    this.localStorage = false;
    this.file = false;
    this.fileSystem = false;
    this.webGL = false;
    this.worker = false;
    this.audioData = false;
    this.webAudio = false;
    this.ogg = false;
    this.opus = false;
    this.mp3 = false;
    this.wav = false;
    this.m4a = false;
    this.webm = false;

    var ua = navigator.userAgent;

    this._checkBrowser(ua);
    this._checkOS(ua);
    this._checkDevice(ua);
    this._checkAudio();
    this._checkFeatures();
};

Fido.Device.prototype._checkBrowser = function(ua) {
    if (/Arora/.test(ua)) {
        this.arora = true;
    } else if (/Chrome/.test(ua)) {
        this.chrome = true;
    } else if (/Epiphany/.test(ua)) {
        this.epiphany = true;
    } else if (/Firefox/.test(ua)) {
        this.firefox = true;
    } else if (/Mobile Safari/.test(ua)) {
        this.mobileSafari = true;
    } else if (/MSIE (\d+\.\d+);/.test(ua)) {
        this.ie = true;
        this.ieVersion = parseInt(RegExp.$1, 10);
    } else if (/Midori/.test(ua)) {
        this.midori = true;
    } else if (/Opera/.test(ua)) {
        this.opera = true;
    } else if (/Safari/.test(ua)) {
        this.safari = true;
    }

    // Native Application
    if (navigator['standalone']) {
        this.webApp = true;
    }

    // CocoonJS Application
    if (navigator['isCocoonJS']) {
        this.cocoonJS = true;
    }
}

Fido.Device.prototype._checkOS = function(ua) {
    if (/Android/.test(ua)) {
        this.android = true;
    } else if (/CrOS/.test(ua)) {
        this.chromeOS = true;
    } else if (/iP[ao]d|iPhone/i.test(ua)) {
        this.iOS = true;
    } else if (/Linux/.test(ua)) {
        this.linux = true;
    } else if (/Mac OS/.test(ua)) {
        this.macOS = true;
    } else if (/Windows/.test(ua)) {
        this.windows = true;
    }

    if (this.windows || this.macOS || this.linux) {
        this.desktop = true;
    }
}

Fido.Device.prototype._checkDevice = function() {
    this.pixelRatio = window['devicePixelRatio'] || 1;
    this.iPhone = navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
    this.iPhone4 = (this.pixelRatio === 2 && this.iPhone);
    this.iPad = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
}

Fido.Device.prototype._checkFeatures = function() {
    if (typeof window['Blob'] !== 'undefined') this.blob = true;

    this.canvas = !!window['CanvasRenderingContext2D'];

    try {
        this.localStorage = !!localStorage.getItem;
    } catch (error) {
        this.localStorage = false;
    }

    this.file = !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
    this.fileSystem = !!window['requestFileSystem'];
    this.webGL = !!window['WebGLRenderingContext'];
    this.worker = !!window['Worker'];

    if ('ontouchstart' in document.documentElement || window.navigator.msPointerEnabled) {
        this.touch = true;
    }
}

Fido.Device.prototype._checkAudio = function() {
    this.audioData = !!(window['Audio']);
    this.webaudio = !!(window['webkitAudioContext'] || window['AudioContext']);

    var audioElement = document.createElement('audio');
    var result = false;
    try {
        if (result = !!audioElement.canPlayType) {
            if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')) {
                this.ogg = true;
            }

            if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, '')) {
                this.mp3 = true;
            }

            // Mimetypes accepted:
            //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
            //   bit.ly/iphoneoscodecs
            if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')) {
                this.wav = true;
            }

            if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, '')) {
                this.m4a = true;
            }
        }
    } catch (e) {}
}

Fido.Device.prototype.getInfo = function() {
    var output = "DEVICE OUTPUT\n\n";

    output += "---\n";
    output += "Browser Info :: \n";
    output += "Arora : " + this.arora + "\n";
    output += "Chrome : " + this.chrome + "\n";
    output += "Epiphany : " + this.epiphany + "\n";
    output += "Firefox : " + this.firefox + "\n";
    output += "Mobile Safari : " + this.mobileSafari + "\n";
    output += "IE : " + this.ie;

    if (this.ie) {
        output += " (Version " + this.ieVersion + ")\n";
    } else {
        output += "\n";
    }

    output += "Midori : " + this.midori + "\n";
    output += "Opera : " + this.opera + "\n";
    output += "Safari : " + this.safari + "\n";
    output += "Web App : " + this.webApp + "\n";
    output += "CocoonJS : " + this.cocoonJS + "\n";
    output += "Android : " + this.android + "\n";
    output += "---\n";
    output += "Operating System :: \n";
    output += "Chrome OS : " + this.chromeOS + "\n";
    output += "iOS : " + this.iOS + "\n";
    output += "Linux : " + this.linux + "\n";
    output += "Mac OS : " + this.macOS + "\n";
    output += "Windows : " + this.windows + "\n";
    output += "Desktop : " + this.desktop + "\n";
    output += "---\n";
    output += "Device Type : \n";
    output += "Pixel Ratio : " + this.pixelRatio + "\n";
    output += "iPhone : " + this.iPhone + "\n";
    output += "iPhone 4 : " + this.iPhone4 + "\n";
    output += "iPad : " + this.iPad + "\n";
    output += "---\n";
    output += "Features :: \n";
    output += "Blob : " + this.blob + "\n";
    output += "Canvas : " + this.canvas + "\n";
    output += "LocalStorage : " + this.localStorage + "\n";
    output += "File : " + this.file + "\n";
    output += "File System : " + this.fileSystem + "\n";
    output += "WebGL : " + this.webGL + "\n";
    output += "Workers : " + this.worker + "\n";
    output += "---\n";
    output += "Audio :: \n";
    output += "AudioData : " + this.audioData + "\n";
    output += "WebAudio : " + this.webAudio + "\n";
    output += "Supports .ogg : " + this.ogg + "\n";
    output += "Supports Opus : " + this.opus + "\n";
    output += "Supports .mp3 : " + this.mp3 + "\n";
    output += "Supports .wav : " + this.wav + "\n";
    output += "Supports .m4a : " + this.m4a + "\n";
    output += "Supports .webm : " + this.webm;

    return output;
}