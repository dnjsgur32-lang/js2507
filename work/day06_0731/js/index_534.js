let session = prompt("관심 세션을 선택해주세요~. 1-마케팅, 2-개발, 3-디자인")
//  sesson에는 "1" 또는 "2" 또는 "3"만 입력되어야한다.
switch (session) {
    case "a":
        document.writeln("<p>마케팅 세션은 <strong>201호</strong>에서...</P >")
        break;
    case "b":
        document.writeln("<p>개발 세션은 <strong>203호</strong>에서...</P >")
        break;
    case "c":
        document.writeln("<p>디자인 세션은 <strong>205호</strong> 에서...</P >")
        break;
    default: alert("입력오류")
}