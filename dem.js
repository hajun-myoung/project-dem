let dem;
document.addEventListener('DOMContentLoaded', function () {
    dem = document.getElementById('download');
    dem.onclick = download;
})

let contents = new Uint8Array;
function random(fileSize) {
    //파일 사이즈만큼 랜덤한 수열 생성하는 함수 짜야 함.
}

function download() {
    let link = document.createElement('a');
    link.download = document.getElementById('fileName').value;

    let blob = new Blob([contents], {
        type: 'text / plain'
    });

    let fileSize = document.getElementById('fileSize').value;
    random(fileSize);

    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
    //다운로드시키는 함수는 js.info 통해서 완성
}