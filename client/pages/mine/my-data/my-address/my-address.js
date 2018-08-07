// pages/mine/my-data/my-address/my-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultAddress: [{
      default: '默认',
      name: "用户名",
      phoneNum: "15200000000",
      address: "黑龙江省 哈尔滨市 南岗区 学府路 学府书城写字楼8楼822室"
    }],
    addressList: [{
      name: "李四",
      phoneNum: "15200000000",
      address: "黑龙江省 哈尔滨市 南岗区 学府路 学府书城写字楼8楼822室"
    },
      {
        name: "张三",
        phoneNum: "15200000000",
        address: "黑龙江省哈尔滨市南岗区学府路学府书城写字楼8楼822室"
      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
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