import Vue from 'vue'
import axios from 'axios'
import networks, { NetworkConstructor } from '@/assets/constant/networks'
interface SendRequest {
  network: string | number;
  method: string;
  params?: object;
}

declare module 'vue/types/vue' {
  interface Vue {
    $sendRequest: (config: SendRequest) => void;
  }
}

export async function $sendRequest (config: SendRequest): Promise<object | null> {
  const searchKey = isNaN(config.network as number) ? 'name' : 'id'

  const needNetwork: NetworkConstructor | undefined =
    networks.find(item => item[searchKey] === config.network)
  if (!needNetwork) {
    console.error('The network was not found!')
    return null
  }

  return await axios({
    method: 'GET',
    url: needNetwork.path + config.method,
    params: {
      ...needNetwork.defaultParams,
      ...config.params
    }
  })
    .catch((e) => {
      // TODO @Kotaro возможно стоит сделать какой то обработчик в будующем
      console.log('Error code: ' + e.response.status)
      return null
    })
}
Vue.use({
  install (Vue: Vue.VueConstructor) {
    Vue.prototype.$sendRequest = $sendRequest
  }
})
