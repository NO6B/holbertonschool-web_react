interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 30,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);