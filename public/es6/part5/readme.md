# 제어문
크라운 앤 앵커 시뮬레이
![](4778FB58-7FA3-4201-8215-7B1FEEB0E4D1.png)


순서도에서 마름모는 Y/N 결정을 나타내고 사각형은 행동이다.
시작과 끝은 원으로 나타냄.

- 변수 할당 : funds = 50, bets = {}, hand = []
- m 이상 n 이하의 무작위 정수 : rand(1, 6)
- 하트, 크라운 등을 결정할 무작위 문자열 randFace()
- 객체 ㅡㅍ로퍼티 할당 : bets[“heart”]=5, bets[randFace()] = 5
- 배열에 요소 추가 : hand.push(randFace())
- 간단한 사칙연산 funds - totalBet, fund + winnings
- 증가 : roll ++ 

순소도의 결정 부분(마름모)은 다음과 같이 제한
- 숫자비교 : funds > 0, fund < 100
- 일치비교 : totalBet === 7
- 논리연산자 : funds > 0 && funds < 100

# while 루프
While 은 조건을 만족하는 동안 계속 반복된다.
```javascript
let funds = 50;
while (funds > 1 && funds < 100){
// 돈을 건다
// 주사위를 굴린다
// 그림을 맞추면 돈을 가져온다.
}
```

# 블록문
N 줄의 실행 문을 중괄호로 묶은것

# 공백 
대부분의 경우 자바스크립트는 줄바꿈 문자를 포함해 추가 공백을 신경쓰지 않음.

**블록문과 블록생략문을 섞어 쓰지 말자.**

나머지는 기초적인 내용이라 생략함

# 메타문법
while문
```
while(condition)
	statement
```

If..else문
if(condition)
	statement1
[else
	statement2]

do..while 문
```
do
	statement
while(condition);
````

for문 
```
for[initialization];[condition]; [final-expresstion])
	statement
```

이후 내용도 중복되는 내용이 많아 생략

# 연산자
연산자도 대부분 생략하고
비교연산자부터 시작함 이전 내용은 C언어와 동일했음.

비교 연산자는 두 개의 값을 비교함.
일치함( === ) 과 동등함 ( == ) , 대소 관계의 세가지 타입으로 나뉨

일치와 동등의 차이
	1. 두 값이 같은 객체를 가리키거나, 같은 타입이고 값도 같다면 (원시 타입) -> 일치
	2. 두 값이 같은 객체를 가리키거나 같은 값을 갖도록 변환할 수 있다면 -> 동등

문자열 “33”은 숫자 33으로 변환할 수 있으므로 이 둘은 동등하지만 타입이 다르므로 일치 하지는 않음. 문자열은 미리 숫자로 변환해서 일치하는지 비교하기를 권장함.
```javascript
const n = 5;
const s = “5”;
n === s; *// false 타입이 다름*
n !== s; *//true*
n === Number(s); *//true 문자열 “5”를 숫자 5로 변환했음*
n !== Number(s); *//false*
n == s; *// true 권장 하지 않음*
n != s; *//false 권장하지 않음*

const a = {name : “an object”};
const b = {name : “an object”};

a === b; *//false 객체는 항상 다름*
a !== b; *//true*
a == b; *//false; 권장하지 않음*
a != b; *//true 권장하지 않음.*
```

# 숫자 비교
숫자를 비교할때 염두 해야 할 것.
특별한 숫자형 값 NaN은 자신포함 그 무엇과도 같지 않다.(==, !=, ===, !==)
NaN의 판별은 Number.isNaN() 또는 isNaN()을 사용.

```javascript
console.log(NaN === NaN);       *// false*
console.log(Number.NaN === NaN); *// false*
console.log(isNaN(NaN));         *// true*
console.log(isNaN(Number.NaN));  *// true*

function valueIsNaN(*v*) { return v !== v; }
console.log(valueIsNaN(1));          *// false*
console.log(valueIsNaN(NaN));        *// true*
console.log(valueIsNaN(Number.NaN)); *// true*
```

[결과]
![](A4AC937B-10F0-4493-AED1-C8ED7196CA9B.png)

isNaN()과 Number.isNaN()의 차이
isNaN은 현재값이 NaN이거나, 숫자로 변환했을 때 NaN이 되면 참을 반환,
Number.isNaN은 현재값이 NaN이어만 참을 반환함.
```javascript
console.log(Number(‘test’));// 문자열 test를 숫자로 변환한 값 -> NaN

console.log(isNaN(‘test’)); // true
console.log(Number.isNaN(‘test’)); //false
```

자바스크립트의 숫자는 모두 더블 형임.
그 정수가 안전한 범위라면 (Number.MIN_SAFE_INTEGER이상 Number.MAX_SAFE_INTEGER이하) 안심하고 일치 연산자를 사용할 수 있다. 하지만 소수점이 있는 숫자를 비교할 때는 관계 연산자를 써서 테스트하는 숫자가 대상 숫자에 충분히 가까운지 확인하는 편이 좋음.
충분히 가깝다는 말은 때에 따라 다르다. 자바스크립트의 표준내장객체중 숫자형 상수 Number.EPSILON이 있다. 이것은 매우 작은 값(대략 # 2.22e-16)임.
일반적으로 숫자 두개를 구별하는 기준으로 사용함.

```javascript
let n = 0;
while(true){
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);
```
위의 예제는 생각과 다르게 0.3에서 멈추지 않고 무한루프에 빠진다.
이유는 0.1이 더블 형식으로 정확히 나타낼 수 없는 값이기 때문임. 0.1은 이진 표현으로 나타낼 수 있는 숫자들 사이에 결쳐저 있기 때문. 
```javascript
let n = 0;
let s = 0;
while(true){
    
    s += 1;
    n += 0.1;
    if(n === 0.3 || s === 3) break;
}
console.log(`Stopped at ${n}`);
```
로 확인해봤을때
Stopped at 0.30000000000000004가 결과로 출력됨
반복할 때 n의 값은 0.30000000000000004이므로 테스트는 false이고 유일한 종료조건이 실패하게 됨.

Number.EPSILON과 관계 연산자를 사용해서 ‘느슨하게’ 비교하고 성공적으로 루프를 빠져나갈 수 있다.
```javascript
let n = 0;
while(true){
    n += 0.1;
    if(Math.abs(n-0.3) < Number.EPSILON) break;
}
console.log(`ex2) Stopped at ${n}`)
```

결과
```
ex2) Stopped at 0.30000000000000004
```

테스트하는 숫자 ( n )에서 비교대상 (0.3)을 뺀 후 절댓값을 취하는 방식을 씀. 
두 개의 더블 형식이 같다고 할 수 있을 만큼 가까운 숫자인지 판단할 때 일반적으로 사용하는 방법임.

# 문자열 병합 string concatenation
자바스크립트에서 + 연산자는 덧셈과 문자열 병합에 모두 사용된다. 피연산자의 타입을 보고 덧셈을 할지 문자열 병합을 할지 판단한다. 덧셈과 병합은 모두 왼쪽에서 오른쪽으로 평가한다. 피연산자 중 하나라도 문자열이면 문자열 병합을 수행함. 두 값이 이 모두 숫자형이면 덧셈을 수행

```javascript
console.log(3 + 5 + “8”); // 88
console.log(“3” + 5 + 8); //358
console.log(“5”+”3”); //53
```

왼쪽에서 부터 연산 하기 때문에 제일 앞에 문자열이 있으면 하나씩 차례로 나열됨

# 참과 같은 값과 거짓과 같은 값
C언어에서 숫자 0은 false이고 다른 숫자형은 모두 true 이다. 자바스크립트는 모든 데이터타입을 참 같은 값과 거짓 같은 값으로 나눌 수 있다.

### 거짓 같은 값
		- undifined 
		- null
		- false
		- 0
		- NaN
		- ‘’ (빈 문자열)

이외에 모두 참 같은 값.
### 참 같은 값
	- 모든 객체, valueOf() 메서드를 호출했을 때 false를 반환하는 객체도 참 같은 값에 속한다.
	- 빈 배열도 참 같은 값에 속한다.
	- 공백만 있는 문자열 (“ “ 등)
	- 문자열 “false”
	
빈 배열을 거짓같은 값에 속하게 하려면 arr.length를 사용한다.

# AND, OR , NOT
자바스크립트가 지원하는 논리연산자는 AND( && ), OR( || ), NOT( ! ) 세가지.
AND 연산은 피연산자가 모두 TRUE 일때만 TRUE,
OR 연산은 피연산자가 모두 FALSE 일때만 FALSE,
NOT은 단순히 피연산자를 반대로 바꿈.

# 단축 평가
진위표를 보면 두 값을 모두 평가하지 않아도 될 때가 있음을 알수 있다. 
예를 들어 x가 거짓 같은 값이면 x && y 는 값을 평가 할 필요도 없이 false
자바스크립트는 이런식으로 동작하며 이런 동작을 단축평가 (shor-circuit evaluation) 이라고 한다.

두 번째 피연산자에 부수 효과( side effect )가 있다 하더라도 단축 평가를 거치면 그 효과는 일어나지 않기 때문이다. 부수효과는 보통 부정적인 의미로 쓰이지만 항상 그런 건 아니다. 결과가 의도적이고 명확하다면 나쁘게 평가할 이유는 없다.

```javascript 
const skipIt = true;
let x = 0;
const result = skipIt || x++ ;
```
위의 예제 3번째 행의 결과는 result에 저장된다. 첫 번째 피연산자가 skipIt이 true 이므로 result에 true가 저장된다. 이 과정에서도 단축 평가가 일어나므로 증가 연산자에 해당하는 표현식은 실행되지 않고 x의 값은 그대로 0 이다. skipIt을 false로 바꾸면 논리 연산자의 두 피연산자를 모두 평가해야 하고, 따라서 x는 증가함.  여기서는 증가연산이 부수 효과임.

# 피연산자가 불리언이 아닐때 논리 연산자가 동작하는 방법
불리언 피연산자를 사용하면 논리 연산자는 항상 불리언을 반환한다.
피연산자가 불리언이 아니라면, 결과를 결정한 값이 반환된다.

![](FDE31C76-E611-4DD7-A521-F07E3C6E476E.png)

논리연산자의 동작을 활용하는 간단한 팁
```javascript
const options = suppliedOptions || {name : “Default”};
```
객체가 빈 객체라도 항상 참 같은 값으로 평가됨. 따라서 suppliedOptions가 객체이면 options는 suppliedOptions를 가리키게 된다. 옵션이 죄공되지 않으면, 즉 suppliedOptions가 null이나 undefined라면 options는 기본값을 가지게 된다.

# 조건 연산자
조 연산자는 javascript의 유일한 삼항연산자임.
사용은 C언어의 삼항연산자와 같음
```javascript
const doIt = false
const result = doIt ? “Did it” : “DId’nt it”
```

# 쉼표 연산자
쉼표 연산자는 표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환한다. 표현식 하나 이상 실행해야 하지만 값으로 필요한 것은 마지막 표현식의 결과뿐일 때 쉼표 연산자를 유용하게 쓸 수 있다.

쉼표 연산자는 표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환한다. 표현식을 하나 이상 실행해야 하지만 필요한것은 마지막 표현식의 결과 뿐일 때 쉼표 연산자를 유용하게 쓸 수 있다.
```javascript
let x = 0, y = 10, z;
z = (x++, y++);
```
예제 실행시 x와 y둘다 1증가하지만 z의 값은 10임
즉 y++가 반환하는 값임. 쉼표 연산자는 우선순위가 가장 낮기때문에 괄호를 사용했고 괄호를 사용하지 않았다면 Z는 0이저장되고 이후 y가 1증가

# 할당 연산자
할당 연산자는 변수에 값을 할당함. 등호의 왼쪽에 있는 것(l-value) 반드시 변수나 프로퍼티, 배열 요소중 하나여야함. 즉, 표현식의 좌변에 있는 것은 반드시 같은 값을 저장할 수 있는 것이어야 함.
[image:57227F12-6BC9-4AA2-B12E-3D9AD3AA4703-270-00002D6E8B6D08AB/carbon.png]
결과
```
Number less than 10 : 3.
Number less than 10 : 5.
Number greater than 10 found: 15.
2 numbers remain
```


# 해체 할당(destructuring assignment)
ES6에서 새로 도입한 해체 할당은 객체나 배열을 변수로 해체할 수 있다.
```javascript
const obj = { b:2, c:3, d:4 }; //객체 선언
const {a,b,c} = obj; // 해체할당
console.log(a);	//undefined
console.log(b);	//2
console.log(c);	//3
console.log(d);	//ReferenceError: d is not defined
```

 객체를 해체할 때는 반드시 변수의 이름과 객체의 프로퍼티 이름이 일치해야함.
프로퍼티 이름이 유효한 식별자인 프로퍼티만 해체 후 할당된다. 이 예제에서 obj에 a 프로퍼티가 없으므로 a는 undefined를 할당 받는다. 해체 할당에 d라는 프로퍼티가 없으므로 선언자체가 안됨.
객체해체는 할당만으로 이뤄질 수도 있지만 그렇게하려면 괄호를 써야함. 괄호를 쓰지 않으면 자바스크립트는 표현식 좌변을 블록으로 해석함.
```javascript
const obj = { b:2, c:3, d:4 };
let a, b, c;
{a,b,c} = obj; //에러
({a, b, c} = obj); //동작
```

```javascript
[a, b, …rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
```
남는 배열요소는 모두 버려진다. 확장 연산자(spread operator) … 을 사용하면 남은 요소를 새 배열 에 할당할 수 있음.
```javascript
var a= 5, b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5
```
x 와 y는 배열의 처음 두 요소를 받고, 변수 rest에는 나머지가 저장됨. 배열 해체를 활용하면 변수의 값을 서로 바꿀 수 있음. 해체를 사용하지 않으면 임시 변수가 필수.
