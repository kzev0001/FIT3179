document.addEventListener("DOMContentLoaded", function() {
    // Map Visualization
    const mapSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "title": "Happiness Score Across Countries in 2019",
      "width": 650, 
      "height": 450,
      "layer": [
        {
          "data": {
            "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Idioms/Map/Ocean.json",
            "format": {
              "type": "topojson",
              "feature": "ocean"
            }
          },
          "mark": {
            "type": "geoshape",
            "fill": "coral"
          }
        },
        {
          "data": {
            "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Idioms/Map/Land.json",
            "format": {
              "type": "topojson",
              "feature": "land"
            }
          },
          "mark": {
            "type": "geoshape",
            "fill": "#e2bc00"
          }
        },
        {
          "data": {
            "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Idioms/Map/Countries.json",
            "format": {
              "type": "topojson",
              "feature": "Map"
            }
          },
          "transform": [
            {
              "lookup": "properties.NAME_EN",
              "from": {
                "data": {
                  "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Dataset/2019.csv"
                },
                "key": "Country or region",
                "fields": ["Country or region", "Overall rank", "Score"]
              }
            }
          ],
          "mark": {
            "type": "geoshape",
            "stroke": "#000000",
            "strokeWidth": 0.5
          },
          "encoding": {
            "color": {
              "field": "Score",
              "type": "quantitative",
              "scale": {
                "domain": [2.5, 8],
                "range": ["#d9f0a3", "#1b7837"],
                "nullValue": "#d9d9d9"
              },
              "legend": {
                "title": "Happiness Score",
                "gradientLength": 200
              }
            },
            "tooltip": [
              {
                "field": "properties.NAME_EN",
                "type": "nominal",
                "title": "Country"
              },
              {
                "field": "Overall rank",
                "type": "quantitative",
                "title": "Overall Rank"
              },
              {
                "field": "Score",
                "type": "quantitative",
                "title": "Happiness Score"
              }
            ]
          }
        }
      ],
      "config": {
        "view": {
          "stroke": "transparent"
        }
      }
    };
    vegaEmbed('#map', mapSpec);

    // Histogram Visualization
    const histogramSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "title": "Distribution of Happiness Scores (2019)",
      "data": {
        "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Dataset/2019.csv",
        "format": {"type": "csv"}
      },
      "width": 500,
      "height": 400,
      "mark": {
        "type": "bar",
        "tooltip": true,
        "cornerRadiusTopLeft": 3,
        "cornerRadiusTopRight": 3
      },
      "encoding": {
        "x": {
          "field": "Score",
          "type": "quantitative",
          "bin": true,  
          "axis": {
            "title": "Happiness Score",
            "labelFontSize": 12,
            "titleFontSize": 14
          }
        },
        "y": {
          "aggregate": "count",  
          "type": "quantitative",
          "axis": {
            "title": "Number of Countries",
            "labelFontSize": 12,
            "titleFontSize": 14
          }
        },
        "color": {
          "aggregate": "mean",  
          "field": "Score",
          "type": "quantitative",
          "scale": {
            "scheme": "viridis"
          },
          "legend": {
            "title": "Average Happiness Score"
          }
        }
      },
      "config": {
        "background": "#F5F5F5",
        "view": {
          "stroke": "transparent"
        }
      }
              };
              vegaEmbed('#histogram', histogramSpec);

    // Barchart Visualization
      const barchartspec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "title": "Top 20 Countries by GDP per Capita (2019)",
            "data": {
              "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Dataset/2019.csv",
              "format": {"type": "csv"}
            },
            "width": 600,
            "height": 400,
            "mark": {
              "type": "bar",
              "tooltip": true,
              "cornerRadiusTopLeft": 3,
              "cornerRadiusTopRight": 3
            },
            "encoding": {
              "x": {
              "field": "Country or region",
              "type": "ordinal",
              "axis": {
                "title": "Country",
                "labelAngle": -45,
                "labelFontSize": 10,
                "titleFontSize": 12
              }
            },
            "y": {
              "field": "GDP per capita",
              "type": "quantitative",
              "axis": {
                "title": "GDP per Capita",
                "labelFontSize": 10,
                "titleFontSize": 12
              }
            },
            "color": {
            "field": "GDP per capita",
            "type": "quantitative",
            "scale": {
            "scheme": "greens"
          },
          "legend": {
            "title": "GDP per Capital"
          }
        }
      },
      "transform": [
        {
        "window": [{"op": "row_number", "as": "rank"}],
        "sort": [{"field": "GDP per capita", "order": "descending"}]
      },
      {
      "filter": "datum.rank <= 20"
    }
  ],
  "config": {
    "background": "#F5F5F5",
      "view": {
        "stroke": "transparent"
      }
    }
  };
  vegaEmbed('#barchart', barchartspec);

    // scatterplot Visualization
    const scatterspec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "title": "Life Expectancy vs. Happiness Score (2019)",
      "data": {
        "url": "https://raw.githubusercontent.com/kzev0001/FIT3179/main/Visualisation/Dataset/2019.csv",
        "format": {"type": "csv"}
      },
        "width": 600,
        "height": 400,
        "mark": {
          "type": "circle",
          "tooltip": true
      },
      "encoding": {
        "x": {
          "field": "Healthy life expectancy",
          "type": "quantitative",
            "axis": {
              "title": "Life Expectancy",
            "labelFontSize": 12,
            "titleFontSize": 14
          }
        },
        "y": {
          "field": "Score",
          "type": "quantitative",
        "axis": {
          "title": "Happiness Score",
          "labelFontSize": 12,
          "titleFontSize": 14
        }
      },
      "color": {
        "field": "GDP per capita",
        "type": "quantitative",
        "scale": {
          "scheme": "viridis"
        },
        "legend": {
        "title": "GDP per Capita"
      }
    },
    "size": {
      "field": "GDP per capita",
      "type": "quantitative",
        "legend": {
          "title": "GDP per Capita"
        },
        "scale": {
          "range": [10, 400]
        }
      },
      "tooltip": [
        {"field": "Country or region", "type": "ordinal"},
        {"field": "Healthy life expectancy", "type": "quantitative"},
        {"field": "Score", "type": "quantitative"},
        {"field": "GDP per capita", "type": "quantitative"}
      ]
    },
    "config": {
      "background": "#F5F5F5",
      "view": {
        "stroke": "transparent"
      }
    }
  };
  vegaEmbed('#scatterplot', scatterspec);
});
