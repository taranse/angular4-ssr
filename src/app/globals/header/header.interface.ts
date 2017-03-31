/**
 * Created by Evgeniy on 31.03.2017.
 */
export interface Phones {
  main: string,
  allPhones: string[],
  operator: string
}
interface Link {
  alias: string,
  option?: any
}
export interface Navigate {
  name: string,
  selectorClass: string,
  link: Link
}
