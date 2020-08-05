;(function () {
  function lcImgPreload(list = [], opt = {}) {
    var totalLen = list.length
    var allData = []
    if (totalLen === 0) {
      console.warn('没有加入图片！')
      return
    }
    var loadedLength = 0
    function imgLoad(status, url, index) {
      loadedLength++
      let obj = {
        status: status,
        index: index,
        url: url
      }
      opt.each && opt.each(obj)
      allData[index] = obj
      if (opt.all && loadedLength === totalLen) {
        opt.all(allData)
      }
    }

    list.forEach((p1, p2) => {
      var img = new Image();
      img.src = p1
      img.onload = function () {
        imgLoad('success', p1, p2)
      }
      img.onerror = function () {
        imgLoad('fail', p1, p2)
      }
    })
  }

  window.lcImgPreload = lcImgPreload
})();
