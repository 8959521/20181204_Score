

Component({
  properties: {
    windex: {
      type: Number
    }, //id

    // xnumber: {
    //   type: Number,
    // } //格数
  },
  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    items1: [],
    isSelected: false,
    index: Number, //下标（分数）
    xnumber: 7 //格子数，如动态设置，需添加到properties中
  },

  methods: {
    //点击格子的回调函数，获取下标，分数等 e
    click01(e) {
      console.log(e)
      this.setData({
        isSelected: !this.data.isSelected,
        index: e.currentTarget.dataset.index + 1
      })
      let items = this.data.items
      let items1 = this.data.items1
      let index = this.data.index
      let arr = []
      for (let i = 1; i <= this.data.xnumber; i++) {
        arr.push(i)
      }
      let arr1 = arr.splice(0,index)
      this.setData({
        items1: arr1
      })
      console.log(arr1)

      //组件间通信
      this.triggerEvent('myevent', {
        score: this.data.index,
        windex: this.data.windex,
      })

    }
  },


  // bindCode: function () {
  //   this.triggerEvent('myevent', {detail: "123"})
  // },

//生命周期
  ready: function () {
    let items = []
    for (let i = 1; i <= this.data.xnumber; i++) {
      items.push(i)
    }
    this.setData({
      items: items,
      items1: items
    })
   },

  
})