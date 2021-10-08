import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormViewComponent } from '../form-view.component';
import { FormViewOverlayEvent } from '../models/form-view-overlay-event.model';

@Injectable({
  providedIn: 'root',
})
export class FormViewOverlayService {
  private overlayEventSubject = new Subject<FormViewOverlayEvent>();
  overlayEvent$ = this.overlayEventSubject.asObservable();

  private overlayRef: OverlayRef | undefined;

  constructor(private overlay: Overlay) {}

  showFormView(config: any = {}): void {
    const positionStrategy = this.overlay.position().global().right();

    const scrollStrategy = this.overlay.scrollStrategies.block();

    const DEFAULT_CONFIG = {
      width: '90%',
      height: '100%',
      hasBackdrop: true,
      disposeOnNavigation: true,
      scrollStrategy: scrollStrategy,
      positionStrategy,
    };
    const overlayConfig = { ...DEFAULT_CONFIG, ...config };

    this.overlayRef = this.overlay.create(overlayConfig);

    this.overlayRef.backdropClick().subscribe(() => {
      this.close('backdropClick', null);
    });

    const filePreviewPortal = new ComponentPortal(FormViewComponent);

    this.overlayRef.attach(filePreviewPortal);
  }

  private close(type: 'backdropClick' | 'close', data: any) {
    this.overlayRef?.dispose();
    this.overlayEventSubject.next({
      type,
      data,
    });
  }
}
