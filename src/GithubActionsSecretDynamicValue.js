const sodium = require('tweetsodium');
const randomBytes = require('randombytes');
const nacl = require('tweetnacl');

@registerDynamicValueClass
class GithubActionsSecretDynamicValue {
  static identifier = 'com.bretterer.paw.GithubActionsSecretDynamicValue'
  static title = 'Github Actions Secret'
  static help = 'https://github.com/bretterer/paw-GithubActionsSecretDynamicValue'
  static inputs = [
    InputField("publicKey", "Public Key", "String", {persisted: true}),
    InputField("secret", "Secret", "String"),
  ]

  evaluate(context) {
    nacl.setPRNG(function(x, n) {
      x = randomBytes(n);
      return x;
    });
    const messageBytes = Buffer.from(this.secret);
    const keyBytes = Buffer.from(this.publicKey, 'base64');

    const encryptedBytes = sodium.seal(messageBytes, keyBytes);
    return Buffer.from(encryptedBytes).toString('base64');

  }
}

