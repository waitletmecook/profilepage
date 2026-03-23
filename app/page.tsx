// app/profile/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Share2,
  Settings,
  FileText,
  Users,
  UserPlus,
  Heart,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  CalendarDays,
  MapPin,
  Image,
  File,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  // Данные пользователя
  const user = {
    name: "Алексей Иванов",
    role: "Frontend Developer",
    username: "@alexey_dev",
    bio: "Создаю современные веб-приложения с помощью React, Next.js и Tailwind CSS. Люблю минимализм и чистый код.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=300&fit=crop",
    stats: {
      posts: 42,
      followers: 1250,
      following: 340,
      likes: 3840,
    },
    about: {
      fullBio:
        "Начинал свой путь в веб-разработке с создания простых сайтов на HTML/CSS. Со временем увлекся JavaScript, а затем и фреймворками. Сейчас специализируюсь на экосистеме React, активно использую Next.js для серверного рендеринга и Tailwind CSS для стилизации. В свободное время изучаю новые технологии, играю в шахматы и веду технический блог.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
      contact: {
        email: "alexey@example.com",
        website: "alexeydev.com",
        social: "alexey_dev",
        joined: "Март 2024",
        location: "Москва, Россия",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Основной контент */}
      <main className="container max-w-4xl mx-auto px-4 py-8">
        {/* Шапка профиля */}
        <div className="relative">
          {/* Обложка */}
          <div className="h-48 md:h-64 rounded-xl overflow-hidden bg-muted">
            <img
              src={user.cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Аватар и основная информация */}
          <div className="flex flex-col md:flex-row md:items-end justify-between -mt-16 md:-mt-20 mb-6">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
              <Avatar className="w-32 h-32 md:w-36 md:h-36 border-4 border-background">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="mb-2">
                <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.role}</p>
                <p className="text-sm text-muted-foreground">{user.username}</p>
                <p className="mt-1 max-w-md">{user.bio}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Редактировать
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Поделиться
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Блок статистики */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-2xl font-bold">{user.stats.posts}</p>
              <p className="text-sm text-muted-foreground">Публикации</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-2xl font-bold">{user.stats.followers}</p>
              <p className="text-sm text-muted-foreground">Подписчики</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <UserPlus className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-2xl font-bold">{user.stats.following}</p>
              <p className="text-sm text-muted-foreground">Подписки</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-2xl font-bold">{user.stats.likes}</p>
              <p className="text-sm text-muted-foreground">Лайки</p>
            </div>
          </div>
        </div>

        {/* Секция "О себе" */}
        <div className="py-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">О себе</h2>
            <p className="text-muted-foreground leading-relaxed">
              {user.about.fullBio}
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Навыки</h3>
            <div className="flex flex-wrap gap-2">
              {user.about.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Контактная информация</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{user.about.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>{user.about.contact.website}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Twitter className="h-4 w-4 text-muted-foreground" />
                <span>{user.about.contact.social}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>Регистрация: {user.about.contact.joined}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Навигация по контенту */}
        <Tabs defaultValue="posts" className="mt-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="posts">Все посты</TabsTrigger>
            <TabsTrigger value="media">Медиа</TabsTrigger>
            <TabsTrigger value="docs">Документы</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border bg-card text-card-foreground"
                >
                  <h3 className="font-semibold">Мой первый пост {i}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Это пример содержимого вкладки "Все посты". Здесь может быть
                    лента публикаций пользователя.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="media">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center"
                >
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="docs">
            <div className="space-y-2">
              {["Резюме.pdf", "Портфолио.pdf", "Проект_презентация.pdf"].map(
                (doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 p-3 rounded-lg border"
                  >
                    <File className="h-5 w-5 text-muted-foreground" />
                    <span>{doc}</span>
                  </div>
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="favorites">
            <div className="text-center py-8 text-muted-foreground">
              <Star className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Нет избранных записей</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Подвал */}
      <footer className="border-t mt-12 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  Л
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                © 2026 Название. Все права защищены.
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="hover:underline">
                О нас
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="#" className="hover:underline">
                Поддержка
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="#" className="hover:underline">
                Блог
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="#" className="hover:underline">
                Вакансии
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:underline">
              Конфиденциальность
            </Link>
            <Link href="#" className="hover:underline">
              Условия использования
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}