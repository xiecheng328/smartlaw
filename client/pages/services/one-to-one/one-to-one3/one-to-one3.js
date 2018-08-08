// pages/services/one-to-one/one-to-one3/one-to-one3.js
Page({
  data: {
    list1: [
      {
        img: '../../../images/lvshi1.png',
        name: '王**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star:'⭐⭐⭐⭐'

      },
      {
        img: '../../../images/lvshi1.png',
        name: '王**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star: '⭐⭐⭐⭐⭐⭐'
  
      },
      {
        img: '../../../images/lvshi1.png',
        name: '李**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star: '⭐⭐'

      },
      {
        img: '../../../images/lvshi1.png',
        name: '王**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star: '⭐⭐⭐'

      },
      {
        img: '../../../images/lvshi1.png',
        name: '赵**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star: '⭐⭐'

      },
      {
        img: '../../../images/lvshi1.png',
        name: '王**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star: '⭐⭐⭐⭐'
      },
      {
        img: '../../../images/lvshi1.png',
        name: '王**',
        position: 'XXX律师事务所',
        worktime: '5年',
        star: '⭐⭐'
      },
    ],
  },
  indexChange: function (e) {
    this.setData({
      currentTapIndex: e.target.dataset.tapindex
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '12345678900',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
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
  
  }
})