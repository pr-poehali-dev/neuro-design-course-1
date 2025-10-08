import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Нейросети для дизайнеров интерьера
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Освойте инструменты искусственного интеллекта и выведите свои проекты на новый уровень
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">О курсе</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-primary" size={24} />
                </div>
                <CardTitle>Практические навыки</CardTitle>
                <CardDescription>
                  Научитесь применять нейросети для создания концептов, визуализаций и презентаций проектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-secondary" size={24} />
                </div>
                <CardTitle>Актуальные инструменты</CardTitle>
                <CardDescription>
                  Работа с современными ИИ-платформами: Midjourney, Stable Diffusion, ChatGPT и другими
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <CardTitle>Поддержка экспертов</CardTitle>
                <CardDescription>
                  Обратная связь от практикующих дизайнеров и доступ к сообществу единомышленников
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 sm:mt-20 bg-muted rounded-2xl p-8 sm:p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/49ae4c8f-51b5-4b0b-8264-5a9a82db2017/files/11d07b6b-e7cd-4c3a-ac2a-893e53fd8761.jpg" 
                  alt="AI for Interior Design"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Почему нейросети важны сегодня?</h3>
                <p className="text-muted-foreground mb-4">
                  Искусственный интеллект революционизирует индустрию дизайна интерьеров. Дизайнеры, владеющие ИИ-инструментами, работают в 3-5 раз быстрее и создают более качественные проекты.
                </p>
                <p className="text-muted-foreground">
                  Наш курс поможет вам освоить эти технологии и оставаться конкурентоспособными в современном рынке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 sm:py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">Программа курса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    1
                  </div>
                  <div>
                    <CardTitle className="mb-2">Основы ИИ для дизайна</CardTitle>
                    <CardDescription>
                      Введение в нейросети, основные концепции, выбор инструментов. Создание первых изображений с помощью ИИ.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>4 занятия • 8 часов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    2
                  </div>
                  <div>
                    <CardTitle className="mb-2">Генерация визуализаций</CardTitle>
                    <CardDescription>
                      Работа с Midjourney и Stable Diffusion. Создание реалистичных интерьеров, подбор стилей и материалов.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>6 занятий • 12 часов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    3
                  </div>
                  <div>
                    <CardTitle className="mb-2">ИИ-помощники в работе</CardTitle>
                    <CardDescription>
                      Использование ChatGPT для составления ТЗ, описаний проектов. Автоматизация рутинных задач.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>4 занятия • 8 часов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    4
                  </div>
                  <div>
                    <CardTitle className="mb-2">Финальный проект</CardTitle>
                    <CardDescription>
                      Создание полноценного дизайн-проекта с использованием всех изученных инструментов. Презентация работ.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>2 занятия • 4 часа</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 sm:py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">Тарифы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription className="text-lg">Для начинающих</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">29 900 ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Доступ к записям лекций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Базовые материалы курса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Чат с участниками</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Сертификат об окончании</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary relative hover:shadow-2xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription className="text-lg">Оптимальный выбор</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">49 900 ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Все из тарифа "Базовый"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Еженедельные онлайн-встречи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Проверка домашних заданий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Доступ к библиотеке промптов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>3 месяца поддержки после курса</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription className="text-lg">Максимум возможностей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">79 900 ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Все из тарифа "Стандарт"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Индивидуальные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Разбор вашего портфолио</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Доступ к закрытым мастер-классам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Пожизненный доступ к материалам</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Выбрать тариф</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">Остались вопросы?</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Свяжитесь с нами, и мы ответим на все ваши вопросы о курсе
            </p>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, что вас интересует..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Курс по нейросетям</h3>
              <p className="text-background/80">
                Обучаем дизайнеров интерьера работе с искусственным интеллектом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#about" className="hover:text-background transition-colors">О курсе</a>
                </li>
                <li>
                  <a href="#program" className="hover:text-background transition-colors">Программа</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-background transition-colors">Тарифы</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-background transition-colors">Контакты</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@aicourse.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2024 Курс по нейросетям для дизайнеров интерьера. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
