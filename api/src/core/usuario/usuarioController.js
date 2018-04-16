const repository = require('./usuarioRepository');
const Validator = require('./../../api/validator/validator');


module.exports = {
  insert,
  select
};

async function insert(req, res) {
  const params = {
    name: req.body.name,
    email: req.body.email,
  };
  let validator = new Validator();
  validator.isRequired(params.name, 'Nome é requirido');
  validator.isRequired(params.email, 'Email é requirido');
  validator.isEmail(params.email, 'Email invalido');
  if (!validator.isValid()) {
    return res.finish({
      httpCode: 400,
      error: validator.errors()
    });
  }
  try {
    await repository.insert(params);
    return res.finish({
      message: 'Usuario cadastrado com sucesso'
    });
  } catch (error) {
    return res.finish({
      httpCode: error.httpCode || 500,
      error
    });
  }
}

async function select(req, res) {
  try {
    const data  = await repository.select();

    const result = Object.assign(data, {data: new Date()})
    return res.json(result);
  } catch (error) {
    return res.finish({
      message: 'Ocorreu um erro interno',
      error: error
    });
  }
}





