let dem;
// indx.html의 DOM이 완전히 로드되길 기다리는 역할. 로드되면 필요한 것들을 불러옴.
// 만약 EventListener를 거치지 않으면? DOM이 로드되기 전에 getElement를 실행 > null 반환됨.
document.addEventListener('DOMContentLoaded', function () {
    dem = document.getElementById('download');
    dem.onclick = download;
})

// 다운로드 버튼을 누르면 실행되는 함수.
// original from <javascript.info>
function download() {

    function randomString(fileSize) {
        let date = new Date();
        let timeNum = date.getSeconds() * 100 + date.getMilliseconds();
        // console.log(timeNum);

        let randomNum = timeNum % 256;
        // console.log(randomNum);
        for (let idx = 0; idx < fileSize; idx++) {
            contents.push(randomNum);
            randomNum = randomNum * 512795 % 256;
            while (randomNum == 0) {
                randomNum = date.getMilliseconds();
            }
            // console.log(idx + ": " + randomNum);
        }
    }

    let contents = [];
    let fileSize = document.getElementById('fileSize').value;
    randomString(fileSize);

    let link = document.createElement('a');
    link.download = document.getElementById('fileName').value;

    // ↓ blob 구성하고, 다운로드시키는 코드
    let blob = new Blob([new Uint16Array(contents)], {
        type: 'text / plain'
    });

    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}