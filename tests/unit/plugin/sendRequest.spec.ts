import { $sendRequest } from '@/plugins/sendRequest'

describe('Проверка на неправильный ввод данных', () => {
  it('Несуществующая соц сеть', async () => {
    // await $sendRequest({
    //   method: 'test',
    //   network: 'vk'
    // })
    expect('null').toBeNull()
  })
})
