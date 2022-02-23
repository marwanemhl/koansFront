import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'testApp';
  anagramRes: string | undefined;
  pangramRes: string | undefined;
  counterRes: string | undefined;
  anagramCode: string | undefined;
  pangramCode: string | undefined;
  counterCode: string | undefined;
  counterSpinner = false;
  pangramSpinner = false
  anagramSpinner = false
  firstTime = 0
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  testCounter() {
    this.counterSpinner = true
    this.counterRes = ''
    this.http
      .post(
        'http://localhost:5000/counter',
        { code: this.counterCode },
        { responseType: 'text' }
      )
      .subscribe((data) => {
        this.counterRes = data;
        this.counterSpinner = false
      });
  }
  async testAnagram() {
    this.anagramSpinner = true
    this.anagramRes = ''
    this.http
      .post(
        'http://localhost:5000/anagram',
        { code: this.anagramCode },
        { responseType: 'text' }
      )
      .subscribe((data) => {
        console.log(data);
        this.anagramSpinner = false
        this.anagramRes = data;
      });
  }
  async testPangram() {
    this.pangramSpinner = true
    this.pangramRes = ''
    this.http
      .post(
        'http://localhost:5000/pangram',
        { code: this.pangramCode },
        { responseType: 'text' }
      )
      .subscribe((data) => {
        console.log(data);
        this.pangramSpinner = false
        this.pangramRes = data;
      });
  }
}
