const report = require('multiple-cucumber-html-reporter');

var today = new Date();

function addLeadingZero(value) {
  return value < 10 ? '0' + value : value;
}

var date =
  addLeadingZero(today.getDate()) +
  '/' +
  addLeadingZero(today.getMonth() + 1) +
  '/' +
  today.getFullYear();

var time =
  addLeadingZero(today.getHours()) +
  'h' +
  addLeadingZero(today.getMinutes()) +
  'm' +
  addLeadingZero(today.getSeconds()) +
  's';

var dateTime = date + ' - ' + time;

report.generate({

  reportName:"Automação SMSUB - SGZ",
  jsonDir: 'cypress/cucumber-json/',

  reportPath: "cypress/reports/MultipleReport.html",

  displayDuration: true,
  displayReportTime: true,
  metadata: {

    browser: {

      name: 'Chrome',

      version: '118.0.5993.71'

    },

    device: 'Local',
    platform: {
      name: 'Windows',

      version: '11'

    }

  },

  customData: {
    title: 'Informações',
    data: [
      { label: 'Projeto', value: 'SMSUB - SGZ' },

      { label: 'Versão', value: '2.0' },

      { label: 'Emissão Relatório', value: dateTime },
    ],
  }
})