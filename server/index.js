const Test = require('./test');
const arr = [1,2,3,4,5];

const doubleArr = arr.map(e => e*2);
const sumArr = arr.reduce((p,c) => p+c, 0);
const evenElms = arr.filter(e => e%2 === 0);
console.log('doubleArr: ', doubleArr);
console.log('sumArr: ', sumArr);
console.log('evenElements:: ', evenElms);

const wait = tm => setTimeout(()=> console.log('setTimeout is in progress'),tm);

const asyncAwaitDemo = async tm => {
    console.log('calling setTimeout');
    await wait(tm);
    console.log('setTimeout is called');
};

asyncAwaitDemo(1000); //waiting for 1000 milli seconds

Test.test("Babel is working");
