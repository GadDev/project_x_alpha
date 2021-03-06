(this.webpackJsonpalpha = this.webpackJsonpalpha || []).push([
  [0],
  {
    13: function(e, t, n) {},
    14: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        l = n(2),
        o = n.n(l),
        s =
          (n(13),
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
                )
              )
            );
          }),
        i = function() {
          return r.a.createElement(
            "footer",
            null,
            r.a.createElement(
              "div",
              { className: "footer__inner-block" },
              r.a.createElement("h4", null, "Alexandre gadaix"),
              r.a.createElement("small", null, "2019")
            )
          );
        },
        c = n(3),
        u = n(4),
        m = n(6),
        p = n(5),
        h = n(7),
        d = (function(e) {
          function t() {
            var e, n;
            Object(c.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(m.a)(
                this,
                (e = Object(p.a)(t)).call.apply(e, [this].concat(r))
              )).state = { text: "", currentItemIndex: 0 }),
              n
            );
          }
          return (
            Object(h.a)(t, e),
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
                    l = e.length;
                  this.timer = setInterval(function() {
                    t.setState({ text: e.substr(0, l) }, function() {
                      if (0 === l) {
                        clearInterval(t.timer);
                        var e = t.state.currentItemIndex + 1;
                        e === a.length &&
                          (r ? (e = 0) : t.showText("do you like croissants?")),
                          setTimeout(function() {
                            return t.typeText(e);
                          }, 1e3);
                      }
                      l--;
                    });
                  }, 100);
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
        })(a.Component);
      d.defaultProps = { loop: !0 };
      var v = d,
        f = [
          "Hello my name's Alexandre, I'm front-end developer",
          "I'm front-end developer",
          "And I love croissants"
        ];
      var y = function() {
        return r.a.createElement(
          "div",
          { className: "App" },
          r.a.createElement(s, null),
          r.a.createElement(
            "main",
            null,
            r.a.createElement(
              "div",
              { className: "typewriper__wrapper" },
              r.a.createElement(v, { options: f })
            )
          ),
          r.a.createElement(i, null)
        );
      };
      o.a.render(r.a.createElement(y, null), document.getElementById("root"));
    },
    8: function(e, t, n) {
      e.exports = n(14);
    }
  },
  [[8, 1, 2]]
]);
//# sourceMappingURL=main.9d7791b4.chunk.js.map
