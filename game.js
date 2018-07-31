import './lib/weapp-adapter'
import * as PIXI from './lib/pixi.js'
import './lib/tweenlite/easing/EasePack.min';
import {GAME} from './js/Game.js';
import {Run} from './run.js';


// 设置资源加载域
PIXI.loader.baseUrl = `${location.origin}/game`;

// 设置屏幕大小
const {pixelRatio, windowWidth, windowHeight} = wx.getSystemInfoSync();
const ratio = windowHeight / 640;
GAME.width = windowWidth * ratio;
GAME.height = windowHeight * ratio;
GAME.pixelRatio = pixelRatio;

let app = new PIXI.Application({
  width: GAME.width,
  height: GAME.height,
  view: canvas
});

console.log(GAME.pixelRatio, GAME.width, GAME.height);

// 因为在微信小游戏里canvas肯定是全屏的，所以映射起来就很简单暴力
// 可以有两种修改
app.renderer.plugins.interaction.mapPositionToPoint = (point, x, y) => {
  point.x = x * pixelRatio;
  point.y = y * pixelRatio;
}

PIXI.interaction.InteractionManager.prototype.mapPositionToPoint = (point, x, y) => {
  point.x = x * pixelRatio;
  point.y = y * pixelRatio;
}

// 添加舞台底
var graphics = new PIXI.Graphics();
graphics.beginFill(0x25284A);
graphics.drawRect(0, 0, windowWidth * ratio, windowHeight * ratio)
graphics.endFill();
app.stage.addChild(graphics);


let preloadAni = null;
PIXI.loader.add([
    "img/loading_01.png",
    "img/loading_02.png",
    "img/loading_03.png",
    "img/loading_04.png",
    "img/goodboy_logo.png"
]).load(showLoadAni);

function showLoadAni() {
    // create an array of textures from an image path
    var frames = [];
    for (var i = 1; i <= 4; i++) {
        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame('img/loading_0' + i + ".png"));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    preloadAni = new PIXI.extras.AnimatedSprite(frames);
    preloadAni.x = app.screen.width / 2;
    preloadAni.y = app.screen.height / 2;
    preloadAni.anchor.set(0.5);
    preloadAni.animationSpeed = 0.5;
    preloadAni.play();

    app.stage.addChild(preloadAni);

    PIXI.loader.add([
        "img/stretched_hyper_tile.jpg", 
        "img/SplashAssets.json", 
        "img/WorldAssets-hd.json", 
        "img/HudAssets-hd.json", 
        "img/PixiAssets-hd.json", 
        "img/iP4_BGtile.jpg",  
        "img/blackSquare.jpg",
        "assets/hud/pausedPanel.png",
        "assets/hud/pixieRevised_controls.png",
        "assets/hud/ContinuePlay.png",
        "assets/hud/RestartPlay.png",
        "assets/hud/soundOff.png",
        "assets/hud/soundOn.png",
        "assets/hud/pause.png",
        "assets/hud/PersonalBest.png"
    ]).load(loadResComplete);
}

function loadResComplete() {
    preloadAni.destroy();
    preloadAni = null;
    showMainView();
}

let game;
function showMainView() {
    game = new Run();
    app.stage.addChild(game);
}

// Listen for animate update
app.ticker.add(function(delta) {
    if (game) {
        game.update();
    }
});



