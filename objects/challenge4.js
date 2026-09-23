/*let point = {
    x : 2,
    y: 4
}
console.log(point)

point.x=10
point.y=11
console.log(point)*/
//avec function 
function point (x,y){
    return{
        x:x,
        y:y
    }
}
p1 = point(3,4)
console.log(p1)
console.log(`les poits aprés modification `)
p2= point(10,11)
console.log(p2)


