
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //基本上数据是要从后台获取的
    items: [
      { id: 1, content: "您给出xx的评价是多少分"},
      { id: 2, content: "您给出xx的评价是多少分" },
      { id: 3, content: "您给出xx的评价是多少分" },
      { id: 4, content: "您给出xx的评价是多少分" },
      { id: 5, content: "您给出xx的评价是多少分" },
    ],
    scoreDatas: {}, //{问题ID ：分数，}
    scoreSum: Number, //总分数
    openid: String, //登陆身份标识
    cid: 5,  //问卷的id
    xnumber: 7 //最大分数（几个格，用来传给score组件）
  },

 
//提交表单后触发，能获取表单数据e
  formSubmit(e) {
    //查看有木有全部答完问卷
    let len = 0
    for (let key in this.data.scoreDatas) {
      len++
    }
    if (len < this.data.items.length) {
      //console.log("您还有问题没答")
      wx.showToast({
        title: '亲，您还有问题没答',
        icon: 'none',
      })
      return
    }
    //求分数总和
    let data = this.data.scoreDatas
    var sum = 0
    for (let key in data) {
      sum += data[key]
    }
    this.setData({
      scoreSum: sum
    })
    //登陆时存储的，这里随便赋值了
    //var value = wx.getStorageSync('openid')
    this.setData({
      openid: 'io67adihde'
    })

    console.log('总分: ' + this.data.scoreSum +
      ' openid: ' + this.data.openid + " cid: " + this.data.cid)

    //上传数据
    // wx.request({
    //   url: 'https://xxx/shangchuan',
    //   data: {
    //     zongfen: this.data.scoreSum,
    //     openid: this.data.openid,
    //     cid: this.data.cid,
    //     data: this.data.scoreDatas
    //   },
    //   success: (res) => {
    //     wx.showToast({
    //       title: res.data.msg,
    //       icon: 'success',
    //       duration: 2000
    //     })
    //   }
    // })

  },
  //组件通信，通过这个回调可以拿到score组件中开放的数据
  onGetCode: function (e) {
    console.log(e)
    console.log(e.detail.score)
    let scoreDatas = this.data.scoreDatas
    let windex = e.detail.windex.toString() //拿到windex
    var key = windex
    scoreDatas[key] = e.detail.score
    this.setData({
      scoreDatas
    })
    //console.log(this.data.scoreDatas)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据
    // wx.request({
    //   url: 'https://xxx/huoqushuju',
    //   success: (res) => {
    //     console.log(res.data)
    //     this.setData({
    //       tname: res.data.wenjuan.name,
    //       items: res.data.wenti,
    //       cid: res.data.wenti[0].cid，
    //       xnumber: res.data.number
    //     })
    //   }
    // })
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