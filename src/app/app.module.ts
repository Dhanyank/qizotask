import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FrntpgeComponent } from './frntpge/frntpge.component';
import { MobverifyComponent } from './mobverify/mobverify.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { CmpnysignupComponent } from './cmpnysignup/cmpnysignup.component';
import { TransreportComponent } from './transreport/transreport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { SetofferComponent } from './setoffer/setoffer.component';
import { ItemofferlistComponent } from './itemofferlist/itemofferlist.component';
import { EditofferComponent } from './editoffer/editoffer.component';
import { AdmnloginComponent } from './admnlogin/admnlogin.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import { ItemgroupComponent } from './itemgroup/itemgroup.component';
import { ItemmasterComponent } from './itemmaster/itemmaster.component';
import { ShopcategoryComponent } from './shopcategory/shopcategory.component';
import { ShopreportComponent } from './shopreport/shopreport.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    FrntpgeComponent,
    MobverifyComponent,
    OtpverifyComponent,
    CmpnysignupComponent,
    TransreportComponent,
    DashboardComponent,
    ItemComponent,
    ItemlistComponent,
    SetofferComponent,
    ItemofferlistComponent,
    EditofferComponent,
    AdmnloginComponent,
    ItemtypeComponent,
    ItemgroupComponent,
    ItemmasterComponent,
    ShopcategoryComponent,
    ShopreportComponent,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
