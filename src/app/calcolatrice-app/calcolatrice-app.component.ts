import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calcolatrice",
  templateUrl: "./calcolatrice-app.component.html",
  styleUrls: ["./calcolatrice-app.component.css"]
})
export class CalcolatriceComponent implements OnInit {
  operatore: string = "";
  display: string = "0";
  constructor() {}

  ngOnInit(): void {

  }
  btnRisultato_Click(): void {
    //la potenza eval la gestisce come **
    if (this.display.includes("^"))
      this.display = this.display.replace("^", "**");
    this.display = eval(this.display);
  }
  btnNumero_Click(value: any): void {
    if (this.display == "0") this.display = "";
    this.display += value; //scrivo numero cliccato
  }
  btnPulisci_Click(): void {
    this.display = "0"; //reset
  }
  btnOperatore_Click(operazione: any): void {
    if (operazione.includes("!")) {
      //fattoriale
      this.display = this.display.substring(0, 1);
      this.display = this.fatt(parseInt(this.display)).toString();
    } else this.display += operazione.toString();
  }
  fatt(numero: number): number {
    if (numero == 1) return 1;
    else return numero * this.fatt(numero - 1); //richiamo se stessa con il numero decrementato
  }
}
