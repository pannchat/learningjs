const Money = require('math-money'); // require은 라이브러리를 불러오는 노드함수 이다.
const oneDollar = Money.Dollar(1);

//Money.Dollar 도 길게 느껴지면 이렇게 해도 된다.
const Dollar = Money.Dollar;
const twoDollars = Dollar(2);
//oneDollar와 twoDollars는 같은 타입의 인스턴스 이다.
