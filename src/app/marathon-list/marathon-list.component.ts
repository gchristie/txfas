import { Component } from '@angular/core';
import { runnerdata } from '../racedata';
import { racedata } from '../racedata';

@Component({
  selector: 'app-marathon-list',
  templateUrl: './marathon-list.component.html',
  styleUrls: ['./marathon-list.component.css']
})

export class MarathonListComponent 
{
  runnerdata= runnerdata;
  racedata = racedata;


ShowTab(racetype) 
{
    if (racetype == 'Gordon')
    {  
      document.getElementById('Gordon').hidden = false;
      document.getElementById('Rosa').hidden = true;
      document.getElementById('Tanya').hidden = true;
      document.getElementById('Les').hidden = true;
    }
    else if (racetype == 'Rosa')
    {
      document.getElementById('Gordon').hidden = true;
      document.getElementById('Rosa').hidden = false;
      document.getElementById('Tanya').hidden = true;
      document.getElementById('Les').hidden = true;      
    } 
    else if (racetype == 'Tanya')
    {
      document.getElementById('Gordon').hidden = true;
      document.getElementById('Rosa').hidden = true;
      document.getElementById('Tanya').hidden = false;
      document.getElementById('Les').hidden = true;      
    } 
    else if (racetype == 'Les')
    {
      document.getElementById('Gordon').hidden = true;
      document.getElementById('Rosa').hidden = true;
      document.getElementById('Tanya').hidden = true;
      document.getElementById('Les').hidden = false;      
    }  
    else if (racetype == 'All')
    {  
      document.getElementById('Gordon').hidden = false;
      document.getElementById('Rosa').hidden = false;
      document.getElementById('Tanya').hidden = false;
      document.getElementById('Les').hidden = false;
    }           
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/