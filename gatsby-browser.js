require("typeface-montserrat")
require("typeface-fira-sans")
const { default: Scrollbar, ScrollbarPlugin } = require("smooth-scrollbar")

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll"

  static defaultOptions = {
    direction: null,
  }

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0
    }

    return { ...delta }
  }
}
Scrollbar.use(DisableScrollPlugin)

// right after React.render is called
exports.onRouteUpdate = () => {
  // look for something with the id of smooth-scroll
  //! won't work unless the scrollable area is specified explicitly for each page
  const scroll = Scrollbar.init(document.querySelector("#smooth-scroll"), {
    plugins: {
      disableScroll: {
        direction: "x",
      },
    },
  })
  scroll.track.xAxis.element.remove()
}
