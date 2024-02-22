export const mockData = {
  title: `<h2 style="font-weight: normal;line-height: 100%;font-size:64px;">Welcome to the</h2> <h2 style="font-weight: bold;line-height: 100%;font-size:64px;">Frontend Quiz!</h2>`,
  subtitle:
    '<p style="font-style: italic;margin-top: 48px;">Pick a subject to get started.</p>',
  cards: [
    { icon: 'html-icon.svg', title: 'HTML' },
    { icon: 'css-icon.svg', title: 'CSS' },
    { icon: 'js-icon.svg', title: 'JavaScript' },
    { icon: 'accessibility-icon.svg', title: 'Accessibility' },
  ],
  pageIcon: { icon: 'html-icon.svg', title: 'HTML' },
  quiz: [
    {
      id: 1,
      answer: '<h1>',
      question: 'Як правильно створити заголовок першого рівня в HTML?',
      options: [
        { id: 1, variant: '<h1>' },
        { id: 2, variant: '<heading>' },
        { id: 3, variant: '<title>' },
        { id: 4, variant: '<head>' },
      ],
    },
    {
      id: 2,
      answer: "<img src='image.jpg' alt='Description'>",
      question: 'Як відобразити зображення на веб-сторінці у HTML?',
      options: [
        { id: 1, variant: "<img src='image.jpg' alt='Description'>" },
        { id: 2, variant: "<image href='image.jpg' alt='Description'>" },
        { id: 3, variant: "<img href='image.jpg' alt='Description'>" },
        { id: 4, variant: "<picture src='image.jpg' alt='Description'>" },
      ],
    },
    {
      id: 3,
      answer: "<a href='page.html'>",
      question: 'Як відобразити посилання на іншу веб-сторінку в HTML?',
      options: [
        { id: 1, variant: "<link href='page.html'>" },
        { id: 2, variant: "<a href='page.html'>" },
        { id: 3, variant: "<href link='page.html'>" },
        { id: 4, variant: "<url href='page.html'>" },
      ],
    },
    {
      id: 4,
      answer: '<ol>',
      question: 'Як правильно створити нумерований список в HTML?',
      options: [
        { id: 1, variant: '<ol>' },
        { id: 2, variant: '<ul>' },
        { id: 3, variant: '<list>' },
        { id: 4, variant: '<dl>' },
      ],
    },
    {
      id: 5,
      answer: 'Division',
      question: 'Що означає тег <div> в HTML?',
      options: [
        { id: 1, variant: 'Division' },
        { id: 2, variant: 'Display' },
        { id: 3, variant: 'Document' },
        { id: 4, variant: 'Direction' },
      ],
    },
    {
      id: 6,
      answer: '<!-- Коментар -->',
      question: 'Як правильно вставити коментар у HTML-код?',
      options: [
        { id: 1, variant: '<!-- Коментар -->' },
        { id: 2, variant: '// Коментар' },
        { id: 3, variant: '<! Коментар>' },
        { id: 4, variant: '# Коментар' },
      ],
    },
    {
      id: 7,
      answer: "<meta charset='UTF-8'>",
      question: 'Як правильно визначити метатег для кодування символів в HTML?',
      options: [
        { id: 1, variant: "<meta charset='UTF-8'>" },
        { id: 2, variant: '<encoding>UTF-8</encoding>' },
        { id: 3, variant: '<charset>UTF-8</charset>' },
        { id: 4, variant: "<html charset='UTF-8'>" },
      ],
    },
    {
      id: 8,
      answer: "<video src='video.mp4' controls>",
      question: 'Як правильно вбудувати відео на веб-сторінку у HTML?',
      options: [
        { id: 1, variant: "<video src='video.mp4' controls>" },
        { id: 2, variant: "<media src='video.mp4' controls>" },
        { id: 3, variant: "<play src='video.mp4' controls>" },
        { id: 4, variant: "<movie src='video.mp4' controls>" },
      ],
    },
    {
      id: 9,
      answer: "<audio src='sound.mp3' controls>",
      question: 'Як правильно вставити звук на веб-сторінку у HTML?',
      options: [
        { id: 1, variant: "<audio src='sound.mp3' controls>" },
        { id: 2, variant: "<sound src='sound.mp3' controls>" },
        { id: 3, variant: "<music src='sound.mp3' controls>" },
        { id: 4, variant: "<play src='sound.mp3' controls>" },
      ],
    },
    {
      id: 10,
      answer: '<!-- Коментар -->',
      question:
        'Як правильно вставити коментар у HTML-код, що не буде відображений у браузері?',
      options: [
        { id: 1, variant: '<!-- Коментар -->' },
        { id: 2, variant: '// Коментар' },
        { id: 3, variant: '<! Коментар>' },
        { id: 4, variant: '# Коментар' },
      ],
    },
  ],
};
