import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BasicCardComponent } from '../basic-card/basic-card.component';
import { TextComponent } from '../text/text.component';
import { IWeatherInfo } from '../../models/weather-info/weather-info.interface';
import { IconsEnum } from '../../enums/icons.enum';

@Component({
  selector: 'sx-weather-info',
  imports: [BasicCardComponent, TextComponent, TitleCasePipe],
  templateUrl: './weather-info.component.html',
})
export class WeatherInfoComponent {
  today = new Date();
  iconsEnum = IconsEnum;

  @Input() infos: IWeatherInfo = {
    city: "São Bernardo do Campo",
    weekDay: this.today.toLocaleDateString('pt-BR', { weekday: 'long' }),
    formattedDate: this.today.toLocaleDateString('pt-BR'),
    hour: this.today.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    temp: "24°",
    hospital: "Hospital Salux"
  }
}
