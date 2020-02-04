refreshList();

if (localStorage.getItem('users') === null){
  localStorage.setItem('users', '[]');
  console.log("OMW");
}

function refreshList(){
  // $('#user-table-body').append('<tr><td>test</td></tr>')
  let userParsed = JSON.parse(localStorage.getItem('users'))
  let userCount = Object.keys(userParsed).length;
  console.log(userCount);
  $('#user-table-body').empty();
  for (var i = 0; i < userCount; i++) {
    $('#user-table-body').append('<tr><td>'+userParsed[i].name+'</td><td><button type="button" class="btn btn-link">Open</button></td><td><button type="button" onclick="deleteUser('+i+')" class="btn btn-link">Delete</button></td></tr>')
  }
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
  currentUsers.push({name: $(".desiredName").val(), monthlyIncome: $(".monthlyIncome").val(), desiredMonthlySpending: $(".desiredMonthlySpending").val()});
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
