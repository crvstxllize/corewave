// src/data/dashboard/Course/lessonConfig.ts

export type LessonType =
  | 'theory'        // чистая теория
  | 'dual-quiz'     // квиз «2 варианта»
  | 'multi-quiz'    // классический тест (3–4 варианта)
  | 'integration'   // интеграционный урок
  | 'practice'      // практическое задание (кодить руками)
  | 'final';        // итоговый экзамен/сертификат

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  type: LessonType;
  iconUrl: string;    // автоматически подставляемая иконка
  completed: boolean;
};

export type Chapter = {
  title: string;
  lessons: Lesson[];
};

export type CourseKey = 'python' | 'javascript' | 'csharp' | 'java' | 'sql';

// Маппинг type → иконка в public/icons
const iconByType: Record<LessonType, string> = {
  theory:       '/icons/theory.svg',
  'dual-quiz':  '/icons/dual-quiz.svg',
  'multi-quiz': '/icons/multi-quiz.svg',
  integration:  '/icons/integration.svg',
  practice:     '/icons/practice.svg',
  final:        '/icons/final.svg',
};

export const courseLessons: Record<CourseKey, Chapter[]> = {
    python: [
    {
      title: 'Глава 1: Знакомство с Python',
      lessons: [
        {
          slug: 'about-this-language',
          title: 'Урок 1. Про этот язык Программирования',
          description:
            'Короткая история языка, зачем он нужен и какие задачи (web, data, AI, автоматизация) решает.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'why-python',
          title: 'Урок 2. Почему именно Python?',
          description:
            'Этот язык программирования стал таким популярным благодаря своей простоте, гибкости и огромному сообществу.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 2: Основы языка',
      lessons: [
        {
          slug: 'variables-and-data-typesP',
          title: 'Урок 3. Переменные и типы данных',
          description:
            'Узнайте, как хранить и манипулировать различными типами данных в Python.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
        {
          slug: 'operators-and-expressionsP',
          title: 'Урок 4. Операторы и выражения',
          description:
            'Этот урок знакомит с арифметическими операторами, такими как сложение, вычитание, умножение и деление, а также с побитовыми операторами.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'string-manipulation',
          title: 'Урок 5. Манипуляции со String',
          description:
            'Строки — один из наиболее часто используемых типов данных в Python.',
          type: 'integration',
          iconUrl: iconByType.integration,
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 3: Построение потоков',
      lessons: [
        {
          slug: 'conditional-statements',
          title: 'Урок 6. Условные операторы (if, elif, else)',
          description:
            'Узнаем, как писать условные операторы if, elif и else в Python.',
          type: 'practice',
          iconUrl: iconByType.practice,
          completed: false,
        },
        {
          slug: 'loops-for-while',
          title: 'Урок 7. Циклы в Python (for, while)',
          description:
            'Циклы позволяют выполнять блок кода несколько раз.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
        {
          slug: 'loop-control-operators',
          title:
            'Урок 8. Управляющие выражения цикла (break, continue, else)',
          description:
            'Рассмотрим операторы break, continue и конструкцию else для циклов.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 4: Функции и модули',
      lessons: [
        {
          slug: 'define-and-call-functions',
          title: 'Урок 9. Определение функций и их вызов',
          description:
            'Узнаем, как определять функции и вызывать их в Python.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'parameters-and-return-values',
          title: 'Урок 10. Параметры и возвращаемые значения',
          description:
            'Разберём, как функции могут принимать параметры и возвращать значения.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'builtins-and-modules',
          title: 'Урок 11. Встроенные функции и модули',
          description:
            'Работа с функциями len(), type(), print() и импорт модулей.',
          type: 'practice',
          iconUrl: iconByType.practice,
          completed: false,
        },
        {
          slug: 'creating-and-using-modules',
          title: 'Урок 12. Создание и использование модулей',
          description:
            'Организация кода в модули для повторного использования.',
          type: 'final',
          iconUrl: iconByType.final,
          completed: false,
        },
      ],
    },
  ],

  javascript: [
    {
      title: 'Глава 1: Про JavaScript',
      lessons: [
        {
          slug: 'what-is-javascript',
          title: 'Урок 1. Что такое JavaScript',
          description:
            'История языка, движки V8/SpiderMonkey, фронтенд vs бэкенд (Node.js), примеры реальных проектов.',
          type: 'theory',
          iconUrl: iconByType['theory'],
          completed: false,
        },
        {
          slug: 'strict-mode-and-standards',
          title: 'Урок 2. Строгий режим и стандарты',
          description:
            '`use strict`, роль спецификаций ECMAScript, зачем нужны линтеры и Babel для нового синтаксиса.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 2: Базовый синтаксис',
      lessons: [
        {
          slug: 'variables-and-data-typesJs',
          title: 'Урок 3. Переменные и типы данных',
          description:
            'Примитивы, объекты, dynamic typing, отличие var → let/const, автоматическое и явное приведение типов.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
        {
          slug: 'template-strings-and-io',
          title: 'Урок 4. Шаблонные строки и ввод-вывод',
          description:
            'Этот урок знакомит с шаблонными строками (``${…}``), интерполяцией и базовым выводом через console.log.',
          type: 'theory',
          iconUrl: iconByType['theory'],
          completed: false,
        },
        {
          slug: 'control-structures-if-else',
          title: 'Урок 5. Управляющие конструкции if / else',
          description:
            'Разберём, как JS принимает решения: if, else if, каскадные проверки, switch-case и guard-clauses.',
          type: 'integration',
          iconUrl: iconByType['integration'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 3: Циклы и коллекции',
      lessons: [
        {
          slug: 'loops-for-while-for-of',
          title: 'Урок 6. Циклы for, while, for…of',
          description:
            'Потренируем классический for, while с условием выхода и новый for…of для итерируемых объектов.',
          type: 'practice',
          iconUrl: iconByType['practice'],
          completed: false,
        },
        {
          slug: 'arrays-and-methods',
          title: 'Урок 7. Массивы и методы',
          description:
            'Создадим массивы разными способами и научимся пользоваться методами push, pop, shift, map, filter, reduce.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
        {
          slug: 'objects-and-destructuring',
          title: 'Урок 8. Объекты и деструктуризация',
          description:
            'Исследуем объекты как ассоциативные контейнеры: литералы {}, вложенные структуры, ссылки vs копии, деструктуризация.',
          type: 'theory',
          iconUrl: iconByType['theory'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 4: Функции в JavaScript',
      lessons: [
        {
          slug: 'function-declaration-and-invocation',
          title: 'Урок 9. Объявление и вызов функций',
          description:
            'Сравним function foo(){} и const foo = () => {}. Познакомимся с hoisting и контекстом this.',
          type: 'theory',
          iconUrl: iconByType['theory'],
          completed: false,
        },
        {
          slug: 'closures-and-modularity',
          title: 'Урок 10. Замыкания и модульность',
          description:
            'Поймём механику замыканий: внутренняя функция «помнит» окружение родителя. Реализуем счётчик и приватные свойства.',
          type: 'final',
          iconUrl: iconByType['final'],
          completed: false,
        },
      ],
    },
  ],

    csharp: [
    {
      title: 'Глава 1: Что такое C#',
      lessons: [
        {
          slug: 'introduction-to-csharp',
          title: 'Урок 1. Знакомство с C#',
          description:
            'C# — строго типизированный, объектно-ориентированный язык Microsoft. Разберём, как он эволюционировал от .NET Framework до .NET 8.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'dotnet-platform',
          title: 'Урок 2. Платформа .NET',
          description:
            '.NET 8: enterprise-backend, Unity-игры, мобильные MAUI-приложения, облака — и чем новая платформа отличается от предыдущих версий.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 2: Основы синтаксиса',
      lessons: [
        {
          slug: 'variables-and-data-typesC',
          title: 'Урок 3. Переменные и типы данных',
          description:
            'Изучим value-типы (int, double, bool, char, struct) и reference-типы (string, object, массивы, классы). Поймём, как они работают в C#.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'control-structures-if-switch',
          title: 'Урок 4. Управляющие конструкции if, switch',
          description:
            'Классический if/else, новый switch-expression со стрелками =>, позиционные паттерны, when-guards. Разберёмся, почему новые switch-выражения удобнее.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'operators-and-expressionsС',
          title: 'Урок 5. Операторы и выражения',
          description:
            'От арифметики и логики до побитовых операций, операторов ??, ?:, тернарного ?, pattern-matching и ключевого слова is. Расставим приоритеты.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 3: Коллекции и строки',
      lessons: [
        {
          slug: 'arrays-and-list',
          title: 'Урок 6. Массивы и List<T>',
          description:
            'Статические массивы, динамические списки List<T>, индексаторы, методы Add, Sort, FindAll. Разберём, когда что использовать.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'strings-and-interpolation',
          title: 'Урок 7. Строки и интерполяция',
          description:
            'Иммутабельность string, класс StringBuilder для тяжёлых операций, интерполяция через $\"{…}\" и форматирование.',
          type: 'integration',
          iconUrl: iconByType.integration,
          completed: false,
        },
        {
          slug: 'console-io',
          title: 'Урок 8. Работа с консолью I/O',
          description:
            'Считываем ввод через Console.ReadLine(), выводим цветной текст через Console.ForegroundColor, разбираем основы I/O.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 4: Методы и параметры',
      lessons: [
        {
          slug: 'define-methods-and-return',
          title: 'Урок 9. Определение методов и return',
          description:
            'Синтаксис `static int Sum(int a, int b)`, области видимости, перегрузка (overload), локальные функции и expression-body методы.',
          type: 'final',
          iconUrl: iconByType.final,
          completed: false,
        },
        {
          slug: 'ref-out-params',
          title: 'Урок 10. Передача параметров ref, out, params',
          description:
            'Разница между передачей по значению и по ссылке. Как `ref` меняет аргумент, `out` возвращает несколько значений, `params` — массив.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'classes-and-namespaces',
          title: 'Урок 11. Классы, объекты и пространства имён',
          description:
            'Создаём класс с полями и автосвойствами, вызываем конструктор, изучаем модификаторы доступа `public`/`private` и `namespace`.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
  ],
  
  java: [
    {
      title: 'Глава 1: Введение в Java',
      lessons: [
        {
          slug: 'what-is-java-and-jvm',
          title: 'Урок 1. Что такое Java и JVM',
          description:
            'Роль JVM, JRE и JDK, слоган «write once, run anywhere», где Java используется — серверы, Android, банки, big data.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'project-structure-and-main',
          title: 'Урок 2. Структура проекта и main',
          description:
            'Папка src, пакеты, класс-компилятор, сигнатура public static void main(String[] args), зачем нужен module-info.java.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 2: Основы языка',
      lessons: [
        {
          slug: 'variables-and-data-typesJ',
          title: 'Урок 3. Переменные и типы данных',
          description:
            'Типы int, double, char, boolean, литералы, явное/неявное приведение, ключевое слово var (Java 10+).',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'control-structures-if-switch',
          title: 'Урок 4. Управляющие конструкции if / switch',
          description:
            'Классический if, новый switch-expression (Java 17), блок default, fall-through и yield.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'loops-for-while-do-while',
          title: 'Урок 5. Циклы for, while, do-while',
          description:
            'Счётчик, бесконечный цикл, foreach-синтаксис по коллекции/массиву, операторы break и continue.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 3: Данные и методы',
      lessons: [
        {
          slug: 'arrays-and-arraylist',
          title: 'Урок 6. Массивы и ArrayList',
          description:
            'Одномерные/многомерные массивы, класс Arrays, динамические списки ArrayList, автраспаковка объектов.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'strings-and-stringbuilder',
          title: 'Урок 7. Строки и StringBuilder',
          description:
            'Иммутабельность String, методы substring, split, быстрая конкатенация через StringBuilder.',
          type: 'integration',
          iconUrl: iconByType.integration,
          completed: false,
        },
        {
          slug: 'methods-and-parameters',
          title: 'Урок 8. Методы и параметры',
          description:
            'Синтаксис returnType name(params), области видимости, ключевое слово return, передача по значению.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 4: ООП основы',
      lessons: [
        {
          slug: 'classes-and-objects',
          title: 'Урок 9. Классы и объекты',
          description:
            'Создание собственных классов, оператор new, поля, методы-поведения, сборщик мусора.',
          type: 'final',
          iconUrl: iconByType.final,
          completed: false,
        },
        {
          slug: 'constructors-and-this',
          title: 'Урок 10. Конструкторы и this',
          description:
            'Неявный конструктор, цепочки this(), инициализация полей, отличие static и экземплярных членов.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'inheritance-and-polymorphism',
          title: 'Урок 11. Наследование и полиморфизм',
          description:
            'Как класс-потомок расширяет поведение родителя, ключевое слово extends, переопределение методов.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'packages-and-jar-modules',
          title: 'Урок 12. Пакеты и модули JAR',
          description:
            'Организация кода в пакеты, import, сборка .jar, обзор системы модулей JPMS и module-info.java.',
          type: 'practice',
          iconUrl: iconByType.practice,
          completed: false,
        },
        {
          slug: 'interfaces-and-abstract-classes',
          title: 'Урок 13. Интерфейсы и абстрактные классы',
          description:
            'Контракты interface, множественная «наследуемость» поведения, ключевое слово implements, методы по умолчанию.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
      ],
    },
  ],

  sql: [
    {
      title: 'Глава 1: Основы SQL',
      lessons: [
        {
          slug: 'introduction-to-sql',
          title: 'Урок 1. Введение в SQL',
          description:
            'Что такое SQL, история стандарта, основные СУБД (MySQL, PostgreSQL, SQL Server).',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'data-types-and-table-creation',
          title: 'Урок 2. Типы данных и создание таблиц',
          description:
            'Обзор базовых типов (INT, VARCHAR, DATE и др.) и синтаксис CREATE TABLE.',
          type: 'practice',
          iconUrl: iconByType.practice,
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 2: Данные (DML)',
      lessons: [
        {
          slug: 'select-basics',
          title: 'Урок 3. SELECT и базовый выбор',
          description:
            'Простой запрос SELECT, выбор колонок, псевдонимы и ключевое слово AS.',
          type: 'dual-quiz',
          iconUrl: iconByType['dual-quiz'],
          completed: false,
        },
        {
          slug: 'where-filtering',
          title: 'Урок 4. WHERE и фильтрация',
          description:
            'Условия WHERE, операторы сравнения, логические связки AND/OR, LIKE и BETWEEN.',
          type: 'multi-quiz',
          iconUrl: iconByType['multi-quiz'],
          completed: false,
        },
        {
          slug: 'insert-update-delete',
          title: 'Урок 5. INSERT, UPDATE и DELETE',
          description:
            'Добавление, изменение и удаление строк через INSERT, UPDATE и DELETE.',
          type: 'practice',
          iconUrl: iconByType.practice,
          completed: false,
        },
      ],
    },
    {
      title: 'Глава 3: Продвинутые запросы',
      lessons: [
        {
          slug: 'joins-and-relations',
          title: 'Урок 6. Объединение таблиц (JOIN)',
          description:
            'INNER, LEFT, RIGHT JOIN, отличия, когда использовать каждый вид.',
          type: 'integration',
          iconUrl: iconByType.integration,
          completed: false,
        },
        {
          slug: 'grouping-and-aggregates',
          title: 'Урок 7. GROUP BY и агрегатные функции',
          description:
            'COUNT, SUM, AVG, MIN, MAX, фильтрация групп через HAVING.',
          type: 'theory',
          iconUrl: iconByType.theory,
          completed: false,
        },
        {
          slug: 'subqueries-and-views',
          title: 'Урок 8. Подзапросы и представления (VIEW)',
          description:
            'Коррелированные и некоррелированные подзапросы, создание VIEW для упрощения запросов.',
          type: 'final',
          iconUrl: iconByType.final,
          completed: false,
        },
      ],
    },
  ],
};
