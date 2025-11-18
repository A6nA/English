export enum Section {
  DASHBOARD,
  GRAMMAR,
  READING,
  WRITING,
  LISTENING,
  SPEAKING,
  VOCABULARY,
  EXAMS,
  TEXT_TYPES,
  DEEP_LEARNING,
  DIFFERENTIATED_LEARNING,
}

export type Grade = 'X' | 'XI' | 'XII';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface ReadingQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ReadingQuizData {
  story: string;
  questions: ReadingQuizQuestion[];
}

export interface ListeningQuizData {
  script: string;
  questions: ReadingQuizQuestion[];
}

export interface TextTypeExerciseData {
  explanation: string;
  exampleText: string;
  questions: ReadingQuizQuestion[];
}

export interface VocabularyItem {
    english: string;
    indonesian: string;
}

export interface VocabularyList {
    verbs: VocabularyItem[];
    nouns: VocabularyItem[];
    adjectives: VocabularyItem[];
    adverbs: VocabularyItem[];
    phrases: VocabularyItem[];
}

export interface MultipleChoiceQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface FillInTheBlankQuestion {
    question: string; // e.g., "She ___ to the store yesterday."
    correctAnswer: string; // e.g., "went"
}

export interface EssayQuestion {
    question: string;
    modelAnswer: string;
}

export interface EvaluationData {
    multipleChoice: MultipleChoiceQuestion[];
    fillInTheBlank: FillInTheBlankQuestion[];
    essay: EssayQuestion[];
}

export interface DeepLearningProject {
    title: string;
    description: string;
    tasks: string[];
    requiredSkills: string[];
}

export interface DifferentiatedLearningMaterial {
    topic: string;
    visualContent: {
        title: string;
        htmlContent: string;
    };
    auditoryContent: {
        title: string;
        script: string;
    };
    kinestheticContent: {
        title: string;
        description: string;
        tasks: string[];
    };
}