//index.js

let AnalysysAgent = wx.AnalysysAgent
// let Page = AnalysysAgent.Page


Page({
  onShareAppMessage: function () {
    // console.log(this)
    let shareProperties = {
      title: "6点分享",
      path: 'pages/index/index?id=&utm_campaign=123'
    }
    return AnalysysAgent.share(shareProperties, {'11add': 123});
    // return shareProperties
  },
  data: {
  },
  onShow: function () {
    console.log('222222')
    // AnalysysAgent.registerSuperProperty('b', 7777)
    // AnalysysAgent.track("a1111111a", { a: 1 })
    AnalysysAgent.pageProperty({ 'sd': 'property1'})
  },
  onHide: function () {
    console.log('onHide-index-11')
  },
  onUnload: function () {
    console.log('onUnload-index-11')
  },
  onReady () {
    console.log('33333')
  },
  onLoad: function (option) {
    console.log('1111111')
    // AnalysysAgent.pageView('22222')
    // AnalysysAgent.registerSuperProperty('b', 7777)
    // console.log('重要重要onLoad-->', option)
    // wx.updateShareMenu({
    //   // 要求小程序返回分享目标信息
    //   withShareTicket: true,
    //   success: function (res) {
    //     // 分享成功
    //     console.log('shareMenu share success')
    //     console.log('分享成功', res)
    //   },
    //   fail: function (res) {
    //     // 分享失败
    //     console.log('分享失败' + res)
    //     console.log(res)
    //   }
    // });
    // AnalysysAgent.pageView('22222', { b: 1 }, { c: 1 })
  },
  nextPage: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // API 开始   其中方法名字后缀为R的为不合法测试。
  registerSuperProperty: function () {
    AnalysysAgent.registerSuperProperty("age", 20)
  },
  registerSuperProperties: function () {
    var str = "";
    for (var i = 0; i < 300; i++) {
      str += "你你"
    }
    let superProperty = {
      "age": 20,
      "member": "25"
    }
    AnalysysAgent.registerSuperProperties(superProperty)
  },
  unRegisterSuperProperty: function () {
    AnalysysAgent.unRegisterSuperProperty("age")
  },
  clearSuperProperties: function () {
    AnalysysAgent.clearSuperProperties()
  },
  getSuperProperty: function () {
    console.log(AnalysysAgent.getSuperProperty("member"))
  },
  getSuperProperties: function () {
    console.log(AnalysysAgent.getSuperProperties())
  },
  // 超级属性 不合法测试
  registerSuperPropertyR: function () {
    AnalysysAgent.registerSuperProperty("age", "")
  },
  registerSuperPropertiesR: function () {
    let superProperty = {
      "": 20,
      "member": ""
    }
    AnalysysAgent.registerSuperProperties(superProperty)
  },
  // profile 系列合法API 
  profileSet: function () {
    let profiles = {
      "Email": "yonghu@163.com",
      "WeChatID": "wx123"
    }
    AnalysysAgent.profileSet(profiles)
  },
  profileSetOnce: function () {
    let setOnceProfiles = {
      "activationTime": "1521594686781",
      "loginTime": "1521594726781"
    }
    AnalysysAgent.profileSetOnce(setOnceProfiles)
  },
  profileIncrement: function () {
    let profies = {
      "age": 20,
      "integral": 200
    }
    AnalysysAgent.profileIncrement(profies)
  },
  profileAppend: function () {
    AnalysysAgent.profileAppend("Movies", "霸王别姬")
  },
  profileAppendObject: function () {
    let propertyObject = { 'Movies': '霸王别姬', 'Music': ['花房姑娘'] }
    AnalysysAgent.profileAppend(propertyObject)
  },
  profileAppendArray: function () {
    let properties = ["花房姑娘", "花房姑娘22"];
    // let properties = ""
    AnalysysAgent.profileAppend("Movies", properties)
  },
  profileUnset: function () {
    AnalysysAgent.profileUnset("Movies", "霸王")
  },
  profileDelete: function () {
    AnalysysAgent.profileDelete()
  },
  // profile 不合法逻辑，方法名字后缀为 R，为错误方法校验
  profileSetR: function () {
    let profiles = {
      "": "yonghu@163.com",
      "WeChatID": ""
    }
    AnalysysAgent.profileSet(profiles)
  },
  profileSetOnceR: function () {
    let setOnceProfiles = {
      "activationTime": "",
      "": "1521594726781"
    }
    AnalysysAgent.profileSetOnce(setOnceProfiles)
  },
  profileIncrementR: function () {
    let profies = {
      "age": 20,
      "integral": "200"
    }
    AnalysysAgent.profileIncrement(profies)
  },
  profileAppendR: function () {
    AnalysysAgent.profileAppend("Movies", "")
  },
  profileAppendObjectR: function () {
    let propertyObject = { 'Movies': '霸王别姬', 'Music': [] }
    AnalysysAgent.profileAppend(propertyObject)
  },
  profileAppendArrayR: function () {
    let properties = [""]
    AnalysysAgent.profileAppend("Movies", properties)
  },
  profileUnsetR: function () {
    AnalysysAgent.profileUnset("Movies", "")
  },
  pageView: function () {
    var pageInfo = {
      'dd': "iPhone",
      add: ['222222'],
      'bbbss': 'ddd'
    }
    // AnalysysAgent.pageView("商品页", pageInfo);
    // for (var i = 0; i < 10; i++) {
    // console.log(i)
    let i = 0
    AnalysysAgent.pageView("商品页" + "--" + i, pageInfo, i);
    // }
  },
  // 其他合法逻辑，
  alias: function () {
    AnalysysAgent.alias("1")
  },
  identify: function () {
    AnalysysAgent.identify("identy", false)
  },
  reset: function () {
    AnalysysAgent.reset()
  },
  track: function () {
    let eventInfo = {
      "money": '20'
    }
    AnalysysAgent.track('payment', eventInfo)
  },
  getPresetProperties: function () {
    AnalysysAgent.getPresetProperties();
  },
  appProperty: function () {
    let obj = { openId: 200000 };
    AnalysysAgent.appProperty(obj);
  },
  getDistinctId: function () {
    AnalysysAgent.getDistinctId();
    let a = AnalysysAgent.getDistinctId();
    console.log(a)
  },
  //其他 不合法逻辑
  pageViewR: function () {
    var pageInfo = {
      "": "",
    }
    AnalysysAgent.pageView("商品页", pageInfo);
  },
  aliasR: function () {
    var str1 = "";
    for (var i = 0; i < 300; i++) {
      str1 += "你"
    }
    AnalysysAgent.alias("", "")
    // AnalysysAgent.alias("", "11")

  },
  identifyR: function () {
    AnalysysAgent.identify("userName", true)
  },
  resetR: function () {
    AnalysysAgent.reset()
  },
  trackR: function () {
    let eventInfo = {
      "money": ""
    }
    AnalysysAgent.track("payment", eventInfo)
  },
  getUserInfo: function (e) { },
  nextPage: function () {
    wx.navigateTo({
      url: '../logs/logs?campagin_id=11&utm_source=22&utm_medium=33&type=5'
    })
  }
})