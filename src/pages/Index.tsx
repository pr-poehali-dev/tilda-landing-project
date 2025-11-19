import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold text-foreground">TildaStudio</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('steps')} className="text-foreground hover:text-primary transition-colors">
                Этапы
              </button>
              <Button onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                <Icon name="Zap" size={16} className="mr-1" />
                Профессиональная разработка
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Создаём сайты на Tilda
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Разрабатываем современные сайты-визитки, лендинги и интернет-магазины на конструкторе Tilda. 
                Быстро, качественно, с гарантией результата.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="group">
                  Заказать сайт
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/34433182-8526-4eef-b72b-f90aa513d868/files/b61bc2a0-ff4f-4bb2-a0e9-654e9296d1cb.jpg"
                alt="Разработка сайтов"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Briefcase" size={16} className="mr-1" />
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Что мы делаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки сайтов на Tilda — от идеи до запуска
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Layout',
                title: 'Сайты-визитки',
                description: 'Современные одностраничные сайты для представления вашего бизнеса с формами обратной связи'
              },
              {
                icon: 'Rocket',
                title: 'Лендинги',
                description: 'Продающие страницы с высокой конверсией для ваших товаров и услуг'
              },
              {
                icon: 'ShoppingBag',
                title: 'Интернет-магазины',
                description: 'Полноценные магазины с каталогом, корзиной и приёмом платежей'
              },
              {
                icon: 'Palette',
                title: 'Индивидуальный дизайн',
                description: 'Уникальный дизайн под ваш бренд и целевую аудиторию'
              },
              {
                icon: 'Settings',
                title: 'Настройка и оптимизация',
                description: 'SEO, аналитика, формы, интеграции с CRM и другими сервисами'
              },
              {
                icon: 'LifeBuoy',
                title: 'Поддержка',
                description: 'Техническая поддержка и обновление контента после запуска'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Star" size={16} className="mr-1" />
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реализованные проекты для наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/34433182-8526-4eef-b72b-f90aa513d868/files/8d0df875-3d14-4f02-9a07-80f509b905b0.jpg',
                title: 'Сайт для консалтинговой компании',
                category: 'Корпоративный сайт',
                tags: ['Дизайн', 'Адаптив', 'Формы']
              },
              {
                image: 'https://cdn.poehali.dev/projects/34433182-8526-4eef-b72b-f90aa513d868/files/b61bc2a0-ff4f-4bb2-a0e9-654e9296d1cb.jpg',
                title: 'Лендинг для онлайн-школы',
                category: 'Лендинг',
                tags: ['Анимации', 'Видео', 'CRM']
              },
              {
                image: 'https://cdn.poehali.dev/projects/34433182-8526-4eef-b72b-f90aa513d868/files/c177b5ae-108b-4b65-8021-d778d14f96da.jpg',
                title: 'Магазин handmade товаров',
                category: 'Интернет-магазин',
                tags: ['Каталог', 'Корзина', 'Оплата']
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="lg">
                      <Icon name="ExternalLink" size={20} className="mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="DollarSign" size={16} className="mr-1" />
              Цены
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Стоимость работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '15 000',
                features: [
                  'Сайт-визитка до 3 блоков',
                  'Адаптивный дизайн',
                  'Форма обратной связи',
                  'Базовое SEO',
                  'Срок: 3-5 дней'
                ],
                popular: false
              },
              {
                name: 'Стандарт',
                price: '35 000',
                features: [
                  'Лендинг до 7 блоков',
                  'Индивидуальный дизайн',
                  'Анимации и эффекты',
                  'Интеграция с CRM',
                  'Расширенное SEO',
                  'Срок: 7-10 дней'
                ],
                popular: true
              },
              {
                name: 'Премиум',
                price: '60 000',
                features: [
                  'Интернет-магазин',
                  'Уникальный дизайн',
                  'Каталог товаров',
                  'Корзина и оплата',
                  'Полная оптимизация',
                  'Обучение и поддержка',
                  'Срок: 14-20 дней'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('contact')}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/34433182-8526-4eef-b72b-f90aa513d868/files/c177b5ae-108b-4b65-8021-d778d14f96da.jpg"
                alt="О студии"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <Badge className="mb-4" variant="outline">
                <Icon name="Users" size={16} className="mr-1" />
                О студии
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Мы создаём сайты, которые работают
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  TildaStudio — команда профессионалов с 5-летним опытом разработки на Tilda. 
                  Мы специализируемся на создании современных сайтов для малого и среднего бизнеса.
                </p>
                <p>
                  Наш подход — это сочетание креативного дизайна и функциональности. 
                  Каждый проект разрабатывается индивидуально с учётом особенностей вашего бизнеса.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm">Проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm">Довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
                    <div className="text-sm">На рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="GitBranch" size={16} className="mr-1" />
              Процесс работы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Этапы сотрудничества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс от заявки до запуска
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  step: '01',
                  title: 'Заявка и брифинг',
                  description: 'Оставляете заявку, мы связываемся с вами и обсуждаем детали проекта',
                  icon: 'MessageSquare'
                },
                {
                  step: '02',
                  title: 'Договор и предоплата',
                  description: 'Заключаем договор, вы вносите предоплату 50%, и мы начинаем работу',
                  icon: 'FileText'
                },
                {
                  step: '03',
                  title: 'Дизайн и согласование',
                  description: 'Разрабатываем дизайн-макет и согласовываем его с вами',
                  icon: 'Palette'
                },
                {
                  step: '04',
                  title: 'Разработка',
                  description: 'Создаём сайт на Tilda, настраиваем функционал и интеграции',
                  icon: 'Code'
                },
                {
                  step: '05',
                  title: 'Тестирование',
                  description: 'Проверяем работу на всех устройствах и исправляем замечания',
                  icon: 'CheckCircle'
                },
                {
                  step: '06',
                  title: 'Запуск и поддержка',
                  description: 'Публикуем сайт, передаём вам доступы и обучаем работе с ним',
                  icon: 'Rocket'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon name={step.icon as any} className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border pl-6 -ml-8">
                    <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Send" size={16} className="mr-1" />
              Связаться с нами
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Оставьте заявку</h2>
            <p className="text-xl text-muted-foreground">
              Ответим в течение часа и обсудим ваш проект
            </p>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Ваше имя *
                  </label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Телефон *
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Расскажите о проекте *
                  </label>
                  <Textarea 
                    placeholder="Опишите, какой сайт вам нужен, его цели и функционал"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-black/40 text-foreground py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary-foreground" size={24} />
                </div>
                <span className="text-xl font-bold">TildaStudio</span>
              </div>
              <p className="text-sm text-background/70">
                Разработка сайтов на Tilda для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Сайты-визитки</li>
                <li>Лендинги</li>
                <li>Интернет-магазины</li>
                <li>Поддержка сайтов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>О студии</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@tildastudio.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            © 2024 TildaStudio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;