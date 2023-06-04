export const getCurUrl = (): string => {
  let crtId = ""
  let crtIdx = 0
  const currentPath = window.location.pathname
  for(let i = currentPath.length - 1; i > 0; i--) {
    if(currentPath[i] === "/") {
      crtIdx = i
      break
    }
  }
  crtId = currentPath.slice(crtIdx + 1, currentPath.length - 1)
  return crtId
}