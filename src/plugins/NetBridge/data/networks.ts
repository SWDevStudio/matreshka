
export interface NetworkConstructor {
  readonly id: number;
  readonly name: string;
  readonly path: string;
  readonly defaultParams: object;
  readonly className: string;
}

const vk: NetworkConstructor = {
  id: 0,
  name: 'vk',
  path: 'https://oauth.vk.com/',
  defaultParams: {},
  className: 'Vkontakte'
}

const facebook: NetworkConstructor = {
  id: 1,
  name: 'facebook',
  path: '',
  defaultParams: {},
  className: 'Facebook'
}

export default {
  vk,
  facebook
}
