const db = global.db;
module.exports = {
    insert,
    select
};

async function insert(params) {
    let data = await db.json('insertUser', [
        params.name,
        params.email
    ]);

    let error;

    switch (data.executionCode) {
        case 1:
            error = data;
            error.httpCode = 409;
            break;
    }
    if (error)
        throw error;
}

async function select() {
  let data = await db.json('selectusers');

  let error;

  switch (data.executionCode) {
    case 1:
      error = data;
      error.httpCode = 409;
      break;
  }
  if (error)
    throw error;

  return data;
}

