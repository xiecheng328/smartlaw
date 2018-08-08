// pages/mine/my_bookings/my_bookings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTapIndex: 0,
    flag: false,
    bookList: [{
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '王律师',
        lawtype: '合同买卖',
        bookremind: '预约提醒',        
      },
      {
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '王律师',
        lawtype: '合同买卖',
        bookremind: '预约提醒',
        
      }
    ],
    outdateList:[
      {
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '张律师',
        lawtype: '合同买卖'},
      {
        start: '2018-10-09 14:30',
        end: '2018-10-09 14:30',
        lawyer: '张律师',
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
  bookremind:function(e){
    var idx = e.currentTarget.dataset.index;
    var str = `bookList[${idx}].bookremind`;
    wx.showActionSheet({
      itemList: ['提醒我'],
      success: res=> {
        this.setData({ [str]: '已提醒' })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  bookDelete:function(e){
    var that =this;
    var bookIndex = e.currentTarget.dataset.index;
    console.log(bookIndex)
    wx.showModal({
      title: '提示',
      content: '确认删除 我们会将预约金额尽快退回到您的账户',
      confirmColor: '#577eff',      
      success: res=> {
        if (res.confirm) {
          console.log(bookIndex);
          var bookArr = that.data.bookList;          
          bookArr.splice(bookIndex,1);
          that.setData({
            bookList:bookArr
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
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
          console.log(bookArr);
          bookArr.splice(bookIndex,1);
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