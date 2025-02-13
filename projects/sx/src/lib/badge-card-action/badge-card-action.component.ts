import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { badgesType } from '../badges/model/bagdges.type';
import { statusBadgeSoap } from '../utils/status-badge-soap';

@Component({
  selector: 'sx-badge-card-action',
  templateUrl: './badge-card-action.component.html',
  styleUrls: ['./badge-card-action.component.scss'],
  standalone: false
})
export class BadgeCardActionComponent implements OnInit, OnChanges {

  @Input() badgeLabel: string;
  @Input() badgeType: badgesType;
  @Input() theme: 'light' | 'dark';
  @Input() actionType: 'delete' | 'edit';
  @Input() firstTitleText: string;
  @Input() firstContentText: string;
  @Input() secondTitleText: string;
  @Input() secondContentText: string;
  @Input() customButton: string;

  statusBadge: any = null;

  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  columnSize: number;

  constructor() { }

  ngOnInit(): void {
    this.getColumn();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.badgeLabel) {
      this.getStatusBadge();
    }
  }

  getStatusBadge() {
     this.statusBadge = statusBadgeSoap(this.badgeLabel);
  }

  getColumn() {
    if (this.actionType) {
      this.columnSize = 4;
    } else {
      this.columnSize = 5;
    }
  }
}
