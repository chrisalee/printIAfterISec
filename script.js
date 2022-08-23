function delay (i) {
  return new Promise(resolve => {
    setTimeout(function(){
      resolve(i);
     }, i*1000);
  });
}

async function test() {
  console.log("start");
  for(let i = 0; i < 11; i++) {
    const result = await delay(i);
    console.og(result);
  }
  console.log("end");
}

test();
     
