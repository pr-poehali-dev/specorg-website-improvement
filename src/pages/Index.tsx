import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-primary">SPECORG</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">Консультация</Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-12 leading-tight text-center animate-fade-in">
            УВЕЛИЧИВАЕМ ВАШУ ПРИБЫЛЬ ПУТЁМ ЭФФЕКТИВНОГО УЧАСТИЯ В СТРОИТЕЛЬНЫХ ТЕНДЕРАХ
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-primary mb-8">
                СТУПЕНИ НАШЕГО С ВАМИ СОТРУДНИЧЕСТВА:
              </h2>

              <div className="space-y-4">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading text-lg font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-primary mb-1">
                          ОЦЕНИТЬ ВОЗМОЖНОСТИ
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Вы хотите освоить новое направление работы, не имеете опыта, но хотите получить объективную информацию
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading text-lg font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-primary mb-1">
                          УЛУЧШИТЬ ПРАКТИКУ
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Вы имеете опыт участия в тендерах, сталкиваетесь с барьерами, но хотите стабильных побед с прогнозируемыми результатами
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading text-lg font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-primary mb-1">
                          СТАТЬ ЛИДЕРОМ
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Вы регулярно участвуете в торгах, но Ваши цели выше и Вам нужна для их реализации надёжная команда профессионалов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/5 sticky top-24">
                <CardContent className="p-8">
                  <h2 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-6 text-center">
                    ВЫ ДОВЕРЯЕТЕ НАМ - МЫ ОБЕСПЕЧИВАЕМ ВАМ:
                  </h2>
                  
                  <div className="space-y-5">
                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/88009640-7bf2-4987-b16f-a9841b2d79ae.png" alt="Ответственность" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading font-bold text-primary mb-1 transition-colors group-hover:text-accent">ОТВЕТСТВЕННОСТЬ</h3>
                        <p className="text-sm text-muted-foreground">оплата наших услуг по результату</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/a0d40b24-b1c4-4a87-98e5-07e36f4a253d.png" alt="Надёжность" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading font-bold text-primary mb-1 transition-colors group-hover:text-accent">НАДЁЖНОСТЬ</h3>
                        <p className="text-sm text-muted-foreground">мы выстраиваем долгосрочные партнёрские отношения с Вами</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/11401bb7-557e-4b4b-930a-5362fb1e67a0.png" alt="Профессионализм" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading font-bold text-primary mb-1 transition-colors group-hover:text-accent">ПРОФЕССИОНАЛИЗМ</h3>
                        <p className="text-sm text-muted-foreground">мы гроссмейстеры в своей сфере</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/c3ef2575-9898-4443-9208-e6bedf6fd71f.png" alt="Эффективность" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading font-bold text-primary mb-1 transition-colors group-hover:text-accent">ЭФФЕКТИВНОСТЬ</h3>
                        <p className="text-sm text-muted-foreground">ваше время и деньги работают с максимальной пользой</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/2a5ada3c-04a5-4853-a861-bfdd8a62cb0c.png" alt="Удобство" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading font-bold text-primary mb-1 transition-colors group-hover:text-accent">УДОБСТВО</h3>
                        <p className="text-sm text-muted-foreground">вы получаете обслуживание по принципу «одного» окна</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 flex justify-center">
                <Button size="lg" variant="outline" className="text-lg px-8 w-full">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ShoppingCart',
                title: 'Выгодные закупки',
                description: 'Предлагаем выгодные закупки по вашим критериям'
              },
              {
                icon: 'Target',
                title: 'Стратегия победы',
                description: 'Разрабатываем стратегию победы'
              },
              {
                icon: 'TrendingUp',
                title: 'Финансовые инструменты',
                description: 'Помогаем с финансовыми инструментами'
              },
              {
                icon: 'Award',
                title: 'Участие в торгах',
                description: 'Обеспечиваем участие в торгах'
              },
              {
                icon: 'ShieldCheck',
                title: 'Защита интересов',
                description: 'Защищаем ваши интересы до заключения контракта'
              },
              {
                icon: 'FileText',
                title: 'Исполнение контракта',
                description: 'Консультируем на этапе исполнения контракта'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SPECORG — ведущая консалтинговая компания с 15-летним опытом работы на рынке. Мы помогаем бизнесу любого масштаба решать сложные задачи и достигать амбициозных целей.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша команда состоит из опытных специалистов с глубокими знаниями в различных отраслях. Мы используем проверенные методологии и современные инструменты для достижения результата.
              </p>

              <div className="space-y-4">
                {[
                  { icon: 'Award', text: 'Сертифицированные эксперты' },
                  { icon: 'Zap', text: 'Быстрое внедрение решений' },
                  { icon: 'Heart', text: 'Индивидуальный подход' },
                  { icon: 'CheckCircle2', text: 'Гарантия результата' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-accent" size={20} />
                    </div>
                    <span className="text-lg text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-8 border-2 border-border">
                <div className="space-y-6">
                  <div className="bg-secondary p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-4 mb-3">
                      <Icon name="Briefcase" className="text-accent" size={24} />
                      <h3 className="font-heading text-lg font-semibold text-foreground">Наша миссия</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Помогать бизнесу расти и развиваться через экспертные решения
                    </p>
                  </div>

                  <div className="bg-secondary p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-4 mb-3">
                      <Icon name="Eye" className="text-accent" size={24} />
                      <h3 className="font-heading text-lg font-semibold text-foreground">Наше видение</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Быть лидером в области бизнес-консалтинга в России
                    </p>
                  </div>

                  <div className="bg-secondary p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-4 mb-3">
                      <Icon name="Star" className="text-accent" size={24} />
                      <h3 className="font-heading text-lg font-semibold text-foreground">Наши ценности</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Профессионализм, честность, результативность
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Icon name="Phone" className="mx-auto mb-3 text-accent" size={24} />
                    <div className="font-medium text-foreground mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Mail" className="mx-auto mb-3 text-accent" size={24} />
                    <div className="font-medium text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">info@specorg.org</div>
                  </div>
                  <div className="text-center">
                    <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={24} />
                    <div className="font-medium text-foreground mb-1">Адрес</div>
                    <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary border-t border-border text-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-heading text-2xl font-bold mb-4">SPECORG</div>
              <p className="text-muted-foreground text-sm">
                Профессиональный консалтинг для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Стратегия</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">HR-консалтинг</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Финансы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@specorg.org</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 SPECORG. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;