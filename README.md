Two cases in .mocharc.json:

Typescript compiles, testdouble doesn't work:
```
"experimental-specifier-resolution=node",
"loader=ts-node/esm"
```

testdouble has a lengthy exception as indicated in the Git issue (same result whether 
changing the order, or including or excluding `experimental-specifier-resolution`:
```
"loader=ts-node/esm",
"loader=testdouble"
```