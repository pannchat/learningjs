function add(a,b,c){
    console.log(a+b+c);
}

add(1,2,3);
let array = [1,2,3]
add(...[1,2,3])
add(...array)

add.apply(undefined,array);


var person = {
    인사 : function(params='test'){
        console.log(this.name+'안녕' + params);
    }
}

var person2 = {
    name:'손흥민'
}
person.인사();
person.인사.apply(person2,['param'])
person.인사.call(person2,'param2')
