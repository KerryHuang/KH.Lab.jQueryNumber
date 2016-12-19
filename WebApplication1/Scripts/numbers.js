$.fn.TextBoxNumberToAddComma = function () {
    $(this)
        .focus(function () {
            //當獲得focus時，要把千分位給拿掉
            $(this).val(RemoveComma($(this).val()));
            $(this).select();
        })
       .blur(function () {
           //限制輸入長度
           TextAreaLength(this, 0); // 14

           //加千分位
           AdjustComma(this, 0); // 11
       });
};

function TextBoxNumberToAddComma() {
    $(':input[type=number]').each(function (i, item) {
        $(item)
            .focus(function () {
                //當獲得focus時，要把千分位給拿掉
                $(this).val(RemoveComma($(this).val()));
                $(this).select();
            })
        .blur(function () {
            //限制輸入長度
            TextAreaLength(this, 0); // 14

            //加千分位
            AdjustComma(this, 0); // 11
        });
    });
}

//數字處理為有千分位
function AppendComma(n) {
    if (!/^((-*\d+)|(0))$/.test(n)) {
        //var newValue = /^((-*\d+)|(0))$/.exec(n);
        var newValue = RemoveComma(n);
        if (newValue != null) {
            if (parseFloat(newValue, 10)) {
                n = newValue;
            }
            else {
                n = '0';
            }
        }
        else {
            n = '0';
        }
    }

    if (parseFloat(n, 10) == 0) {
        n = '0';
    }
    else {
        n = parseFloat(n, 10).toString();
    }

    n += '';
    var arr = n.split('.');
    var re = /(\d{1,3})(?=(\d{3})+$)/g;
    return arr[0].replace(re, '$1,') + (arr.length == 2 ? '.' + arr[1] : '');
}

//將有千分位的數值轉為一般數字
function RemoveComma(n) {
    return n.replace(/[,]+/g, '');
}

//調整千分位
function AdjustComma(item, length) {
    var originalValue;
    if (length != 0) {
        originalValue = $.trim($(item).val()).length > length ? $.trim($(item).val()).substr(0, length) : $.trim($(item).val());
    } else {
        originalValue = $.trim($(item).val());
    }
    $(item).val(AppendComma(originalValue));
}

//動態調整輸入欄位的長度
function TextAreaLength(item, length) {
    if (length != 0) {
        if (item.value.length > length) {
            item.value = item.value.substring(0, length);
        }
    }
}