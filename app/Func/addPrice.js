
const populateObj = async (data) => {
  return {
    ...data,
    next_date: data.event_dates[0],
    last_date: data.event_dates.slice(-1)[0],
    low_price: parseInt(data.event_tickets_price[0]),
    average_price: (data.event_tickets_price.reduce((a, b) => parseInt(a) + parseInt(b)) / data.event_tickets_price.length)
  }
}


const populateArr = async (data) => {
  return await data.map(el => {
    return {
      ...el,
      next_date: el.event_dates[0],
      last_date: el.event_dates.slice(-1)[0],
      low_price: el.event_tickets_price.length !== 0 ? parseInt(el.event_tickets_price[0]) : "none",
      average_price: el.event_tickets_price.length !== 0 ? (el.event_tickets_price.reduce((a, b) => parseInt(a) + parseInt(b)) / el.event_tickets_price.length)
        : "none"
    }
  })
}


module.exports = {
  populateArr,
  populateObj
}
