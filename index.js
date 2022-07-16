import { webcrypto as crypto } from "node:crypto";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

const exportedKey = await crypto.subtle.exportKey("jwk", key);

console.log(JSON.stringify(exportedKey));
