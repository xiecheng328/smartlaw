// pages/lawyer_assessment/lawyer_search/personal_message/personal_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'委托人姓名：',
    phone:'委托人电话号码：',
    name1:'收件人姓名：',
    phone1:'收件人电话号码：',
    address:'收件人地址：',
    address1:'详细地址：',
    casedes:'案情描述'
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

  showtip:function(){
    wx.showModal({
      content: '提交成功！将为您显示详细的律师信息',
      showCancel:false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../more_details/more_details'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})