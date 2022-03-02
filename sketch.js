
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
        'rgb(255, 99, 132)',
        'rgb(54, 54, 54)',
      ],
      cutout: '70%',
    }],
  };

  const configSmallChart1 = {
    type: 'doughnut',
    data: dataSmallChart1,
    options: {
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
        'rgb(255, 99, 132)',
        'rgb(54, 54, 54)',
      ],
      cutout: '70%',
    }],
  };

  const configSmallChart2 = {
    type: 'doughnut',
    data: dataSmallChart2,
    options: {
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