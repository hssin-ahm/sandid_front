import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../mytasks/models';
import { Observable } from 'rxjs';
import { Candidature } from './condidature';

@Injectable({
  providedIn: 'root',
})
export class FreelanceService {
  private apiUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  getMyApplications(freelanceId: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      `${this.apiUrl}/candidatures/freelance/${freelanceId}`
    );
  }

  applyForTask(application: FormData): Observable<Candidature> {
    return this.http.post<Candidature>(
      `${this.apiUrl}/candidatures`,
      application
    );
  }

  confirmApplication(id: number): Observable<Candidature> {
    return this.http.patch<Candidature>(
      `${this.apiUrl}/candidatures/${id}/confirm`,
      {}
    );
  }
}
