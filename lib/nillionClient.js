// lib/nillionClient.js

class Nillion {
  async createSecret(secret) {
    return `secret_${secret}`;
  }

  async compare(secretInput, actualValue) {
    return secretInput === `secret_${actualValue}`;
  }
}

export { Nillion };
