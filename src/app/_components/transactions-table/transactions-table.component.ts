import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/_classes/transaction';
import { IconDefinition, faExchangeAlt, faLevelDownAlt, faLevelUpAlt, faUndoAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  swapIcon: IconDefinition;
  depositIcon: IconDefinition;
  withdrawIcon: IconDefinition;
  refundIcon: IconDefinition;
  addIcon: IconDefinition;
  timesIcon: IconDefinition;

  @Input() transactions: Transaction[];

  constructor() {
    this.swapIcon = faExchangeAlt;
    this.depositIcon = faLevelDownAlt;
    this.withdrawIcon = faLevelUpAlt;
    this.refundIcon = faUndoAlt;
    this.addIcon = faPlus;
    this.timesIcon = faTimes;
  }

  ngOnInit(): void {
  }

}
