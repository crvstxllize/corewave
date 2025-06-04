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


export const lessonSteps: Record<string, Step[]> = {
  'about-this-language': aboutThisLanguageSteps,
  'why-python': whyPythonSteps
  // 'java-introduction': javaIntroductionSteps,
}
