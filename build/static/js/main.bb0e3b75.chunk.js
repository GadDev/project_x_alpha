(this.webpackJsonpalpha = this.webpackJsonpalpha || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = n(18);
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(2),
        l = n.n(o),
        i =
          (n(13),
          n(14),
          n(15),
          function() {
            return r.a.createElement(
              "header",
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "a",
                  {
                    href:
                      "https://www.linkedin.com/in/alexandre-gadaix-a7792947/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "logo__wrapper"
                  },
                  r.a.createElement("span", {
                    className: "logo__symbol logo__symbol--a"
                  }),
                  r.a.createElement("span", {
                    className: "logo__symbol logo__symbol--g"
                  })
                ),
                r.a.createElement("div", null, "header")
              )
            );
          }),
        c =
          (n(16),
          function() {
            return r.a.createElement(
              "footer",
              null,
              r.a.createElement("div", null, "footer")
            );
          }),
        s = n(3),
        u = n(4),
        m = n(6),
        p = n(5),
        f = n(7),
        h =
          (n(17),
          (function(e) {
            function t() {
              var e, n;
              Object(s.a)(this, t);
              for (
                var a = arguments.length, r = new Array(a), o = 0;
                o < a;
                o++
              )
                r[o] = arguments[o];
              return (
                ((n = Object(m.a)(
                  this,
                  (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
                )).state = { text: "", currentItemIndex: 0 }),
                n
              );
            }
            return (
              Object(f.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentDidMount",
                  value: function() {
                    this.typeText(this.state.currentItemIndex);
                  }
                },
                {
                  key: "typeText",
                  value: function(e) {
                    var t = this,
                      n = this.props.options;
                    this.setState({ currentItemIndex: e }, function() {
                      t.showText(n[e]);
                    });
                  }
                },
                {
                  key: "showText",
                  value: function(e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 200,
                      a =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 2500,
                      r = 0;
                    this.timer = setInterval(function() {
                      t.setState({ text: e.substr(0, r) }, function() {
                        r === e.length &&
                          ("continue.." !== e &&
                            (clearInterval(t.timer),
                            setTimeout(function() {
                              return t.hideText(e);
                            }, a)),
                          clearInterval(t.timer)),
                          r++;
                      });
                    }, n);
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function() {
                    clearInterval(this.timer);
                  }
                },
                {
                  key: "hideText",
                  value: function(e) {
                    var t = this,
                      n = this.props,
                      a = n.options,
                      r = n.loop,
                      o = e.length;
                    this.timer = setInterval(function() {
                      t.setState({ text: e.substr(0, o) }, function() {
                        if (0 === o) {
                          clearInterval(t.timer);
                          var e = t.state.currentItemIndex + 1;
                          if (e === a.length) {
                            if (!r)
                              return (
                                console.log("non loop"),
                                t.showText("continue.."),
                                !1
                              );
                            (e = 0),
                              setTimeout(function() {
                                return t.typeText(e);
                              }, 1e3);
                          }
                          setTimeout(function() {
                            return t.typeText(e);
                          }, 1e3);
                        }
                        o--;
                      });
                    }, 150);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      { className: "typewriter" },
                      r.a.createElement(
                        "div",
                        { className: "typewriter__type" },
                        this.state.text
                      ),
                      r.a.createElement("div", {
                        className: "typewriter__cursor"
                      })
                    );
                  }
                }
              ]),
              t
            );
          })(a.Component));
      h.defaultProps = { loop: !0 };
      var v = h,
        d = [
          "Hello my name's Alexandre",
          "I'm fornt end developer",
          "And I love croissants"
        ];
      var y = function() {
        return r.a.createElement(
          "div",
          { className: "App" },
          r.a.createElement(i, null),
          r.a.createElement(
            "main",
            null,
            r.a.createElement(v, { options: d, loop: !1 })
          ),
          r.a.createElement(c, null)
        );
      };
      l.a.render(r.a.createElement(y, null), document.getElementById("root"));
    }
  ],
  [[8, 1, 2]]
]);
//# sourceMappingURL=main.bb0e3b75.chunk.js.map