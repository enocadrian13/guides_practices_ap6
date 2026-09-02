//factory design pattern
// //motorcycle pattern
// class MotorcycleFactory{

    
    
// }

const MotorcycleFactory = (brand) => {
    switch(brand){

        case 'Honda': return hondaModel();
        case 'Suzuki': return suzukiModel();
        case 'Yamaha': return yamahaModel();
        case 'Rusi': return rusiModel();

    }
}

const hondaModel = () => {
    return {
        maker: "Honda",
        model: "Click V3", 
        cc: "125", 
        year: "2025",
        describe() {
            return `Brand: ${this.model} \n Model: ${this.model}, CC: ${this.cc}, Year: ${this.year}`;
        }
    };
}


const suzukiModel = () => {
        return {
            maker: "Suzuki",
             model: "Burgman",
              cc: "125", 
              year: "2025",
            describe() {
                return `Brand: ${this.model} \n Model: ${this.model}, CC: ${this.cc}, Year: ${this.year}`
            }


        }

    }
    
const yamahaModel = () => {
        return {
            maker: "Yamaha",
            model: "XSR", 
            cc: "150", 
            year: "2025",
            describe() {
                return `Brand: ${this.model} \n Model: ${this.model}, CC: ${this.cc}, Year: ${this.year}`
            }


        }

    }

const rusiModel = () => {
        return {
            maker: "Rusi",
            model: "De Atras", 
            cc: "150", 
            year: "2020",
            describe() {
                return `Brand: ${this.model} \n Model: ${this.model}, CC: ${this.cc}, Year: ${this.year}`
            }


        }

    }
const container = document.getElementById("container");

function main(brand){
    
    try{
        hondaModel().test
        const motor = MotorcycleFactory(brand);
        const div = document.createElement("div");
        div.classList.add("motorcycle-list");
        div.textContent = motor.describe();


        container.appendChild(div);
        
        // console.log(div)
    }catch(error){
        alert(error.message);
    }

}


console.log(hondaModel().describe)