class Manager {

    constructor (name, email, id, officeNum) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNum;
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

    getOfficeNum(){
        return this.officeNum
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;