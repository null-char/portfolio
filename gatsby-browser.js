import "typeface-montserrat"
import "typeface-fira-sans"
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar"

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll"

  static defaultOptions = {
    direction: null,
  }

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0
    }

    return {
      ...delta,
    }
  }
}
Scrollbar.use(DisableScrollPlugin)

// right after React.render is called
export const onRouteUpdate = () => {
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
