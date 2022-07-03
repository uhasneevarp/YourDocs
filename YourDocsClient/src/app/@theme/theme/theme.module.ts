import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [MenuComponent,HeaderComponent, FooterComponent]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
      ...COMPONENTS
  ]
})
export class ThemeModule { }
