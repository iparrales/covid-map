import React from 'react';
import Header from 'components/Header';

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import {
  fetchMapData
} from '../api';
import axios from 'axios'

am4core.useTheme(am4themes_animated);

var stateData;

axios.get('https://disease.sh/v3/covid-19/states')
  .then(function (response) {
    // handle success
    stateData = response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


class App extends React.Component {
    componentDidMount() {
      console.log(stateData);
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_usaLow;

      // Set projection
      chart.projection = new am4maps.projections.AlbersUsa();

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      //Set min/max fill color for each area
      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(1).brighten(1),
        max: chart.colors.getIndex(1).brighten(-0.3)
      });

      // Make map load polygon data (state shapes and names) from GeoJSON
      polygonSeries.useGeodata = true;

      // Correspond state IDs to statename
      polygonSeries.data = [{
          id: "US-AL",
          stateName: "Alabama"
        },
        {
          id: "US-AK",
          stateName: "Alaska"
        },
        {
          id: "US-AZ",
          stateName: "Arizona"
        },
        {
          id: "US-AR",
          stateName: "Arkansas"
        },
        {
          id: "US-CA",
          stateName: "California"
        },
        {
          id: "US-CO",
          stateName: "Colorado"
        },
        {
          id: "US-CT",
          stateName: "Connecticut"
        },
        {
          id: "US-DE",
          stateName: "Delaware"
        },
        {
          id: "US-FL",
          stateName: "Florida"
        },
        {
          id: "US-GA",
          stateName: "Georgia"
        },
        {
          id: "US-HI",
          stateName: "Hawaii"
        },
        {
          id: "US-ID",
          stateName: "Idaho"
        },
        {
          id: "US-IL",
          stateName: "Illinois"
        },
        {
          id: "US-IN",
          stateName: "Indiana"
        },
        {
          id: "US-IA",
          stateName: "Iowa"
        },
        {
          id: "US-KS",
          stateName: "Kansas"
        },
        {
          id: "US-KY",
          stateName: "Kentucky"
        },
        {
          id: "US-LA",
          stateName: "Louisiana"
        },
        {
          id: "US-ME",
          stateName: "Maine"
        },
        {
          id: "US-MD",
          stateName: "Maryland"
        },
        {
          id: "US-MA",
          stateName: "Massachusetts"
        },
        {
          id: "US-MI",
          stateName: "Michigan"
        },
        {
          id: "US-MN",
          stateName: "Minnesota"
        },
        {
          id: "US-MS",
          stateName: "Mississippi"
        },
        {
          id: "US-MO",
          stateName: "Missouri"
        },
        {
          id: "US-MT",
          stateName: "Montana"
        },
        {
          id: "US-NE",
          stateName: "Nebraska"
        },
        {
          id: "US-NV",
          stateName: "Nevada"
        },
        {
          id: "US-NH",
          stateName: "New Hampshire"
        },
        {
          id: "US-NJ",
          stateName: "New Jersey"
        },
        {
          id: "US-NM",
          stateName: "New Mexico"
        },
        {
          id: "US-NY",
          stateName: "New York"
        },
        {
          id: "US-NC",
          stateName: "North Carolina"
        },
        {
          id: "US-ND",
          stateName: "North Dakota"
        },
        {
          id: "US-OH",
          stateName: "Ohio"
        },
        {
          id: "US-OK",
          stateName: "Oklahoma"
        },
        {
          id: "US-OR",
          stateName: "Oregon"
        },
        {
          id: "US-PA",
          stateName: "Pennsylvania"
        },
        {
          id: "US-RI",
          stateName: "Rhode Island"
        },
        {
          id: "US-SC",
          stateName: "South Carolina"
        },
        {
          id: "US-SD",
          stateName: "South Dakota"
        },
        {
          id: "US-TN",
          stateName: "Tennessee"
        },
        {
          id: "US-TX",
          stateName: "Texas"
        },
        {
          id: "US-UT",
          stateName: "Utah"
        },
        {
          id: "US-VT",
          stateName: "Vermont"
        },
        {
          id: "US-VA",
          stateName: "Virginia"
        },
        {
          id: "US-WA",
          stateName: "Washington"
        },
        {
          id: "US-WV",
          stateName: "West Virginia"
        },
        {
          id: "US-WI",
          stateName: "Wisconsin"
        },
        {
          id: "US-WY",
          stateName: "Wyoming"
        }
      ];


      //Attach Covid Data to States
      var stName;
      var x;
      console.log(polygonSeries.data);
      for (let i = 0; i < polygonSeries.data.length; i++) {
        //console.log(polygonSeries.data[i].stateName);
        stName = polygonSeries.data[i].stateName;
        x = stateData.filter((y) => y.state === stName)
        //console.log(x[0].cases);
        polygonSeries.data[i].value = x[0].cases;
        polygonSeries.data[i].cases = x[0].cases;
        polygonSeries.data[i].deaths = x[0].deaths;
        polygonSeries.data[i].recovered = x[0].recovered;
      }
      console.log(polygonSeries.data[0].stateName);
      console.log(stateData);


      // Set up heat legend
      let heatLegend = chart.createChild(am4maps.HeatLegend);
      heatLegend.series = polygonSeries;
      heatLegend.align = "right";
      heatLegend.valign = "bottom";
      heatLegend.width = am4core.percent(20);
      heatLegend.marginRight = am4core.percent(4);
      heatLegend.minValue = 0;
      heatLegend.maxValue = 2000000;

      // Set up custom heat map legend labels using axis ranges
      let minRange = heatLegend.valueAxis.axisRanges.create();
      minRange.value = heatLegend.minValue;
      minRange.label.text = "0 Cases";
      let maxRange = heatLegend.valueAxis.axisRanges.create();
      maxRange.value = heatLegend.maxValue;
      maxRange.label.text = "2,000,000 Cases";

      // Blank out internal heat legend value axis labels
      heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
        return "";
      });

      // Configure series tooltip
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}\nCases: {cases}\nDeaths: {deaths}\nRecovered: {recovered}";
      polygonTemplate.nonScalingStroke = true;
      polygonTemplate.strokeWidth = 0.5;

      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = am4core.color("#3c5bdc");
    }

    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }

    render() {
      return (
        <>
          <Header />
          <h1 class='Title'>United States Heat Map of Covid-19 Data</h1>

          <div id = "chartdiv" style = {{width: "100%", height: "80vh"}}></div>
        </>
      );
    }
  }

  export default App;