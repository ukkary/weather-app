declare module "*.svg" {
  const content: React.VFC<React.SVGProps<SVGElement>>
  export default content
}

type ValueOf<T> = T[keyof T]