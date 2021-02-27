import { createApp } from 'vue'
import Index from '@/pages/home/'
import installElementPlus from './plugins/element'

const app = createApp(Index)
installElementPlus(app)
app.mount('#app')