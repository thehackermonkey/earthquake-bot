
  var readCSV = require('nodecsv').readCSV,
      writeCSV = require('nodecsv').writeCSV,
      appendCSV = require('nodecsv').appendCSV,
      placeholders =  [['Reportes Ciudapp.fid-2e0bf59_1562e4380a4_-46bf',
                        '1',
                        'POINT (-103.3427204937 20.6558634843)',
                        'eureka',
                        'pending',
                        '65',
                        'Cableado',
                        'Problemas con el cableado público bitch',
                        'alumbrada' ]];


  appendCSV(placeholders, './csv/reportes.csv', function(error){
    if (!error) {
      console.log('eureka');
    }
    else {
      console.log('shit');
    }

  });
