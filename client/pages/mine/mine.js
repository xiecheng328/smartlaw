// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      minelist:[
        {
          img: "images/clock.png",
          title:"我的预约",
          url:'my_bookings/my_bookings'
        },
        {
          img: "images/payList.png",
          title: "付费报告列表",
          url: "paylist/payList"
        },
        {
          img: "images/serverList.png",
          title: "法律服务列表",
          url:'legal_services/legal_services'
        },
        {
          img: "images/consult.png",
          title: "我的咨询",
          url:'my_consult/my_consult'
        },
        {
          img: "images/answer.png",
          title: "案件问答",
          url:'interlocution/interlocution'
        },
        {
          img: "images/history.png",
          title: "历史浏览",
          url:'history/history'
        },
        {
          img: "images/favorite.png",
          title: "我的收藏",
          url:'collect/collect/collect'
        },
        {
          img: "images/enter.png",
          title: "律师入驻"
        },
        {
          img: "images/information.png",
          title: "我的资料",
          url:'my-data/my-data/my-data'
        },
        {
          img: "images/setting.png",
          title: "我的设置",
          url:'setting/setting'
        },
      ],
      gt:'>'
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