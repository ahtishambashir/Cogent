$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// modal open on page load 

$(window).on('load', function () {
  $('#welcomeModal').modal('show');
});

// add custom class on modal open 

$('#welcomeModal').on('show.bs.modal', function (e) {
  setTimeout(function () {
    $('.modal-backdrop').addClass('modal-backdrop-custom');
    $('.header').addClass('z-index-5');
  });
});

$('#compareModal').on('show.bs.modal', function (e) {
  setTimeout(function () {
    $('.header').removeClass('z-index-5');
  });
});

// add class on scroll on header 
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".header").addClass("fixed-top");
  } else {
    $(".header").removeClass("fixed-top");
  }
});

// make side bar sticky on scroll 
// function checkPosition() {
//   if (window.matchMedia('(min-width: 1199px)').matches) {
//     $(window).scroll(function () {
//       var scroll = $(window).scrollTop();

//       if (scroll >= 250) {
//         $(".side-bar").addClass("is-sticky");
//       } else {
//         $(".side-bar").removeClass("is-sticky");
//       }
//     });
//   } else {
//     $(".side-bar").removeClass("is-sticky");
//   }
// }

// $(window).on('resize', function () {

// });

if (window.innerWidth > 1199) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 560) {
      $(".side-bar").addClass("is-sticky");
    } else {
      $(".side-bar").removeClass("is-sticky");
    }
  });
}


// $('.app-slider').owlCarousel({
//   loop: false,
//   margin: 0,
//   nav: true,
//   dots: false,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 1
//     },
//     1000: {
//       items: 1
//     }
//   }
// });


// accordion js  for opening
// js code
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const arrow = header.querySelector('.arrow');

  header.addEventListener('click', () => {
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.display = 'block';
      arrow.classList.add('up');
    } else {
      content.style.display = 'none';
      arrow.classList.remove('up');
    }
  });
});


// faqs js

var options = {
  series: [50],
  width: 180,
  colors: ['#0049FF'],
  chart: {
    type: 'radialBar',
    offsetY: 20,
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#E0DEF7",
        strokeWidth: '97%',
        borderRadius: '50%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false, // set show to false to hide the value
          offsetY: -2,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    },
  },
};

var chart = new ApexCharts(document.querySelector("#half"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#left"), options);
chart.render();

var options = {
  series: [100],
  width: 180,
  chart: {
    type: 'radialBar',
    offsetY: 20,
  },
  colors: ['#0049FF'],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#E0DEF7",
        strokeWidth: '97%',
        borderRadius: '50%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false, // set show to false to hide the value
          offsetY: -2,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    },
  },
};

var chart = new ApexCharts(document.querySelector("#full"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#right"), options);
chart.render();

var options = {
  series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
  colors: ['#0049FF'],
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },

  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      enabled: false,
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#0049FF',
          colorTo: '#0049FF',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }

  },

};

var chart = new ApexCharts(document.querySelector("#flow-chart"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#flows"), options);
chart.render();


var options = {
  series: [44, 55, 13],
  chart: {
    width: 280,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#0049ff', '#6390FF', '#A7C0FD'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }

    }
  }],
  legend: {
    show: false // set show property to false to hide the legend
  },
  annotations: {
    labels: [{
      text: '$99.99',
      position: 'center',
      offsetY: 20,
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333'
      }
    }]
  }
};

var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();

var options = {
  series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT',],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
};

var chart = new ApexCharts(document.querySelector("#singleBar"), options);
chart.render();

function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function () {
  chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function () {
  chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function () {
  chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function () {
  chart.updateSeries(reset())
})








