// pages/mine/legal_services/change_info/go_pay/go_pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 'true',
    items: [{
      name: 'payserver',
      value: '代发律师函律师推荐（一次5元）'
    }],
    payList: [{
      title : '农业银行'
    }, {
      title : '中国工商银行'
    }, {
      title : '中国建设银行'
    }, {
      title : '中国邮政储蓄银行'
    }]

  },
  paynext:function(){
    wx.showModal({
      title: '',
      content: '支付成功',
      showCancel:false,
      confirmColor:'#577eff',
      success: function (res) {
        if (res.confirm) {
           wx.navigateBack({
             url:'../../legal_services'
           })
        }
      }
    })

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

  }
})