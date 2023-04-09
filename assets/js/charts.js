"use strict";
// charts
var KTWidgets = (function () {
  //**  Home chart 1 **//
  var home_chart1 = function () {
    var height, charts;
    var e = document.querySelectorAll(".home-chart1");
    e ? (charts = document.querySelectorAll(".home-chart1")) : null;
    if (e == null) {
      return;
    }
    [].slice.call(charts).map(function (element) {
      height = 300;
      if (!element) {
        return;
      }
      var labelColor = "#1E85FF";
      var strokeColor = "#fff";
      var options = {
        series: [
          {
            name: "Net Profit",
            data: [
              {
                x: "Jan",
                y: [30],
                date: "25 August 2022",
              },
              {
                x: "Feb",
                y: [45],
                date: "25 August 2022",
              },
              {
                x: "Mar",
                y: [26],
                date: "25 August 2022",
              },
              {
                x: "Apr",
                y: [38],
                date: "25 August 2022",
              },
            ],
          },
        ],
        grid: {
          show: false,
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        },
        chart: {
          fontFamily: "inherit",
          type: "area",
          height: height,
          margin: 50,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [20, 120, 120, 120],
          },
        },
        stroke: {
          curve: "smooth",
          show: true,
          width: 3,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
          crosshairs: {
            show: false,
            position: "front",
            stroke: {
              color: strokeColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          min: 0,
          max: 60,
          labels: {
            show: false,
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: "12px",
          },
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return (
              "<ul>" +
              '<li>Total Balance <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.11342 7.16766C5.2362 7.16766 5.34123 7.12402 5.42851 7.03674C5.51563 6.94961 5.55919 6.84148 5.55919 6.71235V5.15225C5.55919 5.03598 5.51563 4.93429 5.42851 4.84716C5.34123 4.75988 5.23945 4.71624 5.12318 4.71624C4.99405 4.71624 4.88421 4.75988 4.79368 4.84716C4.7033 4.93429 4.65811 5.03924 4.65811 5.16202V6.72188C4.65811 6.85117 4.7033 6.95775 4.79368 7.04162C4.88421 7.12565 4.99079 7.16766 5.11342 7.16766ZM5.09412 4.1349C5.24263 4.1349 5.36533 4.08808 5.46222 3.99444C5.55912 3.90081 5.60756 3.77973 5.60756 3.63122C5.60756 3.47619 5.55912 3.35186 5.46222 3.25823C5.36533 3.16444 5.24263 3.11754 5.09412 3.11754C4.93909 3.11754 4.81476 3.16281 4.72113 3.25335C4.62749 3.34373 4.58067 3.46643 4.58067 3.62145C4.58067 3.77648 4.62912 3.90081 4.72601 3.99444C4.8229 4.08808 4.9456 4.1349 5.09412 4.1349ZM5.09412 9.2605C4.51928 9.2605 3.97507 9.15392 3.46147 8.94076C2.94802 8.7276 2.50558 8.4353 2.13414 8.06386C1.7627 7.69242 1.4704 7.24998 1.25724 6.73653C1.04408 6.22293 0.9375 5.67872 0.9375 5.10388C0.9375 4.52254 1.04245 3.97832 1.25236 3.47123C1.46226 2.96415 1.75456 2.52333 2.12926 2.14879C2.50395 1.77409 2.94802 1.47854 3.46147 1.26212C3.97507 1.04571 4.51928 0.9375 5.09412 0.9375C5.67546 0.9375 6.22131 1.04408 6.73165 1.25724C7.24184 1.4704 7.68428 1.76433 8.05898 2.13902C8.43367 2.51372 8.7276 2.95616 8.94076 3.46635C9.15392 3.97669 9.2605 4.52254 9.2605 5.10388C9.2605 5.68523 9.15229 6.23107 8.93588 6.74142C8.71946 7.2516 8.42391 7.69405 8.04921 8.06874C7.67467 8.44344 7.23385 8.73574 6.72677 8.94564C6.21968 9.15555 5.67546 9.2605 5.09412 9.2605Z" fill="white"/></svg></li>' +
              "<li>" +
              "$" +
              data.y +
              "</li>" +
              "<li>" +
              data.date +
              "</li>" +
              "</ul>"
            );
          },
        },
        colors: ["#1E85FF"],
        markers: {
          colors: [labelColor],
          strokeColor: [strokeColor],
          strokeWidth: 3,
        },
      };

      var chart = new ApexCharts(element, options);
      chart.render();
    });
  };
  //**  Home chart 2 **//
  var home_chart2 = function () {
    var charts = document.querySelectorAll(".home-chart2");
    [].slice.call(charts).map(function (element) {
      var height = 150;
      if (!element) {
        return;
      }
      var baseColor = "#FF1E6F";
      var lightColor = "#D9D9D9";

      var options = {
        series: [44],
        chart: {
          fontFamily: "inherit",
          height: height,
          width: "100%",
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "40%",
            },
            dataLabels: {
              showOn: "always",
              name: {
                show: false,
                fontWeight: "700",
              },
              value: {
                show: false,
              },
            },
            track: {
              background: lightColor,
              strokeWidth: "100%",
            },
          },
        },
        colors: [baseColor],
        stroke: {
          width: 2,
        },
      };
      document.querySelector(".series-data").innerHTML =
        options.series + "% " + "Expanse";
      var chart = new ApexCharts(element, options);
      chart.render();
    });
  };
  //**  Home chart 3 **//
  var home_chart3 = function () {
    var charts = document.querySelectorAll(".home-chart3");
    [].slice.call(charts).map(function (element) {
      var height = 150;
      if (!element) {
        return;
      }
      var baseColor = "#1E85FF";
      var lightColor = "#D9D9D9";
      var options = {
        series: [44],
        chart: {
          fontFamily: "inherit",
          height: height,
          width: "100%",
          type: "radialBar",
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  height: 200,
                },
              },
            },
          ],
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "40%",
            },
            dataLabels: {
              showOn: "always",
              name: {
                show: false,
                fontWeight: "700",
              },
              value: {
                show: false,
              },
            },
            track: {
              background: lightColor,
              strokeWidth: "100%",
            },
          },
        },
        colors: [baseColor],
        stroke: {
          width: 2,
        },
      };
      document.querySelector(".series-data2").innerHTML =
        options.series + "% " + "Expanse";
      var chart = new ApexCharts(element, options);
      chart.render();
    });
  };
  //**  Wallet chart **//
  var wallet_chart = function () {
    var element = document.getElementById("wallet-chart");
    var height = parseInt(KTUtil.css(element, "height"));
    var labelColor = "#A1A4B2";
    var baseColor = "#651AD6";
    var secondaryColor = "#D81923";
    var borderColor = " #E0E0E0";

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          // tow data in one chart
          name: "Income",
          // return with data day of month
          data: [
            { x: "Feb", y: 50, date: "Feb 1" },
            { x: "Mar", y: 20, date: "Mar 1" },
            { x: "Apr", y: 30, date: "Apr 1" },
            { x: "May", y: 55, date: "May 1" },
            { x: "Jun", y: 70, date: "Jun 1" },
            { x: "Jul", y: 90, date: "Jul 1" },
            { x: "Aug", y: 20, date: "Aug 1" },
            { x: "Sep", y: 150, date: "Sep 1" },
            { x: "Oct", y: 100, date: "Oct 1" },
            { x: "Nov", y: 60, date: "Nov 1" },
            { x: "Dec", y: 190, date: "Dec 1" },
          ],
        },

        {
          name: "Spend",
          data: [
            { x: "Feb", y: 30, date: "Feb 1" },
            { x: "Mar", y: 40, date: "Mar 1" },
            { x: "Apr", y: 20, date: "Apr 1" },
            { x: "May", y: 35, date: "May 1" },
            { x: "Jun", y: 50, date: "Jun 1" },
            { x: "Jul", y: 70, date: "Jul 1" },
            { x: "Aug", y: 10, date: "Aug 1" },
            { x: "Sep", y: 130, date: "Sep 1" },
            { x: "Oct", y: 80, date: "Oct 1" },
            { x: "Nov", y: 40, date: "Nov 1" },
            { x: "Dec", y: 170, date: "Dec 1" },
          ],
        },
      ],
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: height,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
          stops: [0, 100],
        },
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: ["#D81923"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: baseColor,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          return (
            '<div class="arrow_box_wallet">' +
            '<span class="tooltip-label">' +
            data.date +
            "</span>" +
            "<span>" +
            "$" +
            data.y +
            "</span>" +
            "</div>"
          );
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        strokeColor: "#fff",
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };
  //**  Business chart **//
  var business_chart = function () {
    var element = document.getElementById("business-chart");
    var height = parseInt(KTUtil.css(element, "height"));
    var labelColor = "#A1A4B2";
    var baseColor = "#92040B";
    var borderColor = "#E0E0E0";
    if (!element) {
      return;
    }
    var options = {
      series: [
        {
          data: [50, 100, 150, 50, 250, 300, 150, 400, 10, 500, 550],
        },
      ],
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: height,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: ["#92040B"],
      },
      xaxis: {
        categories: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "15px",
            cssClass: "apexcharts-xaxis-label",
          },
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: "15px",
            cssClass: "apexcharts-yaxis-label",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "20px",
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          return (
            '<div class="arrow_box_wallet">' +
            '<span class="tooltip-label">' +
            "$" +
            data +
            "</span>" +
            "</div>"
          );
        },
      },
      colors: [baseColor],
      grid: {
        borderColor: "#F5F5FE",
        strokeDashArray: 15,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        colors: "#D81923",
        strokeColor: "#D81923",
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };
  return {
    init: function () {
      home_chart1();
      home_chart2();
      home_chart3();
      wallet_chart();
      business_chart();
    },
  };
})();

// Webpack support
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = KTWidgets;
}
// On document ready
KTUtil.onDOMContentLoaded(function () {
  KTWidgets.init();
});
