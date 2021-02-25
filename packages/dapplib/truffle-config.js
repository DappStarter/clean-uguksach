require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword struggle recipe stick hover gesture brave army gas'; 
let testAccounts = [
"0xa035e28663e842feaa6741e2e8d2c7ddf9123f41106c48dc85dd570f37adcc3b",
"0x62d83cf48074d37f58845d9a13f7ab7a64fcea6a59fc5944e06c095840711203",
"0x0f4547b1c9c31ab4aa9b9d03e50a417b12dee327d3cae8034c24e0581daef977",
"0x5e408e8d1fd24ede93ca5b0abcf5a3392d6f0a82f5f8ae9b414926e7e517e3b2",
"0xd7f43842268429a637c3dc81a23a9cbb9ac24e1cb3b5aefdc074e9a8af6c9122",
"0xf1b07f2888da905fd83d4ed7ef7603e710500a475f951849338fc0911ec95947",
"0xd8f8df5161a6c7f4731002138c11646519374d380b957a20fd9ab95b521d4962",
"0x719c8bca7751509391c4f37e7102ca2b7ba363c9c7f1d4b691d3aa91718dfdfa",
"0x5617ae57ecad58d6a31e17b6903ef386143c2141609115165bfcc9225199fcef",
"0x08c1eca9247307638478d79d04512e51bdfe5fd3929e1821e092451fe3c1efaf"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
