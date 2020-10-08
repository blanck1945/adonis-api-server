
module.exports = async (msg, id = null) => {
  const res = await {
    state: 'Fullfil',
    timestamp: new Date(),
    message: msg,
    query: id,
    action: true
  }
  return res
}
