'use strict';
/**
 *@desc
 *@author wenzhe
 *@date 2019-06-02
 */
/**
 * 获取函数的形参个数
 * @param url String
 * @return Promise对象
 */

module.exports = function (url) {
    //  需要网页端引用 才能新建Image对象
    let image = new Image();
    image.crossOrigin = '';
    image.src = url;
    return promise = new Promise((reslove) => {
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height);
            const ext = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase();
            const dataURL = canvas.toDataURL('image/' + ext);
            reslove(dataURL);
        };
    })
}