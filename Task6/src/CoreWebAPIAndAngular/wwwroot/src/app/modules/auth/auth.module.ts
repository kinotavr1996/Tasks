import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './../../shared/components/controls/controls.module';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRouting } from './auth.routing';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        CommonModule,
        ControlsModule,
        FormsModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        PasswordRecoveryComponent,
        PasswordResetComponent
    ]
})
export class AuthModule { }
