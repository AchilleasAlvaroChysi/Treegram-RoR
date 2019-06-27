var CommentsPopup = {
     setup: function() {
    // add hidden 'div' to end of page to display popup:
        var popupDiv = $('<div id="photoComments"></div>');
        popupDiv.hide().appendTo($('body'));
        $(document).on('click', '#slide ', CommentsPopup.getPhotoComments);
    }
    ,getPhotoComments: function() {
//         console.log($(this),"before");
        $.ajax({type: 'GET',
                url: $(this).attr('href'),
                timeout: 5000,
                success: CommentsPopup.showPhotoComments,
                error: function(xhrObj, textStatus, exception) { alert('Error!'); }
                // 'success' and 'error' functions will be passed 3 args
            });
//         console.log($(this).attr('href'),"AFTER");
        return(false);
    }
    ,showPhotoComments: function(data, requestStatus, xhrObject) {
        // center a floater 1/2 as wide and 1/4 as tall as screen
        var oneFourth = Math.ceil($(window).width() / 3);
        $('#photoComments').
          css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).
          html(data).
          show();
        // make the Close link in the hidden element work
        $('#closeLink').click(CommentsPopup.hidePhotoComments);
        return(false);  // prevent default link action
    }
    ,hidePhotoComments: function() {
        $('#photoComments').hide();
        return(false);
    }
  };
$(CommentsPopup.setup);
