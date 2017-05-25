var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];

function listStudents(object) {
  for (var i = 0; i < object.length; i++) {
    console.log(object[i].first_name + ' ' + object[i].last_name);
  }
}

listStudents(students);
