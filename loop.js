arr=[2,3,4,5,6]
for (let i = 0; i< arr.length; i++)
{
    console.log(arr[i])
}
for(let i of arr){
    console.log(i)
}
for (let i in arr){
    console.log(arr[i])
}
fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => console.log(data))
async function fetchData(){
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    console.log(data)
}
fetchData()
ForEach:
    a = [10,20,30,40,50];
a.forEach((i)=>{
          console.log(i);
})
const p = arr.map((i) => 
{console.log(i)
return i
})
console.log(p)
const q = arr.filter((i) =>{
    console.log(i)
    return i%2==0
})
class Samsung{
    name;
    constructor(name){
        this.name= name;
    }
    print(){
        console.log(this.name)
    }
}
class Redmi extends Samsung{
    constructor(name){
        super(name)
    }
}
export default Samsung
export{Redmi}
