module.exports = async (wish, eventId) => {
  console.log(wish[0])
  const match = await wish[0].events_id_array.find(el => el === eventId)
  return match
}
