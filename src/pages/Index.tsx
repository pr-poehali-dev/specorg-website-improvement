import { useState, useEffect } from 'react';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-xl md:text-2xl font-bold text-primary">SPECORG</div>
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

      <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-12 leading-tight text-center animate-fade-in">
            УВЕЛИЧИВАЕМ ВАШУ ПРИБЫЛЬ ПУТЁМ ЭФФЕКТИВНОГО УЧАСТИЯ В СТРОИТЕЛЬНЫХ ТЕНДЕРАХ
          </h1>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-semibold text-primary mb-4 md:mb-8">
                СТУПЕНИ НАШЕГО С ВАМИ СОТРУДНИЧЕСТВА:
              </h2>

              <div className="space-y-3 md:space-y-4">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex gap-2 md:gap-3 items-start">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading text-base md:text-lg font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-heading text-base md:text-lg font-bold text-primary mb-1">
                          ОЦЕНИТЬ ВОЗМОЖНОСТИ
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          Вы хотите освоить новое направление работы, не имеете опыта, но хотите получить объективную информацию
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex gap-2 md:gap-3 items-start">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading text-base md:text-lg font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-heading text-base md:text-lg font-bold text-primary mb-1">
                          УЛУЧШИТЬ ПРАКТИКУ
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          Вы имеете опыт участия в тендерах, сталкиваетесь с барьерами, но хотите стабильных побед с прогнозируемыми результатами
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex gap-2 md:gap-3 items-start">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading text-base md:text-lg font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-heading text-base md:text-lg font-bold text-primary mb-1">
                          СТАТЬ ЛИДЕРОМ
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          Вы регулярно участвуете в торгах, но Ваши цели выше и Вам нужна для их реализации надёжная команда профессионалов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/5 lg:sticky lg:top-24">
                <CardContent className="p-5 md:p-8">
                  <h2 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 md:mb-6 text-center">
                    ВЫ ДОВЕРЯЕТЕ НАМ - МЫ ОБЕСПЕЧИВАЕМ ВАМ:
                  </h2>
                  
                  <div className="space-y-3 md:space-y-5">
                    <div className="flex gap-2 md:gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/88009640-7bf2-4987-b16f-a9841b2d79ae.png" alt="Ответственность" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading text-sm md:text-base font-bold text-primary mb-0.5 md:mb-1 transition-colors group-hover:text-accent">ОТВЕТСТВЕННОСТЬ</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">оплата наших услуг по результату</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/a0d40b24-b1c4-4a87-98e5-07e36f4a253d.png" alt="Надёжность" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading text-sm md:text-base font-bold text-primary mb-0.5 md:mb-1 transition-colors group-hover:text-accent">НАДЁЖНОСТЬ</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">мы выстраиваем долгосрочные партнёрские отношения с Вами</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/11401bb7-557e-4b4b-930a-5362fb1e67a0.png" alt="Профессионализм" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading text-sm md:text-base font-bold text-primary mb-0.5 md:mb-1 transition-colors group-hover:text-accent">ПРОФЕССИОНАЛИЗМ</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">мы гроссмейстеры в своей сфере</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/c3ef2575-9898-4443-9208-e6bedf6fd71f.png" alt="Эффективность" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading text-sm md:text-base font-bold text-primary mb-0.5 md:mb-1 transition-colors group-hover:text-accent">ЭФФЕКТИВНОСТЬ</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">ваше время и деньги работают с максимальной пользой</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group cursor-pointer">
                      <img src="https://cdn.poehali.dev/files/2a5ada3c-04a5-4853-a861-bfdd8a62cb0c.png" alt="Удобство" className="w-10 h-10 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-heading text-sm md:text-base font-bold text-primary mb-0.5 md:mb-1 transition-colors group-hover:text-accent">УДОБСТВО</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">вы получаете обслуживание по принципу «одного» окна</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-4 md:mt-6 flex justify-center">
                <Button size="default" variant="outline" className="text-base md:text-lg px-6 md:px-8 w-full" asChild>
                  <a href="#services">Узнать больше</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-4">
              Наши услуги
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/files/ff63dfb1-49b5-4f8e-b504-42f447972ad8.png',
                title: 'Выгодные закупки',
                description: 'Предлагаем выгодные закупки по вашим критериям'
              },
              {
                image: 'https://cdn.poehali.dev/files/c5008cbd-7c5f-4e76-820a-2e5ec03871cc.png',
                title: 'Стратегия победы',
                description: 'Разрабатываем стратегию победы'
              },
              {
                image: 'https://cdn.poehali.dev/files/5333b3c4-05fc-4079-aab6-de844ee7a723.png',
                title: 'Финансовые инструменты',
                description: 'Помогаем с финансовыми инструментами'
              },
              {
                image: 'https://cdn.poehali.dev/files/e4d7d6a1-d8a3-4557-b469-878efc124c5c.png',
                title: 'Участие в торгах',
                description: 'Обеспечиваем участие в торгах'
              },
              {
                image: 'https://cdn.poehali.dev/files/f3b74a06-108d-4a1e-b030-67f5276a180c.png',
                title: 'Защита интересов',
                description: 'Защищаем ваши интересы до заключения контракта'
              },
              {
                image: 'https://cdn.poehali.dev/files/b427d3d8-040a-4b0e-83d2-30896dad4899.png',
                title: 'Исполнение контракта',
                description: 'Консультируем на этапе исполнения контракта'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-5 md:p-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 md:mb-6">
                    <img src={service.image} alt={service.title} className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="font-heading text-base md:text-xl font-semibold text-primary mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
                О компании
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                SPECORG — ведущая консалтинговая компания с 15-летним опытом работы на рынке. Мы помогаем бизнесу любого масштаба решать сложные задачи и достигать амбициозных целей.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Наша команда состоит из опытных специалистов с глубокими знаниями в различных отраслях. Мы используем проверенные методологии и современные инструменты для достижения результата.
              </p>

              <div className="space-y-3 md:space-y-4">
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

      <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-5 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-10 md:h-12 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-10 md:h-12 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-sm md:text-base"
                  />
                </div>

                <Button type="submit" size="default" className="w-full text-base md:text-lg md:h-12">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <Icon name="Phone" className="mx-auto mb-2 md:mb-3 text-accent" size={20} />
                    <div className="font-medium text-sm md:text-base text-foreground mb-1">Телефон</div>
                    <div className="text-xs md:text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Mail" className="mx-auto mb-2 md:mb-3 text-accent" size={20} />
                    <div className="font-medium text-sm md:text-base text-foreground mb-1">Email</div>
                    <div className="text-xs md:text-sm text-muted-foreground">info@specorg.org</div>
                  </div>
                  <div className="text-center">
                    <Icon name="MapPin" className="mx-auto mb-2 md:mb-3 text-accent" size={20} />
                    <div className="font-medium text-sm md:text-base text-foreground mb-1">Адрес</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Москва, ул. Примерная, 1</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary border-t border-border text-foreground py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="font-heading text-xl md:text-2xl font-bold mb-3 md:mb-4">SPECORG</div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Профессиональный консалтинг для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Услуги</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Стратегия</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">HR-консалтинг</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Финансы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Компания</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Контакты</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@specorg.org</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 md:pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
            © 2024 SPECORG. Все права защищены.
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Вернуться наверх"
        >
          <Icon name="ArrowUp" size={20} className="md:w-6 md:h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;