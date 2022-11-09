const file = require('./file');
const users = [];
let usersInfo = '';
const propeties = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']


const input = file.split('\n').forEach(elm => {
  if(elm !== ''){
    usersInfo+=elm
  }else{
    users.push(usersInfo)
    usersInfo=''
  }
});
const filtered = users.filter(elm => propeties.every(x => elm.includes(x)))
const nunUsers = filtered.length

console.log(nunUsers, filtered[nunUsers-1])