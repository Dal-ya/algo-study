// Blockchain
// Block
// Data, Hash string, index, PreviousHash, time
const crypto = require('crypto-js');
const block = {
  data: 'hello',
  hash: 'hash',
  index: 0,
  preHash: null,
  time: 123412341234,
  // UnixTimeStamp
};
const blockchain = [block];

// Block class
class Block {
  constructor(data, hash, index, preHash, time) {
    this.data = data;
    this.hash = hash;
    this.index = index;
    this.preHash = preHash;
    this.time = time;
  }

  // 정적 메소드
  static makeHash(index, preHash, time, data) {
    return crypto.SHA256(index + preHash + time + data).toString();
  }
}

const getBlockchain = () => blockchain;
const getLastBlock = () => getBlockchain()[getBlockchain().length - 1];
const getTimestamp = () => new Date().getTime();
// Make Block
const createBlock = (data) => {
  const preBlock = getLastBlock();
  const index = preBlock.index + 1;
  const preHash = preBlock.hash;
  const time = getTimestamp();
  const hash = Block.makeHash(index, preHash, time, data);

  const newBlock = new Block(data, hash, index, preHash, time);
  return newBlock;
};

blockchain.push(createBlock('first'));
blockchain.push(createBlock('second'));
blockchain.push(createBlock('third'));
blockchain.push(createBlock('fourth'));

console.log(blockchain);
