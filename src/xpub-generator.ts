import Bitcoin = require('bitcoinjs-lib');
import { y2x } from './y2x';

interface INetworkEnum {
  [key: string]: Bitcoin.Network
}

export class XPubGenerator {
  private xpub: string;
  private hdNode: Bitcoin.HDNode;
  private receiving: Bitcoin.HDNode;
  private change: Bitcoin.HDNode;

  constructor(xpub: string, networks: Bitcoin.Network[] | Bitcoin.Network | string = Bitcoin.networks.bitcoin) {
    this.xpub = xpub;
    if (typeof networks === 'string') {
      networks = (Bitcoin.networks as INetworkEnum)[networks];
    }
    this.hdNode = Bitcoin.HDNode.fromBase58(this.xpub, networks);
    this.receiving = this.hdNode.derive(0);
    this.change = this.hdNode.derive(1);
  }

  public nthReceiving(index: number): string {
    const hdNode = this.receiving.derive(index);
    if (y2x.yPubOrNot(this.xpub)) {
      return y2x.hNode2SegwitP2sh(hdNode);
    }
    return hdNode.getAddress().toString();

  }
  public nthChange(index: number): string {
    const hdNode = this.change.derive(index);
    if (y2x.yPubOrNot(this.xpub)) {
      return y2x.hNode2SegwitP2sh(hdNode);
    }
    return hdNode.getAddress().toString();
  }
}
