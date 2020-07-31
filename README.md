# pmisify
promisify async function

- async function should have at less one callback function as parameter.
- the callback function should be the last parameter.
- the async function should fulfill only one async task.
- how to use? see the code in demo.js

output of demo.js,
```
step1
this is 1.txt.
step2
this is 2.txt.
step3
this is 3.txt.
```

if something wrong, e.g. 3.txt is not exsit, then will catch the error, ouput will be,
```
step1
this is 1.txt.
step2
this is 2.txt.
[Error: ENOENT: no such file or directory, open 'C:\3.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\3.txt'
}
```


Cheers
