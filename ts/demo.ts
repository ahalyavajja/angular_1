enum days{
    sunday,
    monday,
    tuesday
}
console.log(days)
console.log(days[days.sunday])
console.log(days.monday)
function dummy(): never{
    throw Error
}
interface myObj{
    name: string
    email: string
    phno ?: number
}
interface myObj2 extends myObj{
    salary: number
}
class emp implements myObj2{
    name; salary; email;
    constructor(n:string,s:number,e:string){
        this.name=n;
        this.salary=s;
        this.email=e
    }
}
let xyz= new emp("aloo",35000,'aha@gmail.com')
let obj:myObj2={
    name: 'ahalya',
    email: 'xyz@gmail.com',
    salary: 35000
}
type x=number | string | boolean
let b:x=5
type myObj3={
    name:string,
    email:string,
    salary:number
}
function sum1<T>(x: T, y: T){
	console.log(typeof x, typeof y);
}
sum1<number>(2,3)
sum1<string>("hi","raj")

export namespace myfun{
    function sum1(a:number){
        return a++
    }
}
console.log(myfun)