import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplatesService } from '../templates.service';

export interface TemplateData {
  template_id: any;
  template_type: number;
  template_cost?: any;
  user_id: any;
  user_name?: any;
  imagekit_thumb_url: string;
  template_json: string;
}

@Component({
  selector: 'yuj-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.css']
})
export class EmailTemplatesComponent implements OnInit {

  myTemplate$: Observable<any> = this.myTmplSrv.getAllTemplate();

  constructor(private myTmplSrv: TemplatesService) { }

  ngOnInit(): void {

  }

}
