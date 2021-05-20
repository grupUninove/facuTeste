export function GET_PRODUCT() {
  return {
    url: `http://127.0.0.1/PHP_TRABALHO/Src/Controller/ProductController.php`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    },
  };
}

export function GET_PRODUCT_CODIGO(body) {
  return {
    url: `http://127.0.0.1/PHP_TRABALHO/Src/Controller/ProductController.php?codigo=${body}`,
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    },
  };
}

export function POST_PRODUCT(body) {
  return {
    url: `http://127.0.0.1/PHP_TRABALHO/Src/Controller/ProductController.php`,
    options: {
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
}

export function PUT_PRODUCT(body) {
  return {
    url: `http://127.0.0.1/PHP_TRABALHO/Src/Controller/ProductController.php`,
    options: {
      method: 'PUT',
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_PRODUCT(body) {
  return {
    url: `http://127.0.0.1/PHP_TRABALHO/Src/Controller/ProductController.php`,
    options: {
      method: 'DELETE',
      body: JSON.stringify(body),
    },
  };
}