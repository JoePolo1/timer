
for (const element of process.argv) {
  if (element >= 0){
    let beepDelay = element * 1000
    setTimeout(() => process.stdout.write('\x07'), beepDelay);
  }  
};
