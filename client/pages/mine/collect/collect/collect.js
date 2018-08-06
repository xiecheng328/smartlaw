Page({

  /**
   * 页面的初始数据
   */
  data: {
    boolean: false,
    imgSrc:'../../images/collect-images/上箭头.png',
    contentList: [{
        img: "../../images/collect-images/head-pic.png",
        name: "用户名",
        date: "2018-07-10",
        description: "案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述"
      },
      {
        img: "../../images/collect-images/head-pic.png",
        name: "用户名",
        date: "2018-07-10",
        description: "案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述"
      },
      {
        img: "../../images/collect-images/head-pic.png",
        name: "用户名",
        date: "2018-07-10",
        description: "案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述"
      }

    ],
    groupList: [{
        name: '全部',
        description:'5条收藏'
      },
      {
        name: '婚姻家庭',
        description: '3条收藏'
        
      },
      {
        name: '财产',
        description: '2条收藏'
        
      }
    ]
  },
  

  list: function(event) {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    });
    this.setData({
      imgSrc: '../../images/collect-images/下箭头.png'
    })
  },
  cancle:function(){
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    });
    this.setData({
      imgSrc: '../../images/collect-images/上箭头.png'
    });
    console.log(111)
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