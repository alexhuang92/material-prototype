import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApplicationEvent } from '../models/application-event.enum';
import { SearchedForm as SearchedForm } from '../models/searched-form.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationEventService {
  private INITIALIZATION_EVENT: ApplicationEvent = ApplicationEvent.Unknown;

  private eventSubject: BehaviorSubject<ApplicationEvent> = new BehaviorSubject(
    this.INITIALIZATION_EVENT
  );

  public readonly eventChanged$: Observable<ApplicationEvent> =
    this.eventSubject.asObservable();

  private formSearchSubject = new Subject<SearchedForm>();
  public formSearched$: Observable<SearchedForm> =
    this.formSearchSubject.asObservable();

  private formSelectedSubject = new Subject();

  constructor() {}

  /**
   * Searches for a form with the given model.
   * @param form
   */
  formSearched(form: SearchedForm) {
    this.eventSubject.next(ApplicationEvent.FormSearched);
    this.formSearchSubject.next(form);
  }
}
