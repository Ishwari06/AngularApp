import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  employeeRecords: any[] = [
    { eName: 'Dyanesh', eCity: 'pune', sal: '15000', imgUrl: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000' },
    { eName: 'Jack', eCity: 'pune', sal: '15000', imgUrl: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000' }
  ]

  title: string = 'Top 3 Bollywood movies'
  movie: Movie[] = [
    { title: 'kantara', director: 'Rishab Shetty', cast: 'Rishab Shetty', releaseDate: '2022' },
    { title: 'shivaji the bOss', director: ' S.Shankar', cast: 'Ranjnikanth', releaseDate: '2022' },
    { title: 'Bahubali', director: 'Rajmouli', cast: 'Prabhas', releaseDate: '2015' }

  ]
  constructor() { }

  ngOnInit() {
  }

}
