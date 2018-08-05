// pages/mine/legal_services/legal_services.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTapIndex: 0,
    lservicesList:[
      {
        title:'代发律师函',
        lawyer:'李XX',
        status:'律师处理中',
        level:'AAA',
        paytime:'2018.7.10'
      },
      {
        title: '代发律师函',
        lawyer: '李XX',
        status: '律师处理中',
        level: '律师等级',
        paytime: '2018.7.11'
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
  tapHandler: function (e) {
    this.setData({
      currentTapIndex: e.target.dataset.tapindex
    });
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '400-000-1234'
    })
  }
})