import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string = 'Светильники в интернет-магазине BCLight (БиСиЛайт)';
  text: string  = `BCLight.ru - это магазин, где вы сможете купить светильники и люстры ведущих европейских производителей оптом и в розницу, получить исчерпывающую информацию по интересующим вас моделям и получить приобретенные товары в любом уголке России. Уважаемые покупатели нашего интернет-магазина!<br><br>Вас приветствует интернет-магазин светильников BCLight.ru! Здесь Вы можете окунуться в чарующий и элегантный мир света и эстетической красоты. Согласитесь, качество и продуманность светового оформления играет в жизни очень важную роль. К тому же, хорошо рассчитанное освещение, расположение светильников в помещении, их стиль, многоуровневость работы светильников в помещении создают не только комфортную и уютную атмосферу дома, но и помогают в профессиональной деятельности на рабочем месте.<br><br>Презентабельные и элегантные светильники самых различных производителей удовлетворят любой потребительский вкус. Именно в нашем интернет-магазине Вы встретите абсолютное понимание для решения именно Вашей задачи, реализации задуманных идей и получение всесторонней консультации с предложением абсолютно исчерпывающих вариантов. Широчайший ассортимент светильников и первоклассный уровень профессионализма сотрудников позволяет нам в полной мере выполнить любые запросы самых взыскательных клиентов.`;

  newsAnnounceList = [
    {
      date: '18.02',
      title: 'BCLight.ru награжден премией Best Of Houzz 2017',
      link: '/'
    },
    {
      date: '18.02',
      title: 'BCLight.ru награжден премией Best Of Houzz 2017',
      link: '/'
    },
    {
      date: '18.02',
      title: 'BCLight.ru награжден премией Best Of Houzz 2017',
      link: '/'
    },
    {
      date: '18.02',
      title: 'BCLight.ru награжден премией Best Of Houzz 2017',
      link: '/'
    }
  ];
  factoriesList = [
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    },
    {
      image: '/src/assets/img/artemide_logo.jpg',
      title: `Artemide`,
      shortDesc: 'Итальянский бренд современного света'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
