const statement = 'I am a hard working person';
const changeStatement = statement.split(' ').reverse().join(' ');
console.log(changeStatement);

// Split (' ') -> 1 space means string er prottek ta latter k alada kore nibe
// Split ('  ') -> 2 space means string er prottek ta word k alada kore nibe
// join('') -> 0 space means string er sob gulo word aksathe kore dibe 
// join(' ') -> 1 space means same as main string. akta word r por gap maintain kore sentence banabe