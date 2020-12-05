let dem;
// indx.html의 DOM이 완전히 로드되길 기다리는 역할. 로드되면 필요한 것들을 불러옴.
// 만약 EventListener를 거치지 않으면? DOM이 로드되기 전에 getElement를 실행 > null 반환됨.
document.addEventListener('DOMContentLoaded', function () {
    dem = document.getElementById('download');
    dem.onclick = download;
})


function download() {

    function randomString(fileSize) {
        let date = new Date();
        let timeNum = date.getSeconds() * 100 + date.getMilliseconds();
        // console.log(timeNum);

        let randomNum = timeNum % 256;
        // console.log(randomNum);

        for (let idx = 0; idx < fileSize; idx++) {
            if (idx % 17 == 0) {
                randomNum = randomNum * 513487 % 75;
                contents.push(randomNum);
            }

            else {
                randomNum = Math.floor(Math.random() * 4) + 234;
                contents.push(randomNum);

                if (randomNum = 234) {
                    randomNum = Math.floor(Math.random() * 15) + 176;
                    contents.push(randomNum);
                    idx++;
                }
                else {
                    randomNum = Math.floor(Math.random() * 64) + 128;
                    contents.push(randomNum);
                    idx++;
                }

                randomNum = randomNum * 152486 % 64 + 128;
                contents.push(randomNum);
                idx++;
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
    let blob = new Blob([new Uint8Array(contents)], {
        type: 'text / plain'
    });

    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}