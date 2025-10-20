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
    const subject = encodeURIComponent("Вопрос по курсу нейросетей");
    const body = encodeURIComponent(
      `Имя: ${formData.name}\nEmail: ${formData.email}\n\nСообщение:\n${formData.message}`
    );
    window.location.href = `mailto:acadamy_d_r_mt@mail.ru?subject=${subject}&body=${body}`;
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
          <div className="flex flex-col items-center mb-8">
            <img 
              src="https://cdn.poehali.dev/files/2b30092c-51c2-4e87-97a3-a8e302e10882.png" 
              alt="Академия Дизайна Марианны Турбиной"
              className="w-32 sm:w-40 md:w-48 animate-fade-in"
            />
          </div>
          
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
              onClick={() => window.open('https://wa.me/79785454202?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B8%D0%B7%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8%20', '_blank')}
            >
              Записаться на курс
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-12 py-7 border-[1.5px] hover:bg-primary/5 transition-all duration-300 font-medium tracking-wide" 
              onClick={() => window.open('https://wa.me/79785454202?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B8%D0%B7%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8%20', '_blank')}
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
                <CardDescription className="text-base leading-relaxed">Работа с современными ИИ-платформами: Midjourney, PromeAI, ChatGPT и другими</CardDescription>
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

          <div className="mt-28 sm:mt-32 md:mt-40">
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-block mb-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <p className="text-xl text-muted-foreground/70 font-light">Реальные интерьеры, визуализированные нейросетями</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://cdn.poehali.dev/files/3498efa6-3092-4e1c-8d5b-74dd3fa8f1ba.jpg" 
                  alt="Современный интерьер с флоральными акцентами"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Классический стиль с современными элементами</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://cdn.poehali.dev/files/38d5c485-2f39-4b0f-abed-0ad94e51209c.jpg" 
                  alt="Минималистичная гостиная"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Мягкие формы и пастельные тона</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://cdn.poehali.dev/files/da7b032f-3e92-480a-bced-d8808310866e.jpg" 
                  alt="Интерьер с растительными мотивами"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Природные текстуры и акценты</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://cdn.poehali.dev/files/f3b4f249-7079-46e7-862f-90eed47b0657.jpg" 
                  alt="Современная столовая"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Контрастные цветовые решения</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 elegant-text">Пять причин, почему тебе нужны нейросети</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary elegant-text">01</span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-3">Скорость вместо рутины</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    ИИ за минуты собирает референсы, делает мудборды, предлагает варианты планировок и материалов, помогает с предварительными визуализациями. Меньше ожидания - больше времени на концепт и авторский контроль.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-secondary/20 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 group bg-gradient-to-br from-card to-secondary/5">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-secondary elegant-text">02</span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-3">Сильные презентации и меньше правок</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Быстро показываете 3–5 альтернатив одной зоны, варианты света/цвета/фактур, делаете «до/после». Клиент лучше понимает идею на раннем этапе - правок и согласований становится меньше.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary elegant-text">03</span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-3">Больше креатива при контролируемых рисках</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    ИИ расширяет поле поиска: редкие стилевые комбинации, экспресс-пробы отделок, смелые композиции. Вы курируете и отбираете лучшее, не закапываясь в бесконечных пробах вручную.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-secondary/20 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 group bg-gradient-to-br from-card to-secondary/5">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-secondary elegant-text">04</span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-3">Экономия на 3D-визуализации</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Не нужно заказывать дорогие рендеры для каждой идеи. ИИ создаёт реалистичные визуализации интерьеров за минуты, экономя бюджет на предварительных этапах проекта.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary elegant-text">05</span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-3">Деньги и масштабируемость</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Автоматизация процесса визуализаций здорово экономит время. Освободившееся время можно монетизировать: брать больше проектов или поднимать чек за скорость и сервис.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-28 sm:py-32 md:py-40 bg-background">
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
                    <CardTitle className="mb-2">МОДУЛЬ 1. Основы ИИ для дизайнера интерьера</CardTitle>
                    <CardDescription>
                      <ul className="space-y-2 mt-2">
                        <li>• Настройка VPN и платежных систем</li>
                        <li>• Настройка ChatGPT для дизайнера. Как написать правильно промт (секретные настройки)</li>
                        <li>• Создание личного GPT ассистента. Gpt Sora - визуализация за 5 минут</li>
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>5 уроков</span>
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
                    <CardTitle className="mb-2">МОДУЛЬ 2. Практика. Как внедрить ИИ в работу</CardTitle>
                    <CardDescription>
                      <ul className="space-y-2 mt-2">
                        <li>• Создаем концепцию, moodboard и реалистичные фактурные коллажи</li>
                        <li>• 3D схемы любых чертежей для проекта</li>
                        <li>• Создание реалистичных визуализаций по промту, коллажу или чертежу без долгих генераций рендеров</li>
                        <li>• Меняем цвет, расположение или объект в интерьере на другой за 2 минуты</li>
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>4 урока</span>
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
                    <CardTitle className="mb-2">МОДУЛЬ 3. Создание коллажа и визуализаций через нейросети</CardTitle>
                    <CardDescription>
                      <p className="mb-3">• Создание коллажа через нейросеть Dzinе. Midjourney для дизайнера интерьера - как приручить дракона.</p>
                      
                      <p className="mb-3">• Действенный метод работы без запоминания промтов. Как получить от нейросети нужный результат. Делаем дополнительные ракурсы.</p>
                      
                      <p>• Замена текстуры, создание бесшовных текстур для визуализаций. Создание ультрареалистичных видео по вашим визуализациям для клиентов и ваших соц.сетей</p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>8 уроков</span>
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
                    <CardTitle className="mb-2">МОДУЛЬ 4. Что еще нужно знать о нейросетях</CardTitle>
                    <CardDescription>
                      <p className="mb-3">• Нейросеть PromeAI как дополнительный инструмент</p>
                      <p>• Как улучшить качество изображения через ИИ</p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>2 урока</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription className="text-lg">Без еженедельных созвонов и мастермайнд-группы </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">25 000 ₽</span>
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
                    <span>Чат с куратором, участниками и обратной связью</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Проверка домашних заданий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Сертификат об окончании</span>
                  </li>
                </ul>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/79785454202?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B8%D0%B7%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8%20', '_blank')}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary relative hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 scale-105 bg-gradient-to-br from-primary/5 to-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ПОПУЛЯРНЫЙ
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">С двумя созвонами и мастермайд-группами</CardTitle>
                <CardDescription className="text-lg">Оптимальный выбор</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">30 000 ₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Все из тарифа "Базовый"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary shrink-0 mt-1" size={20} />
                    <span>2 онлайн-встречи</span>
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
                    <span>2 месяца поддержки после курса</span>
                  </li>
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/79785454202?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B8%D0%B7%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D0%B8%20', '_blank')}
                >
                  Выбрать тариф
                </Button>
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
                  <span>acadamy_d_r_mt@mail.ru</span>
                </li>
                <li className="flex items-center gap-3 hover:text-background transition-colors">
                  <Icon name="Phone" size={18} />
                  <span>+7 978 545-42-02</span>
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