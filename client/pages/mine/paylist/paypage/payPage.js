// pages/lawyer_assessment/ofsearch/pay1/pay1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1: 'XXX元',
    items: [
      {
        img: 'img1.png',
        logo: '微信支付',
        name: 'weixin',
        checked: 'true'
      },
      {
        img: 'img2.png',
        logo: '银联支付',
        name: 'card',
        checked: 'true'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  app: function () {
    wx.showModal({
      title: '',
      content: '支付成功',
      showCancel: false,
      confirmText: '确定',
      // confirmColor:'#ffffff',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../payList'
          })
        }
      }
    })
  }

})