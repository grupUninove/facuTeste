export function GET_PRODUCT() {
  return {
    url: `http://187.35.128.157:71/GLOBAL/Controller/CCPP/Product.php`,
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
    url: `http://187.35.128.157:71/GLOBAL/Controller/CCPP/Product.php?codigo=${body}`,
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
    url: `http://187.35.128.157:71/GLOBAL/Controller/CCPP/Product.php`,
    options: {
      method: 'POST',
      body: JSON.stringify(body),
    },
  };
}

export function PUT_PRODUCT(body) {
  return {
    url: `http://187.35.128.157:71/GLOBAL/Controller/CCPP/Product.php`,
    options: {
      method: 'PUT',
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_PRODUCT(body) {
  return {
    url: `http://187.35.128.157:71/GLOBAL/Controller/CCPP/Product.php`,
    options: {
      method: 'DELETE',
      body: JSON.stringify(body),
    },
  };
}