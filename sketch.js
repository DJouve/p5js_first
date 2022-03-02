
// DATA
function updateChart () {
    async function fetchData() {
        const url = "https://djouve.github.io/p5js_first/src/data/years.json"
        const response = await fetch(url)
        const datapoints = await response.json()
        console.log(datapoints)
        console.log(datapoints.length)
        return datapoints
    }

    let womenExpressionRate = 0
    let speechRate = 0
    let nbHourAnalyzed = 0

    fetchData().then(datapoints => {
        const tvChain = datapoints.map(function(index){
            if (index.channel_name == userFilters.chain){
                return datapoints.index
            }
        })
        console.log(tvChain)
        }
    )
}


// Big CHART

const dataBigChart = {
    labels: [
      'Red',
      'Grey',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 150],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 54, 54)',
      ],
      cutout: '80%',
    }],
  };

  const configBigChart = {
    type: 'doughnut',
    data: dataBigChart,
    options: {
        elements: {
            arc: {
                borderWidth : 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
  };

  const bigChart = new Chart(
    document.getElementById('bigChart'),
    configBigChart
  );

// SMALL CHART 1

const dataSmallChart1 = {
    labels: [
      'Red',
      'Grey',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 150],
      backgroundColor: [
        'rgb(255, 180, 91)',
        'rgb(54, 54, 54)',
      ],
      cutout: '70%',
    }],
  };

  const configSmallChart1 = {
    type: 'doughnut',
    data: dataSmallChart1,
    options: {
        elements: {
            arc: {
                borderWidth : 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
  };

  const smallChart1 = new Chart(
    document.getElementById('smallChart1'),
    configSmallChart1
  );


// SMALL CHART 2

const dataSmallChart2 = {
    labels: [
      'Red',
      'Grey',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 150],
      backgroundColor: [
        'rgb(255, 180, 91)',
        'rgb(54, 54, 54)',
      ],
      cutout: '70%',
    }],
  };

  const configSmallChart2 = {
    type: 'doughnut',
    data: dataSmallChart2,
    options: {
        elements: {
            arc: {
                borderWidth : 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
  };

  const smallChart2 = new Chart(
    document.getElementById('smallChart2'),
    configSmallChart2
  );