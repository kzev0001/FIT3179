document.addEventListener("DOMContentLoaded", function() {
    // Map Visualization
    const mapSpec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "title": "Happiness Score Across Countries in 2019",
            "width": 800, 
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
                  "fill": "#A2D5F2" 
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
                  "fill": "#F5E7A2"
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
                "mark": {
                  "type": "geoshape",
                  "fill": "#D9D9D9", 
                  "stroke": "#3E3E3E", 
                  "strokeWidth": 0.5
                },
                "encoding": {
                  "tooltip": [
                    {
                      "field": "properties.ADMIN",
                      "type": "nominal",
                      "title": "Country"
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
            "width": 600,
            "height": 400,
            "mark": "bar",
            "encoding": {
              "x": {
                "field": "Score",
                "type": "quantitative",
                "bin": true,
                "axis": {
                  "title": "Happiness Score Bins"
                }
              },
              "y": {
                "aggregate": "count",
                "type": "quantitative",
                "axis": {
                  "title": "Number of Countries"
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
});
