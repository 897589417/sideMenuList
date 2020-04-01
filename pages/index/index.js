//index.js

Page({
  data: {
    isShowSideslip: false,
    sideslipMenuArr: ['嘿嘿', '哈哈', '啊啊啊', '通通通', '啪啪啪', '嘿嘿嘿', '哒哒哒']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  show: function() {
    this.setData({
      isShowSideslip: true
    })
  },
  offSideslipMen: function(){
    this.setData({
      isShowSideslip: false
    })
  }
  ,
  itemClick: function(e) {
    var tapId = e.currentTarget.id;
    var index = this;
    for (var i = 0; i < index.data.sideslipMenuArr.length;i++){
      if (tapId == i){
        wx.showToast({
          title: index.data.sideslipMenuArr[i],
          icon: 'none',
          image: '',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    }
  }
})