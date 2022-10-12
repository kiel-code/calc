let numeric = '';
let final = [];
let symbolic = [];

document.querySelector('#btn').addEventListener('click', (e) => {
  switch (e.target.innerText) {
    case '1':
      document.getElementById('display').innerText += '1';
      numeric += '1';
      break;
    case '2':
      document.getElementById('display').innerText += '2';
      numeric += '2';
      break;
    case '3':
      document.getElementById('display').innerText += '3';
      numeric += '3';
      break;
    case '4':
      document.getElementById('display').innerText += '4';
      numeric += '4';
      break;
    case '5':
      document.getElementById('display').innerText += '5';
      numeric += '5';
      break;
    case '6':
      document.getElementById('display').innerText += '6';
      numeric += '6';
      break;
    case '7':
      document.getElementById('display').innerText += '7';
      numeric += '7';
      break;
    case '8':
      document.getElementById('display').innerText += '8';
      numeric += '8';
      break;
    case '9':
      document.getElementById('display').innerText += '9';
      numeric += '9';
      break;
      case '0':
      document.getElementById('display').innerText += '0';
      numeric += '0';
      break;
    case '=':
      document.getElementById('display').innerText += '=';
      final.push(parseInt(numeric));
      numeric = '';
      // result.final
      break;
    case '+':
      document.getElementById('display').innerText += '+';
      symbolic.push('+');
      final.push(parseInt(numeric));
      numeric = '';
      break;
    case '-':
      document.getElementById('display').innerText += '-';
      symbolic.push('-');
      final.push(parseInt(numeric));
      numeric = '';
      break;
    case '*':
      document.getElementById('display').innerText += '*';
      symbolic.push('*');
      final.push(parseInt(numeric));
      numeric = '';
      break;
    case '/':
      document.getElementById('display').innerText += '/';
      symbolic.push('/');
      final.push(parseInt(numeric));
      numeric = '';
      break;
  }
  
  let result = final[0];

  for (let z in final) {
    if (z > 0) {
      if (symbolic[z - 1] === '+'){
        result += final[z];
      } else if (symbolic[z - 1] === '-') {
        result -= final[z];
      } else if (symbolic[z - 1] === '*') {
        result *= final[z];
      } else if (symbolic[z - 1] === '/') {
        result /= final[z];
      }
      
    }
  }
  console.log(result)
})

// let x = 5;
// let y = 5;
// let q = x * y;
// console.log(q)