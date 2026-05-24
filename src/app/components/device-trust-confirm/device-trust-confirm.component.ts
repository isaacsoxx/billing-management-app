import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GenericModalComponent, setModalContent } from '../../../common';
import { Store } from '@ngrx/store';
import {
  iDeviceTrustDto,
  registerTrustDevice,
  selectDeviceKey,
  selectTrustedDeviceKey,
} from '../../../auth';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-device-trust-confirm',
  standalone: false,

  templateUrl: './device-trust-confirm.component.html',
  styleUrl: './device-trust-confirm.component.scss',
})
export class DeviceTrustConfirmComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('deviceTrustConfirmModal')
  private deviceTrustConfirmModal!: GenericModalComponent;
  private deviceKey?: string;
  private trustedDeviceKey!: string;
  private destroy$ = new Subject<void>();
  private trustedDeviceKey$: Observable<string> = this.store
    .select(selectTrustedDeviceKey)
    .pipe(takeUntil(this.destroy$));
  private sessionDeviceKey$: Observable<string | undefined> = this.store
    .select(selectDeviceKey)
    .pipe(takeUntil(this.destroy$));

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.trustedDeviceKey$.subscribe((deviceKey?: string) => {
      if (deviceKey) this.trustedDeviceKey = deviceKey;
    });

    this.sessionDeviceKey$.subscribe((deviceKey?: string) => {
      if (deviceKey) this.deviceKey = deviceKey;
    });
  }

  ngAfterViewInit(): void {
    if (!this.trustedDeviceKey) {
      this.setModalContent();
      this.deviceTrustConfirmModal.openGenericModalComponent();
    }
  }

  setModalContent() {
    this.store.dispatch(
      setModalContent({
        content: {
          title: 'Dispositivo de confianza',
          submitDisplayText: 'Confirmar',
          cancelDisplayText: 'Cancelar',
          onSubmit: () => this.registerDeviceTrust(),
          onCancel: () => this.deviceTrustConfirmModal.close(),
        },
      }),
    );
  }

  registerDeviceTrust() {
    console.log(this.deviceKey);
    this.deviceTrustConfirmModal.close();

    if (!this.deviceKey) {
      return;
    }

    this.store.dispatch(
      registerTrustDevice({
        deviceKey: { deviceKey: this.deviceKey },
      }),
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
