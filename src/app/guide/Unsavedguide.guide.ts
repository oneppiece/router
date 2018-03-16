import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class Unsavedguide implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {

    return window.confirm('还没有保存，确认要离开？');
  }

}
