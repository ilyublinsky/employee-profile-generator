// reteriving file that will be tested.
const Manager = require('../js/manager');

// making sure all added information is working to be as expected.
describe("Get employee's information.", () => {
    it("This test generates the employee's name.", () => {
      const name = "Sally Hayes";
      const newName = new Manager(name);
  
      expect(newName.name).toBe(name);
    })
  });

  it("This test generates the employee's id.", () => {
    const id = 1717;
    const newId = new Manager("human", id);

    expect(newId.getId()).toBe("human", id);
  });

  it("This test generates the employee's email.", () => {
    const email = "example@gmail.com";
    const newEmail = new Manager("human", 1717, email);

    expect(newEmail.email).toBe("example@gmail.com", email);
  });

  it("This test checks if the role returns employee.", () => {
    const position = "Employee";
    const newPosition = new Manager("human", 1717, email, "example@gmail.com", position);

    expect(newPosition.getRole()).toBe(position);
  });


  it("This test checks the whole Employee class.", () => {
    const managerClass = new Manager();

    expect(typeof (employeeClass)).toBe("");
  });