import { OpenpanelSdk } from "@openpanel/sdk";

const op = new OpenpanelSdk({
  clientId: '6381f891-1e79-4cc5-a844-09955c08f799',
  clientSecret: '12959d5d-617d-4f78-9371-48874cf8eea2'
})

op.event('foo', {
  bar: 'baz'
})