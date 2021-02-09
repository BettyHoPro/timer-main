process.argv.slice(2).sort((a, b) => a - b).map(x => Number(x)).filter(x => x > 0).forEach(x => setTimeout(() => {
  process.stdout.write('\x07');
  console.log(`beep! : ${x}`);
}, x * 1000));