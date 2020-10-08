'use strict'

const Hash = use('Hash')
const PromotorHook = exports = module.exports = {}

PromotorHook.HashCode = async (modelInstance) => {
  modelInstance.password = await Hash.make(modelInstance.password)

  if (modelInstance.user_role === "promotor")
    modelInstance.promotor_code = await Hash.make(modelInstance.promotor_code)
}
