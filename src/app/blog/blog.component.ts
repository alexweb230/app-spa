import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog = [];
  constructor(private blogservice: BlogService) { }

  ngOnInit() {
      // this.dashService.getDashDetail().subscribe(data => this.dashdetail = data);

      this.blogservice.getBlog().subscribe(data => this.blog = data);


  }

  allDescr = " The components of a cluster are usually connected to each other through fast local area networks (“LAN”), with each node (computer used as a server) running its own instance of an operating system.\n" +
      "          Computer clusters emerged as a result of convergence of a number of computing trends including the availability of low cost microprocessors, high speed networks, and software for high performance distributed computing.";
}
