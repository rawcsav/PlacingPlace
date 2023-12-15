var map = L.map("mapid").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var philosophers = {
  Locke: {
    color: "blue",
    places: [
      {
        placeName: "Somerset, Bristol",
        coords: [51.364334734083414, -2.7660054204208193]
      },
      {
        placeName: "Westminster School and Christ Church, Oxford",
        coords: [51.75158533501807, -1.2493966827927934]
      },
      {
        placeName: "The Royal Society, London",
        coords: [51.5060281634301, -0.1323867897652474]
      },
      {
        placeName: "Amsterdam, Holland",
        coords: [52.364195355814836, 4.908067823689793]
      }
    ]
  },
  Kant: {
    color: "red",
    places: [
      {
        placeName: "Home, Königsberg",
        coords: [54.59374872010948, 22.030330580055207]
      },
      {
        placeName: "University of Königsberg",
        coords: [54.72444827308849, 20.528135056022908]
      }
    ]
  },
  Heidegger: {
    color: "green",
    places: [
      {
        placeName: "Meßkirch Castle, Baden",
        coords: [47.9934459135849, 9.111475420764133]
      },
      {
        placeName: "University of Freiburg",
        coords: [47.99548196726819, 7.848184459049453]
      },
      {
        placeName: "Marburg",
        coords: [50.80109297194249, 8.76409702613222]
      },
      {
        placeName: "Todtnauberg, Germany",
        coords: [47.85129621625994, 7.939863923607821]
      }
    ]
  },
  Descartes: {
    color: "orange",
    places: [
      {
        placeName: "La Haye en Touraine",
        coords: [46.974392031935515, 0.6980432371616763]
      },
      {
        placeName: "Jesuit Collège Royal Henry-Le-Grand in La Flèche",
        coords: [47.70078956424511, -0.07615513640528236]
      },
      {
        placeName: "University of Franeker, Dutch Republic",
        coords: [53.218044568204945, 5.5084435901227184]
      },
      {
        placeName: "Neuburg an der Donau",
        coords: [48.73249975579165, 11.188758005854991]
      }
    ]
  },
  Cronon: {
    color: "purple",
    places: [
      {
        placeName: "Yale University, CT",
        coords: [41.316903030981976, -72.92262398049343]
      },
      {
        placeName: "University of Oxford, England",
        coords: [51.75492263493429, -1.2536694288066255]
      },
      {
        placeName: "University of Wisconsin-Madison",
        coords: [43.07682707425444, -89.41201543479144]
      }
    ]
  },
  Mignolo: {
    color: "yellow",
    places: [
      {
        placeName: "Corral de Bustos, Argentina",
        coords: [-33.2843037078034, -62.185690534741674]
      },
      {
        placeName: "École des Hautes Études, Paris",
        coords: [48.85636103600829, 2.3618558343322276]
      }
    ]
  }
};
for (var philosopher in philosophers) {
  var locations = philosophers[philosopher].coords;
  var color = philosophers[philosopher].color;

  locations.forEach(function (location) {
    var marker = L.circleMarker(location, {
      color: color,
      fillColor: color,
      fillOpacity: 0.5,
      radius: 8
    }).addTo(map);

    marker.bindPopup(philosopher);
  });
}
