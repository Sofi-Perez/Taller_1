import { series } from './data.js';
import { Serie } from './serie.js';

let seriesTable: HTMLElement = document.getElementById("series-body")!;
let averageSeasonsText: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesTable(series);
averageSeasonsText.innerHTML = `Seasons average: ${getAverageSeasons(series)}`;

function renderSeriesTable(seriesList: Serie[]): void {
  seriesList.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td style="color: #007bff; cursor: pointer;">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
    seriesTable.appendChild(trElement);
  });
}

function getAverageSeasons(seriesList: Serie[]): number {
  let totalSeasons: number = 0;
  seriesList.forEach((s) => totalSeasons += s.seasons);
  return Math.round(totalSeasons / seriesList.length);
}