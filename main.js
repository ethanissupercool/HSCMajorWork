refreshList();
console.log('Number of Users: '+Object.keys(JSON.parse(localStorage.getItem('users'))).length);
console.log('Currently selected User: '+localStorage.getItem('selectedUser'));

if (localStorage.getItem('users') === null){
  localStorage.setItem('users', '[]');
  console.log("Created localStorage 'users' item.");
}

function refreshList(){
  // $('#user-table-body').append('<tr><td>test</td></tr>')
  let userParsed = JSON.parse(localStorage.getItem('users'))
  let userCount = Object.keys(userParsed).length;
  $('#user-table-body').empty();
  for (var i = 0; i < userCount; i++) {
    $('#user-table-body').append('<tr><td>'+userParsed[i].name+'</td><td><button onclick=selectUser('+i+') type="button" class="btn btn-link">Select</button></td><td><button type="button" onclick="deleteUser('+i+')" class="btn btn-link">Delete</button></td></tr>')
  }
}

function selectUser(userID){
  localStorage.setItem('selectedUser', userID);
  console.log(localStorage.getItem('selectedUser'));
}

function deleteUser(userID){
  var currentUsers = JSON.parse(localStorage.getItem('users'));
  currentUsers.splice(userID, 1);
  var userJSON = JSON.stringify(currentUsers);
  localStorage.setItem('users', userJSON);
  console.log(JSON.parse(localStorage.getItem('users')));
  refreshList();
}


function newUser(){
  let localStore = JSON.stringify(localStorage, null, '\t');
  console.log(localStore)
  var currentUsers = JSON.parse(localStorage.getItem('users'));
  console.log(currentUsers);
  currentUsers.push({name: $(".desiredName").val(),
  monthlyIncome: $(".monthlyIncome").val(),
  });
  var userJSON = JSON.stringify(currentUsers);
  localStorage.setItem('users', userJSON);
  console.log(JSON.parse(localStorage.getItem('users')));
  console.log("New user created.");
  refreshList();

  // var user+name = {
  // name: name,
  // monthlyIncome: monthlyIncome,
  // desiredMonthlySpending: desiredMonthlySpending,
  // homeUtility: 0,
  // insuranceFinancial: 0,
  // groceries: 0,
  // personalMedical: 0,
  // entertainmentEatout: 0,
  // transportAuto: 0,
  // children: 0,
  // };
}
