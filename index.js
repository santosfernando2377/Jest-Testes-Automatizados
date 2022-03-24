class Carro {

    constructor() {
        this.marca = '',
        this.modelo = '',
        this.ano = '',
        this.placa = ''
    }

    SetMarca(_marca) {
        this.marca = _marca
    }

    SetModelo(_modelo) {
        this.modelo = _modelo
    }

    SetAno(_ano) {
        this.ano = _ano
    }

    SetPlaca(_placa) {
        this.placa = _placa
    }

    GetMarca() {
       //return console.log(this.marca)
       return this.marca
    }

    GetModelo() {
       //return console.log(this.modelo)
       return this.modelo
    }

    GetAno() {
       //return console.log(this.ano)
       return this.ano
    }

    GetPlaca() {
       //return console.log(this.placa)
       return this.placa
    }

    ShowCar() {

        let car = {
           Marca: this.marca,
           Modelo:  this.modelo,
           Ano: this.ano,
           Placa: this.placa
        }

        //return console.log(car)
        return car

    }

}

const Car = new Carro

Car.SetMarca('Ford')
Car.SetModelo('Mustang Boss 305')
Car.SetAno('2018')
Car.SetPlaca('PHY8672')
Car.ShowCar()

module.exports = Car