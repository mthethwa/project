import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from 'src/app/star-rating/star-rating.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  rating:number = 0;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  constructor() { }

  ngOnInit() {
  }
    onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }
}
