import Vkontakte from '@/plugins/NetBridge/Networks/Vkontakte'
import Facebook from '@/plugins/NetBridge/Networks/Facebook'
import networks, { NetworkConstructor } from '@/plugins/NetBridge/data/networks'

type Networks = Vkontakte | Facebook

export default function (identifier: string | number): Networks {
  const key = isNaN(identifier as number) ? 'name' : 'id'
  const findNetwork: NetworkConstructor | undefined =
    Object.values(networks).find(item => item[key] === identifier)
  if (!findNetwork) { throw new Error() }
  console.log(findNetwork.className, 'FIND')
  const classList: { [index: string]: any } = {
    Vkontakte,
    Facebook
  }
  return new classList[findNetwork.className]()
}
