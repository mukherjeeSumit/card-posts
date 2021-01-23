import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@mountain',
      content: 'Here is a piture of a snowy mountain '
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@bike',
      content: 'I did some biking today'
    }
  ];
}
