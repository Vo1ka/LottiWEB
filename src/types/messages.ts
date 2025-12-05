export interface Messages {
  common: {
    appName: string;
    downloadApp: string;
    learnMore: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  faq: {
    title: string;
    q1: {
      question: string;
      answer: string;
    };
    // ...
  };
  // ... остальные секции
}
