import SendRequest from '@/plugins/NetBridge/interface/SendRequest'

export default class Network {
  public async login (name: number | string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      name ? resolve('userToken') : reject(Error('give network or name id'))
    })
  }

  public async sendMessage (userId: string, message: string): Promise<boolean | null> {
    return new Promise((resolve, reject) => {
      userId && message ? resolve(true) : reject(Error('Not user or message'))
    })
  }

  public async fetchLastMessages (): Promise<object[]> {
    return new Promise((resolve) => {
      resolve([{}])
    })
  }

  protected sendRequest (config: SendRequest): Promise<object | null> {
    return new Promise(resolve => resolve({}))
  }
}
