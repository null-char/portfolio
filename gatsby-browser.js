require("typeface-montserrat")
require("typeface-fira-sans")

// right after React.render is called
exports.onInitialClientRender = () => {
  const {
    default: Scrollbar
  } = require("smooth-scrollbar")

  // look for something with the id of smooth-scroll
  //! won't work unless the scrollable area is specified explicitly for each page
  Scrollbar.init(document.querySelector("#smooth-scroll"))
}