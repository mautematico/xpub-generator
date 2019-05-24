import Bitcoin = require('bitcoinjs-lib');
import b58 = require('bs58check');

export class y2x {
  public static yPubOrNot(yPub: string): boolean {
    const version = b58.decode(yPub).slice(0, 4);
    return version.equals(Buffer.from('049d7cb2', 'hex'));
  }

  public static hNode2SegwitP2sh(hdNode: Bitcoin.HDNode): string {
    const pubkeyBuf = hdNode.keyPair.getPublicKeyBuffer();
    const hash = Bitcoin.crypto.hash160(pubkeyBuf);
    const redeemScript = Bitcoin.script.witnessPubKeyHash.output.encode(hash);
    const hash2 = Bitcoin.crypto.hash160(redeemScript);
    const scriptPubkey = Bitcoin.script.scriptHash.output.encode(hash2);
    return Bitcoin.address.fromOutputScript(scriptPubkey);
  }

  constructor() {}
}
