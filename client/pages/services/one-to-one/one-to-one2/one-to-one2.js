// pages/lshff/lshff.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkTitle: false,
    checkWX: false,
    checkYL: false,
    UnionPaybox:false,
    paynext:false,
    items: [
      { name: 'WeChat', value: '微信支付', checked: 'true'},
      { name: 'UnionPay', value: '银联支付'}
    ],
  },
  radioChange: function (e) {
    let that=this;
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    if (e.detail.value =='UnionPay'){
      that.setData({
        UnionPaybox:true
      })
    }
    else{
      that.setData({
        UnionPaybox: false
      })
    }
  },
  paynextpage:function(){
    this.setData({
      paynext: true
    })
  },
  closeprompt:function(){
    this.setData({
      paynext: false
    })
  },
  changeClass: function (e) {

    this.setData({
      checkTitle: !this.data.checkTitle
    })
    // console.log(this.data.checkTitle);

  },

  changeWX: function (e) {

    this.setData({
      checkWX: !this.data.checkWX,
      checkYL: false
    })
    // console.log(this.data.checkTitle);

  },

  changeYL: function (e) {

    this.setData({
      checkYL: !this.data.checkYL,
      checkWX: false
    })
    // console.log(this.data.checkTitle);

  },

  accountMsg: function () {
    wx.navigateTo({
      url: '../zhtx/zhtx',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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

})