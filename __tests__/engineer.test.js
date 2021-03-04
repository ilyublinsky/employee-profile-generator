// reteriving file that will be tested.
const Engineer = require('../js/engineer');

// making sure all added information is working to be as expected.
describe("Get engineer's information.", () => {
    it("This test generates the engineer's name.", () => {
      const name = "Test Master";
      const newName = new Engineer(name);
  
      expect(newName.name).toBe(name);
    })
  });

  it("This test generates the engineer's id.", () => {
    const id = 8080;
    const newId = new Engineer(id);

    expect(newId.id).toBe(id.name);
  });

  it("This test generates the engineer's email.", () => {
    const email = "example@gmail.com";
    const newEmail = new Engineer(email);

    expect(newEmail.email).toBe(email.name);
  });

  it("This test generates the engineer's github.", () => {
    const gitHub = "testMasterGitHub";
    const newGitHub = new Engineer(gitHub);

    expect(newGitHub.gitHub).toBe(gitHub.name);
  });

  it("This test checks if the role returns engineer.", () => {
    const position = "Engineer";
    const newPosition = new Engineer(position.name);

    expect(newPosition.getRole()).toBe(position);
  });


  it("This test checks the whole Employee class.", () => {
    const EngineerClass = new Engineer();

    expect(typeof (EngineerClass)).toBe("object");
  });