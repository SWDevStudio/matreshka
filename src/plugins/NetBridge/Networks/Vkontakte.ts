import Network from '@/plugins/NetBridge/abstraction/Network'
import SendRequest from '@/plugins/NetBridge/interface/SendRequest'
import axios from 'axios'
import networks, { NetworkConstructor } from '@/plugins/NetBridge/data/networks'

export default class Vkontakte extends Network {
  protected network: NetworkConstructor = networks.vk

  async login (name: number | string): Promise<string | null> {
    return super.login(name)
  }

  async sendMessage (userId: string, message: string): Promise<boolean | null> {
    return super.sendMessage(userId, message)
  }

  protected async sendRequest (config: SendRequest): Promise<object | null> {
    return axios({
      method: 'GET',
      url: this.network.path + config.method,
      params: {
        ...this.network.defaultParams,
        ...config.params
      }
    })
      .catch((e) => {
        // TODO @Kotaro возможно стоит сделать какой то обработчик в будующем
        console.log('Error code: ' + e.response.status)
        return null
      })
  }

  get networkData (): NetworkConstructor {
    return this.network
  }
}
