function 기계(이름) {
    this.name = 이름;
    this.age = 15;
    this.sayHi = function(){
        console.log('안녕하세요'+ this.name + '입니다');
    }
}
기계.prototype.gender='남';
var 학생1 = new 기계('park');
학생1.sayHi();
console.log(학생1.gender)