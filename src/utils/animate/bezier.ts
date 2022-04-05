import BezierEasing from "bezier-easing";
// 定制曲线控制点
// http://gre.github.io/bezier-easing-editor/example/
/**
 *
 * @param x1 控制点1的x坐标
 * @param y1 控制点1的y坐标
 * @param x2 控制点2的x坐标
 * @param y2 控制点2的y坐标
 * @returns 生成由贝塞尔变化的缓动函数
 */
export function createBezierEasing(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const easing = BezierEasing(x1, y1, x2, y2);
  /*
   * t: current time（当前时间）；
   * b: beginning value（初始值）； // 起始位置
   * c: change in value（变化量）； // 终止位置 - 起始位置
   * d: duration（持续时间）。
   */
  return function (t: number, b: number, c: number, d: number) {
    return c * easing(t / d) + b;
  };
}
