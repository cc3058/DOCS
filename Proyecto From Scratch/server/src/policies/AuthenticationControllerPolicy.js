const Joi = require('joi')

module.exports ={
  signup (req, res, next) {

    const schema = {
      email:Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      type: Joi.string().required().valid('Encargado','Estudiante','Administrador')
    }

    const {error, value} = Joi.validate(req.body, schema)
    if (error){
      switch(error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'Debe ingresar un correo valido'
          })
          break
        case 'password':
          res.status(400).send({
            error: `La contraseña debe cumplir las siguientes reglas:
              <br>
              1. Solo debe incluir los siguientes caracteres: minusculas, mayusculas y digitos
              <br>
              2. Debe ser de al menos 8 caracteres y no mas de 32
             `
          })
        case 'type':
          res.status(400).send({
            error: 'El tipo de usuario solo puede ser: Encargado, Estudiante, Administrador'
          })
          break

        default:
        res.status(400).send({
          error: 'Informacion no valida'
        })
      }
    }else{
    next()
  }
  }
}
