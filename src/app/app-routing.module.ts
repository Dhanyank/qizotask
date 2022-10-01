import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmnloginComponent } from './admnlogin/admnlogin.component';
import { CmpnysignupComponent } from './cmpnysignup/cmpnysignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { FrntpgeComponent } from './frntpge/frntpge.component';
import { ItemComponent } from './item/item.component';
import { ItemgroupComponent } from './itemgroup/itemgroup.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemmasterComponent } from './itemmaster/itemmaster.component';
import { ItemofferlistComponent } from './itemofferlist/itemofferlist.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import { LoginComponent } from './login/login.component';
import { MobverifyComponent } from './mobverify/mobverify.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { ProfileComponent } from './profile/profile.component';
import { SetofferComponent } from './setoffer/setoffer.component';
import { ShopcategoryComponent } from './shopcategory/shopcategory.component';
import { ShopreportComponent } from './shopreport/shopreport.component';
import { TransreportComponent } from './transreport/transreport.component';

const routes: Routes = [
   {
     path:'',component:FrntpgeComponent
   },
  
  {//login path
      path:`login`,component:LoginComponent
    },


    {
      path:'profile',component:ProfileComponent
    },

    {
      path:'mobverify',component:MobverifyComponent
    },
    {
    path:'otpverify',component:OtpverifyComponent
    },
    {
      path:'dashboard',component:DashboardComponent
      },
      {
        path:'admnlogin',component:AdmnloginComponent
      },
      {
        path:'cmpnysignup',component:CmpnysignupComponent
      },
      {
        path:'editoffer',component:EditofferComponent
      },
      {
        path:'frntpage',component:FrntpgeComponent
      },
      {
        path:'item',component:ItemComponent
      },
      {
        path:'itemgroup',component:ItemgroupComponent
      },
      {
        path:'itemlist',component:ItemlistComponent
      },
      {
        path:'itemmaster',component:ItemmasterComponent
      },
      {
        path:'itemofferlist',component:ItemofferlistComponent
      },
      {
        path:'itemtype',component:ItemtypeComponent
      },
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'setoffer',component:SetofferComponent
      },
      {
        path:'shopcategory',component:ShopcategoryComponent
      },
      {
        path:'shopreport',component:ShopreportComponent
      },
      {
        path:'transreport',component:TransreportComponent
      },
      {
        path:'dashboard2',component:Dashboard2Component
      },
    
    
    
    
    
    
    
    
     
    
    
    
    
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
