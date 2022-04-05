/*
 * Tween.js
 * t: current time（当前时间）；
 * b: beginning value（初始值）； // 起始位置
 * c: change in value（变化量）； // 终止位置 - 起始位置
 * d: duration（持续时间）。
 * you can visit 'http://easings.net/cn' to get 
 * https://www.cnblogs.com/qfly/p/7979075.html
 * https://jeff_zhong.gitee.io/demo/dist/tween.html
 *
    动画运动算法
    Linear：线性匀速运动效果；
    Quadratic：二次方的缓动（t^2）；
    Cubic：三次方的缓动（t^3）；
    Quartic：四次方的缓动（t^4）；
    Quintic：五次方的缓动（t^5）；
    Sinusoidal：正弦曲线的缓动（sin(t)）；
    Exponential：指数曲线的缓动（2^t）；
    Circular：圆形曲线的缓动（sqrt(1-t^2)）；
    Elastic：指数衰减的正弦曲线缓动；
    Back：超过范围的三次方缓动（(s+1)t^3 – st^2）；
    Bounce：指数衰减的反弹缓动。
    每个效果都分三个缓动方式，分别是：

    easeIn：从0开始加速的缓动，也就是先慢后快；
    easeOut：减速到0的缓动，也就是先快后慢；
    easeInOut：前半段从0开始加速，后半段减速到0的缓动。
*/

export var Tween = {
  /**
   *
   * @param t 哪个时间点开始
   * @param b 初始值
   * @param c 变化量
   * @param d 变换持续时间
   * @returns
   */
  Linear: function (t: number, b: number, c: number, d: number) {
    return (c * t) / d + b;
  },
  Quad: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
  },
  Cubic: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t * t + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    },
  },
  Quart: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    },
  },
  Quint: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    },
  },
  Sine: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    },
  },
  Expo: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
  },
  Circ: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
      return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
  },
  Elastic: {
    easeIn: function (
      t: number,
      b: number,
      c: number,
      d: number,
      a?: number,
      p?: number
    ) {
      var s;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (typeof p == "undefined") p = d * 0.3;
      if (!a || a < Math.abs(c)) {
        s = p / 4;
        a = c;
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a);
      }
      return (
        -(
          a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)
        ) + b
      );
    },
    easeOut: function (
      t: number,
      b: number,
      c: number,
      d: number,
      a?: number,
      p?: number
    ) {
      var s;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (typeof p == "undefined") p = d * 0.3;
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a);
      }
      return (
        a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
        c +
        b
      );
    },
    easeInOut: function (
      t: number,
      b: number,
      c: number,
      d: number,
      a?: number,
      p?: number
    ) {
      var s;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (typeof p == "undefined") p = d * (0.3 * 1.5);
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a);
      }
      if (t < 1)
        return (
          -0.5 *
            (a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
          b
        );
      return (
        a *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
          0.5 +
        c +
        b
      );
    },
  },
  Back: {
    easeIn: function (t: number, b: number, c: number, d: number, s?: number) {
      if (typeof s == "undefined") s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number, s?: number) {
      if (typeof s == "undefined") s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOut: function (
      t: number,
      b: number,
      c: number,
      d: number,
      s?: number
    ) {
      if (typeof s == "undefined") s = 1.70158;
      if ((t /= d / 2) < 1)
        return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
  },
  Bounce: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if (t < d / 2) {
        return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
      } else {
        return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    },
  },
};
