import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { FormViewComponent } from '../form-view.component';

@Injectable({
  providedIn: 'root',
})
export class FormViewOverlayService {
  constructor(private overlay: Overlay) {}

  showFormView(config: any = {}): void {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const scrollStrategy = this.overlay.scrollStrategies.block();

    const DEFAULT_CONFIG = {
      width: '100%',
      height: '100%',
      hasBackdrop: true,
      scrollStrategy: scrollStrategy,
      positionStrategy,
    };
    const overlayConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef: OverlayRef = this.overlay.create(overlayConfig);

    const filePreviewPortal = new ComponentPortal(FormViewComponent);

    overlayRef.attach(filePreviewPortal);
  }
}
