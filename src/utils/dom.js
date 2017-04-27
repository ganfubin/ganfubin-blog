/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要用于dom 公共方法
 */

/**
 * @param  {[$]} $form [需要获取数据的dom元素]
 * @return {[object]}  [返回表单数据]
 */
const serializeObject = function($form){
    var obj = {};
    $form.find('[name]').each(function(i, item){
        if($this.hasClass('ignore-serialize') || ($this.closest('.ignore-serialize').length > 0))
            return true;
        var $item = $(item);
        var value = $item.val();
        var name = this.name;        
        if(item.tagName == 'INPUT'){
            var inputType = $item.attr('type');
            if(inputType == 'radio'){//单选框
                 if($item.prop('checked')){
                    obj[name] = $item.data('value') || value;
                 }
            }else if(inputType == 'checkbox'){//复选框
                if($item.prop('checked')){
                    if(obj.hasOwnProperty(name)){
                        value = obj[name].push(value)
                    }else{
                        obj[name] = [value];
                    }
                }  
            }else{
                obj[name] = value;
             }
        }else{
            obj[name] = value;
        }      
    });

    return obj;
}

/**
 * 获取屏幕高度
 */
const getWinClientHeight = () => {
    var win = document.compatMode == 'BackCompat' ? document.body : document.documentElement;
    return win.clientHeight;
};

/**
 * 设置高度并且返回高度
 */
const setHeight = ($container, h, cssType) => {
    if (cssType == 'max-height') {
        $container.css('max-height', h + 'px');
    } else if (cssType == 'min-height') {
        $container.css('min-height', h + 'px');
    } else {
        $container.height(h);
    }
    return h;
}


/**
 * 自动设置容器高度自适应页面
 * @param {jQuery} $container
 * @param {Number} padding_h
 */
const setModuleHeight = ($container, cssType, padding_h) => {
    const MODULE_MIN_HEIGHT = 500;
    var headerH = $('#header').is(':visible') ? $('#header').get(0).offsetHeight : 0,
        footerH = $('#footer').is(':visible') ? $('#footer').get(0).offsetHeight : 0,
        diff = headerH + footerH + (padding_h || 0);
    var h = getWinClientHeight() - diff;
    h = h < MODULE_MIN_HEIGHT ? MODULE_MIN_HEIGHT : h;
    $container = $container;
    setHeight($container, h, cssType);
    return h;
}

export default {
    getWinClientHeight: getWinClientHeight,
    setModuleHeight: setModuleHeight
}