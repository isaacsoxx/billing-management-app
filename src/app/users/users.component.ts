import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GenericModalComponent } from '../../common/generic-modal/generic-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { iGenericModalActionTypes, iGenericModalConfig } from '../../models';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  @ViewChild('genericUserFormModalContent') 
  public genericUserFormModalContent!: any;
  public modalTitle!: string;
  
  private genericModalRef!: MatDialogRef<GenericModalComponent>;

  constructor(private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.modalTitle = 'Registrar cliente';
  }

  openGenericFormModal() {
    this.genericModalRef = this.dialog.open<GenericModalComponent, iGenericModalConfig>(GenericModalComponent, {
      width: '900rem',
      data: {
        title: this.modalTitle,
        content: this.genericUserFormModalContent,
        actionButtons: this.defineGenericModalActionButtons()
      }
    });

    console.log(this.genericModalRef);
    
  }

  defineGenericModalActionButtons() {
    return [
      {displayName: 'Registrar', type: iGenericModalActionTypes.SUBMIT, action: this.saveClient.bind(this)},
      {displayName: 'Cancelar', type: iGenericModalActionTypes.CANCEL, action: this.closeDialog.bind(this)}
    ]
  }

  saveClient() {
    console.log('Save');
  }

  closeDialog() {
    console.log('closing');
    this.genericModalRef.close();
  }

}
