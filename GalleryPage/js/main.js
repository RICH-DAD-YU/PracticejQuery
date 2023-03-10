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
            allData = [], // 모든 JSON 데이터
            filteredData = []; // 필터링한 JSON 데이터

        // 옵션을 설정해서 Masonry 라이브러리를 실행할 준비를 함
        $container.masonry({
            columnWidth: 230, // 열의 가로 길이
            gutter: 10, // 열 사이의 좌우 간격
            itemSelector: '.gallery-item' // 요소 선택자
        })

        //JSON 데이터를 얻은 후 initGallery 함수 실행
        $.getJSON('./data/content.json', initGallery);

        // 갤러리 페이지 초기화
        function initGallery(data){ // 변수 data에 JSON 데이터를 전달

            // 얻게 된 JSON 데이터를 저장
            allData = data;

            // 초기 상태에서는 필터링을 하지 않고 모든 데이터를 그대로 전달
            filteredData = allData;

            // 첫 번째 이미지 항목을 표시
            addItems();

            // 추가 버튼을 클릭하면 이미지 항목을 추가로 표시
            $loadMoreButton.on('click', addItems);

            // 필터 부분에서 지정하는 라디오 버튼을 변경하면 필터링 수행
            $filter.on('change', 'input[type="radio"]', filterItems)

        }

        // 이미지 항목을 생성하여 HTML 코드로 삽입
        function addItems (filter){

            var elements = [],
                // 이미지 항목을 추가할 데이터의 배열
                slicedData = filteredData.slice(added, added + loadItemCount);
            
            // slicedData에 해당하는 요소마다 DOM 요소를 생성
            $.each(slicedData, function (i, item) {
                var itemHTML =
                    '<li class="gallery-item is-loading">' +
                        '<a href="' + item.images.large + '">' +
                            '<img src = "' + item.images.thumb + '" alt="">' +
                            '<span class="captain">' +
                                '<b class="title">' + item.title + '</b>' +
                                '<time class="date" datatime="' + item.date + '">' +
                                    item.date.replace(/-0?/g, '/') +
                                '</time>' +
                            '</span>' +
                        '</span>' +
                    '</a>' +
                '</li>';
            elements.push($(itemHTML).get(0));
            });

            // DOM 요소 배열을 이미지 배치 영역에 포함시킨 후 Masory 라이브러리로 그리드 레이아우 배치
            $container
                .append(elements)
                .imagesLoaded(function(){
                    $(elements).removeClass('is-loading');
                    $container.masonry('appended', elements);

                    // 필터링 시에는 재배치
                    if(filter){
                        $container.masonry();
                    }
                });

            // 추가한 항목 수를 업데이트
            added += slicedData.length;

            // JSON 데이터가 추가되면 추가 버튼을 삭제
            if(added < filteredData.length){
                $loadMoreButton.show();
            }else{
                $loadMoreButton.hide();
            }

        }

        // 이미지 항목을 필터링
        function filterItems(){
            
        }
    
    })
})