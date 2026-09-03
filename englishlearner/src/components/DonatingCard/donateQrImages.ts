/**
 * 捐赠二维码统一入口
 *
 * 替换二维码时只需修改本文件的 import 路径与 AmountImageMap 映射，
 * 不必再去碰 DonatingCard 组件。
 *
 * 文件命名约定：
 *   a<N>_<D>.png   → 支付宝，金额 N.D 元（带小数点时用下划线代替）
 *   w<N>_<D>.png   → 微信，金额 N.D 元
 *   alipay.jpg     → 自定义金额（-1）支付宝通用码
 *   weChat.jpg     → 自定义金额（-1）微信通用码
 */
import alipay from '@/assets/alipay.jpg'
import weChat from '@/assets/weChat.jpg'
import a9_9 from '@/assets/qrCord/a9_9.png'
import a19_9 from '@/assets/qrCord/a19_9.png'
import a39_9 from '@/assets/qrCord/a39_9.png'
import a59_9 from '@/assets/qrCord/a59_9.png'
import a99_9 from '@/assets/qrCord/a99_9.png'
import w9_9 from '@/assets/qrCord/w9_9.png'
import w19_9 from '@/assets/qrCord/w19_9.png'
import w39_9 from '@/assets/qrCord/w39_9.png'
import w59_9 from '@/assets/qrCord/w59_9.png'
import w99_9 from '@/assets/qrCord/w99_9.png'

/**
 * 按金额映射二维码图片对 [alipay, weChat]
 * -1 表示「自定义金额」，使用通用收款码
 */
export const AmountImageMap = {
  '-1': [alipay, weChat],
  9.9: [a9_9, w9_9],
  19.9: [a19_9, w19_9],
  39.9: [a39_9, w39_9],
  59.9: [a59_9, w59_9],
  99.9: [a99_9, w99_9],
}