# 스코프
스코프는 변수와 상수, 매개변수가 언제 어디서 정의되는지 결정한다. 함수 매개변수가 함수 바디 안에서만 존재하는 것도 스코프의 한 예이다.

```javascript
function f(x){
    return x + 3;
}

console.log(f(5)); //8
console.log(x); //ReferenceError: x is not defined
```

x가 아주 잠시나마 존재했었으니  x + 3 을 계산할 수 있었다. 하지만 함수 바디를 벗어나면 x는 존재하지 않는 것처럼 보인다. 따라서 우리는 x의 스코프가 함수  f 라고 말한다.
변수의 스코프가 어떤 함수라고 말할 때는, 함수를 실제 호출할 때까지는, 함수 바디의 정해진 매개변수가 존재하지 않음을 반드시 상기해야한다. 함수는 여러번 호출할 수 있따. 그리고 함수를 호출할 때마다 매개변수가 나타나고, 함수가 제어권을 반환하면 스코프 밖으로 사라진다.

변수와 상수는 만들기전에는 존재하지 않는다는 것도 확실하다. 즉  let 이나  const 로 선언하기 전에는 스코프 안에 존재하지 않는다. 

> 일부 언어는 선언 (declaration)과 정의 (definition)을 명확히 구분한다. 일반적으로 변수를 선언한다는 것은 식별자를 주어서 그 존재를 알리는것. 반면 정의는 선언과 함께 값도 부여하는 것을 말한다. 자바스크립트에서는 모든 변수를 선언하는 동시에 값이 주어지므로( 명시적으로 정하지 않으면 undefined가 암시적으로 주어지므로) 두 용어를 구분하지 않는다.  
# 스코프와 존재
변수가 존재하지 않으면 그 변수는 스코프 안에 ‘있지 않음’ 을 직관적으로 알 수 있다 즉, 아직 선언하지 않은 변수나 함수가 종료되면서 존재하지 않게 된 변수는 분명 스코프 안에 ‘있지 않다’

변수가 스코프 안에 있지 않다면, 그 변수는 존재하지 않는다는 말은 아니다. 그리고 여기서 스코프와 존재를 반드시 구별해야 한다.

가시성 visibility 라고도 불리는 스코프는 프로그램의 현재 실행 중인 부분 즉 , 실행 컨텍스트 execution context 에 현재 보이고 접근할 수 있는 식별자들을 말한다. 반면 존재한다는 말은 그 식별자가 메모리가 할당된(예약된) 무언가를 가리키고 있다는 뜻이다.

# 정적스코프와 동적스코프
자바스크립트의 스코프는 정적이다. 소스코드만 봐도 변수가 스코프에 있는지 판단할수있다. 다만 소스코드만 봐도 즉시 스코프를 분명히 알 수 있다는 뜻은 아니다.

# 정적스코프
어떤 변수가 함수 스코프 안에 있는지 함수를 정의할 때 알 수 있다는 뜻이다.
호출할 때 알 수 있는 것은 아니다. 자신이 정의 될 때 접근 할 수있었던 식별자에는 여전히 접근할 수 있지만, 호출 할 때 스코프에 있는 식별자는 접근 할 수 없다.

# 전역스코프
전역스코프에서 선언한 것은 무엇이든 프로그램의 모든 스코프에서 볼 수있다.
전역스코프에서 선언된 것들을 전역변수(global) 이라고 한다.
전역스코프에 의존하는 것은 피해야한다.

# 블록스코프
let 과 const 는 식별자를 블록스코프에서 선언한다.
블록스코프는 블록(문을 중괄호로 묶은것)의 스코프에서만 보이는 식별자를 의미한다.

# 변수 숨기기
```javascript
{
// 외부블록
let x = ‘blue’
console.log(x); // blue
{
	//내부블록
	let x = 3;
	console.log(x); // 3
}
console.log(x); // blue
}
console.log(typeof x); // "undefined"; x는 스코프에 있지 않습니다.

```

내부블럭의 x는 외부 블록에서 정의한 x와 이름만 같을 뿐 다른 변수이므로 외부 스코프의 x를 숨기는 효과가 있다.
실행 흐름이 내부 블록에 들어가 새 변수 x를 정의 하는 순간 두 변수는 모두 스코프안에 있다.( 외부 변수가 숨겨짐)
변수의 이름이 같으므로 외부 스코프에 있는 변수에 접근할 방법이없다.

# 스코프 체인
스코프가 계속 연결됨(중첩),. 스코프안에 스코프가 있는 형태
내부 함수에서는 외부 함수의 변수에 접근이 가능하지만 외부 함수에서는 내부 함수의 변수에 접근 할 수 없다.
모든 함수들은 전역 객체에 접근할 수 있다.

# 함수, 클로저, 정적스코프
클로저는 함수가 특정 스코프에 접근 할 수 있도록 의도적으로 그 스코프에서 정의하는 경우, 스코프를 함수 주변으로 좁히는것을 말한다.

```javascript
let globalFunc; //정의 되지 않는 전역 함수
{
	let blockVar = “a”; //블록 스코프에 있는 변수 
	globalFunc = function(){
		console.log(blockVar);
	}
}
globalFunc(); // “a”
```

globalFunc는 블록 안에서 값을 할당 받았다. 이 블록 스크로와 그 부모인 전역 스코프가 클로저를 형성한다. globalFunc를 어디서 호출하든 이 함수는 클로저에 들어있는 식별자에 접근할 수 있다. globalFunc를 호출하면, 이 함수는 스코프에서 빠져나왔음에도 불구하고 BlockVar에 접근할 수 있다.
일반적으로 스코프에서 빠져나가면 해당 스코프에서 선언한 변수는 메모리에서 제거해도 안전하다. 하지만 여기서는 스코프 안에서 함수를 정의했고, 해당함수는 스코프 밖에서도 참조할 수 있으므로 자바스크립트는 스코프를 계속 유지한다.

즉, 스코프안에서 함수를 정의하면 해당 스코프는 더 오래 유지된다. 또한 일반적으로는 접근할수 없는것에 접근할수 있는 효과도 있다.

```javascript
let f; //정의되지 않은 함수
{
    let o = {note : ‘Safe’};
    f = function(){
        return o;
    }
}
console.log(f());

let oRef = f();
oRef.note = ‘Not so safe after all!’;

console.log(oRef);

```

```결과
{ note: 'Safe' }
{ note: 'Not so safe after all!' }
```

일반적으로는 자신의 스코프에 없는 것들에는 접근할 수 없다. 함수를 정의해 클로저를 만들면 접근할 수 없던것들에 접근할 방법이 생기고 이건 매우 중요한 측면이다.