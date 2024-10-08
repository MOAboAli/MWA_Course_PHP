import { Component } from '@angular/core';
import { TokenaccountService } from '../../components/user/_services/tokenaccount.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(private authService: TokenaccountService) { }
}
