module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "system": {
          "alert800": "rgba(82, 54, 0, 1)",
          "alert500": "rgba(255, 171, 0, 1)",
          "alert200": "rgba(255, 241, 214, 1)",
          "error200": "rgba(255, 222, 214, 1)",
          "error800": "rgba(102, 20, 0, 1)",
          "error500": "rgba(255, 86, 48, 1)"
        },
        "bluegreen": {
          "bluegreen100": "rgba(235, 255, 255, 1)",
          "bluegreen900": "rgba(0, 41, 41, 1)",
          "bluegreen700": "rgba(0, 122, 122, 1)",
          "bluegreen800": "rgba(0, 61, 61, 1)",
          "bluegreen300": "rgba(153, 255, 255, 1)",
          "bluegreen500": "rgba(0, 204, 204, 1)",
          "bluegreen400": "rgba(0, 245, 245, 1)",
          "bluegreen200": "rgba(194, 255, 255, 1)",
          "bluegreen600": "rgba(0, 166, 166, 1)",
          "bluegreen50": "rgba(245, 255, 255, 1)"
        },
        "yellow": {
          "yellow50": "rgba(255, 252, 244, 1)",
          "yellow700": "rgba(138, 109, 5, 1)",
          "yellow100": "rgba(254, 250, 235, 1)",
          "yellow400": "rgba(248, 211, 71, 1)",
          "yellow500": "rgba(246, 197, 19, 1)",
          "yellow300": "rgba(251, 226, 137, 1)",
          "yellow600": "rgba(197, 156, 7, 1)",
          "yellow900": "rgba(39, 31, 1, 1)",
          "yellow800": "rgba(79, 62, 3, 1)",
          "yellow200": "rgba(253, 241, 196, 1)"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "default": {
          "success800": "rgba(0, 63, 14, 1)",
          "success500": "rgba(1, 147, 33, 1)",
          "error700": "rgba(195, 26, 0, 1)",
          "white": "rgba(255, 255, 255, 1)",
          "success100": "rgba(196, 246, 179, 1)"
        },
        "grey": {
          "grey800": "rgba(61, 61, 61, 1)",
          "grey600": "rgba(122, 122, 122, 1)",
          "grey200": "rgba(245, 245, 245, 1)",
          "grey700": "rgba(92, 92, 92, 1)",
          "grey500": "rgba(163, 163, 163, 1)",
          "grey300": "rgba(235, 235, 235, 1)",
          "grey400": "rgba(204, 204, 204, 1)",
          "grey900": "rgba(23, 23, 23, 1)",
          "grey100": "rgba(252, 252, 252, 1)"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "TwoUnits": "32px",
        "Unit": "16px",
        "ThreeUnits": "48px",
        "HalfUnit": "8px",
        "FourUnits": "64px",
        "FiveUnits": "80px",
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px"
      },
      "scale": {
        "Small": "48px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "Large": "144px",
        "XLarge": "192px",
        "XSmall": "16px",
        "XXLarge": "288px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}