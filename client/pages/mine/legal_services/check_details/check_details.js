// pages/mine/legal_services/check_details/check_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consignorList: [{
      title: '代写律师函',
      person: '张女士',
      phone: '138XXXXXXXX',
    }],
    recipient: [{
      person: '赵四',
      phone: '138xxxxxxxx',
      address: '黑龙江省哈尔滨市南岗区XXX小区2栋306室'
    }],
    lawyerList: [{
      name: '李xx',
      companyname:'XXX律师事务所',
      level:'AAA'
    }],
    statusList:[
      {
        status:'进行中'
      }
    ]


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