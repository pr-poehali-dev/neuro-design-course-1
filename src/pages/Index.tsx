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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 animate-fade-in py-20">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 bg-primary/5 border border-primary/10 rounded-full text-primary font-medium text-xs tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Эксклюзивное обучение
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight elegant-text">
            Нейросети для<br/>дизайнеров интерьера
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light">Нейросети - уже не будущее! Нейросети - это настоящее, которое может кардинально изменить мир и нашу профессию. Мы либо внедряем технологии в работу либо остаемся "догонять уходящий поезд"</p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              size="lg" 
              className="text-base px-12 py-7 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 font-medium tracking-wide" 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на курс
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-12 py-7 border-[1.5px] hover:bg-primary/5 transition-all duration-300 font-medium tracking-wide" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 sm:py-32 md:py-40 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 elegant-text">О курсе</h2>
            <p className="text-xl text-muted-foreground/70 max-w-2xl mx-auto font-light">Профессиональный подход к обучению</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Brain" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-3">Практические навыки</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Научитесь применять нейросети для создания концептов, визуализаций и презентаций проектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-secondary/20 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 group bg-gradient-to-br from-card to-secondary/5">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Sparkles" className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-xl mb-3">Актуальные инструменты</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Работа с современными ИИ-платформами: Midjourney, Stable Diffusion, ChatGPT и другими
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group bg-gradient-to-br from-card to-primary/5">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-3">Поддержка экспертов</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Обратная связь от практикующих дизайнеров и доступ к сообществу единомышленников
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-20 sm:mt-24 bg-gradient-to-br from-primary/5 to-muted rounded-3xl p-10 sm:p-14 md:p-20 border border-primary/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-4 px-4 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary font-medium text-xs tracking-widest">
                  ПРЕИМУЩЕСТВО
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Почему нейросети важны сегодня?</h3>
                <p className="text-muted-foreground mb-5 text-lg leading-relaxed">
                  Искусственный интеллект революционизирует индустрию дизайна интерьеров. Дизайнеры, владеющие ИИ-инструментами, работают в 3-5 раз быстрее и создают более качественные проекты.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Наш курс поможет вам освоить эти технологии и оставаться конкурентоспособными в современном рынке.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://cdn.poehali.dev/projects/49ae4c8f-51b5-4b0b-8264-5a9a82db2017/files/1fa0cb0d-7a85-466e-baa9-d47ea6832730.jpg" 
                  alt="AI for Interior Design"
                  className="rounded-2xl shadow-2xl w-full border border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-32 md:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 elegant-text">Пять причин освоить нейросети</h2>
            <p className="text-xl text-muted-foreground/70 max-w-2xl mx-auto font-light">Почему это важно для вашей карьеры</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex gap-6 sm:gap-8 items-start p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary elegant-text">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 elegant-text group-hover:text-primary transition-colors">Ускорение работы в 5 раз</h3>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                    Создавайте визуализации и концепты за минуты вместо часов. Нейросети берут на себя рутинную работу, освобождая время для творчества и работы с клиентами.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex gap-6 sm:gap-8 items-start p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-secondary elegant-text">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 elegant-text group-hover:text-secondary transition-colors">Конкурентное преимущество</h3>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                    Выделяйтесь среди конкурентов с уникальными решениями. Владение ИИ-инструментами становится обязательным навыком для современного дизайнера интерьеров.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex gap-6 sm:gap-8 items-start p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary elegant-text">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 elegant-text group-hover:text-primary transition-colors">Увеличение дохода</h3>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                    Берите больше проектов благодаря скорости работы. Дизайнеры с навыками ИИ увеличивают свой доход на 30-50% в первый год после обучения.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex gap-6 sm:gap-8 items-start p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-secondary elegant-text">04</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 elegant-text group-hover:text-secondary transition-colors">Безграничное творчество</h3>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                    Экспериментируйте со стилями и решениями без ограничений. Нейросети позволяют быстро протестировать десятки вариантов и найти идеальное решение.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex gap-6 sm:gap-8 items-start p-8 rounded-2xl hover:bg-muted/30 transition-all duration-500">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary elegant-text">05</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 elegant-text group-hover:text-primary transition-colors">Будущее профессии</h3>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                    ИИ становится стандартом индустрии. Инвестируйте в свои навыки сейчас, чтобы оставаться востребованным специалистом в ближайшие годы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-28 sm:py-32 md:py-40 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-xs tracking-widest">
              ПРОГРАММА
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Программа курса</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-primary/10">
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

            <Card className="bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-primary/10">
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

            <Card className="bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-primary/10">
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

            <Card className="bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-primary/10">
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
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary font-medium text-xs tracking-widest">
              ИНВЕСТИЦИЯ В СЕБЯ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Тарифы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
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

            <Card className="border-4 border-primary relative hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 scale-105 bg-gradient-to-br from-primary/5 to-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ПОПУЛЯРНЫЙ
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

            <Card className="border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
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

      <section id="contact" className="py-28 sm:py-32 md:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 elegant-text">Остались вопросы?</h2>
              <p className="text-xl text-muted-foreground/70 font-light">
                Свяжитесь с нами, и мы ответим на все ваши вопросы о курсе
              </p>
            </div>
            <Card className="border-[0.5px] border-primary/10 shadow-2xl shadow-primary/5 bg-card/50 backdrop-blur">
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

      <footer className="bg-foreground/95 text-background py-16 border-t border-primary/10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-2xl mb-4 elegant-text">Курс по нейросетям</h3>
              <p className="text-background/70 font-light leading-relaxed">
                Обучаем дизайнеров интерьера работе с искусственным интеллектом
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-3 text-background/70 font-light">
                <li>
                  <a href="#about" className="hover:text-background transition-colors hover:translate-x-1 inline-block duration-300">О курсе</a>
                </li>
                <li>
                  <a href="#program" className="hover:text-background transition-colors hover:translate-x-1 inline-block duration-300">Программа</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-background transition-colors hover:translate-x-1 inline-block duration-300">Тарифы</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-background transition-colors hover:translate-x-1 inline-block duration-300">Контакты</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-background/70 font-light">
                <li className="flex items-center gap-3 hover:text-background transition-colors">
                  <Icon name="Mail" size={18} />
                  <span>info@aicourse.ru</span>
                </li>
                <li className="flex items-center gap-3 hover:text-background transition-colors">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center text-background/50 text-sm font-light">
            <p>&copy; 2024 Курс по нейросетям для дизайнеров интерьера. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;