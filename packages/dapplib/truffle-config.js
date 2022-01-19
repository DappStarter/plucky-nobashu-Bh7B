require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rescue rural equip inflict dry equal general'; 
let testAccounts = [
"0x76b815dd01c3db358251f0306902a18aac9b31d1e9f9750f1a4f6c5c647d4587",
"0xcb4515acb2818ba464ac83bcff9badf301db231d9f8997cf6724a85cf69a4248",
"0x3f1d599e6d45286cedd079f05353e91dd4b57e49d2bdd7a476a5d1cf25d0af31",
"0xc0ec64034cfcd7dd5e93b4a884ab088a3ac1f55df61c051f7ad14f30b4f43be6",
"0x39562e7750041f86edc2abf7e695d07d57b7cbae047e1a923ef194556e3d84b6",
"0x4c7baecf262c5e1e8a7239f27f5f9952b6492c61cc26a578315ba249a431251d",
"0xebc8125e439fa286c27bf987fe753994bc75a1c27d41463bee08eccebdff1526",
"0x4fbd90ccb14f4ba3bd858f94bb7059bd1aef6217ae769032946d24c7876a0f35",
"0xa460682261d01199872093d6f9df4ae0d1515c4581da47d72f0bea2f5b01620f",
"0x05a63ce74a11ae4f12199015770222ac60cb496ea48766b14003bb1d895c403c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

