const setItem = (key, value) => {
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

const getItem = (key) => {
  const value = localStorage.getItem(key)
  return JSON.parse(value)
}

export {
  setItem,
  getItem
}