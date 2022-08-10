// Date-fns
import { addDays, compareAsc, compareDesc, format, formatDistance } from 'date-fns';
import { es, ptBR, it } from 'date-fns/locale/index.js';

// Formatação de data -> consultar documentação para padrões
let today = new Date();
console.log(today);

let todayFormatted = format(today, 'dd.MM.yyyy');
console.log(todayFormatted);

let todayFormatted2 = format(today, 'PPPP');
console.log(todayFormatted2);

let todayFormatted3 = format(today, 'PPPP', {locale: es});
console.log(todayFormatted3);

let todayFormatted4 = format(today, 'PPPP', {locale: ptBR});
console.log(todayFormatted4);

let todayFormatted5 = format(today, 'PPPP', {locale: it});
console.log(todayFormatted5);

// Operações com datas
let todaySummed = addDays(today, 45);
console.log(todaySummed);

// Diferença entre datas
let endDate = new Date(2022, 12, 31);
let diffBetweenDates = formatDistance(today, endDate, {locale: ptBR});
console.log(diffBetweenDates);

let d1 = new Date('2001-01-01');
let d2 = new Date('2005-01-01');
let d3 = new Date('2010-01-01');

let dates = [d1, d2, d3];

let sortAscDates = dates.sort(compareAsc);
let sortDescDates = dates.sort(compareDesc);

console.log(sortAscDates);
console.log(sortDescDates);