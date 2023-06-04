export const sliceChatNum = (str: string): string => {
  if(str === null || str === undefined) {
    return ''
  }
  let strIdx = 0
  let newStr = ""
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "@") {
      strIdx = i
    }
  }
  return newStr = str.slice(0, strIdx)
}
