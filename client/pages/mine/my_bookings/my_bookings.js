// pages/mine/my_bookings/my_bookings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTapIndex: 0,
    flag: false,
    bookremind:'预约提醒',
    bookList: [{
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '王1律师',
        lawtype: '合同买卖'
      },
      {
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '王2律师',
        lawtype: '合同买卖'
      }
    ],
    outdateList:[
      {
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '张1律师',
        lawtype: '合同买卖'},
      {
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '张2律师',
        lawtype: '合同买卖'}
    ]
  },
  tapHandle: function(e) {
    this.setData( {
      currentTapIndex :e.target.dataset.tapindex
    });
  },
  editbook:function(){
    wx.navigateTo({
      url: 'edit_bookings/edit_bookings',
    })
  },
  bookremind:function(){
    wx.showActionSheet({
      itemList: ['提醒我'],
      success: res=> {
        this.setData({ bookremind: '已提醒' })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  bookDelete:function(e){
    var that =this;
    wx.showModal({
      title: '提示',
      content: '确认删除 我们会尽快将预约金额尽快退回到您的账户',
      confirmColor: '#577eff',      
      success: res=> {
        if (res.confirm) {
          var bookIndex = e.currentTarget.dataset.index;
          console.log(e.currentTarget.dataset.index);
          var bookArr = that.data.bookList;
          bookArr=bookArr.pop(bookArr[bookIndex]);
          that.setData({
            bookList:[bookArr]
          })
          console.log(bookArr);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  outdateDelete:function(e){
    
    wx.showModal({
      title: '提示',
      content: '确认删除',
      confirmColor:'#577eff',
      success: res=>{
        if (res.confirm) {
          var bookIndex = e.currentTarget.dataset.index;
          var bookArr = this.data.outdateList;
          bookArr.pop(bookArr[bookIndex]);
          this.setData({
            outdateList: bookArr
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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