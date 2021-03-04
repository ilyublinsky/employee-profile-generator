// reteriving file that will be tested.
const Intern = require('../js/intern');

// making sure all added information is working to be as expected.
describe("Get intern's information.", () => {
  it("This test generates the intern's name.", () => {
    const name = "New Guy";
    const newName = new Intern(name);

    expect(newName.name).toBe(name);
  })
});

it("This test generates the intern's id.", () => {
  const id = 9999;
  const newId = new Intern(id);

  expect(newId.id).toBe(id.name);
});

it("This test generates the intern's email.", () => {
  const email = "example@gmail.com";
  const newEmail = new Intern(email);

  expect(newEmail.email).toBe(email.name);
});

it("This test generates the intern's school.", () => {
  const school = "University of illinois at Chicago";
  const newSchool = new Intern(school);

  expect(newSchool.school).toBe(school.name);
});

it("This test checks if the role returns intern.", () => {
  const position = "Intern";
  const newPosition = new Intern(position.name);

  expect(newPosition.getRole()).toBe(position);
});


it("This test checks the whole Intern class.", () => {
  const InternClass = new Intern();

  expect(typeof (InternClass)).toBe("object");
});