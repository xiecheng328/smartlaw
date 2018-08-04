// pages/commission/commmission.js
var util = require('../../utils/util.js');

Page({

  /*
   * 页面的初始数据
   */
  data: {
    time: '',
    date: '',
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    show1: false,//控制下拉列表的显示隐藏，false隐藏、true显示时间
    selectData: ['民事', '刑事', '商事', '行政', '国际事务', '其他'],//下拉列表的数据
    selectData1: ['1小时', '2小时', '3小时', '4小时', '5小时', '6小时'],//下拉列表的数据时间
    index: 0,//选择的下拉列表下标
    idx: 0,//选择的下拉列表下标时间
    sorts:[
      { name: '是', value: '是', id: '2', checked: 'true' },
      { name: '否', value: '否', id: '1' }
    ]
  },
  // 点击下拉显示框咨询
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表咨询
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  // 点击下拉显示框时间
  selectTap1() {
    this.setData({
      show1: !this.data.show1
    });
  },
  // 点击下拉列表时间
  optionTap1(e) {
    let Index = e.currentTarget.dataset.idx;//获取点击的下拉列表的下标
    this.setData({
      idx: Index,
      show1: !this.data.show1
    });
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var date = util.formatTime1(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date: date
    });
    var time = util.formatTime2(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });

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