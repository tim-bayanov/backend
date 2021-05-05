const { SmartContract, Transaction } = require("./smartcontract");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('55a4a763e8cecc1f3a2391d584e2156d4fe060a3c228f202a0caacd6ef8bcd96');
const myWalletAddress = myKey.getPublic('hex'); 

let timCoin = new SmartContract();

const tx1 = new Transaction(myWalletAddress, 'Публичный ключ ', 10);
tx1.signTransaction(myKey);
timCoin.addTransaction(tx1);

console.log('\n Начало добычи...');
timCoin.minePendingTransactions(myWalletAddress);

console.log('\n Мой баланс = ', timCoin.getBalanceOfAddress(myWalletAddress));

/* СОЗДАНИЕ ТРАНЗАЦИИ
timCoin.createTransaction(new Transaction('address1', 'address2', 500));
timCoin.createTransaction(new Transaction('address2', 'address1', 50));
*/

/*MINING
console.log('\n Starting the miner...');
timCoin.minePendingTransactions('tim-address');

console.log('\n Balance tim = ', timCoin.getBalanceOfAddress('tim-address'));

console.log('\n Starting the miner again...');
timCoin.minePendingTransactions('tim-address');

console.log('\n Balance tim = ', timCoin.getBalanceOfAddress('tim-address')); */

/*
СОЗДАНИЕ БЛОКОВ
console.log('Mining block 1...');
timCoin.addBlock(new Block(1, "10/04/2017", { amount: 4 }));

console.log('Mining block 2...');
timCoin.addBlock(new Block(2, "10/04/2017", { amount: 10 })); */




/*
ПРОВЕРКА ВАЛИДНОСТИ
console.log('Blockchain Valid? ' + timCoin.isChainValid()); //Проверка Валидности (целостности) Цепи

timCoin.chain[1].data = {amount: 100 }; // добавим 100 единиц

timCoin.chain[1].hash = timCoin.chain[1].calculateHash(); // пробуем обхитрить

console.log('Blockchain Valid? ' + timCoin.isChainValid()); //Проверка Валидности (целостности) Цепи
//console.log(JSON.stringify(timCoin, null, 4)); */
