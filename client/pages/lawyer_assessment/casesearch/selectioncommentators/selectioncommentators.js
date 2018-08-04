Page({
  data: {
    array1: ['法官一', '法官二', '法官三', '法官四'],
    word1: ['法官一是xx法院知名法官', '法官二是xx法院知名法官', '法官三是xx法院知名法官', '法官四是xx法院知名法官'],
    pay1:['1','2','3'],
    array2: ['检察官一', '检察官二', '检察官三', '检察官四'],
    word2: ['检察官一是知名检察官', '检察官二是知名检察官', '检察官三是知名检察官', '检察官四是知名检察官'],
    pay2:['11','22','33'],
    array3: ['知名律师一', '知名律师二', '知名律师三', '知名律师四'],
    word3: ['律师一是知名律师', '律师二是知名律师', '律师三是知名律师', '律师四是知名律师'],
    pay3:['111','222','333'],
    selected1: 'block',
    selected2: 'none',
    selected3: 'none',



    items: [
      { name: '法官', value: '', checked: 'true' },
      { name: '检察官', value: '' },
      { name: '知名律师', value: '' }
    ],
    index1: 0,
    index2: 0,
    index3: 0
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == '法官') {
      this.setData({
        selected1: 'block', selected2: 'none', selected3: 'none'
      })
    } else if (e.detail.value == '检察官') {
      this.setData({
        selected1: 'none', selected2: 'block', selected3: 'none'
      })
    } else {
      this.setData({
        selected1: 'none', selected2: 'none', selected3: 'block'
      })
    }
  }

})