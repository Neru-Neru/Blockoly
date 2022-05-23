declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_ENDPOINT: string
  }
}
