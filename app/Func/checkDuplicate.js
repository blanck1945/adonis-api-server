module.exports = async (wish, eventId) => {
  console.log("Esta es la lista de deseos" + wish[0])
  const match = await wish.events_id_array.find(el => el === eventId)
  return match
}
