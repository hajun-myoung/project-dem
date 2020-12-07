# WELCOME! | 어서오세요!
이 레포지토리는 D.E.M.을 만드는 과정과, 그 결과를 담기 위한 것입니다.  
This repository is created for saving the process and result of D.E.M.  
  
**중요한 사실 하나만 적어놓을게요. 이 프로젝트는 [과제 제출기한 연장 프로그램](http://homework.lkl.kr/)으로부터 영감을 받아 시작되었어요.**  
**Here is an important thing. This project is inspired by [assignment deadline extension program](http://homework.lkl.kr/).**

## what is D.E.M.? | D.E.M 이 뭐죠?
'D.E.M.'은 Deadline Extension Machine(제출기한 연장기)를 뜻해요. 이 간단한 머신은 사용자가 원하는 크기의 **깨진** 파일을 만들어주죠.  
'D.E.M.' means 'Deadline Extension Machine'. It generates a crashed file for an extension of your deadline for an assignment.

## Usage | 사용법
1. [D.E.M. 사이트](https://hajun-myoung.github.io/project-dem/)에 접속하세요.
1. 제출할 파일 이름을 확장자를 포함해 입력하세요. (`예: 보고서.hwp, 마지막_진짜_라스트.pptx`)
1. 제출할 파일의 용량을 정해주세요.
1. 다운로드하세요.
    - 다운받은 파일의 용량과, 확장자가 의도한 대로 구성되었는지 확인하세요.
    - 정상적으로 **읽히지 않는지**도 꼭 확인하세요.
1. 이제 제출하세요!
    - 마치 정말 과제를 힘들게 다 끝낸 것 처럼 메일 작성하는 것 잊지 마시구요.
1. *일단은* 제출기한이 연장되었습니다. 이제 편하게 롤이나 한 판 돌리죠!

ENG)  
1. Access the [D.E.M. site.](https://hajun-myoung.github.io/project-dem/)
1. Enter the file name to be submitted, including the extension. (`example: report.docs, final_real_final.pptx`)
1. Enter the file size of it.
1. Download it.
    - Check the file name and size.
    - Make sure you **can't read** it.
1. Submit it!
    - Remember that writing an e-mail as if you really had a hard time finishing the assignment.
1. *For now* the Deadline is extended. Let's get play the LoL! 

## Caution | 주의사항
이 머신으로 이뤄진 어떤 결과도 저는 책임지지 않습니다.  
과제를 하는 데 가장 중요한 건, 우리에게 없는 성실함이에요!  
  
I'm not responsible for any results achieved with this machine.  
The most important thing in doing assignments is the integrity we don't have!


## Update Log | 업데이트 기록
### Dec 4, 2020
- 프로젝트 만듦
- 기본적인 README.md 작성
- 기본 `html`파일, `js`파일 작성
    - 기본 `html` : 파일 이름 및 용량을 입력할 수 있는 input 박스, 다운로드 버튼
    - 기본 `js` : 다운로드 버튼 클릭 시 실행되는 함수, Blob 개념 도입.

### Dec 5, 2020
- 난수를 미리 생성해놓고 처리하고자 200,000 글자의 난수파일 만듦
    - 취소(200,000글자 파일 삭제)
        - `js`로 로컬 파일 읽게 시키기에는 단순한 프로젝트임
        - 사용자가 요청하는 데이터의 용량이 문제될 정도로 크지 않을 것으로 예상됨.
- `js`파일 완성: 처음 구상한 기능들의 구현을 완료함.
    - 난수 생성 완료. 다만 pseudo-random(유사난수)이기에, 수정이 필요했음.
        - 파일의 용량이 커지면, 특정구간이 반복되는 문제 발생.
        - 생성된 데이터를 이루는 대부분의 문자가 공백, 간단한 특수기호, 읽을 수 없는 문자(?로 표시)임. 이는 '깨졌다'라는 이미지를 주기에 부족함.
    - 난수 생성 코드 완성.
        - 한글 범위에서 난수를 생성하도록 설정.
        - 결과적으로 반복되는 구간을 없애는 데 성공 + 뷁어로 이루어져있어 누가봐도 '깨진' 파일이 생성됨.

### Dec 6, 2020
- 사이트 디자인 완료
    - 인스타 갬성
- 경고배너 추가
- README.md에 사이트 링크 연결
- 파비콘(탭에 뜨는 작은 사이트 이미지) 생성 및 등록
- open graph 메타태깅 : 카카오톡 미리보기에 뜨게 하기 위해서

### Will update these: | 앞으로 예정된 업데이드:
- 제각각 다른 화면에서도 문제없이 그려지는 사이트가 되도록 div 설정 변경 예정
- 모바일에서 사용할 수 있도록 모바일 친화적인 환경 구성
- 최근 업데이트 로그를 사이트에 노출