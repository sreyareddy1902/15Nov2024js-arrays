

//ways of arrays
//1 way
let a=["red",12,true,null]
console.log(a)

//2way
const b=[]
console.log(b)

b[0]="red"
console.log(b)

b[1]=null
console.log(b)

b[20]="ram"
console.log(b)

//3way
let c=new Array("red","yellow",true,null)
console.log(c)

//to access the elements
let d=["red","pink","yellow","green",true]
console.log(d)
console.log(d[0])
console.log(d[6])

//1.push()
let e=["red","yellow","orange"]
console.log(e)
e.push("violet")
console.log(e)
e.push("ram",12,true)
console.log(e)

//2.pop()
let f=["red","yellow","orange"]
console.log(f)
console.log(f.pop())
console.log(f)

//3.unshift()
let g=["red","yellow","orange"]
console.log(g)
g.unshift("violet")
console.log(g)
g.unshift(true)
console.log(g)

//4.shift()
let h=["red","yellow","orange"]
console.log(h)
h.shift()
console.log(h)
h.shift()
console.log(h)

//5.indexOf()
let i=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(i)
console.log(i.indexOf("yellow"))
console.log(i.indexOf("violet"))
console.log(i.indexOf("red"))

//6.lastIndexOf()
let j=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(j)
console.log(j.lastIndexOf("red"))
console.log(j.lastIndexOf("purple"))
console.log(j.lastIndexOf(true))

//7.reverse()
let k=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(k)
console.log(k.reverse())

//8.includes()
let l=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(l)
console.log(l.includes("yellow"))
console.log(l.includes(false))

//9.toString()
let m=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(m)
console.log(m.toString())

//10.slice()
let n=["red","yellow","orange","red","pink","blue","red","purple"]
console.log(n)
console.log(n.slice(1))
console.log(n.slice(-8))
console.log(n.slice(-2))
console.log(n.slice(1,7))
console.log(n.slice(-4,-1))
console.log(n.slice(0,-4))

//11.splice()
let o=["red","yellow","orange"]
console.log(o)
//console.log(o.splice(1)) 
//console.log(o)

//console.log(o.splice(-2))
//console.log(o)

//console.log(o.splice(0,3))
//console.log(o)

console.log(o.splice(1,2,true,null,12))
console.log(o)

//12.join()
let p=["ram","raj"]
console.log(p)
console.log(p.join())
console.log(p.join(" and "))