export const invoice = {
    id: 1,
    name: "Componentes PC",
    client: {
        name: "Luis Gerardo",
        lastname: "Valencia Camacho",
        address: {
            country: "México",
            state: "Querétaro",
            city: "Querétaro",
            street: "Los Olivos",
            number: 16
        }
    },
    company: {
        name: "New Egg",
        fiscalNumber: "09042022"
    },
    items: [
        {
            id: 1,
            product: "Monitor 24 pulgadas",
            price: 1989,
            quantity: 3
        },
        {
            id: 2,
            product: "Teclado dell",
            price: 256,
            quantity: 2
        },
        {
            id: 3,
            product: "Ventilador",
            price: 500,
            quantity: 2
        },
        {
            id: 4,
            product: "Mousepad",
            price: 79.50,
            quantity: 1
        }
    ]
}