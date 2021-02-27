import { $sendRequest } from '@/plugins/sendRequest'

// TODO @Kotaro видимо тут нужно еще делать мока xhr
describe('Проверка на неправильный ввод данных', () => {
  it('Несуществующая соц сеть', async () => {
    expect(await $sendRequest({
      method: 'test',
      network: 'vk'
    })).toBeNull()
  })
})
