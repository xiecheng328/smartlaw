Page({
  data: {
    list: [{
        id: 0,
        img: "../../images/collect-images/head-pic.png",
        name: "用户名",
        date: "2018-07-10",
        description: "案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述",
        checked: ''
      },
      {
        id: 1,
        img: "../../images/collect-images/head-pic.png",
        name: "zs",
        date: "2018-07-10",
        description: "案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述",
        checked: ''
      },
      {
        id: 2,
        img: "../../images/collect-images/head-pic.png",
        name: "li",
        date: "2018-07-10",
        description: "案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述",
        checked: ''
      }
    ],
    groupList: [{
        name: '全部',
        description: '5条收藏'
      },
      {
        name: '婚姻家庭',
        description: '3条收藏'

      },
      {
        name: '财产',
        description: '2条收藏'

      }
    ],
    selColor: '#999',
    selList: [],
    iconStatu: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let dataList = this.data.list;
    dataList.map(function(value) {
      value.selStatu = false;
    })
  },

  checkAll: function() {
    var selStatu = this.data.selStatu;
    this.setData({
      selStatu: !selStatu
    });

    // this.data.iconStatu = true;
    console.log(11);
  },
  // 选中
  toggleSel(e) {
    if (this.data.iconStatu) {
      let selArr = this.data.selList;
      let selId = e.target.dataset.id || e.currentTarget.dataset.id;
      let dataList = this.data.list;
      let index = this.data.selList.indexOf(selId);
      if (index < 0) {
        selArr.push(e.target.dataset.id);
        dataList.map((value) => {
          if (value.id == selId) {
            value.selStatu = true
          }
        })
      } else {
        dataList.map((value) => {
          if (value.id == selId) {
            value.selStatu = false
          }
        })
        selArr.splice(index, 1)
      }
      this.setData({
        selList: selArr,
        list: dataList
      })
    }

  },
  showList: function() {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    });
  },
  delItem() {
    let arr = this.data.list;
    let selArr = this.data.selList;
    for (let i = 0; i < selArr.length; i++) {
      arr = arr.filter((value, index) => {
        return value.id != selArr[i]
      })
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i].selStatu = false
    }
    this.setData({
      list: arr,
      selList: [],
    })
  },
  cancelEdit: function() {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
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