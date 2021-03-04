// reteriving file that will be tested.
const Manager = require('../js/manager');

describe("These tests retrieve manager's information.", () => {
    it("This test generates the manager's name.", () => {
      const name = "Jenny";
      const newName = new Manager(name);
  
      expect(newName.name).toBe(name);
    })
  });

  it("This test generates the manager's id.", () => {
    const id = 1111;
    const newId = new Manager(id);

    expect(newId.id).toBe(id.name);
  });

  it("This test generates the manager's email.", () => {
    const email = "example@gmail.com";
    const newEmail = new Manager(email);

    expect(newEmail.email).toBe(email.name);
  });

  it("This test generates the manager's office number.", () => {
    const officeNum = "2068675309";
    const newOfficeNum = new Manager(officeNum);

    expect(newOfficeNum.officeNum).toBe(officeNum.name);
  });

  it("This test checks if the role returns employee.", () => {
    const position = "Manager";
    const newPosition = new Manager(position.name);

    expect(newPosition.getRole()).toBe(position);
  });


  it("This test checks the whole Employee class.", () => {
    const ManagerClass = new Manager();

    expect(typeof (ManagerClass)).toBe("object");
  });