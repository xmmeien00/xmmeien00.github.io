window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  luckydraw: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b8a7weXWZEKpStVyWP+TY3", "luckydraw");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        item_root: {
          type: cc.Node,
          default: null
        },
        lucky_draw: cc.Node,
        startbottom: cc.Node,
        ewm: cc.Node,
        bottom_share_new: {
          type: cc.Node,
          default: null
        },
        anime: cc.Node
      },
      onLoad: function onLoad() {
        this.anime = this.anime.getComponent(cc.Animation);
        this.anime.playEnd = function() {
          this.lucky = 9 * Math.random();
          this.lucky = Math.floor(this.lucky);
          console.log(this.lucky);
          this.item_root.children[this.lucky].active = true;
          this.bottom_share_new.active = true;
        }.bind(this);
      },
      start: function start() {},
      start_click: function start_click() {
        this.anime.node.active = true;
        this.anime.play("running");
      },
      share_click: function share_click() {
        this.ewm.active = true;
        this.bottom_share_new.active = false;
        this.startbottom.active = false;
      },
      new_click: function new_click() {
        var i = 0;
        for (i = 0; i < 9; i++) this.item_root.children[i].active = false;
        this.bottom_share_new.active = false;
        this.startbottom.active = true;
      },
      return_click: function return_click() {
        this.bottom_share_new.active = true;
        this.ewm.active = false;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "luckydraw" ]);