class Engineer {

    constructor (name, email, id, gitHub) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.gitHub = gitHub;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getGitHub(){
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;