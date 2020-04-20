import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './dashboard/content/message/message.component';


const APP_ROUTES: Routes =[
    { path: 'image', component: MessageComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
