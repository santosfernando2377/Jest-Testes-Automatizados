const Car = require('./index')

test('Marca do veículo', () => {
    expect(Car.GetMarca()).toBe('Ford')
})

test('Modelo do veículo', ()=> {
    expect(Car.GetModelo()).toBe('Mustang Boss 305')
})

test('Ano do veículo', () => {
    expect(Car.GetAno()).toBe('2018')
})

test('Placa do veículo', () => {
    expect(Car.GetPlaca()).toBe('PHY8672')
})

test('Exibir propriedades do veículo', () => {
    expect(Car.ShowCar()).toEqual({ Marca: 'Ford', Modelo: 'Mustang Boss 305', Ano: '2018', Placa: 'PHY8672'})
})