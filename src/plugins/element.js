import { ElButton, ElHeader, ElContainer, ElFooter, ElMain, ElInput, ElCard } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

const components = [ ElButton, ElHeader, ElContainer, ElFooter, ElMain, ElInput, ElCard]


export default (app) => {
  locale.use(lang)

  components.forEach(component => app.use(component))
}
