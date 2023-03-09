$(function(){
    /**
     * 갤러리 페이지
     */
    $('#gallery').each(function(){

        // #gallery라는 id 속성값을 갖는 요소가 갤러리 페이지 영역이 됨
        var $container = $(this),
            $loadMoreButton = $('#load-more'), // 추가버튼
            $filter = $('#gallery-filter'), // 필터링 양식
            addItemCount = 16, // 한 번에 표시할 이미지 항목 수
            added = 0, // 표시된 항목 수
            allDate = [], // 모든 JSON 데이터
            filteredDate = []; // 필터링한 JSON 데이터

        // 옵션을 설정해서 Masonry 라이브러리를 실행할 준비를 함
        $container.masonry({
            columnWidth: 230, // 열의 가로 길이
            gutter: 10, // 열 사이의 좌우 간격
            itemSelector: '.gallery-item' // 요소 선택자
        })

        //JSON 파일을 요청해서 성공하면 함수를 실행
        $.getJSON('./data/content.json', function(data) {

            // 반복문으로 생성한 DOM 요소를 일시적으로 저장하는 배열
            var elements = [];

            // JSON 배열(data)의 요소(item)를 반복 실행
            $.each(data, function (i, item){
                /**
                 * data 배열의 요소마다 반복문을 실행
                 * i는 0부터 시작하는 요소의 인덱스
                 * item은 해당 요소의 class 속성값
                 */
                
                // 배열의 요소에서 HTML 코드를 생성
                // 행마다 작은 따옴표로 묶고 + 연산자로 연결해야 함
                var itemHTML = 
                    '<li class="gallery-item is-loading">' +
                        '<a href="' + item.images.large + '">' +
                            '<img src="' + item.images.thumb +
                                '" alt="' + item.title + '">' +
                            '</a>' +
                        '</li>';
                // 문자열을 DOM 요소화한 후 배열에 추가
                elements.push($(itemHTML).get(0));
            });
            // DOM 요소를 삽입
            $container.append(elements);

            // 이미지 로딩을 완료하면 Masory 라이브러리로 그리드 레이아웃 배치
            $container.imagesLoaded(function(){
                $(elements).removeClass('is-loading'); // 대상 요소의 .is-loading이라는 class 속성값 삭제
                $container.masonry('appended', elements);
            })
        })
    })
})