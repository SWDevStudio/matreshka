interface networkConstructor {
  readonly id: number,
  readonly path: string,
  readonly defaultParams: object
}


const vk: networkConstructor = {
  id: 0,
  path: 'https://oauth.vk.com/',
  defaultParams: {
  }
}

export default {
  vk
}
