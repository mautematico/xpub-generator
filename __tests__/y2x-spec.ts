import { y2x } from '../src/y2x';

test('Should recognize ypub as ypub', () => {
  expect(
    y2x.yPubOrNot(
      'ypub6ZFTrS5ft8MxDkwWq6xZ7LVhtCTYQRj13t6jP8prtsBAvt49XvtJVZEN1L6mdDwbUQk5UwyJCguhX9tFsyad3DAzaazGQz1R8QcYpdQKrSJ'
    )
  ).toBe(true);
});

test('Should recognize xpub as no-ypub', () => {
  expect(
    y2x.yPubOrNot(
      'xpub6Dkk3JHRPZ8JnpXtNh4Gv4gxYRna5yyDAFZAFARsZUEgzLYasmGcK9RQfcBAfqnmUaCTtXwFLSng4Bkba98AKhzTU18S3oDCUQN9CFKeQrb'
    )
  ).toBe(false);
});

test('Should recognize bitcoin tpub as no-ypub', () => {
  expect(
    y2x.yPubOrNot(
      'tpubD6NzVbkrYhZ4WcAmnGULZBnGaiVjv1rTL8XRCrfxJXKpKF2zurpJrVqNdtvK4W1dEUcfaPMMhaZKbaKh15UXhx8YbzJgPBh6ES8v38N65PN'
    )
  ).toBe(false);
});
