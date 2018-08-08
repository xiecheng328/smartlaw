// pages/mine/my-data/change-address/change-address.js
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
      }
    ]

  },
  switch1Change: function(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }, 
  deleteAddress:function(){
    
  },
  formSubmit: function (e) {
    var changename = e.detail.value.changename;
    var changephone = e.detail.value.changephone;
    var changeprovince = e.detail.value.changeprovince;
    var changeaddress = e.detail.value.changeaddress;
    // wx.navigateTo({
    //   url: '../my-data/my-data?changename=' + changename,
    //   url: '../my-data/my-data?changephone=' + changephone,
    //   url: '../my-data/my-data?changeprovince=' + changeprovince,
    //   url: '../my-data/my-data?changeaddress=' + changeaddress
      

      
    // });
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