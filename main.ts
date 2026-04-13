import { series } from "./data";
import { Serie } from "./serie";

const tableBody: HTMLElement | null = document.getElementById("series-table-body");
const averageSeasonsElement: HTMLElement | null = document.getElementById("average-seasons");

function renderSeries(seriesList: Serie[]): void {
  if (!tableBody) return;

  seriesList.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.webPage}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
  });
}

function calculateAverageSeasons(seriesList: Serie[]): number {
  let totalSeasons = 0;

  seriesList.forEach((serie) => {
    totalSeasons += serie.seasons;
  });

  return totalSeasons / seriesList.length;
}

renderSeries(series);

if (averageSeasonsElement) {
  averageSeasonsElement.innerHTML = `Seasons average: ${calculateAverageSeasons(series)}`;
}