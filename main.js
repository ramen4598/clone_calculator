var output = document.querySelector("body .forms input[name='output']");
// output을 전역변수로 선언하면 오류가 발생하는 이유 : 지금 head에 위치한 script tag를 읽고 있다. 즉 body tag 아래에 위치한 태그들은 아직 생성되지 않았다.
// <script ... ></script>에 defer를 추가하면 해결할 수 있다.

function makeFormula(self) {
//   const output = documen지.querySelector("body .forms input[name=output]");
  output.value += self.value;
}
function makeClear() {
//   const output = document.querySelector("body .forms input[name=output]");
  output.value = "";
}
function makeResult() {
//   const output = document.querySelector("body .forms input[name=output]");
  output.value = eval(output.value);
}
