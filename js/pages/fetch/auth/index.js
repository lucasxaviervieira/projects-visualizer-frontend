async function tokenOnCache(accessToken) {
  localStorage.setItem('BearerToken', accessToken);
}

async function authApi(user, pass) {
  await fetch('http://ambienteteste/api/routes/auth.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user,
      password: pass
    })
  })
    .then(response => response.json())
    .then(async data => {
      if (data.token) {
        await tokenOnCache(data.token)
      } else {
        console.error('Error:', data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function encryptPass(password) {
  const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDVPubv28nnbsetjilPQ0IT/GR
iV0U7KtadBlFO03BXLC8Bt+JtuqwMT6OZ5y0lUVS36PxxwzFW/nDKI0B1bI5o3UB
LwQbrpq+KC2uovwmZm6xZVAWBI5f0KXrayrbTouPnm9CCjlStmeasX32JaFzjqnI
8mHojundTn/PfSOS+wIDAQAB
-----END PUBLIC KEY-----`

  const crypt = new JSEncrypt()

  crypt.setPublicKey(publicKey);

  const encrypted = crypt.encrypt(password);
  return encrypted
}


export { authApi, encryptPass }