
function parseData(createGraph) {
    Papa.parse("assets/data/covid_data.csv", {
        download: true,
        complete: function(results) {
            createGraph(results.data);
        }
    });
}

function createGraph(data) {
    var date = [];
    var confirmed = ["Confirmed"];
    var deaths = ["Deaths"];
    var cured = ["Cured"];

    for (var i = 1; i < data.length-1; i++){
        date.push(data[i][0]);
        confirmed.push(data[i][3]);
        cured.push(data[i][1]);
        deaths.push(data[i][2]);
    }
    
    var media = window.matchMedia("(max-width: 700px)");
    if(media.matches) {
        var wt = 380;
        var ht = 300;
        var marx = 4;
    }
    else {
        var ht = 520;
        var wt = 1300;
        var marx = 12;
    }
    var chart = c3.generate({
        bindto: '#chart',
        size: {
            height: ht,
            width: wt
        },
        data: {
            columns: [
                confirmed,
                deaths,
                cured
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: date,
                tick: {
                    multiline:false,
                    culling: {
                        max: marx // the number of tick texts will be adjusted to less than this value
                    }
                    // for normal axis, default on
                    // for category axis, default off
                }
            },
            y: {
                tick: {
                    format: d3.format(",")
    //                format: function (d) { return "$" + d; }
                }
            },
            y: {
                max: 40000,
                min: 50,
                padding: {top:0, bottom:0}
            }
        }
    });
     
}

parseData(createGraph);