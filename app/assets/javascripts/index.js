$(document).on('turbolinks:load', function(){
  // クリック時side-memoの追加
  var labelLength = 0;
  $(document).on('click','.sidememo__bar__plus', function(){
    
    let memoLength = $('#memo-box').children('li').length;
    console.log(memoLength)
    if (memoLength < 5) {
      $("#memo-input").before(`<li class="side-memo" id="write-memo${labelLength}" date-smemo-id="${labelLength}">
                                <div class="memo-preview${labelLength}">
                                  <div class="memo-preview__bar">
                                    <input class="memo-preview__bar__title" type="text" >
                                    <div class="memo-preview__bar__times" data-smemo="${labelLength}">
                                      <i class="fas fa-times" ></i>
                                    </div>
                                  </div>
                                  <div class="memo-preview__text">
                                    <textarea class="memo-preview__text__main"></textarea>
                                  </div>
                                </div>
                              </li>`)
      labelLength += 1;
    }
  });
  
  $('#memo-box').on('click','.memo-preview__bar__times', function(){
    let targetSmemoId = $(this).data('smemo');
    $(`#write-memo${targetSmemoId}`).remove();
  });
});
