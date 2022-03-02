// DATA
function updateChart() {
  async function fetchData() {
    const url = "https://djouve.github.io/p5js_first/src/data/years.json";
    const response = await fetch(url);
    const datapoints = await response.json();
    console.log(datapoints);
    console.log(datapoints.length);
    return datapoints;
  }

  let womenExpressionRateArray = [];
  let speechRateArray = [];
  let nbHourAnalyzed = [];
  const yearIndex = userFilters.year - 2010;

  const bigChartValue = document.querySelector(".big_chart_value");
  const hoursTotal = document.querySelector(".hours_total");
  let menTotal = document.querySelector(".man_value");
  const musicTotal = document.querySelector("music_value");

  fetchData().then(datapoints => {
    let womenExpressionRate = datapoints.map(function (index) {
      return Math.round(index.women_expression_rate);
    });
    for (let i = 583; i < 593; i++) {
      womenExpressionRateArray.push(womenExpressionRate[i]);
    }
    console.log(womenExpressionRateArray);
    womenExpressionRate = womenExpressionRateArray[yearIndex];
    console.log(womenExpressionRate);
    bigChartValue.innerHTML = womenExpressionRate;

    let hoursAnalyzed = datapoints.map(function (index) {
      return Math.round(index.nb_hours_analyzed);
    });
    for (let j = 583; j < 593; j++) {
      nbHourAnalyzed.push(hoursAnalyzed[j]);
    }
    hoursTotal.innerHTML = nbHourAnalyzed[yearIndex];

    let speechRate = datapoints.map(function (index) {
      return Math.round(index.speech_rate);
    });
    for (let i = 583; i < 593; i++) {
      speechRateArray.push(speechRate[i]);
    }
    speechRate = speechRateArray[yearIndex];
    // musicTotal.innerHTML = smallChart2.config.data.datasets[0].data[0];
    let menTotalDiget = speechRate - womenExpressionRate;
    console.log(menTotal);
    menTotal.innerHTML = menTotalDiget;

    bigChart.config.data.datasets[0].data = [
      womenExpressionRate,
      100 - womenExpressionRate
    ];
    bigChart.update();

    smallChart1.config.data.datasets[0].data = [
      menTotalDiget,
      100 - menTotalDiget
    ];
    smallChart1.update();

    smallChart2.config.data.datasets[0].data = [100 - speechRate, speechRate];
    smallChart2.update();
  }); // FIN DE LA PRISE ICI
}

// Big CHART

const data = {
  labels: ["Red", "Grey"],
  datasets: [
    {
      label: "My First Dataset",
      data: [40, 60],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 54, 54)"],
      cutout: "80%"
    }
  ]
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const bigChart = new Chart(document.getElementById("bigChart"), config);

// SMALL CHART 1

const dataSmallChart1 = {
  labels: ["Red", "Grey"],
  datasets: [
    {
      label: "My First Dataset",
      data: [55, 45],
      backgroundColor: ["rgb(255, 180, 91)", "rgb(54, 54, 54)"],
      cutout: "70%"
    }
  ]
};

const configSmallChart1 = {
  type: "doughnut",
  data: dataSmallChart1,
  options: {
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const smallChart1 = new Chart(
  document.getElementById("smallChart1"),
  configSmallChart1
);

// SMALL CHART 2

const dataSmallChart2 = {
  labels: ["Red", "Grey"],
  datasets: [
    {
      label: "My First Dataset",
      data: [4, 96],
      backgroundColor: ["rgb(255, 180, 91)", "rgb(54, 54, 54)"],
      cutout: "70%"
    }
  ]
};

const configSmallChart2 = {
  type: "doughnut",
  data: dataSmallChart2,
  options: {
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const smallChart2 = new Chart(
  document.getElementById("smallChart2"),
  configSmallChart2
);
