import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Simulador de Votación';

  candidato1 = 0;
  candidato2 = 0;
  candidato3 = 0;
  nulos = 0;

  votar(opcion: number): void {
    switch (opcion) {
      case 1:
        this.candidato1++;
        break;
      case 2:
        this.candidato2++;
        break;
      case 3:
        this.candidato3++;
        break;
      default:
        this.nulos++;
        break;
    }
  }

  get totalVotos(): number {
    return this.candidato1 + this.candidato2 + this.candidato3 + this.nulos;
  }

  porcentaje(votos: number): string {
    if (this.totalVotos === 0) return '0.00';
    return ((votos / this.totalVotos) * 100).toFixed(2);
  }

  obtenerResultado(): string {
    if (this.totalVotos === 0) {
      return 'Aún no hay votos';
    }

    if (
      this.candidato1 === this.candidato2 &&
      this.candidato2 === this.candidato3
    ) {
      return 'Empate entre los tres candidatos';
    }

    if (this.candidato1 === this.candidato2 && this.candidato1 > this.candidato3) {
      return 'Empate entre Candidato 1 y Candidato 2';
    }

    if (this.candidato1 === this.candidato3 && this.candidato1 > this.candidato2) {
      return 'Empate entre Candidato 1 y Candidato 3';
    }

    if (this.candidato2 === this.candidato3 && this.candidato2 > this.candidato1) {
      return 'Empate entre Candidato 2 y Candidato 3';
    }

    if (this.candidato1 > this.candidato2 && this.candidato1 > this.candidato3) {
      return 'Ganador: Candidato 1';
    }

    if (this.candidato2 > this.candidato1 && this.candidato2 > this.candidato3) {
      return 'Ganador: Candidato 2';
    }

    return 'Ganador: Candidato 3';
  }

  reiniciarVotacion(): void {
    this.candidato1 = 0;
    this.candidato2 = 0;
    this.candidato3 = 0;
    this.nulos = 0;
  }
}