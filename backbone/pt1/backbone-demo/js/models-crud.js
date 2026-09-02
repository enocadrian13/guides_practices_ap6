const Person = Backbone.Model.extend({
    defaults: {
        name: "Unknown",
        age: 0
    }
});

export const PersonView = Backbone.View.extend({
    el: "#app",

    events: {
        "click #createBtn": "createPerson",
        "click .updateBtn": "updatePerson",
        "click .deleteBtn": "deletePerson"
    },

    initialize: function () {
        this.people = new Backbone.Collection();
        this.render();
    },

    render: function () {
        let html = `
            <h2>Backbone.js CRUD</h2>
            <input type="text" id="nameInput" placeholder="Name">
            <input type="number" id="ageInput" placeholder="Age">
            <button id="createBtn">Create Person</button>
            <hr>
            <h3>People List</h3>
        `;

        this.people.each((person, index) => {
            html += `
                <div>
                    <strong>${person.get("name")}</strong> - ${person.get("age")} years
                    <button class="updateBtn" data-index="${index}">Update</button>
                    <button class="deleteBtn" data-index="${index}">Delete</button>
                </div>
            `;
        });

        this.$el.html(html);
    },
    createPerson: function () {
        const name = this.$("#nameInput").val().trim();
        const age = parseInt(this.$("#ageInput").val());

        if (name && !isNaN(age)) {
            const person = new Person({ name, age });
            this.people.add(person);
            this.render();
        } else {
            alert("Enter valid name and age.");
        }
    },

    updatePerson: function (e) {
        const index = $(e.currentTarget).data("index");
        const person = this.people.at(index);

        const newName = prompt("Enter new name:", person.get("name"));
        const newAge = parseInt(prompt("Enter new age:", person.get("age")));

        if (newName && !isNaN(newAge)) {
            person.set({ name: newName, age: newAge });
            this.render();
        }
    },

    deletePerson: function (e) {
        const index = $(e.currentTarget).data("index");
        const person = this.people.at(index);
        this.people.remove(person);
        this.render();
    }
});
const app = new PersonView();
