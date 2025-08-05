function vaildateForm() {
    let x = document.forms["myForm"]["fname"].value
    // 사용자가 입력한 값이 예외.(유용한지 체크)
    if (x == "") {
        alert("Name must be filled out")
        return false
    }
}