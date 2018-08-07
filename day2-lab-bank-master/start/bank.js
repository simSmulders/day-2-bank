const currentUser = {
  wallet: 10
}

const accounts = [
  {
    id: 1,
    pin: 1234,
    name: 'Mimi Magusin',
    balance: 2315
  },
  {
    id: 2,
    pin: 2727,
    name: 'Wouter de Vos',
    balance: 9001
  },
  {
    id: 3,
    pin: 4567,
    name: 'Bram Koot',
    balance: 6754
  },
]

let currentAccount = null

function login(){
  const accountId = parseInt(window.prompt('Enter ID'))
  const pin = parseInt(window.prompt('Enter pin'))
  
  for (let index = 0; index < accounts.length; index++) {
    const accountToCheck = accounts[index];
    if (accountToCheck.id === accountId && accountsToCheck.pin === pin) {
      currentAccount = accountToCheck
      break

    }
  }

  if (currentAccount !== null) {
    window.alert('Login successfull')
  } else {
    window.alert('Login failed')
  }

  //accounts.forEach(function(account) {
  //  if (account.id === accountId && account.pin === pin) {
  //   console.log(`Login successfull`)
  //    currentAccount = account
  //  } else {
  //    window.alert(`Login failed`)
  //  }
  //})
}

function createAccount(name, pin) {
  const account = {
    id:accounts.length + 1,
    pin: pin,
    name: name,
    balance: 0
  }

  accounts.push(account)

}
function openAccount() {
  const newUser = window.prompt('Please enter your name')
  const newPin = parseInt(window.prompt('Please enter a pin of 4 digits'))

  createAccount(newUser, newPin)

  initialMenu()

}

// declare a function openAccount
// it should 
// - ask user for their name and store it in a variable
// - ask the user for a pin and store it in a variable
// - using the userInput create an object with id, pin, name, and balance properties
// - balance should be 0, id should be a unique number (can be accounts.length + 1 for now)
// - add this new account object to the array of accounts

function initialMenu(){
  const userInput = window.prompt(`What would you like to do today?
  Please enter a number:
  If you already have an account press 1
  For opening a new account press 2
  To quit press 3`)

  switch (userInput) {
    case '1':
      login()
      break;

    // implement case 2, let it call a function 'openAccount' (look at case '1')
    case '2':
      openAccount()
      break;

    case '3':
      window.alert('Bye!')
      break;

    default:
      initialMenu()
      break;
  }
}

function start(){
  initialMenu()
}

