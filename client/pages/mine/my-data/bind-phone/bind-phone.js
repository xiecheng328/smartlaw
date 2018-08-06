// pages/mine/my-data/bind-phonNum/bind-phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boolean: false,
    boolean1: false
  },

  changePhone: function() {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    });
    console.log(bol)
  },
  nextStep: function() {
    var bol1 = this.data.boolean1;
    var bol = this.data.boolean;
    this.setData({
      boolean1: !bol1,
      boolean: !bol,

    });
  },
  alert_success: function() {
    wx.showModal({
      title: '修改成功',
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../my-data/my-data',
          })
        }
      }
    })
  },
  formSubmit: function(e) {
    var realphone = e.detail.value.realphone;
    console.log(realphone);
    wx.navigateTo({
      url: '../my-data/my-data?realphone=' + realphone

    });
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