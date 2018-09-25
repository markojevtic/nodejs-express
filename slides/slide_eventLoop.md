###### Event loop

* Create a singleton counter with up/down 

```javascript
function main() {
    let scheduled = Date.now();
    setImmediate(function(){
        console.log('Async delay: '+(Date.now()-scheduled)+'ms');
    });
    console.log('Wait 5s')
    while( Date.now() - scheduled < 5000);
    console.log("End of main");
}
main();
```
Console output:
```
Wait 5s
End of main
Async delay: 5001ms
```
