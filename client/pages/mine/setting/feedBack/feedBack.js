// pages/mine/setting/feedBack/feedBack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  show: function(){
    // wx.showToast({
    //   content: '恭喜您，提交成功！我们将会接受您的反馈',
    //   icon: 'success',
    //   duration: 2000
    // })
    wx.showModal({
      // title: '',
      content: '恭喜您，提交成功！我们将会接受您的反馈',
      showCancel:false,
      cancelText:'',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } 
      }
    })
  }
})