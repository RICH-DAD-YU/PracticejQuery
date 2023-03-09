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

        //JSON 데이터를 얻은 후 initGallery 함수 실행
        $.getJSON('./data/content.json', initGallery);

        // 갤러리 페이지 초기화
        function initGallery(data){

        }

        // 이미지 항목을 생성하여 HTML 코드로 삽입
        function addItems (filter){

        }

        // 이미지 항목을 필터링
        function fillterItems(){
            
        }
    
    })
})