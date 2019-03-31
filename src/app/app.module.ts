import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {Pagination} from "./pagination/pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from "@angular/common/http";
import {PortalModule} from "@angular/cdk/portal";

@NgModule({
  declarations: [
    AppComponent,
    Pagination
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCardModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OverlayModule,
    PortalModule,
    MatTableModule,
    MatSortModule,
    DragDropModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
