'use strict'

const Encryption = use('Encryption')

const UserCardHook = exports = module.exports = {}

UserCardHook.EncryptCodeAndNum = async (modelInstance) => {
  modelInstance.card_nums = await Encryption.encrypt(modelInstance.card_nums)
  modelInstance.security_code = await Encryption.encrypt(modelInstance.security_code)
}

UserCardHook.DecriptCodeAndNum = async (modelInstance) => {
  modelInstance.map(el => {
    el.card_nums = Encryption.decrypt(el.card_nums)
    el.security_code = Encryption.decrypt(el.security_code)
  })

}
