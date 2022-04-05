export const defaultValue = `/**
* Example ↓↓↓↓↓↓
* @param app : PIXI.Application instance (only one)
* @param start : define the widget start time, ex, start('00:00:10:00'|10) (required)
* @param finish : define the widget Over time like start fn (The values can be imprecise)
* @param ticker : add callback to accept video time
*/
function widget(
    app: PIXI.Application,
    start: (t: time) => {},
    finish: (t: time) => {},
    ticker: ticker
) {
    start('00:00:03:000') // The third second 
    // or
    finish(12) // The twelfth second

    let containerWidth = app.view.width
    let containerHeight = app.view.height
    const texture = PIXI.Texture.from('https://prd-bs-oss.oss-cn-shanghai.aliyuncs.com/mkl/logo3.png');

    let thing = new PIXI.Sprite(texture);
    thing.anchor.set(0, 0.5);
    thing.x = 0;
    thing.y = containerHeight / 2;
    thing.width = containerWidth / 10
    thing.height = containerWidth / 10


    ticker.add(function (t) {
        // Start at 4 seconds
        if (t > 4 && t < 11) {
            app.stage.addChild(thing);
            thing.x = Tween.Elastic.easeInOut(
                t - 4,
                0,
                containerWidth - thing.width,
                7
            );
        } else {
            app.stage.removeChild(thing);
        }
    })
}`;
