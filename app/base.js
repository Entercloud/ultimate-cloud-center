

#inhertient base cloudsdk 
JS
```
function getEnvKey(isCloudMember) {
  return (isCloudMember ? 'alicloud' : 'ecdc');
}

console.log(getEnvKey(true));
// Expected output: "alicloud"

console.log(getEnvKey(false));
// Expected output: "ecdc"

console.log(getEnvKey(null));
// Expected output: "ecdc"

```

