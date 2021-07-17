import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  private readonly basePath = '../assets/images/';
  
  public constructor(private iconRegistry: SvgIconRegistryService) { 
    this.loadAllIcons();
  }

  private loadAllIcons() {
    // #region logo
    this.iconRegistry.loadSvg(`${this.basePath}logo/logo_text.svg`, 'logo_txt').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}logo/logo_image.svg`, 'logo_img').subscribe();
    // #endregion

    // #region shell
    this.iconRegistry.loadSvg(`${this.basePath}shell/main_page.svg`, 'shl_main').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}shell/prod.svg`, 'shl_prod').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}shell/container_update.svg`, 'shl_container').subscribe();
    // #endregion

    // #region ingredience
    this.iconRegistry.loadSvg(`${this.basePath}ingredience/corn.svg`, 'ing_corn').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}ingredience/mashroom.svg`, 'ing_mashroom').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}ingredience/olives.svg`, 'ing_olives').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}ingredience/onion.svg`, 'ing_onion').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}ingredience/cheese.svg`, 'ing_cheese').subscribe();    
    this.iconRegistry.loadSvg(`${this.basePath}ingredience/sauce.svg`, 'ing_sauce').subscribe();    
    //#endregion

    // #region sensors
    this.iconRegistry.loadSvg(`${this.basePath}sensors/camera.svg`, 'sens_cam').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/cloud.svg`, 'sens_cloud').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/drop.svg`, 'sens_drop').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/electricity.svg`, 'sens_elec').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/humidity.svg`, 'sens_humidity').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/o3.svg`, 'sens_o3').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/temperature.svg`, 'sens_temp').subscribe();
    this.iconRegistry.loadSvg(`${this.basePath}sensors/vbact.svg`, 'sens_vbact').subscribe();
    // #endregion
 
  }
}
