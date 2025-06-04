// src/data/lessonSteps.tsx
import { ReactNode } from 'react'

export type StepType = 'theory' | 'dual-quiz' | 'multi-quiz'

export interface Step {
  id: string
  type: StepType
  content: ReactNode
  options?: string[]
  correctIndex?: number
}

const aboutThisLanguageSteps: Step[] = [
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <div className="theory-images">
          <img src="/imgs/London.svg" alt={`city = "London"`} />
        </div>
        <p>
          Показательная страница - шаблон TheoryStep.tsx 
          в котором я создал Картинку примера переменной
          и в котором я создал Код через html тэг который находится снизу этой страницы
        </p>
        <pre>
          <code>city = "London"</code>
        </pre>
      </>
    ),
  },
  {
    id: 'step-2',
    type: 'dual-quiz',
    content: (
      <>
        <p>Показательная страница - шаблон DualQuizStep.tsx</p>
        <p>Снизу 2 варианта, где один неверный ответ и один верный <code></code>:</p>
      </>
    ),
    options: ['Неверно', 'Правильно',],
    correctIndex: 1,
  },
  {
    id: 'step-3',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          People use code to send instructions to computers, but code will also be read by
          other people (and future you!).
        </p>
        <p>What should be the name of the variable that stores the user’s balance?</p>
      </>
    ),
    options: ['Balance', 'Gambling', 'Country'],
    correctIndex: 0,
  },
  // placeholders для шагов 4–7
  { id: 'step-4', type: 'theory', content: <p>— placeholder for step 4 —</p> },
  { id: 'step-5', type: 'dual-quiz', content: <p>— placeholder for step 5 —</p>, options: ['foo','bar'], correctIndex: 0 },
  { id: 'step-6', type: 'multi-quiz', content: <p>— placeholder for step 6 —</p>, options: ['A','B','C'], correctIndex: 2 },
  { id: 'step-7', type: 'theory', content: <p>— placeholder for final step 7 —</p> },
]

const whyPythonSteps: Step[] = [
  // Шаг 1: Теория — Общее знакомство с Python
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <div className="theory-images">
        </div>
        <p>
          Python — это язык программирования, который широко используют и новички, и профессиональные разработчики. 
          Он появился в начале 90-х годов и быстро обрёл популярность за счёт нескольких ключевых свойств:
        </p>
        <hr className="divider" />
        <ul>
          <li><strong>Простота и читаемость</strong> — код легко понимать даже без глубоких знаний.</li>
          <li><strong>Гибкость</strong> — Python подходит для веба, анализа данных, автоматизации, алгоритмов, машинного обучения и прочего.</li>
          <li><strong>Богатое сообщество</strong> — тысячи готовых библиотек и открытых решений, которые помогают ускорить разработку.</li>
        </ul>
      </>
    ),
  },

  // Шаг 2: Теория — Простота и читаемость синтаксиса
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Одно из главных преимуществ Python — лаконичный и понятный синтаксис. 
          В других языках часто нужны точки с запятой, фигурные скобки и сложные конструкции. 
          В Python мы делаем ставку на отступы и чёткую структуру:
        </p>
        <p>
          Например, присваивание переменной выглядит так:
        </p>
        <pre>
          <code>a = 10</code>
        </pre>
        <p>
          Здесь:
          <ul>
            <li><code>a</code> — имя переменной,</li>
            <li><code>=</code> — оператор присваивания,</li>
            <li><code>10</code> — само значение.</li>
          </ul>
        </p>
        <p>
          Благодаря отступам сразу видно уровень вложенности. Такой подход делает код 
          лёгким для чтения и поддержки.
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверяем понимание про отступы и синтаксис
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Почему в Python так важно соблюдать одинаковые отступы (пробелы или табуляции)?
        </p>
        <p>
          Выберите правильный вариант:
        </p>
      </>
    ),
    options: ['скорость', 'структура'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — Гибкость и области применения
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          Благодаря простоте синтаксиса Python применяют во многих сферах:
        </p>
        <ul>
          <li>
            <strong>Веб-разработка.</strong> 
            Фреймворки Django и Flask позволяют быстро построить сайт или API.
          </li>
          <li>
            <strong>Анализ данных и Data Science.</strong> 
            Библиотеки Pandas, NumPy, Matplotlib и другие помогают обрабатывать и визуализировать данные.
          </li>
          <li>
            <strong>Машинное обучение и искусственный интеллект.</strong> 
            Библиотеки TensorFlow, PyTorch, scikit-learn дают готовые инструменты для обучения моделей.
          </li>
          <li>
            <strong>Автоматизация рутинных задач и скрипты.</strong> 
            С помощью Python легко писать скрипты, которые автоматизируют любую задачу — от работы с файлами до взаимодействия с веб-сайтами.
          </li>
        </ul>
        <p>
          Такие возможности делают Python универсальным инструментом «под рукой» на любом этапе разработки.
        </p>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка про области применения Python
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Выберите одно утверждение, которое НЕ относится к достоинствам Python:
        </p>
      </>
    ),
    options: [
      'Простой синтаксис, который удобно читать',
      'Огромное сообщество и множество готовых библиотек',
      'Ограниченные возможности для построения веб-приложений'
    ],
    correctIndex: 2,
  },

  // Шаг 6: Теория — Сообщество и экосистема библиотек
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          Ещё одно важное преимущество Python — его <strong>сообщество</strong>. 
          Сотни тысяч разработчиков по всему миру создают и поддерживают открытые библиотеки:
        </p>
        <ul>
          <li>
            <strong>PyPI</strong> (Python Package Index) — главный репозиторий пакетов, 
            где можно найти всё: от клиентских SDK до инструментов тестирования.
          </li>
          <li>
            <strong>pip</strong> — стандартный менеджер пакетов, который упрощает установку и обновление библиотек.
          </li>
          <li>
            <strong>Документация и форумы.</strong> 
            На официальном сайте Python есть подробная документация, а на Stack Overflow и Reddit 
            быстро можно найти решение практических задач.
          </li>
        </ul>
        <p>
          Всё это ускоряет вашу работу: вместо того чтобы писать сложные алгоритмы «с нуля», 
          вы берёте готовую библиотеку и интегрируете её за пару команд.
        </p>
      </>
    ),
  },

  // Шаг 7: Теория — Итоги и что дальше
  {
    id: 'step-7',
    type: 'theory',
    content: (
      <>
        <p>
          Итак, подытожим:
        </p>
        <ol>
          <li>Python — простой и понятный язык, где структура кода определяется отступами.</li>
          <li>Он гибок и подходит для веба, аналитики, ИИ, автоматизации.</li>
          <li>У Python огромное сообщество: тысячи библиотек, готовых решений и активная документация.</li>
        </ol>
        <p>
          Благодаря этим свойствам Python — отличный выбор как для первого шага в программировании, 
          так и для серьёзных задач в крупных проектах. В следующем уроке мы начнём с установки окружения 
          и напишем «Hello World!», чтобы познакомиться с реальным исполнением кода.
        </p>
      </>
    ),
  },
];

const variablesDataTypesSteps: Step[] = [
  // Шаг 1: Теория — Что такое переменная
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Переменная</strong> — это имя, под которым мы храним данные в памяти компьютера. 
          Например:
        </p>
        <pre>
          <code>score = 100</code>
        </pre>
        <p>
          Здесь <u>score</u> — имя, <u>=</u> — оператор присваивания, <u>100</u> — значение.
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — Правила именования переменных
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          При создании имени переменной в Python:
        </p>
        <ul>
          <li><strong>Начинается</strong> с буквы или <u>_</u> (подчёркивания).</li>
          <li>Содержит только буквы, цифры и <u>_</u>; пробелы запрещены.</li>
          <li><strong>Регистр важен:</strong> <code>data</code> ≠ <code>Data</code>.</li>
          <li>Нельзя брать <u>зарезервированные</u> слова (например, <code>while</code>, <code>None</code>).</li>
        </ul>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверяем правило именования
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Что произойдёт, если дать переменной имя, начинающееся с цифры?
        </p>
        <p>
          Выберите правильный вариант:
        </p>
      </>
    ),
    options: ['Ошибка', 'Игнор'],
    correctIndex: 0,
  },

  // Шаг 4: Теория — Базовые типы данных
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          Python автоматически определяет <strong>тип данных</strong> по значению:
        </p>
        <ul>
          <li><strong>int</strong> — целые числа, например <code>count = 10</code>.</li>
          <li><strong>float</strong> — дробные числа, например <code>price = 9.99</code>.</li>
          <li><strong>str</strong> — текст в кавычках, например <code>name = "Bob"</code>.</li>
          <li><strong>bool</strong> — логический, <code>True</code> или <code>False</code>.</li>
        </ul>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка типов данных
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой тип данных получит переменная <code>x</code> после присваивания <code>x = "123"</code>?
        </p>
      </>
    ),
    options: ['int', 'float', 'str', 'bool'],
    correctIndex: 2,
  },

  // Шаг 6: Теория — Операции над строками и числами
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Числа:</strong> можно складывать и умножать:
        </p>
        <pre>
          <code>sum = 5 + 7   # 12{'\n'}prod = 4 * 3  # 12</code>
        </pre>
        <p>
          <strong>Строки:</strong> объединяются с помощью <u>+</u> и повторяются с помощью <u>*</u>:
        </p>
        <pre>
          <code>greet = "Hi" + "!"     # "Hi!"{'\n'}laugh = "ha" * 2   # "haha"</code>
        </pre>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка операций
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что выведет <code>print("5" * 2)</code>?
        </p>
      </>
    ),
    options: ['10', '"55"', '"55" (строковый)', 'Ошибка'],
    correctIndex: 2,
  },
];

const operatorsExpressionsSteps: Step[] = [
  // Шаг 1: Теория — Введение в операторы и выражения
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          В Python <strong>оператор</strong> — это символ или комбинация символов, которые указывают интерпретатору выполнить некоторую операцию над данными (значениями или переменными). 
          Выражение — это комбинация переменных, операторов и литералов, которая вычисляется в некоторое значение.
        </p>
        <p>
          Например, <code>3 + 5</code> — выражение, содержащее операцию сложения, результатом которой будет <code>8</code>.
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — Арифметические операторы
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Основные арифметические операторы в Python:
        </p>
        <ul>
          <li>
            <strong>+</strong> — <u>сложение</u>. Складывает два числа.
          </li>
          <li>
            <strong>-</strong> — <u>вычитание</u>. Вычитает второе число из первого.
          </li>
          <li>
            <strong>*</strong> — <u>умножение</u>. Перемножает значения.
          </li>
          <li>
            <strong>/</strong> — <u>деление</u>. Возвращает дробный результат.
          </li>
          <li>
            <strong>//</strong> — <u>целочисленное деление</u> (floor division). Отбрасывает дробную часть.
          </li>
          <li>
            <strong>%</strong> — <u>остаток от деления</u> (модуль).
          </li>
          <li>
            <strong>**</strong> — <u>возведение в степень</u>.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка знания арифметического оператора
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Какой оператор в Python используется для получения остатка от деления одного целого числа на другое?
        </p>
        <p>
          Выберите вариант:
        </p>
      </>
    ),
    options: ['%', '/'], 
    correctIndex: 0,
  },

  // Шаг 4: Теория — Приоритет операций и скобки
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          В Python операции имеют <strong>приоритет</strong>. Сначала выполняются операции с более высоким приоритетом:
        </p>
        <ol>
          <li><strong>Возведение в степень</strong> (<code>**</code>).</li>
          <li><strong>Умножение</strong>, <strong>деление</strong>, <strong>целочисленное деление</strong>, <strong>остаток</strong> (<code>*</code>, <code>/</code>, <code>//</code>, <code>%</code>).</li>
          <li><strong>Сложение</strong> и <strong>вычитание</strong> (<code>+</code>, <code>-</code>).</li>
        </ol>
        <p>
          Чтобы переопределить порядок вычислений, используют <strong>скобки</strong>. Всё, что внутри <code>( )</code>, вычислится раньше:
        </p>
        <pre>
          <code>2 + 3 * 4  # без скобок результат 14{'\n'}(2 + 3) * 4  # со скобками результат 20</code>
        </pre>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка приоритета операций
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой результат выражения <code>5 + 2 * 3</code> без использования скобок?
        </p>
      </>
    ),
    options: ['21', '11', '16', '7'],
    correctIndex: 1,
  },

  // Шаг 6: Теория — Операторы сравнения и логические операторы
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Операторы сравнения</strong> возвращают <code>True</code> или <code>False</code>:
        </p>
        <ul>
          <li><code>==</code> — равно.
            <pre>
              <code>3 == 3  # True</code>
            </pre>
          </li>
          <li><code>!=</code> — не равно.
            <pre>
              <code>5 != 2  # True</code>
            </pre>
          </li>
          <li><code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code> — меньше, меньше либо равно, больше, больше либо равно.
            <pre>
              <code>4 &lt; 7   # True{'\n'}4 &gt;= 5  # False</code>
            </pre>
          </li>
        </ul>
        <p>
          <strong>Логические операторы</strong> объединяют логические выражения:
        </p>
        <ul>
          <li><code>and</code> — <u>И</u>: True, если обе части True.
            <pre>
              <code>(3 &lt; 5) and (5 &lt; 10)  # True</code>
            </pre>
          </li>
          <li><code>or</code> — <u>ИЛИ</u>: True, если хотя бы одна часть True.
            <pre>
              <code>(3 &gt; 5) or (5 &lt; 10)  # True</code>
            </pre>
          </li>
          <li><code>not</code> — <u>НЕ</u>: меняет True на False и наоборот.
            <pre>
              <code>not (4 == 4)  # False</code>
            </pre>
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка логических выражений
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что вернёт выражение <code>(5 &gt; 3) and (2 &gt; 4)</code>?
        </p>
      </>
    ),
    options: ['True', 'False', '5', 'Ошибка'],
    correctIndex: 1,
  },
];

const stringManipulationSteps: Step[] = [
  // Шаг 1: Теория — Что такое строка (str)
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Строка</strong> (<code>str</code>) — это последовательность символов, заключённая в одинарные или двойные кавычки. 
          Она используется для работы с текстом.
        </p>
        <p>
          Пример:
        </p>
        <pre>
          <code>greeting = "Hello, Python!"</code>
        </pre>
        <p>
          Здесь <u>greeting</u> — имя переменной, а <u>"Hello, Python!"</u> — строка.
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — Индексация и срезы (slicing)
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Индексация</strong> позволяет получить отдельный символ строки по его позиции (индексу). Индексы начинаются с <u>0</u>.
        </p>
        <pre>
          <code>word = "Python"{'\n'}first_char = word[0]    # "P"{'\n'}last_char = word[5]     # "n"</code>
        </pre>
        <p>
          <strong>Срезы</strong> (<em>slicing</em>) позволяют взять часть строки от индекса <code>start</code> до <code>end</code> (не включая его):
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка индексации
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Если <code>s = "Code"</code>, чему равен <code>s[2]</code>?
        </p>
        <p>
          Выберите вариант:
        </p>
      </>
    ),
    options: ['d', 'o'],
    correctIndex: 0,
  },

  // Шаг 4: Теория — Конкатенация и повторение
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Конкатенация</strong> — объединение строк с помощью <u>+</u>:
        </p>
        <pre>
          <code>part1 = "Py"{'\n'}part2 = "thon"{'\n'}full = part1 + part2   # "Python"</code>
        </pre>
        <p>
          <strong>Повторение</strong> — дублирование строки с помощью <u>*</u>:
        </p>
        <pre>
          <code>laugh = "ha" * 3   # "hahaha"</code>
        </pre>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка конкатенации и повторения
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что получится при выполнении <code>'Go' + 'od' * 2</code>?
        </p>
      </>
    ),
    options: [
      '"GoodGood"',
      '"Goodod"',
      '"Goood"',
      'Ошибка'
    ],
    correctIndex: 1,
  },

  // Шаг 6: Теория — Полезные методы строк
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          У строк есть встроенные <strong>методы</strong>, которые упрощают работу:
        </p>
        <ul>
          <li>
            <code>lower()</code> — переводит всё в <u>нижний регистр</u>:
            <pre>
              <code>"Hello".lower()   # "hello"</code>
            </pre>
          </li>
          <li>
            <code>upper()</code> — переводит всё в <u>верхний регистр</u>:
            <pre>
              <code>"Hi".upper()      # "HI"</code>
            </pre>
          </li>
          <li>
            <code>len()</code> — возвращает <u>длину</u> строки:
            <pre>
              <code>len("Python")     # 6</code>
            </pre>
          </li>
          <li>
            <code>split(separator)</code> — разбивает строку на список по <u>разделителю</u>:
            <pre>
              <code>"a,b,c".split(",")  # ["a", "b", "c"]</code>
            </pre>
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка методов строк
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой метод вернёт количество символов в строке <code>text = "Python"</code>?
        </p>
      </>
    ),
    options: [
      'text.size()',
      'text.length()',
      'len(text)',
      'text.count()'
    ],
    correctIndex: 2,
  },
];

const whatIsJavascriptSteps: Step[] = [
  // Шаг 1: Теория — Введение в JavaScript
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>JavaScript</strong> — это язык программирования, который изначально создавался для добавления интерактивности на веб-страницы. 
          Сегодня JavaScript используют не только в браузере, но и на сервере (с помощью Node.js).
        </p>
        <p>
          Основная цель JavaScript — динамически изменять содержимое страницы, реагировать на действия пользователя и работать с данными.
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — История и движки
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Язык JavaScript был представлен в <strong>1995 году</strong> компанией Netscape. 
          Первые версии интерпретировались движком <strong>SpiderMonkey</strong>. Со временем появились другие движки:
        </p>
        <ul>
          <li>
            <strong>V8</strong> — движок от Google, используемый в браузере Chrome и в Node.js. 
            Именно V8 сделал запуск JS на сервере быстрым и масштабируемым.
          </li>
          <li>
            <strong>SpiderMonkey</strong> — движок от Mozilla, изначально работал в браузере Firefox.
          </li>
        </ul>
        <p>
          Жизненный цикл JavaScript продолжается благодаря постоянным улучшениям движков: они компилируют код “на лету” (JIT), 
          что делает выполнение гораздо быстрее, чем в самом начале.
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка знания движков
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Какой движок JavaScript используется в браузере Chrome и в Node.js?
        </p>
        <p>
          Выберите правильный вариант:
        </p>
      </>
    ),
    options: ['SpiderMonkey', 'V8'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — Фронтенд vs Бэкенд (Node.js)
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          JavaScript традиционно выполнялся в браузере («<strong>фронтенд</strong>»). С его помощью можно:
        </p>
        <ul>
          <li>Обрабатывать нажатия кнопок и ввод пользователя.</li>
          <li>Изменять содержимое страницы без перезагрузки (DOM-манипуляции).</li>
          <li>Делать запросы к серверу (AJAX/Fetch) и обновлять данные динамически.</li>
        </ul>
        <p>
          С появлением <strong>Node.js</strong> (основанного на движке V8) JavaScript стали запускать на сервере («<strong>бэкенд</strong>»). 
          Node.js позволяет:
        </p>
        <ul>
          <li>Создавать веб-серверы и обрабатывать HTTP-запросы.</li>
          <li>Работать с файловой системой, базами данных и другими ресурсами сервера.</li>
          <li>Использовать пакеты из npm (менеджер пакетов) для расширения функциональности.</li>
        </ul>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка фронтенд/бэкенд
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какое утверждение НЕ относится к возможностям JavaScript на серверной стороне (Node.js)?
        </p>
      </>
    ),
    options: [
      'Обработка HTTP-запросов и маршрутизация',
      'Манипуляция DOM-бэкенд (Document Object Model)',
      'Чтение и запись файловой системы',
      'Установка пакетов через npm'
    ],
    correctIndex: 1,
  },

  // Шаг 6: Теория — Примеры реальных проектов на JavaScript
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          JavaScript широко используют в самых разных проектах:
        </p>
        <ul>
          <li>
            <strong>Веб-приложения</strong> (фронтенд): 
            React, Vue, Angular — популярные фреймворки и библиотеки, позволяющие делать одностраничные приложения (SPA).
          </li>
          <li>
            <strong>Серверные приложения</strong> (бэкенд): 
            Express.js и NestJS — фреймворки для быстрого создания REST-API и работы с базами данных.
          </li>
          <li>
            <strong>Десктоп-приложения</strong>: 
            Electron позволяет оборачивать веб-код в отдельное приложение для Windows, macOS и Linux.
          </li>
          <li>
            <strong>Мобильные приложения</strong>: 
            React Native и Ionic используют JavaScript для создания кроссплатформенных приложений.
          </li>
        </ul>
        <p>
          Благодаря экосистеме npm (сотни тысяч готовых пакетов) JavaScript остаётся одним из самых универсальных и востребованных языков.
        </p>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка знаний о применении
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой фреймворк служит для создания кроссплатформенных мобильных приложений на JavaScript?
        </p>
      </>
    ),
    options: ['React Native', 'Django', 'Laravel', 'Spring'],
    correctIndex: 0,
  },
];

const strictModeStandardsSteps: Step[] = [
  // Шаг 1: Теория — Введение в «use strict»
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          Директива <code>“use strict”</code> включает <strong>строгий режим</strong> (strict mode) в JavaScript. 
          Это специальный режим, который запрещает некоторые «ненадёжные» или устаревшие конструкции языка и 
          помогает обнаруживать ошибки на этапе выполнения кода.
        </p>
        <p>
          Пример включения строгого режима:
        </p>
        <pre>
          <code>
            "use strict";
            function demo() {'{'}
              // код здесь работает в строгом режиме
            {'}'}
          </code>
        </pre>
      </>
    ),
  },

  // Шаг 2: Теория — Что меняет строгий режим
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          В строгом режиме происходят следующие изменения:
        </p>
        <ul>
          <li>
            <strong>Запрет неявных глобальных переменных.</strong> 
            Например, <code>x = 10</code> без <code>var/let/const</code> вызовет <u>ошибку</u> вместо создания глобальной переменной.
          </li>
          <li>
            <strong>Запрещены дублирующиеся имена параметров функции.</strong> 
          </li>
          <li>
            <strong>Некоторые «небезопасные» конструкции запрещены.</strong> 
            Например, <code>with</code> (блок, который создаёт новый объектный контекст) нельзя использовать.
          </li>
          <li>
            <strong>Упрощённое поведение <code>this</code>.</strong> 
            В строгом режиме, если функция вызвана без контекста, <code>this</code> будет <code>undefined</code>, а не <code>window</code>.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка понимания «use strict»
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Что произойдёт, если в строгом режиме написать <code>x = 5</code> без ключевого слова <code>let</code>?
        </p>
        <p>
          Выберите вариант:
        </p>
      </>
    ),
    options: ['Ошибка', 'Игнор'],
    correctIndex: 0,
  },

  // Шаг 4: Теория — Роль спецификаций ECMAScript
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>ECMAScript</strong> (ES) — это спецификация, определяющая стандарты для JavaScript. 
          Каждая версия ES добавляет новые возможности и улучшения языка:
        </p>
        <ul>
          <li><strong>ES5</strong> (2009) — в стандарт вошли <u>строгий режим</u>, методы <code>Array.forEach</code>, <code>JSON</code> и т. д.</li>
          <li><strong>ES6/ES2015</strong> — стрелочные функции, <code>let/const</code>, <code>Promise</code>, модули (<code>import/export</code>) и многое другое.</li>
          <li><strong>ES7+</strong> (ES2016 и далее) — <code>async/await</code>, операторы <code>**</code> (возведение в степень), <code>Array.includes</code> и т. д.</li>
        </ul>
        <p>
          Следование стандарту ECMAScript обеспечивает <strong>совместимость</strong> и <strong>предсказуемость</strong> кода 
          во всех современных браузерах и средах (например, Node.js).
        </p>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка знаний о версиях ECMAScript
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какая версия ECMAScript ввела стрелочные функции (<code>&#40;…&#41; =&gt; …</code>)?
        </p>
      </>
    ),
    options: ['ES3', 'ES5', 'ES6', 'ES7'],
    correctIndex: 2,
  },

  // Шаг 6: Теория — Зачем нужны линтеры и Babel
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          Линтер (например, <strong>ESLint</strong>) — это инструмент, который анализирует код и 
          сообщает о потенциальных ошибках, нарушениях стайлгайдов и устаревших конструкциях.
        </p>
        <p>
          <strong>Babel</strong> — транспайлер, который преобразует современный JavaScript (ES6+) 
          в более старые версии ES5, чтобы код корректно работал в браузерах, не поддерживающих новые возможности.
        </p>
        <p>
          Таким образом:
        </p>
        <ul>
          <li>
            <strong>Линтер</strong> помогает поддерживать качество кода и единообразный стиль, а также 
            выявляет ошибки до запуска (во время разработки).
          </li>
          <li>
            <strong>Babel</strong> обеспечивает <u>совместимость</u> кода со старыми браузерами, 
            преобразуя новые синтаксические конструкции в понятные <u>ES5</u> аналоги.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка роли Babel и линтеров
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что из перечисленного относится к задачам Babel?
        </p>
      </>
    ),
    options: [
      'Проверять стиль кода',
      'Транспилировать современный JS в ES5',
      'Оптимизировать память браузера',
      'Генерировать тестовые данные'
    ],
    correctIndex: 1,
  },
];

const introductionToCsharpSteps: Step[] = [
  // Шаг 1: Теория — Что такое C#
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>C#</strong> — это строготипизированный, объектно-ориентированный язык программирования от Microsoft. 
          Основная цель C# — создание надёжных приложений для Windows, веба и облака.
        </p>
        <p>
          Код на C# компилируется в промежуточный байткод (<code>IL</code>) и затем исполняется виртуальной машиной 
          .NET (CLR), что обеспечивает <u>кроссплатформенность</u> и <u>оптимизацию</u>.
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — Эволюция от .NET Framework до .NET 8
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Первоначально C# работал на платформе <strong>.NET Framework</strong> (2002). Позже:
        </p>
        <ul>
          <li>
            <strong>.NET Core</strong> (2016) — открытая, кроссплатформенная версия. Позволяла запускать приложения на Linux и macOS.
          </li>
          <li>
            Слияние платформ в <strong>.NET 5</strong> (2020) и далее <strong>.NET 6</strong>, <strong>.NET 7</strong> и <strong>.NET 8</strong>. 
            Все они поддерживают единый стек, быстрый запуск и улучшенную производительность.
          </li>
        </ul>
        <p>
          Благодаря этому C#-приложения можно запускать на Windows, Linux, macOS, контейнерах и облаке без изменений в коде.
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка знания эволюции .NET
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Какая из перечисленных платформ является кроссплатформенной реализацией .NET?
        </p>
        <p>
          Выберите вариант:
        </p>
      </>
    ),
    options: ['.NET Framework', '.NET Core'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — Строгая типизация и основные синтаксические конструкции
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          C# — <strong>строготипизированный</strong> язык: каждая переменная имеет чётко определённый тип.
        </p>
        <p>
          Пример объявления переменных:
        </p>
        <pre>
          <code>int count = 5;{'\n'}string name = "Alice";{'\n'}bool isActive = true;</code>
        </pre>
        <p>
          Здесь:
        </p>
        <ul>
          <li><u>int</u> — целое число,</li>
          <li><u>string</u> — строка символов,</li>
          <li><u>bool</u> — логический (True/False).</li>
        </ul>
        <p>
          Попытка присвоить значение другого типа (например, <code>count = "abc"</code>) вызовет <u>компиляционную ошибку</u>.
        </p>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка строгой типизации
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что произойдёт, если написать <code>int x = "10";</code> в C#?
        </p>
      </>
    ),
    options: [
      'Переменная автоматически сконвертируется в int',
      'Компиляция завершится ошибкой',
      'Значение станет null',
      'Код выполнится, но выдаст предупреждение'
    ],
    correctIndex: 1,
  },

  // Шаг 6: Теория — Объектно-ориентированные основы в C#
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          C# полностью поддерживает <strong>ООП</strong> (классы, наследование, полиморфизм, инкапсуляцию):
        </p>
        <pre>
          <code>
            class Person {'{'}{'\n'}
            &nbsp;&nbsp;public string Name {'{'} get; set; {'}'}{'\n'}
            &nbsp;&nbsp;public int Age {'{'} get; set; {'}'}{'\n'}
            {'}'}{'\n'}{'\n'}
            class Student : Person {'{'}{'\n'}
            &nbsp;&nbsp;public string School {'{'} get; set; {'}'}{'\n'}
            {'}'}
          </code>
        </pre>
        <p>
          Здесь:
        </p>
        <ul>
          <li>
            <u>class Person</u> определяет базовый класс с двумя свойствами (<code>Name</code>, <code>Age</code>).
          </li>
          <li>
            <u>class Student : Person</u> наследуется от <code>Person</code> и добавляет собственное свойство <code>School</code>.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка ООП-концепций
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Как называется механизм, когда дочерний класс расширяет функциональность базового класса?
        </p>
      </>
    ),
    options: [
      'Инкапсуляция',
      'Наследование',
      'Полиморфизм',
      'Абстракция'
    ],
    correctIndex: 1,
  },
];

const netPlatformSteps: Step[] = [
  // Шаг 1: Теория — Введение в платформу .NET
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>.NET</strong> — это кроссплатформенная платформа от Microsoft для разработки приложений разного типа.
          Она включает в себя среду выполнения (CLR), базовые библиотеки и инструменты сборки.
        </p>
        <p>
          С .NET вы можете создавать:
        </p>
        <ul>
          <li>Веб-сервисы и API на <u>enterprise-backend</u> (ASP.NET Core).</li>
          <li>Игры и интерактивные приложения с помощью <u>Unity</u>.</li>
          <li>Мобильные приложения с <u>MAUI</u> (Multi-platform App UI).</li>
          <li>Облачные сервисы и микросервисы (Azure, Docker, Kubernetes).</li>
        </ul>
      </>
    ),
  },

  // Шаг 2: Теория — Что нового в .NET 8
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>.NET 8</strong> продолжает эволюцию платформы:
        </p>
        <ul>
          <li>
            <strong>Улучшенная производительность</strong> благодаря оптимизациям JIT и garbage collector.
          </li>
          <li>
            <strong>Расширенная поддержка облака</strong>: встроенные API для упрощённого развертывания в Azure.
          </li>
          <li>
            <strong>Унифицированный стек</strong>: один SDK для создания веб-, десктоп-, мобильных и облачных приложений.
          </li>
          <li>
            <strong>MAUI 8</strong> получил новые шаблоны и более надёжную работу на Windows, Android, iOS и macOS.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка знания сценариев использования .NET
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Какую технологию в экосистеме .NET обычно используют для создания игр?
        </p>
        <p>
          Выберите вариант:
        </p>
      </>
    ),
    options: ['Blazor', 'Unity'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — MAUI: кроссплатформенная мобильная среда
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>MAUI</strong> (Multi-platform App UI) — это эволюция Xamarin.Forms, 
          позволяющая собрать один проект и запустить его на <u>Android</u>, <u>iOS</u>, <u>Windows</u> и <u>macOS</u>.
        </p>
        <p>
          Пример страницы MAUI в XAML:
        </p>
        <pre>
          <code>
            &lt;VerticalStackLayout&gt;{"\n"}
            &nbsp;&nbsp;&lt;Label Text="Hello, MAUI!" /&gt;{"\n"}
            &nbsp;&nbsp;&lt;Button Text="Click Me" /&gt;{"\n"}
            &lt;/VerticalStackLayout&gt;
          </code>
        </pre>
        <p>
          Благодаря единому стеку вы управляете UI, логикой и ресурсами через один код, а компилятор генерирует оптимизированные сборки для каждой платформы.
        </p>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка знаний про MAUI
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Для чего предназначена технология MAUI в рамках .NET?
        </p>
      </>
    ),
    options: [
      'Создание облачных микросервисов',
      'Разработка кроссплатформенных мобильных и десктоп-приложений',
      'Мониторинг производительности сервера',
      'Оптимизация базы данных'
    ],
    correctIndex: 1,
  },

  // Шаг 6: Теория — .NET в облаке и контейнеры
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          В .NET 8 встроена глубокая интеграция с облаком:
        </p>
        <ul>
          <li>
            <strong>ASP.NET Core</strong> позволяет быстро развернуть API в Azure App Service или контейнере Docker.
          </li>
          <li>
            В среде Azure Functions (<strong>serverless</strong>) можно написать функцию на C#, 
            а .NET 8 гарантирует минимальный cold start и высокую производительность.
          </li>
          <li>
            Поддержка <strong>контейнеров</strong>: специальные образы .NET 8 оптимизированы для Kubernetes и Docker.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка знаний про облачные возможности
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что из перечисленного относится к облачным возможностям .NET 8?
        </p>
      </>
    ),
    options: [
      'Сборка GUI-приложений WinForms',
      'Написание Azure Functions с быстрым cold start',
      'Привязка данных в WPF',
      'Отладка локальной базы SQLite'
    ],
    correctIndex: 1,
  },
];

const whatIsJavaAndJvmSteps: Step[] = [
  // Шаг 1: Теория — Что такое Java и принцип WORA
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Java</strong> — это объектно-ориентированный язык программирования от Oracle, 
          созданный в 1995 году. Главный слоган Java: <u>“Write Once, Run Anywhere”</u> (WORA). 
          Это значит, что код, написанный на Java, можно запускать на любой платформе, где установлена 
          виртуальная машина Java (JVM).
        </p>
        <p>
          Благодаря WORA разработчики пишут программу один раз, а затем она запускается на Windows, Linux, macOS и даже мобильных устройствах (Android).
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — Роль JVM, JRE и JDK
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>JVM</strong> (Java Virtual Machine) — виртуальная машина, которая выполняет байткод Java. 
          JVM обеспечивает <u>кроссплатформенность</u>: она переводит байткод в машинные инструкции под каждую ОС.
        </p>
        <p>
          <strong>JRE</strong> (Java Runtime Environment) — это JVM + стандартные библиотеки Java, 
          необходимых для запуска уже скомпилированных приложений.
        </p>
        <p>
          <strong>JDK</strong> (Java Development Kit) — полный комплект для разработки: 
          JRE + компилятор <code>javac</code> + инструменты (отладка, профилировщик, документация). 
          Если вы хотите писать и компилировать программы на Java, вам нужен JDK.
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка понимания JVM и компиляции
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Что именно выполняет байткод Java?
        </p>
        <p>
          Выберите правильный вариант:
        </p>
      </>
    ),
    options: ['Компилятор javac', 'JVM'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — Как работает Java: от исходников до исполнения
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          Процесс выполнения Java-приложения:
        </p>
        <ol>
          <li>
            <strong>Написание кода</strong> в файле <code>Example.java</code>.
          </li>
          <li>
            <strong>Компиляция:</strong> <code>javac Example.java</code> → результат <code>Example.class</code> (байткод).
          </li>
          <li>
            <strong>Запуск:</strong> <code>java Example</code> → байткод загружается в JVM, а JVM трансформирует его в машинные команды для конкретной ОС.
          </li>
        </ol>
        <p>
          Благодаря такому подходу одному и тому же .class-файлу не нужно перекомпилировать для разной платформы — достаточно иметь соответствующую JVM.
        </p>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка знаний о JDK, JRE и JVM
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какая комбинация правильно соответствует инструментам для разработки и запуска Java-кода?
        </p>
      </>
    ),
    options: [
      'JVM = Всё для разработки и запуска; JRE = только компилятор; JDK = библиотеки',
      'JDK = компилятор + JRE; JRE = JVM + библиотеки; JVM = сама виртуальная машина',
      'JRE = компилятор + JVM; JDK = библиотеки; JVM = среда выполнения',
      'JVM = компилятор + библиотеки; JRE = виртуальная машина; JDK = только компилятор'
    ],
    correctIndex: 1,
  },

  // Шаг 6: Теория — Где используется Java
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>Примеры областей применения Java:</strong>
        </p>
        <ul>
          <li>
            <u>Серверная разработка:</u> крупные веб-приложения и API (Spring, Jakarta EE).
          </li>
          <li>
            <u>Android-разработка:</u> сама операционная система Android основана на JVM-Like среде (ART/Dalvik), 
            поэтому мобильные приложения пишутся на Java/Kotlin.
          </li>
          <li>
            <u>Банковские и финансовые системы:</u> благодаря стабильности, безопасности и масштабируемости.
          </li>
          <li>
            <u>Big Data:</u> Hadoop, Apache Spark и другие фреймворки часто используют JVM-языки (Java/Scala).
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка контекстов использования Java
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Где Java НЕ является основной средой выполнения?
        </p>
      </>
    ),
    options: [
      'Разработка серверного REST API на Spring Boot',
      'Создание Android-приложений',
      'Написание скриптов для macOS через встроенный Bash',
      'Анализ больших данных с помощью Hadoop'
    ],
    correctIndex: 2,
  },
];

const projectStructureAndMainSteps: Step[] = [
  // Шаг 1: Теория — Структура папок в Java-проекте
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          В Java-проекте обычно используется следующая структура:
        </p>
        <ul>
          <li>
            <strong>src/</strong> — корневая папка для исходных кодов.
          </li>
          <li>
            <strong>src/main/java/</strong> — внутри неё лежат файлы с .<u>java</u>.
          </li>
          <li>
            <strong>src/main/resources/</strong> — ресурсы (конфигурации, изображения).
          </li>
          <li>
            <strong>src/test/java/</strong> — тестовые классы.
          </li>
          <li>
            <strong>target/</strong> или <strong>build/</strong> — автоматически создаётся компилятором, 
            содержит скомпилированные .<u>class</u> и итоговый .<u>jar</u>.
          </li>
        </ul>
        <p>
          Такая организация помогает держать код и ресурсы в порядке и сразу понимать, где искать нужные файлы.
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — Пакеты и компиляция классов
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Пакет (<code>package</code>) — это способ группировать классы в логические модули. 
          Каждому файлу <code>.java</code> вначале обычно прописывают строку:
        </p>
        <pre>
          <code>package com.example.app;</code>
        </pre>
        <p>
          Если вы сохраняете файл <code>Main.java</code> в папке <code>src/main/java/com/example/app/</code>, 
          то его полное имя будет <strong><code>com.example.app.Main</code></strong>.
        </p>
        <p>
          Для компиляции из корня проекта можно использовать:
        </p>
        <pre>
          <code>javac -d target/classes src/main/java/com/example/app/Main.java</code>
        </pre>
        <p>
          Здесь флаг <u>-d</u> указывает путь, куда положить скомпилированные <code>.class</code>-файлы, 
          сохраняя структуру пакетов.
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка знаний о пакетах
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Почему важно указывать <code>package</code> в начале файла .java?
        </p>
        <p>
          Выберите правильный вариант:
        </p>
      </>
    ),
    options: ['Легче импортировать классы', 'Ускоряет компиляцию'],
    correctIndex: 0,
  },

  // Шаг 4: Теория — Сигнатура метода main
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          Точка входа в Java-приложение — метод <strong><code>public static void main(String[] args)</code></strong>. 
          Расшифруем его части:
        </p>
        <ul>
          <li>
            <u>public</u> — метод доступен JVM из любой точки.
          </li>
          <li>
            <u>static</u> — не требуется создавать экземпляр класса, чтобы вызвать main.
          </li>
          <li>
            <u>void</u> — метод не возвращает никаких данных.
          </li>
          <li>
            <u>main</u> — имя метода, которое JVM ищет автоматически.
          </li>
          <li>
            <u>String[] args</u> — массив строковых аргументов, передаваемых с командной строки.
          </li>
        </ul>
        <p>
          Пример минимального кода:
        </p>
        <pre>
          <code>
            package com.example.app;{'\n'}
            {'\n'}
            public class Main {'{'}{'\n'}
            &nbsp;&nbsp;public static void main(String[] args) {'{'}{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Привет, Java!");{'\n'}
            &nbsp;&nbsp;{'}'}{'\n'}
            {'}'}
          </code>
        </pre>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка метода main
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой компонент сигнатуры main отвечает за приём аргументов из командной строки?
        </p>
      </>
    ),
    options: [
      '<code>public</code>',
      '<code>static</code>',
      '<code>void</code>',
      '<code>String[] args</code>'
    ],
    correctIndex: 3,
  },

  // Шаг 6: Теория — module-info.java и системы модулей
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          С Java 9 появилась система модулей. Файл <strong><code>module-info.java</code></strong> 
          описывает модуль и его зависимости:
        </p>
        <pre>
          <code>
            module com.example.app {'{'}{'\n'}
            &nbsp;&nbsp;requires java.base;{'\n'}
            &nbsp;&nbsp;exports com.example.app;{'\n'}
            {'}'}
          </code>
        </pre>
        <p>
          Здесь:
        </p>
        <ul>
          <li><u>module com.example.app</u> — объявление модуля с именем.</li>
          <li><u>requires java.base</u> — модуль зависит от базового пакета.</li>
          <li><u>exports com.example.app</u> — делает пакеты доступными для других модулей.</li>
        </ul>
        <p>
          Если модуль-описание отсутствует, проект считается «не-модульным» и работает как раньше, 
          но при наличии <code>module-info.java</code> компилятор следит за явными зависимостями.
        </p>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка системы модулей
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Зачем нужен файл <code>module-info.java</code> в проекте с Java 9 и выше?
        </p>
      </>
    ),
    options: [
      'Чтобы указать точку входа main', 
      'Чтобы описать зависимости и экспортируемые пакеты', 
      'Чтобы определить типы данных', 
      'Чтобы сгенерировать javadoc'
    ],
    correctIndex: 1,
  },
];

const introductionToSqlSteps: Step[] = [
  // Шаг 1: Теория — Что такое SQL
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          <strong>SQL</strong> (Structured Query Language) — язык запросов, разработанный для 
          работы с реляционными базами данных. С его помощью можно создавать, изменять 
          и извлекать данные из таблиц.
        </p>
        <p>
          SQL используется практически в&nbsp;любой СУБД (MySQL, PostgreSQL, SQL Server и&nbsp;других).
        </p>
      </>
    ),
  },

  // Шаг 2: Теория — История стандарта SQL
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Разработка SQL началась в&nbsp;конце 1970-х годов в&nbsp;компании Oracle. В&nbsp;1986 году 
          ANSI принял «<strong>SQL-86</strong>» как первый официальный стандарт. Далее появился 
          <strong>SQL-89</strong>, <strong>SQL-92</strong> и&nbsp;ESM(Standard) по&nbsp;дори умолчанию, 
          каждый новый выпуск расширял возможности: процедуры, триггеры, подзапросы, стандартизированные 
          типы данных и т. д.
        </p>
        <p>
          Сегодня актуален стандарт <strong>SQL:2016</strong>, включающий JSON-операции, распределённые запросы 
          и&nbsp;улучшенную поддержку аналитических функций.
        </p>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка аббревиатуры SQL
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Что означает аббревиатура SQL?
        </p>
        <p>
          Выберите правильный вариант:
        </p>
      </>
    ),
    options: ['Simple Query Language', 'Structured Query Language'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — Основные СУБД и их особенности
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          Существуют разные реализации SQL в&nbsp;популярных СУБД:
        </p>
        <ul>
          <li>
            <strong>MySQL</strong> — широко используется в&nbsp;веб-разработке (LAMP-стек). 
            Открытый код, поддерживает репликацию и&nbsp;широкий набор типов.
          </li>
          <li>
            <strong>PostgreSQL</strong> — считается одной из самых продвинутых 
            открытых СУБД: поддерживает транзакции, расширения, JSONB, геоданные.
          </li>
          <li>
            <strong>SQL Server</strong> — проприетарная СУБД от Microsoft, 
            частый выбор для корпоративных приложений под Windows.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка знаний о СУБД
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какая из перечисленных СУБД разработана компанией Microsoft?
        </p>
      </>
    ),
    options: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite'],
    correctIndex: 2,
  },

  // Шаг 6: Теория — Категории SQL-операторов
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          SQL-операторы делятся на несколько основных групп:
        </p>
        <ul>
          <li>
            <strong>DDL</strong> (Data Definition Language) — <u>создание</u> и 
            <u>изменение</u> структуры: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>.
          </li>
          <li>
            <strong>DML</strong> (Data Manipulation Language) — <u>работа с данными</u>: 
            <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.
          </li>
          <li>
            <strong>DCL</strong> (Data Control Language) — <u>управление доступом</u>: 
            <code>GRANT</code>, <code>REVOKE</code>.
          </li>
          <li>
            <strong>TCL</strong> (Transaction Control Language) — <u>транзакции</u>: 
            <code>COMMIT</code>, <code>ROLLBACK</code>.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка операторов SQL
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой оператор используется для создания новой таблицы в SQL?
        </p>
      </>
    ),
    options: ['SELECT', 'INSERT', 'CREATE TABLE', 'UPDATE'],
    correctIndex: 2,
  },
];

const dataTypesCreateTablesSteps: Step[] = [
  // Шаг 1: Теория — Обзор базовых типов данных
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <p>
          В SQL при создании таблиц важно выбирать правильный <strong>тип данных</strong> для каждого столбца. 
          Вот основные категории:
        </p>
        <ul>
          <li>
            <strong>Числовые</strong>: <code>INT</code>, <code>SMALLINT</code>, <code>BIGINT</code>, <code>FLOAT</code>, <code>DECIMAL</code>.
          </li>
          <li>
            <strong>Строковые</strong>: <code>VARCHAR(n)</code>, <code>CHAR(n)</code>, <code>TEXT</code>.
          </li>
          <li>
            <strong>Дата и время</strong>: <code>DATE</code>, <code>TIME</code>, <code>DATETIME</code>, <code>TIMESTAMP</code>.
          </li>
          <li>
            <strong>Логический</strong>: <code>BOOLEAN</code> (в некоторых СУБД — <code>BOOL</code>).
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 2: Теория — Числовые типы и их особенности
  {
    id: 'step-2',
    type: 'theory',
    content: (
      <>
        <p>
          Рассмотрим несколько распространённых <strong>числовых</strong> типов:
        </p>
        <ul>
          <li>
            <code>INT</code> — целое число (обычно до ~2 147 483 647). 
            Пример: <code>age INT</code>.
          </li>
          <li>
            <code>FLOAT(p)</code> — число с плавающей точкой, где <u>p</u> — точность. 
            Пример: <code>rating FLOAT(5,2)</code> (до двух знаков после точки).
          </li>
          <li>
            <code>DECIMAL(p, s)</code> — точное десятичное число: 
            <u>p</u> — общее количество цифр, <u>s</u> — количество знаков после запятой. 
            Пример: <code>price DECIMAL(10,2)</code>.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 3: Dual-quiz — проверка знания числовых типов
  {
    id: 'step-3',
    type: 'dual-quiz',
    content: (
      <>
        <p>
          Какой тип данных лучше всего подходит для хранения цены с двумя знаками после запятой?
        </p>
        <p>
          Выберите вариант:
        </p>
      </>
    ),
    options: ['INT', 'DECIMAL'],
    correctIndex: 1,
  },

  // Шаг 4: Теория — Строковые типы для текста разной длины
  {
    id: 'step-4',
    type: 'theory',
    content: (
      <>
        <p>
          Для хранения текста используются разные <strong>строковые</strong> типы:
        </p>
        <ul>
          <li>
            <code>CHAR(n)</code> — фиксированная длина <u>n</u>. Если строка короче, добавляются пробелы. 
            Пример: <code>status CHAR(2)</code> для 'OK', 'NO'.
          </li>
          <li>
            <code>VARCHAR(n)</code> — переменная длина до <u>n</u> символов. 
            Пример: <code>username VARCHAR(50)</code>.
          </li>
          <li>
            <code>TEXT</code> — очень длинный текст (до нескольких ГБ в некоторых СУБД). 
            Используют для описаний, статей и т. д.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 5: Multi-quiz — проверка строковых типов
  {
    id: 'step-5',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Какой тип данных следует использовать для хранения эссе длиной до 10 000 символов?
        </p>
      </>
    ),
    options: ['CHAR(255)', 'VARCHAR(100)', 'TEXT', 'BOOLEAN'],
    correctIndex: 2,
  },

  // Шаг 6: Теория — Синтаксис CREATE TABLE
  {
    id: 'step-6',
    type: 'theory',
    content: (
      <>
        <p>
          Для создания новой таблицы используется оператор <strong>CREATE TABLE</strong>:
        </p>
        <pre>
          <code>
            CREATE TABLE Employees {'('}{'\n'}
            &nbsp;&nbsp;EmployeeID INT PRIMARY KEY,{'\n'}
            &nbsp;&nbsp;FirstName VARCHAR(50) NOT NULL,{'\n'}
            &nbsp;&nbsp;LastName VARCHAR(50) NOT NULL,{'\n'}
            &nbsp;&nbsp;BirthDate DATE,{'\n'}
            &nbsp;&nbsp;Salary DECIMAL(10,2){'\n'}
            {')'};  
          </code>
        </pre>
        <p>
          Разберём части примера:
        </p>
        <ul>
          <li>
            <code>EmployeeID INT PRIMARY KEY</code> — колонка <strong>INT</strong> с ограничением 
            <u>PRIMARY KEY</u> (уникальный идентификатор).
          </li>
          <li>
            <code>FirstName VARCHAR(50) NOT NULL</code> — строковый столбец до 50 символов, 
            <u>NOT NULL</u> запрещает пустые значения.
          </li>
          <li>
            <code>BirthDate DATE</code> — колонка типа <strong>DATE</strong> для даты рождения.
          </li>
          <li>
            <code>Salary DECIMAL(10,2)</code> — столбец денежного типа <strong>DECIMAL</strong>.
          </li>
        </ul>
      </>
    ),
  },

  // Шаг 7: Multi-quiz — проверка CREATE TABLE
  {
    id: 'step-7',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          Что из перечисленного НЕ является корректным объявлением столбца в CREATE TABLE?
        </p>
      </>
    ),
    options: [
      'Price FLOAT(7,2)',
      'Description TEXT',
      'IsActive BOOL NOT NULL',
      'ID VARCHAR PRIMARY KEY'
    ],
    correctIndex: 3,
  },
];


export const lessonSteps: Record<string, Step[]> = {
  // python
  'about-this-language': aboutThisLanguageSteps,
  'why-python': whyPythonSteps,
  'variables-and-data-typesP': variablesDataTypesSteps,
  'operators-and-expressionsP': operatorsExpressionsSteps,
  'string-manipulation': stringManipulationSteps,
  // javascript
  'what-is-javascript': whatIsJavascriptSteps,
  'strict-mode-and-standards': strictModeStandardsSteps,
  // chsarp
  'introduction-to-csharp': introductionToCsharpSteps,
  'dotnet-platform': netPlatformSteps,
  // java
  'what-is-java-and-jvm': whatIsJavaAndJvmSteps,
  'project-structure-and-main': projectStructureAndMainSteps,
  // sql
  'introduction-to-sql': introductionToSqlSteps,
  'data-types-and-table-creation': dataTypesCreateTablesSteps,
}
