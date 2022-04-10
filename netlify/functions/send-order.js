const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const body = event.body;

  const result = await fetch(
    'https://frosty-wood-6558.getsandbox.com:443/dishes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    }
  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return {
    statusCode: result.status,
    body: JSON.stringify(result),
  };
};
