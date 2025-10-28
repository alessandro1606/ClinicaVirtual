const URL = 'https://api-exame-dot-api-samples-423102.uc.r.appspot.com/api/exames';

const AUTH_TOKEN = 'Bearer 12108569';

export async function findAll() {
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: AUTH_TOKEN,
       'Content-Type': 'application/json',
    },
  };

  const httpResponse = await fetch(URL, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    const error = await httpResponse.text();
    throw new Error(error);
  }
}

export async function deleteById(id) {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: AUTH_TOKEN,
    },
  };

  const httpResponse = await fetch(`${URL}/${id}`, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    const error = await httpResponse.text();
    throw new Error(error);
  }
}

export async function insert(descricao, dataexame, preco, paciente) {
  const body = JSON.stringify({
    descricao,
    dataexame,
    preco,
    paciente,
  });

  const requestInit = {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN,
      'Content-Type': 'application/json',
    },
    body,
  };

  const httpResponse = await fetch(URL, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    const erro = await httpResponse.text();
    throw new Error(erro);
  }
}

export async function update(id, descricao, dataexame, preco, paciente) {
  const body = JSON.stringify({
    descricao,
    dataexame,
    preco,
    paciente,
  });

  const requestInit = {
    method: 'PUT',
    headers: {
      Authorization: AUTH_TOKEN,
      'Content-Type': 'application/json',
    },
    body,
  };

  const httpResponse = await fetch(`${URL}/${id}`, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    const erro = await httpResponse.text();
    throw new Error(erro);
  }
}