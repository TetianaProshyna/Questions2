const caps = 'VERY COOL';
const lc = caps.toLowerCase();
const lcio = lc.indexOf(' ');
console.log(lc.substr(lcio + 1));

// Варианты ответов:
// 1 - very;
// 2 - COOL;
// 3 - '';
// 4 - cool;
