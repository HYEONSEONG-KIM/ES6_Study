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

## STTRING
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