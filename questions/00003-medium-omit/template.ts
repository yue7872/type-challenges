type myExclude<T, K> = T extends K ? never : T

// type MyOmit<T, K extends keyof T> = {
//   [P in myExclude<keyof T, K>]: T[P]
// }

type MyOmit<T, K extends keyof T> =
  Pick<T, myExclude<keyof T, K>>
