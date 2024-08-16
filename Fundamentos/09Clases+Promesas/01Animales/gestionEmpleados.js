class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getEmployeeInfo() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Nombre: ${this.name}, Salario: ${this.salary}`);
        }, 1000);
      });
    }
  }

  class Manager extends Employee {
    constructor(name, salary, team) {
      super(name, salary);
      this.team = team;
    }
  
    getTeamInfo() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Equipo: ${this.team}`);
        }, 1000);
      });
    }
  }

  async function displayEmployeeInfo(employee) {
    try {
      const info = await employee.getEmployeeInfo();
      console.log(info);
  
      if (employee instanceof Manager) {
        const team = await employee.getTeamInfo();
        console.log(team);
      }
    } catch (error) {
      console.error('Error al obtener información del empleado:', error);
    }
  }