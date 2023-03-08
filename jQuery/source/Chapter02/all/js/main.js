$(function(){
    $('#typo .inner')
        .on('mouseover', function(){
            $('#typo .inner').stop(true).animate({
                backgroundColor: '#ae5e9b'
            }, 500)
        })
        .on('mouseout', function(){
            $('#typo .inner').stop(true).animate({
                backgroundColor: '#349db'
            }, 500)
        })
})