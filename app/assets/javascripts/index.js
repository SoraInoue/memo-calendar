$(document).on('turbolinks:load', function(){
  $(document).on('click','.sidememo__bar__plus', function(){
    let sidememoLength = $('#memo-box').children('li').length;
    
    $("#memo-input").before(`<li class="side-memo" id="write-memo${sidememoLength}">
                              <div class="memo-preview">
                                <div class="memo-preview__bar">
                                  <input class="memo-preview__bar__title" type="text" >
                                  <div class="memo-preview__bar__times" date-id="${sidememoLength}">
                                    <i class="fas fa-times"></i>
                                  </div>
                                </div>
                                <div class="memo-preview__text">
                                  <textarea class="memo-preview__text__main"></textarea>
                                </div>
                              </div>
                            </li>`)
    
  });
});