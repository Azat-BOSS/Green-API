export const convertToDate = (date: string): string => {
  if(date === undefined || date === null) {
    return ""
  }
  let unixDate = new Date(Number(date))
  let hours = unixDate.getHours()
  let minutes = unixDate.getMinutes() 
  return `${hours}:${minutes}`
}