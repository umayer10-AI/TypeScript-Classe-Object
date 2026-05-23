// let a = 10
interface user {
    name: string,
    email: string,
    password: string,
}
interface admin extends user {
    age: number
}

const a = (obj: admin) => {
    
}

a({name: "Umayer", email:"hello", password:"abcd",age:21})