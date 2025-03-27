class Employee {
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (value > 0) {
      this._salary = value;
    } else {
      throw new Error('Зарплата должна быть больше 0');
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this._employees = [];
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this._employees.push(employee);
    } else {
      throw new Error('Переданный объект не является экземпляром класса Employee.');
    }
  }

  getEmployees() {
    return this._employees;
  }

  getInfo() {
    return `Company: ${this._title}\nAddress: ${this._address}\nEmployees: ${this._employees.length}`;
  }
}

export { Employee, Company };
