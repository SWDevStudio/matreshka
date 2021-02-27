export interface NetworkConstructor {
  readonly id: number;
  readonly name: string;
  readonly path: string;
  readonly defaultParams: object;
}

const vk: NetworkConstructor = {
  id: 0,
  name: 'vk',
  path: 'https://oauth.vk.com/',
  defaultParams: {
  }
}

const facebook: NetworkConstructor = {
  id: 1,
  name: 'facebook',
  path: '',
  defaultParams: {

  }
}

export default [
  vk,
  facebook
]
