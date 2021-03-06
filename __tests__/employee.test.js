// reteriving file that will be tested.
const Employee = require('../js/employee');

// making sure all added information is working to be as expected.
describe("These tests retrieve employee's information.", () => {
    it("This test generates the employee's name.", () => {
      const name = "Sally Hayes";
      const newName = new Employee(name);
  
      expect(newName.name).toBe(name);
    })
  });

  it("This test generates the employee's id.", () => {
    const id = 1717;
    const newId = new Employee(id);

    expect(newId.id).toBe(id.name);
  });

  it("This test generates the employee's email.", () => {
    const email = "example@gmail.com";
    const newEmail = new Employee(email);

    expect(newEmail.email).toBe(email.name);
  });

  it("This test checks if the role returns employee.", () => {
    const position = "Employee";
    const newPosition = new Employee(position.name);

    expect(newPosition.getRole()).toBe(position);
  });


  it("This test checks the whole Employee class.", () => {
    const employeeClass = new Employee();

    expect(typeof (employeeClass)).toBe("object");
  });