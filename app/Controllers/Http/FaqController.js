'use strict'

const FAQ = use('App/Models/Faq')

class FaqController {

  async index() {
    const data = await FAQ.all()
    const faqs = data.toJSON()
    const res = await this.addFalse(faqs)
    console.log("Adonis is using this route")
    return {
      res
    }
  }

  async addFalse(arr) {
    return await arr.map(el => {
      return {
        ...el,
        openFaq: false
      }
    })
  }
}

module.exports = FaqController
