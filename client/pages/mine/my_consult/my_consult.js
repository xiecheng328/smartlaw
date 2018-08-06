// pages/mine/my_consult/my_consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      chatList:[
        {
          src:'../images/my_consult/myphoto.png',
          name:'钱悦',
          company:'钱悦律师事务所',
          date:'2018-7-18',
          lawtype:'#买卖合同'
        }, {
          src: '../images/my_consult/myphoto.png',
          name: '钱悦',
          company: '钱悦律师事务所',
          date: '2018-7-18',
          lawtype: '#买卖合同'
        }, {
          src: '../images/my_consult/myphoto.png',
          name: '钱悦',
          company: '钱悦律师事务所',
          date: '2018-7-18',
          lawtype: '#买卖合同'}
      ]
  },
  next:function(){
    wx.navigateTo({
      url: 'consult_interface/consult_interface',
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