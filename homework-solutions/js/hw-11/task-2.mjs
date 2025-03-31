class Employee {
  // Ваш код
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error('First name must be between 2 and 50 characters and contain only Latin letters.');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error('Last name must be between 2 and 50 characters and contain only Latin letters.');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.trim().length === 0 || !/^[A-Za-z ]+$/.test(value)) {
      throw new Error('Profession must contain only Latin letters and spaces, and cannot be empty.');
    }
    this._profession = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Salary must be a valid number greater than 0 and less than 10000.');
    }
    this._salary = value;
  }
}

class Company {
  // Ваш код
  constructor(name, registrationNumber, address) {
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.address = address;
    this.employees = [];
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Only Employee instances can be added.');
    }
    this.employees.push(employee);
  }

  findEmployeeByName(firstName) {
    const employee = this.employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with first name '${firstName}' not found.`);
    }
    return employee;
  }

  getEmployeeIndex(firstName) {
    return this.employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee with first name '${firstName}' not found.`);
    }
    this.employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.employees.reduce((sum, emp) => sum + emp.salary, 0);
  }

  getEmployees() {
    return this.employees;
  }
}

export { Employee, Company };
