export const password = (len = 10) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#?!@'
  const length = charset.length
  let password = ''

  for (let i = 0; i < len; i++) {
    password += charset.charAt(Math.floor(Math.random() * length))
  }

  return password
}
