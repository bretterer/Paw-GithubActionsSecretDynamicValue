# Paw.cloud Github Actions Secret Dynamic Value
This plugin allows you to generate the LibSodium encrypted secret from within Paw.

![Paw Usage](./.github/images/pawUsage.png)


## Usage
When creating a request to the github API, you can add this dynamic value extenison to automatically encrypt the secret for the request per the [Github Secrets Documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/actions#secrets). Follow the steps below to begin making calls through Paw.cloud to generate secrets for your repo.

1. [Get your repo's public key](https://docs.github.com/en/free-pro-team@latest/rest/reference/actions#get-a-repository-public-key)
![Public Key Request](./.github/images/publicKeyRequest.png)
2. From the response of the call from step 1, get the dynamic value path for the `key`. Also make note of the dynamic value path for the `key_id`
![Copy Key Path](./.github/images/copyKeyPathDV.png)
3. Use the `key` and `key_id` path in the request to create a new secret.
![Key Path Usage](./.github/images/keyPathUsage.png)


## Contributing

### Prerequisites
```shell
nvm install
nvm use
npm install
```

### Build
```shell
npm run build
```

### Install
This will install the paw extension into the default location for paw extensions.
```shell
make install
```

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!

Copyright © 2020 Brian Retterer