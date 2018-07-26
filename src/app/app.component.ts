import { Component } from '@angular/core';
import { FacebookService, UIParams, UIResponse, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private fb: FacebookService
  ) {
    const initParams: InitParams = {
      appId: '245078872972696',
      version: 'v3.0'
    };

    fb.init(initParams);
  }

  share() {
    const params: UIParams = {
      href: 'https://angular-for-seo.firebaseapp.com',
      method: 'share'
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }

  shareWithOpenGraphActions() {
    const params: UIParams = {
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
          object: {
              'og:url': 'https://angular-for-seo.firebaseapp.com',
              'og:title': 'หัวข้ออันบั๊กเอ้ก',
              'og:description': 'ข้อความยาว ๆ',
              'og:image': 'https://futurism.com/wp-content/uploads/2017/09/download-600x315.png'
          }
      })
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
