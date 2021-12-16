# ES6

## VARIABLES
### Let and Const
- 이전의 var는 한번 선언 후 수정이 가능(상수가 아님), 그래서 변수의 값에 대한 안정성이 떨어짐
- const는 상수의 개념으로 한번 선언 후 변경시 에러
- 하지만 const Object를 생성 후 해당 객체의 key에 해당하는 value는 바꿀 수 있음
- let은 이전의 var와 같은 개념
- 안정성을 위해 const를 사용하는 것을 기본개념으로 잡을 것, 하지만 overwrite 해야 하는 경우에는 let 사용(var 사용은 지양할 것)

### DeadZone
- hoisting : 자바스크립트가 프로그램을 실행하기 전에 자동으로 전역 변수화 시키는 개념(변수들이 가장 위에 선언되는 것으로 변경)
- hoisting은 에러를 내야할 상황에서도 에러가 나지 않음
- let은 hoisting이 적용되지 않아 개발자가 작성한 순서에 맞게 실행

## FUNCTIONS
### Arrow Functions
- 화살표 함수로 코드를 좋게 만들어 줌
- map -> foreach의 개념이지만 element들로 새로운 array를 만들어줌
- function 키워드 대신 => 사용
- names.map(function(){})의 형태가 names.map(item => item + "add") 로 변경 -> implicit return(같은줄에 무엇을 적든지 간에 return된다는 의미)
- this 키워드 사용시 화살표 함수 사용 불가(화살표 함수 내의 this는 window 최상위 객체를 가르킴)
- 밖에 함수를 선언하여도 화살표 함수에서의 this는 window객체
- 함수 파라미터에 초기값을 지정해 줄 수 있음(지정해 주지 않으면 undefinded 출력)

## STRING
### 백틱(`)
- 가독성 혹은 문법상 String을 + 기호로 연달아 연산하는 것은 좋지 않음
- 이러한 단점을 보완하기 위해 `(백틱)기호 사용
- 백틱안에 문자열 기입하면 그대로 출력, 변수의 경우 ${}(표현식)기호 사용 
- 하지만 jsp에서 el문법을 사용하면 ${}을 el로 인식하므로 사용하지 않는게 좋음
- 표현식안에 함수선언도 가능

### HTML Fragments
- querySelector : dom 객체 select 
- createElement(tag) : tag 생성
- inner... : text나 html등의 데이터 삽입
- append : dom 객체 안에 하위 dom 객체 삽입
- 너무 많은 HTML객체 생성 후 설정시 코드가 복잡해짐
- 백틱을 사용하면 개행(space)도 인식되므로 코드가 깔끔해짐
- 배열에 join 함수를 사용하면 쉼표 제거 가능

### Cloning Styled Components
- styled component는 react에서 사용하는 라이브러리
- 함수호출시 parameter 입력시 ()가 아닌 백틱사용 가능
- 함수안에서 return을 함수로 하는 경우() 후 백틱 사용하면 코드가 간결해짐
- react에서 사용하는 방식

### More String Improvements
- includes() : String에서 찾고자하는 단어를 파라미터로 넘겨서 포함되면 true반환
- repeat() : 해당 문자열을 파라미터로 넣은 숫자만큼 반복
- startWith() : 문자가 파라미터로 받은 단어로 시작하면 true(반대는 endsWith())

## ARRAY
-  Array.Of() : 괄호 안에 element 넣어주면 배열로 생성 -> element가 많을 때 유용
-  Array.from() : 배열은 아니지만 배열 같은 객체(array-like Object)를 배열로 만듬 - > button같은 element가 여러개 있을때 전체 element를 불러와 array로 생성 가능
- Array.find() : ()안의 주어진 판별 함수를 만족하는 첫 번째 요소의 값 반환
- Array.findIndex() : find와 같은 기능 -> 반환값 index
- Array.fill() : array를 첫 인덱스 부터 마지막 인덱스 까지 파라미터로 채워짐, (value,idx) -> idx번째 부터의 모든요소를 value로 채워줌, (value,idx1,idx2) -> idx1 부터 2 까지 value로 채워줌 
- Array.includes() : 파라미터가 포함 되는지 boolean 타입으로 리턴

## DESRUCTURING(비구조화)
### Object Destructing
- 큰 오브젝트(타겟 오브젝트, 우측에 선언)에서 특정 변수나 그 안에 속한 작은 오브젝트에 접근할 수 있도록 해줌
- Object(객체)를 다룰 때 유용
- 큰 오브젝트 안에 꺼내고자 하는 값이 없을 때 default value 설정 가능
- 일반 변수 : variable = 초기값, 객체 : ObjectNm : {variable = 초기값} = 초기 객체
### Array Destructing
- API로 부터 응답받은 데이터와 같이 데이터를 조작할 필요 없을 때 array형태로 만들어야 하는 상황에서 유용 
- Object는 key을 가지고 비구조화 하였다면 배열은 index로 비구조화
- const [] = 배열 의 형태, []안에 변수 선언하면 순서대로 값 할당
- 순서를 건너 뛸 수는 없음
### Renaming
- 객체에서 key값의 name을 바꿔 줄 수 있음 -> Renaming
- 바꾸고자 하는 Key값에 : (바꿀 이름) 으로 해주면 됨
- let 키워드에서 rename 해줄때는 비구조화 문법에서 키워드 빼주고  ()로 전체를 감싸주어 rename
### Function Destructing
- 변수들의 가독성을 위해, 각 변수의 기본값을 설정하기 위해 사용
- 함수의 파라미터를 비구조화로 받아 사용
### Value Shorthands
- 변수를 선언하고 객체를 선언할 때, 변수의 이름과 객체의 key값이 같고 객체 value에 해당 변수의 값을 넣고 싶으면 key를 생략하고 변수로 선언 가능
### Swapping and Skipping
- Swapping : 상수가 아닌 다수의 변수 값을 서로 교환 => [변수1, 변수2] = [변수2의값, 변수1의 값] -> 배열의 비구조화 활용
- Skipping : 변수 생략 -> 배열의 비구조와 에서 앞순서가 아닌 뒷순서 value 가져올 때 앞의 변수 공백처리 

## REST AND SPREAD
### Introduction to Spread
- Spread는 기본적으로 변수를 가져와서 풀어 헤치고 전개
- ...배열 or 객체 -> 배열 or 객체안의 value들을 꺼내옴
- 두 개의 배열 혹은 객체를 하나의 배열(객체)로 만들어 줄 때 유용

### Spread Applications
- 추가, 삽입, 수정등의 역할을 수행
- 기존의 요소에 새로운 요소를 추가해 하나의 배열(객체)를 만들 수 있음
- 조건부(conditional) : 특정 객체에 조건을 주어 처리 => ...(조건) -> 선택적인 속성값(optional object property)

### Rest parameters
- Rest : spread와 반대로 축소 시키는 것 => 값들을 리스트로 취한 다음 합침
- 예를 들어 어떤 함수의 파라미터를 출력하는 함수 -> 파라미터를 spread로 선언하면 파라미터들은 축소해서 출력 -> rest의 기본 개념
- ...이 param으로 들어가면 rest, 그 외는 spread

### Rest + Spread + Destructure
- 각각 기능을 잘 조합하여 사용하면 유용하게 사용 가능
- ex1) 배열에서 특정 키 값을 제외 -> 함수의 파라미터로 Destructure+ rest를 사용하여 구현
- ex2) Destructure를 활용하여 배열의 기본 값을 셋팅하고 rest로 받아 새로운 객체를 만드는 함수
- ex3) Destructure를 활용하여 변수면을 바꾸어 리턴하는 함수