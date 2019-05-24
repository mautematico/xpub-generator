import Bitcoin = require('bitcoinjs-lib');
import { XPubGenerator } from '../src/xpub-generator';

test('Should correctly derive bitcoin segwith-p2sh ypub', () => {
  const g = new XPubGenerator('ypub6ZFTrS5ft8MxDkwWq6xZ7LVhtCTYQRj13t6jP8prtsBAvt49XvtJVZEN1L6mdDwbUQk5UwyJCguhX9tFsyad3DAzaazGQz1R8QcYpdQKrSJ');
  expect(g.nthReceiving(0)).toBe('333ogD3xy2t12DwTjb4QCcvcmtYubnApJA');
  expect(g.nthReceiving(5)).toBe('358VWYzdohd2q6nn2YtfGh1EwuZgFqHMdH');
  expect(g.nthReceiving(10)).toBe('3MyKTKDx1KTBjfite3pvv2xqurkw5MytTa');
});

test('Should correctly derive bitcoin legacy xpub', () => {
  const g = new XPubGenerator('xpub6Dkk3JHRPZ8JnpXtNh4Gv4gxYRna5yyDAFZAFARsZUEgzLYasmGcK9RQfcBAfqnmUaCTtXwFLSng4Bkba98AKhzTU18S3oDCUQN9CFKeQrb');
  expect(g.nthReceiving(0)).toBe('1CWYsXwsTxaBEaXD8Mwcbpw2vzRqJYk7JZ');
  expect(g.nthReceiving(5)).toBe('1MQmDnq9No3NNwybFJvpb4f1eMeBR342xf');
  expect(g.nthReceiving(10)).toBe('1GLhcBQpPxAhRf1YLcHicsUNfQzXE5uVSN');
});

test('Should correctly derive litecoin legacy Ltub', () => {
  const g = new XPubGenerator('Ltub2bceuFH1pAQZgaiXxaZb2p5MqX4sFNvTJLVRSkq4HAphEo6Tqb2EXHtZKCGUUYEb8SzwnmFQyjCwbFNFQQgNfbQZxv87LxwxkHraqXuEtYr', Bitcoin.networks.litecoin);
  expect(g.nthReceiving(0)).toBe('LcnpCXjFibqPnyiy6qyGcxo17yD65SGJvS');
  expect(g.nthReceiving(5)).toBe('LPLmqgUr3VMSFNtxbXPYM6eZ8TuCof9Qpy');
  expect(g.nthReceiving(10)).toBe('LdTgUPeLsECKGK8vduAKRMqkKBDw7UhPdK');
});

test('Should correctly derive bitcoin and litecoin testnet legacy tpub', () => {
  const g = new XPubGenerator('tpubD6NzVbkrYhZ4WcAmnGULZBnGaiVjv1rTL8XRCrfxJXKpKF2zurpJrVqNdtvK4W1dEUcfaPMMhaZKbaKh15UXhx8YbzJgPBh6ES8v38N65PN', Bitcoin.networks.testnet);
  expect(g.nthReceiving(0)).toBe('mhXCDBK3yThZ9ubgJq3c5f6uEB2wkuYWtE');
  expect(g.nthReceiving(5)).toBe('moKbGUNpvWtK97RQXJcR1qEwv8y8rAKJ3d');
  expect(g.nthReceiving(10)).toBe('mkfJ6wCT6EeWNmKnBwMCu4r2fAW63X3dA2');
});